import { NextRequest, NextResponse } from 'next/server';
import { schema } from '@/app/dashboard/casestudies/add/z-schema';
import prisma from '@/app/lib/prismadb';

export async function POST(req: NextRequest) {
    const data = await req.json();

    const parsed = schema.safeParse(data);

    if (parsed.success) {
        const { id, title, description, content, image } = parsed.data;

        try {
            let blog;

            if (id) {
                // Update existing case study
                blog = await prisma.blog.update({
                    where: { id },
                    data: {
                        title,
                        description,
                        content,
                        image
                    }
                });

                if (!blog) {
                    return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
                }
            } else {
                // Create new case study
                blog = await prisma.blog.create({
                    data: {
                        title,
                        description,
                        content,
                        image
                    }
                });
            }

            return NextResponse.json({ message: id ? 'Blog updated' : 'Blog saved', data: blog }, { status: 201 });
        } catch (err) {
            return NextResponse.json({ message: 'Error saving blog', error: err }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Data is invalid', data: parsed.error }, { status: 400 });
    }
}
