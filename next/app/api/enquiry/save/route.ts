import { NextRequest, NextResponse } from 'next/server';
import {schema} from '@/app/contactus/z-schema'
import prisma from '@/app/lib/prismadb';

export async function POST(req: NextRequest) {
    const data = await req.json();

    const parsed = schema.safeParse(data);

    if (parsed.success) {
        const { first, last, email, mobile, message } = parsed.data;

        try {
            let query;


            // Create new query
            query = await prisma.enquiry.create({
                data: {
                    first,
                    last,
                    email,
                    mobile,
                    message
                }
            });


            return NextResponse.json({ message: 'Query saved', data: query }, { status: 201 });
        } catch (err) {
            return NextResponse.json({ message: 'Error saving query', error: err }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Data is invalid', data: parsed.error.errors }, { status: 400 });
    }
}
