import { NextRequest, NextResponse } from 'next/server';
import { schema } from '@/app/dashboard/subscribers/add/z-schema';
import prisma from '@/app/lib/prismadb';

export async function POST(req: NextRequest) {
    const data = await req.json();
    const parsed = schema.safeParse(data);

    if (parsed.success) {
        const { id, email } = parsed.data;

        try {
            let subscriber;

            if (id) {
                subscriber = await prisma.subscriber.update({
                    where: { id },
                    data: {
                        email
                    }
                });

                if (!subscriber) {
                    return NextResponse.json({ message: 'Subscriber not found' }, { status: 404 });
                }
            } else {
                subscriber = await prisma.subscriber.create({
                    data: {
                        email
                    }
                });
            }

            return NextResponse.json({ message: id ? 'Subscriber updated' : 'Subscriber saved', data: subscriber }, { status: 201 });
        } catch (err) {
            return NextResponse.json({ message: 'Error saving subscriber', error: err }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Data is invalid', data: parsed.error.errors }, { status: 400 });
    }
}
