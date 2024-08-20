import { NextRequest, NextResponse } from 'next/server';
import { schema } from '@/app/dashboard/legal/add/z-schema';
import prisma from '@/app/lib/prismadb';
import slugify from 'slugify';

export async function POST(req: NextRequest) {
    const data = await req.json();

    const parsed = schema.safeParse(data);

    if (parsed.success) {
        const { id, title, content } = parsed.data;

        const slug = slugify(title, {lower:true})

        try {
            let legal;

            if (id) {
                // Update existing case study
                legal = await prisma.legal.update({
                    where: { id },
                    data: {
                        title,
                        content,
                        slug
                    }
                });

                if (!legal) {
                    return NextResponse.json({ message: 'Case study not found' }, { status: 404 });
                }
            } else {
                // Create new case study
                legal = await prisma.legal.create({
                    data: {
                        title,
                        content,
                        slug
                    }
                });
            }

            return NextResponse.json({ message: id ? 'Legal document updated' : 'Legal document saved', data: legal }, { status: 201 });
        } catch (err) {
            return NextResponse.json({ message: 'Error saving Legal document', error: err }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Data is invalid', data: parsed.error }, { status: 400 });
    }
}
