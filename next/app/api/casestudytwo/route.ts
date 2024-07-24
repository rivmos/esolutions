import {NextRequest, NextResponse} from 'next/server'
import {schema} from '@/app/dashboard/casestudies/z-schema'
import prisma from '@/app/lib/prismadb'

export async function POST (req:NextRequest) {
    const formData = await req.formData()
    const data = Object.fromEntries(formData)
    const parsed = schema.safeParse(data)

    
    if(parsed.success){
        const casestudy = await prisma.caseStudy.create({
            data: {
                title: parsed.data.title,
                description: parsed.data.description,
                content: parsed.data.content
            }
        })
        return NextResponse.json({message: 'Data is good', data: casestudy}, {status: 201})
    }
    else{
        return NextResponse.json({message: 'Data is invalid', data: parsed.error}, {status: 400})
    }
}