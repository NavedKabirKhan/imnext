// // app/api/sendEmail.js
// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, text } = req.body;

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
//       subject: 'Enquiry - Integra Magna',
//       html: `<b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Message:</b><br>${text}`
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

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, text } = body;

    if (!name || !email || !text) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.elasticemail.com",
      port: process.env.SMTP_PORT || 2525,
      auth: {
        user: process.env.SMTP_USER || "iminfo@integramagna.com",
        pass: process.env.SMTP_PASS || "F63AAC721194CFB801A7F3163DBC96920A2B",
      },
    });

    const mailOptions = {
      from: "hi@integramagna.com",
      to: "hi@integramagna.com",
      subject: "Enquiry - Integra Magna",
      html: `<b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Message:</b><br>${text}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in API route:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal server error" }),
      { status: 500 }
    );
  }
}

export const GET = () =>
  new Response(
    JSON.stringify({ success: false, message: "GET method not allowed" }),
    { status: 405 }
  );
