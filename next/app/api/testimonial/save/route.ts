import { NextRequest, NextResponse } from 'next/server';
import { schema } from '@/app/dashboard/testimonials/add/z-schema';
import prisma from '@/app/lib/prismadb';

export async function POST(req: NextRequest) {
  const data = await req.json();

  const parsed = schema.safeParse(data);

  if (parsed.success) {
    const { id, name, position, message } = parsed.data;

    try {
      let testimonial;

      if (id) {
        // Update existing testimonial
        testimonial = await prisma.testimonial.update({
          where: { id },
          data: {
            name,
            position,
            message
          }
        });

        if (!testimonial) {
          return NextResponse.json({ message: 'Testimonial not found' }, { status: 404 });
        }
      } else {
        // Create new testimonial
        testimonial = await prisma.testimonial.create({
          data: {
            name,
            position,
            message
          }
        });
      }

      return NextResponse.json({ message: id ? 'Testimonial updated' : 'Testimonial saved', data: testimonial }, { status: 201 });
    } catch (err) {
      return NextResponse.json({ message: 'Error saving testimonial', error: err }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Data is invalid', data: parsed.error }, { status: 400 });
  }
}
