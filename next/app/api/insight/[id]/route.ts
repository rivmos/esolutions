import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prismadb';

export async function GET(req: NextRequest, { params } : { params: {id: string}}) {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ message: 'Blog ID is required' }, { status: 400 });
    }

    try {
        const blog = await prisma.blog.findUnique({
            where: { id },
        });

        if (!blog) {
            return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
        }

        return NextResponse.json({ data: blog }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: 'Error fetching blog', error: err }, { status: 500 });
    }
}
