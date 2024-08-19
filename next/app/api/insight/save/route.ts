import { NextRequest, NextResponse } from 'next/server';
import { schema } from '@/app/dashboard/casestudies/add/z-schema';
import prisma from '@/app/lib/prismadb';
import slugify from 'slugify'

export async function POST(req: NextRequest) {
    const data = await req.json();

    const parsed = schema.safeParse(data);

    if (parsed.success) {
        const { id, title, description, content, image } = parsed.data;

        const slug = slugify(title, {lower:true})

        try {
            let insight;

            if (id) {
                // Update existing case study
                insight = await prisma.insight.update({
                    where: { id },
                    data: {
                        title,
                        description,
                        content,
                        image,
                        slug
                    }
                });

                if (!insight) {
                    return NextResponse.json({ message: 'Insight not found' }, { status: 404 });
                }
            } else {
                // Create new case study
                insight = await prisma.insight.create({
                    data: {
                        title,
                        description,
                        content,
                        image,
                        slug
                    }
                });
            }

            return NextResponse.json({ message: id ? 'Insight updated' : 'Insight saved', data: insight }, { status: 201 });
        } catch (err) {
            return NextResponse.json({ message: 'Error saving Insight', error: err }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Data is invalid', data: parsed.error }, { status: 400 });
    }
}
