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
            from: 'test@example.com',
            to: 'test@example.com',
            subject: `New Enquiry From ${email}`,
            text: `${first + ' ' + last}`,
            html: `<p>${message}</p>`,
        };

        const transport = nodemailer.createTransport({
            host: 'sandbox.smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASS,
            },
        });

        transport.sendMail(mailData, (error:any, info:any) => {
            if (error) console.log(error);
            console.log(`Message sent: ${info.messageId}`);
        });


        return NextResponse.json({ body: req.body }, { status: 201 });

    } else {
        return NextResponse.json({ message: 'Data is invalid', data: parsed.error.errors }, { status: 400 });
    }
}
