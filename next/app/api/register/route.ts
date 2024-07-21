import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'
import prisma from '@/app/lib/prismadb'

export async function POST(request: Request) {
    const body = await request.json()
    const { username, password, email } = body

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
        data: {
            username,
            hashedPassword,
            email
        }
    })

    return NextResponse.json(user)
}