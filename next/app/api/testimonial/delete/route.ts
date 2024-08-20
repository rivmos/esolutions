import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prismadb';

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    const testimonial = await prisma.testimonial.delete({
      where: { id },
    });

    if (!testimonial) {
      return NextResponse.json({ message: 'Testimonial not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Testimonial deleted successfully', data: testimonial }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error deleting testimonial', error: err }, { status: 500 });
  }
}
