import { forwardRef, ElementType } from 'react'
import clsx from 'clsx'
import { CommonProps } from '@/app/lib/@types/common'

interface ContainerProps extends CommonProps {
    asElement?: ElementType
}

const Container = forwardRef((props: ContainerProps, ref) => {
    const { className, children, asElement: Component = 'div', ...rest } = props

    return (
        <Component
            ref={ref}
            className={clsx('container mx-auto', className)}
            {...rest}
        >
            {children}
        </Component>
    )
})

Container.displayName = 'Container'

export default Container
