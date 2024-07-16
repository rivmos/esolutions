
"use client"
import { cloneElement } from 'react'
import Container from '@/app/ui/common/Container'
import Card from '@/app/ui/common/card'
import Logo from '@/app/ui/Logo'
import type { ReactNode, ReactElement } from 'react'
import type { CommonProps } from '@/app/lib/@types/common'

interface SimpleProps extends CommonProps {
    content?: ReactNode
}

export default function Layout({ children, content, ...rest }: SimpleProps) {

    return (
        <div className="h-full">
            <Container className="flex flex-col flex-auto items-center justify-center min-w-0 h-screen">
                <Card
                    className="min-w-[320px] md:min-w-[450px]"
                    bodyClass="md:p-10"
                >
                    <div className="flex justify-center mb-4 p-4 rounded-xl">
                        <Logo />
                    </div>
                    <div className="text-center">
                        {content}
                        {children
                            ? cloneElement(children as ReactElement, {
                                contentClassName: 'text-center',
                                ...rest,
                            })
                            : null}
                    </div>
                </Card>
            </Container>
        </div>
    )
}
