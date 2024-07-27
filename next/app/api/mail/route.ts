import { NextRequest, NextResponse } from 'next/server';
import { schema } from '@/app/web/contactus/z-schema'
import prisma from '@/app/lib/prismadb';
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
    const data = await req.json();

    const parsed = schema.safeParse(data);

    if (parsed.success) {
        const { first, last, email, mobile, message } = parsed.data;


        const mailData = {
            from: 'contact@esolutions.com',
            to: email,
            subject: `Enquiry Sent To Esolutions`,
            text: `We will reach out to you soon`,
            html: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Confirmation</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                    color: #333333;
                }
                .container {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .header {
                    text-align: center;
                    padding-bottom: 20px;
                }
                .header img {
                    width: 100px;
                }
                .header h1 {
                    margin: 0;
                    font-size: 24px;
                    color: #333333;
                }
                .content {
                    padding: 20px 0;
                }
                .content p {
                    margin: 0 0 10px;
                    line-height: 1.6;
                }
                .footer {
                    text-align: center;
                    padding-top: 20px;
                    font-size: 12px;
                    color: #777777;
                }
                .footer a {
                    color: #007BFF;
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <img src="https://via.placeholder.com/100" alt="Company Logo">
                    <h1>Thank You for Contacting Esolutions</h1>
                </div>
                <div class="content">
                    <p>Dear Customer,</p>
                    <p>Thank you for reaching out to us. We have received your inquiry and will get back to you as soon as possible.</p>
                    <p>Your message:</p>
                    <p style="font-style: italic;">${message}</p>
                    <p>If you have any urgent concerns, feel free to contact us directly at <a href="mailto:support@example.com">support@example.com</a>.</p>
                    <p>Best regards,</p>
                    <p>The Esolutions Team</p>
                </div>
                <div class="footer">
                    <p>&copy; 2024 Esolutions. All rights reserved.</p>
                    <p><a href="https://www.example.com">Visit our website</a></p>
                </div>
            </div>
        </body>
        </html>`,
        };


        const transport = nodemailer.createTransport({
            host: 'sandbox.smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASS,
            },
        });

        transport.sendMail(mailData, (error, info) => {
            if (error) console.log(error);
            console.log(`Message sent: ${info.messageId}`);
        });


        return NextResponse.json({ body: req.body }, { status: 201 });

    } else {
        return NextResponse.json({ message: 'Data is invalid', data: parsed.error.errors }, { status: 400 });
    }
}
