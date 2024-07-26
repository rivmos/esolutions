import { NextRequest, NextResponse } from 'next/server';
import { schema } from '@/app/dashboard/services/add/z-schema';
import prisma from '@/app/lib/prismadb';

export async function POST(req: NextRequest) {
    const data = await req.json();

    const parsed = schema.safeParse(data);

    if (parsed.success) {
        const { id, name, description, isActive, image } = parsed.data;

        try {
            let service;

            if (id) {
                // Update existing service
                service = await prisma.service.update({
                    where: { id },
                    data: {
                        name,
                        description,
                        image,
                        isActive
                    }
                });

                if (!service) {
                    return NextResponse.json({ message: 'Service not found' }, { status: 404 });
                }
            } else {
                // Create new service
                service = await prisma.service.create({
                    data: {
                        name,
                        description,
                        isActive,
                        image
                    }
                });
            }

            return NextResponse.json({ message: id ? 'Service updated' : 'Service saved', data: service }, { status: 201 });
        } catch (err) {
            return NextResponse.json({ message: 'Error saving service', error: err }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Data is invalid', data: parsed.error }, { status: 400 });
    }
}
