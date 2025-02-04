import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const file = formData.get('resume');

    // Validate file size on server side
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { message: "File size exceeds 5MB limit" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Convert file to buffer
    const fileBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(fileBuffer);

    // Determine if it's a resume or image based on mime type
    const isImage = file.type.startsWith('image/');
    const fileDescription = isImage ? 'Photo ID/Image' : 'Resume';

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_ID,
      subject: `New Job Application from ${name}`,
      html: `
        <div>
          <h2>New Job Application</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Uploaded ${fileDescription}</strong></p>
        </div>
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer
        }
      ]
    });

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling upload:', error);
    return NextResponse.json(
      { message: "Failed to submit application" },
      { status: 500 }
    );
  }
}