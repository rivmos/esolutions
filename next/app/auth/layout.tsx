
import type { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {

    return (
        <div className="h-full container mx-auto">
            <div className="text-center">
                {children}
            </div>
        </div>
    )
}

export default Layout