import {
    HiMail,
    HiDocumentText,
    HiOutlineMail,
} from 'react-icons/hi'
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { ReactNode } from 'react'
import Link from 'next/link'

type Statistic = {
    name: string,
    value: number
}

const Avatar = ({ size, className, icon }: { size: number, className: string, icon: ReactNode }) => {
    return (
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

        case 'Services':
            return (
                <Avatar
                    size={55}
                    className="bg-yellow-100 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-100"
                    icon={<SiAmazonsimpleemailservice />}
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
        <Link href={data.name === 'Case Studies' ? '/dashboard/casestudies/list' : data.name === 'Enquiries' ? '/dashboard/enquiries/list' : data.name === 'Services' ? '/dashboard/services/list' : ''}>
            <div className="flex items-center gap-4 border-[1px] rounded-xl p-4 h-24 hover:bg-indigo-50 transition-colors duration-300">
                <StatisticIcon type={data.name} />
                <div>
                    <div className="flex gap-1.5 items-center">
                        <h3 className="font-semibold leading-none">{data.value}</h3>
                        <p className="font-semibold">{data.name}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

const Statistic = ({ data = [] }: { data?: Statistic[] }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {data.map((card) => (
                <StatisticCard key={card.name} data={card} />
            ))}
        </div>
    )
}

export default Statistic
