// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { fullName, email, contact, resume, portfolioLink } = req.body;

//     const transporter = nodemailer.createTransport({
//       host: 'smtp.elasticemail.com',
//       port: 2525,
//       auth: {
//         user: 'iminfo@integramagna.com',
//         pass: 'F63AAC721194CFB801A7F3163DBC96920A2B'
//       }
//     });

//     const mailOptions = {
//       from: 'hi@integramagna.com',
//       to: 'hi@integramagna.com',
//       subject: 'Job Application - Integra Magna',
//       html: `
//         <b>Full Name:</b> ${fullName}<br>
//         <b>Email:</b> ${email}<br>
//         <b>Contact:</b> ${contact}<br>
//         <b>Resume:</b> ${resume}<br>
//         <b>Portfolio Link:</b> ${portfolioLink}<br>
//       `,
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ success: true });
//     } catch (error) {
//       res.status(500).json({ success: false, error: error.message });
//     }
//   } else {
//     res.status(405).json({ message: 'Only POST requests allowed' });
//   }
// }



// import nodemailer from 'nodemailer';
// import { NextResponse } from 'next/server';

// export async function POST(req) {
//   try {
//     const data = await req.json();

//     const { fullName, email, contact, resume, portfolioLink } = data;

//     // Validate input
//     if (!fullName || !email || !contact || !resume) {
//       return NextResponse.json(
//         { success: false, message: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     // Configure nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST || 'smtp.elasticemail.com',
//       port: process.env.SMTP_PORT || 2525,
//       auth: {
//         user: process.env.SMTP_USER || 'iminfo@integramagna.com',
//         pass: process.env.SMTP_PASS || 'F63AAC721194CFB801A7F3163DBC96920A2B',
//       },
//     });

//     // Mail options
//     const mailOptions = {
//       from: 'hi@integramagna.com',
//       to: 'hi@integramagna.com',
//       subject: 'Job Application - Integra Magna',
//       html: `
//         <h3>New Job Application Received</h3>
//         <p><b>Full Name:</b> ${fullName}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Contact:</b> ${contact}</p>
//         <p><b>Resume:</b> ${
//           resume ? `<a href="${resume}" target="_blank">Download Resume</a>` : 'Not Provided'
//         }</p>
//         <p><b>Portfolio Link:</b> ${portfolioLink || 'Not Provided'}</p>
//       `,
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ success: true, message: 'Form submitted successfully!' }, { status: 200 });
//   } catch (error) {
//     console.error('Error in form submission:', error);
//     return NextResponse.json(
//       { success: false, message: 'Failed to submit the form. Please try again.' },
//       { status: 500 }
//     );
//   }
// }
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { fullName, email, contact, resumeLink, portfolioLink, position } = await req.json();

    if (!fullName || !email || !contact || !resumeLink) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.elasticemail.com',
      port: 2525,
      auth: {
        user: process.env.SMTP_USER || 'iminfo@integramagna.com',
        pass: process.env.SMTP_PASS || 'F63AAC721194CFB801A7F3163DBC96920A2B',
      },
    });

    const mailOptions = {
      from: 'hi@integramagna.com',
      to: 'hi@integramagna.com',
      subject: `New Job Application - ${position}`,
      html: `
        <h3>New Job Application</h3>
        <p><b>Full Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Contact:</b> ${contact}</p>
        <p><b>Resume:</b> <a href="${resumeLink}" target="_blank">Download</a></p>
        <p><b>Portfolio Link:</b> ${portfolioLink || 'Not provided'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error in form submission:', error);
    return NextResponse.json({ success: false, message: 'Form submission failed' }, { status: 500 });
  }
}
