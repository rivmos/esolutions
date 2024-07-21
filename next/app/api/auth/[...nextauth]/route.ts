import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions, User } from "next-auth";
import prisma from '@/app/lib/prismadb'
import Credentials from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import NextAuth from "next-auth/next";
import { JWT } from "next-auth/jwt";

// import type {User} from '@prisma/client'

// Define your custom session and user types
interface CustomUser extends User {
    id: string;
    role: string;
}

interface CustomSession {
    user: CustomUser;
}

interface CustomJWT extends JWT {
    id: string;
    role: string;
}

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
    pages: {
        signIn: '/auth/signin'
    },
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST } 