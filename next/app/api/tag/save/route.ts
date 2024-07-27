import { NextRequest, NextResponse } from 'next/server';
import { schema } from '@/app/dashboard/tags/add/z-schema';
import prisma from '@/app/lib/prismadb';

export async function POST(req: NextRequest) {
    const data = await req.json();

    const parsed = schema.safeParse(data);

    if (parsed.success) {
        const { id, name } = parsed.data;

        try {
            let tag;

            if (id) {
                // Update existing service
                tag = await prisma.tag.update({
                    where: { id },
                    data: {
                        name,
                    }
                });

                if (!tag) {
                    return NextResponse.json({ message: 'Tag not found' }, { status: 404 });
                }
            } else {
                // Create new service
                tag = await prisma.tag.create({
                    data: {
                        name,
                    }
                });
            }

            return NextResponse.json({ message: id ? 'Tag updated' : 'Tag saved', data: tag }, { status: 201 });
        } catch (err) {
            return NextResponse.json({ message: 'Error saving tag', error: err }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Data is invalid', data: parsed.error }, { status: 400 });
    }
}
