import { NextRequest, NextResponse } from 'next/server';
import { schema } from '@/app/dashboard/bannerslides/add/z-schema';
import prisma from '@/app/lib/prismadb';

export async function POST(req: NextRequest) {
    const data = await req.json();

    const parsed = schema.safeParse(data);

    if (parsed.success) {
        const { id, heading, subheading, ctaText, ctaHref, image } = parsed.data;

        try {
            let bannerslide;

            if (id) {
                // Update existing case study
                bannerslide = await prisma.bannerSlide.update({
                    where: { id },
                    data: {
                        heading,
                        subheading,
                        ctaText,
                        ctaHref,
                        image
                    }
                });

                if (!bannerslide) {
                    return NextResponse.json({ message: 'Banner slides not found' }, { status: 404 });
                }
            } else {
                // Create new case study
                bannerslide = await prisma.bannerSlide.create({
                    data: {
                        heading,
                        subheading,
                        ctaText,
                        ctaHref,
                        image
                    }
                });
            }

            return NextResponse.json({ message: id ? 'Banner slides updated' : 'Banner slides saved', data: bannerslide }, { status: 201 });
        } catch (err) {
            return NextResponse.json({ message: 'Error saving banner slide', error: err }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Data is invalid', data: parsed.error }, { status: 400 });
    }
}
