import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import prisma from '@/app/lib/prismadb'

export async function getSession(){
    return await getServerSession(authOptions)
}


export async function getCurrentUser() {
    try{
        const session = await getSession()
        if(session?.user){
            return null
        }


        const currentUser = await prisma.user.findUnique({
            where: {
                username: session?.user?.name as string
            }
        })

        if(!currentUser) {
            return null
        }

        return currentUser
    }
    catch(err) {

    }
}