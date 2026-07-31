import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // Parse the data sent from your contact form
    const { firstName, lastName, email, subject, message } = await req.json();

    // 1. Set up the email sender configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER, // Your email address from .env.local
        pass: process.env.EMAIL_PASS, // Your App Password from .env.local
      },
    });

    // 2. Compose the email content
    const mailOptions = {
      from: email, // This displays who sent it, but Gmail will overwrite the "from" address to your user address.
      to: process.env.EMAIL_USER, // The destination email where you want to receive notifications
      replyTo: email, // Allows you to hit "Reply" in your inbox to email the user directly
      subject: `Steve Foundation Contact Form: ${subject}`,
      text: `You received a new message from your website contact form.
      
Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}`,
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 500 });
  }
}
