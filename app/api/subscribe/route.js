// // app/api/subscribe.js
// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { email } = req.body; // only email for the subscription form

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
//       subject: 'New Subscription',
//       html: `<b>New Subscriber Email:</b> ${email}`
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

import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return new Response(
        JSON.stringify({ success: false, message: 'Invalid email address' }),
        { status: 400 }
      );
    }

    // Nodemailer transporter configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.elasticemail.com',
      port: process.env.SMTP_PORT || 2525,
      auth: {
        user: process.env.SMTP_USER || 'iminfo@integramagna.com',
        pass: process.env.SMTP_PASS || 'F63AAC721194CFB801A7F3163DBC96920A2B',
      },
    });

    const mailOptions = {
      from: 'hi@integramagna.com',
      to: 'hi@integramagna.com',
      subject: 'New Subscription',
      html: `<b>New Subscriber Email:</b> ${email}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: 'Subscription successful' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to send subscription email' }),
      { status: 500 }
    );
  }
}
