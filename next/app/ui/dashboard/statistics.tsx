import clsx from 'clsx'
import Card from '@/app/ui/common/card/Card'
import {
    HiUserCircle,
    HiMail,
    HiDocumentText,
    HiCalendar,
    HiOutlineTrendingUp,
    HiOutlineTrendingDown,
    HiOutlineMail,
} from 'react-icons/hi'
import { ReactNode } from 'react'

type Statistic = {
    name:string,
    value:string
}

const Avatar = ({size, className, icon} : {size: number, className: string, icon: ReactNode}) => {
    return(
        <div className={`${className} rounded-full p-2 h-${size}`}>
            {icon}
        </div>
    )
}

const StatisticIcon = ({ type }: { type?: string }) => {
    switch (type) {
        case 'Enquiries':
            return (
                <Avatar
                    size={55}
                    className="bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-100"
                    icon={<HiMail />}
                />
            )
        case 'Case Studies':
            return (
                <Avatar
                    size={55}
                    className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100"
                    icon={<HiDocumentText />}
                />
            )

        case 'Subscribers':
            return (
                <Avatar
                    size={55}
                    className="bg-yellow-100 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-100"
                    icon={<HiOutlineMail />}
                />
            )
        default:
            return null
    }
}

const StatisticCard = ({ data = {} }: { data: Partial<Statistic> }) => {
    return (
        <Card bordered>
            <div className="flex items-center gap-4">
                <StatisticIcon type={data.name} />
                <div>
                    <div className="flex gap-1.5 items-center">
                        <h3 className="font-semibold leading-none">{data.value}</h3>
                        <p className="font-semibold">{data.name}</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}

const Statistic = ({ data = [] }: { data?: Partial<Statistic>[] }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {data.map((card) => (
                <StatisticCard key={card.name} data={card} />
            ))}
        </div>
    )
}

export default Statistic
