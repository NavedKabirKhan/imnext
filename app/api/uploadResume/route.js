import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';
import { Readable } from 'stream';

// Load your Google Drive API credentials
const KEYFILEPATH = path.join(process.cwd(), process.env.GOOGLE_KEY_PATH);
const SCOPES = ["https://www.googleapis.com/auth/drive.file"];
const FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID;

export async function POST(req) {
  // Ensure the request Content-Type is multipart/form-data
  if (!req.headers.get('content-type')?.includes('multipart/form-data')) {
    return NextResponse.json(
      { error: 'Invalid Content-Type. Expected multipart/form-data.' },
      { status: 400 }
    );
  }

  try {
    const formData = await req.formData();
    const file = formData.get('resume'); // Ensure you're matching the field name

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: 'No file uploaded or invalid file.' }, { status: 400 });
    }

    // Convert the file buffer into a Readable stream
    const buffer = Buffer.from(await file.arrayBuffer());
    const readableStream = Readable.from(buffer);

    // Authenticate with Google Drive API
    const auth = new google.auth.GoogleAuth({
      keyFile: KEYFILEPATH,
      scopes: SCOPES,
    });
    const drive = google.drive({ version: 'v3', auth });

    // Upload file to Google Drive
    const driveResponse = await drive.files.create({
      requestBody: {
        name: file.name, // Original file name
        parents: [FOLDER_ID], // Target folder
      },
      media: {
        mimeType: file.type, // File MIME type
        body: readableStream, // Use the readable stream
      },
    });

    // Make the file publicly accessible (optional)
    await drive.permissions.create({
      fileId: driveResponse.data.id,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    const fileUrl = `https://drive.google.com/file/d/${driveResponse.data.id}/view`;

    return NextResponse.json({
      message: 'File uploaded successfully',
      fileUrl,
    });
  } catch (error) {
    console.error('Error uploading file to Google Drive:', error.message, error.stack);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}
