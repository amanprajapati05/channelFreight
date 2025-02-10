// // // import { NextResponse } from 'next/server';
// // // import nodemailer from 'nodemailer';

// // // export async function POST(request) {
// // //   try {
// // //     const { name, email, subject, message } = await request.json();

// // //     const transporter = nodemailer.createTransport({
// // //       host: "smtp.gmail.com",
// // //       port: 465,
// // //       secure: true,
// // //       auth: {
// // //         user: process.env.EMAIL_ID,
// // //         pass: process.env.EMAIL_PASS,
// // //       },
// // //     });

// // //     await transporter.sendMail({
// // //       from: email,
// // //       to: process.env.EMAIL_ID,
// // //       subject: `New Message from ${name}`,
// // //       html: `
// // //         <div>
// // //           <h2>New Contact Form Submission</h2>
// // //           <p><strong>Subject:</strong> ${subject}</p>
// // //           <p><strong>From:</strong> ${name}</p>
// // //           <p><strong>Email:</strong> ${email}</p>
// // //           <p><strong>Message:</strong></p>
// // //           <p>${message}</p>
// // //         </div>
// // //       `,
// // //     });

// // //     return NextResponse.json(
// // //       { message: "Message sent successfully" },
// // //       { status: 200 }
// // //     );
// // //   } catch (error) {
// // //     console.error('Error sending email:', error);
// // //     return NextResponse.json(
// // //       { message: "Failed to send message" },
// // //       { status: 500 }
// // //     );
// // //   }
// // // }
// // import { NextResponse } from 'next/server';
// // import nodemailer from 'nodemailer';

// // // Add OPTIONS handler for CORS preflight
// // export async function OPTIONS() {
// //   return new NextResponse(null, {
// //     status: 200,
// //     headers: {
// //       'Access-Control-Allow-Origin': '*',  // In production, replace with your specific domain
// //       'Access-Control-Allow-Methods': 'POST, OPTIONS',
// //       'Access-Control-Allow-Headers': 'Content-Type',
// //     },
// //   });
// // }

// // export async function POST(request) {
// //   try {
// //     const { name, email, subject, message } = await request.json();

// //     const transporter = nodemailer.createTransport({
// //       host: "smtp.gmail.com",
// //       port: 465,
// //       secure: true,
// //       auth: {
// //         user: process.env.EMAIL_ID,
// //         pass: process.env.EMAIL_PASS,
// //       },
// //     });

// //     await transporter.sendMail({
// //       from: email,
// //       to: process.env.EMAIL_ID,
// //       subject: `New Message from ${name}`,
// //       html: `
// //         <div>
// //           <h2>New Contact Form Submission</h2>
// //           <p><strong>Subject:</strong> ${subject}</p>
// //           <p><strong>From:</strong> ${name}</p>
// //           <p><strong>Email:</strong> ${email}</p>
// //           <p><strong>Message:</strong></p>
// //           <p>${message}</p>
// //         </div>
// //       `,
// //     });

// //     // Return response with CORS headers
// //     return new NextResponse(
// //       JSON.stringify({ message: "Message sent successfully" }), 
// //       {
// //         status: 200,
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'Access-Control-Allow-Origin': '*',  // In production, replace with your specific domain
// //         },
// //       }
// //     );
// //   } catch (error) {
// //     console.error('Error sending email:', error);
// //     return new NextResponse(
// //       JSON.stringify({ message: "Failed to send message" }), 
// //       {
// //         status: 500,
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'Access-Control-Allow-Origin': '*',  // In production, replace with your specific domain
// //         },
// //       }
// //     );
// //   }
// // }
// // app/api/contact/route.js
// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(request) {
//   try {
//     const { name, email, subject, message } = await request.json();

//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_ID,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: email,
//       to: process.env.EMAIL_ID,
//       subject: `New Message from ${name}`,
//       html: `
//         <div>
//           <h2>New Contact Form Submission</h2>
//           <p><strong>Subject:</strong> ${subject}</p>
//           <p><strong>From:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Message:</strong></p>
//           <p>${message}</p>
//         </div>
//       `,
//     });

//     return NextResponse.json(
//       { message: "Message sent successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return NextResponse.json(
//       { message: "Failed to send message" },
//       { status: 500 }
//     );
//   }
// }
// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    },
  });
}

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_ID,
      subject: `New Message from ${name}`,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return new NextResponse(JSON.stringify({ message: "Message sent successfully" }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new NextResponse(JSON.stringify({ message: "Failed to send message" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}