import { NextRequest, NextResponse } from 'next/server';
import { schema } from '@/app/dashboard/casestudies/add/z-schema';
import prisma from '@/app/lib/prismadb';

export async function POST(req: NextRequest) {
    const data = await req.json();

    const parsed = schema.safeParse(data);

    if (parsed.success) {
        const { id, title, description, content, image, url } = parsed.data;

        try {
            let casestudy;

            if (id) {
                // Update existing case study
                casestudy = await prisma.caseStudy.update({
                    where: { id },
                    data: {
                        title,
                        description,
                        content,
                        image,
                        url
                    }
                });

                if (!casestudy) {
                    return NextResponse.json({ message: 'Case study not found' }, { status: 404 });
                }
            } else {
                // Create new case study
                casestudy = await prisma.caseStudy.create({
                    data: {
                        title,
                        description,
                        content,
                        image,
                        url
                    }
                });
            }

            return NextResponse.json({ message: id ? 'Case study updated' : 'Case study saved', data: casestudy }, { status: 201 });
        } catch (err) {
            return NextResponse.json({ message: 'Error saving case study', error: err }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Data is invalid', data: parsed.error }, { status: 400 });
    }
}
