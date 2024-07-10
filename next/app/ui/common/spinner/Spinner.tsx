import { forwardRef } from 'react'
import clsx from 'clsx'
// import { useConfig } from '../ConfigProvider'
import { CgSpinner } from 'react-icons/cg'
import type { CommonProps } from '@/app/lib/@types/common'
import type { ElementType } from 'react'
import { ImSpinner2 } from "react-icons/im";
import { TbLoader3 } from "react-icons/tb";


export interface SpinnerProps extends CommonProps {
    color?: string
    enableTheme?: boolean
    indicator?: ElementType
    isSpining?: boolean
    size?: string | number
}

const Spinner = forwardRef((props: SpinnerProps, ref) => {
    const {
        className,
        color,
        enableTheme = true,
        indicator: Component = TbLoader3,
        isSpining = true,
        size = 20,
        style,
        ...rest
    } = props
    
    // const { themeColor, primaryColorLevel } = useConfig()

    const spinnerColor =
        color || (enableTheme && `text-primaryColor`)

    const spinnerStyle = {
        height: size,
        width: size,
        ...style,
    }

    const spinnerClass = clsx(
        isSpining && 'animate-spin',
        spinnerColor && `text-${spinnerColor}`,
        className
    )

    return (
        <div>
        <Component
            ref={ref}
            style={spinnerStyle}
            className={clsx(spinnerClass)}
            {...rest}
        />
        {/* <Mainloader /> */}
        </div>
    )
})

Spinner.displayName = 'Spinner'

export default Spinner
