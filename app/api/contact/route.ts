// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Configure nodemailer with your email provider
    const transporter = nodemailer.createTransport({
      service: `gmail`,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
      
    // Send the email
    await transporter.sendMail({
      from: '"Your Website" <your-email@example.com>',
      to: 'your-personal-email@example.com',
      subject: `New Contact Form: ${formData.interest}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Company: ${formData.company}
        Interest: ${formData.interest}
        Message: ${formData.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Interest:</strong> ${formData.interest}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}