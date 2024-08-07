import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import prisma from '@/app/lib/prismadb'
import Credentials from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                username: { label: 'username', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    throw new Error('Invalid Credentials')
                }

                const user = await prisma.user.findUnique({
                    where: {
                        username: credentials.username
                    }
                })

                if (!user || !user.hashedPassword) {
                    throw new Error('Invalid Credentials')
                }

                const isPasswordCorrect = await bcrypt.compare(credentials.password, user.hashedPassword)

                if (!isPasswordCorrect) {
                    throw new Error('Invalid Password')
                }

                return user
            }
        })
    ],
    // pages: {
    //     signIn: '/api/auth/signin'
    // },
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET
}