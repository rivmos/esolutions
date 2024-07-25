import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prismadb';

export async function GET(req: NextRequest, { params } : { params: {id: string}}) {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ message: 'Case study ID is required' }, { status: 400 });
    }

    try {
        const caseStudy = await prisma.caseStudy.findUnique({
            where: { id },
        });

        if (!caseStudy) {
            return NextResponse.json({ message: 'Case study not found' }, { status: 404 });
        }

        return NextResponse.json({ data: caseStudy }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: 'Error fetching case study', error: err }, { status: 500 });
    }
}
