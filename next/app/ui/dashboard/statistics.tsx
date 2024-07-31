import {
    HiMail,
    HiDocumentText,
    HiOutlineMail,
    HiTag,
    HiUser,
    HiPencil,
    HiUserGroup
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
                    className="bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-100"
                    icon={<SiAmazonsimpleemailservice />}
                />
            )

        case 'Subscribers':
            return (
                <Avatar
                    size={55}
                    className="bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-100"
                    icon={<HiUserGroup />}
                />
            )

        case 'Blogs':
            return (
                <Avatar
                    size={55}
                    className="bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-100"
                    icon={<HiPencil />}
                />
            )

        case 'Testimonials':
            return (
                <Avatar
                    size={55}
                    className="bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100"
                    icon={<HiUser />}
                />
            )


        case 'Tags':
            return (
                <Avatar
                    size={55}
                    className="bg-pink-100 text-pink-600 dark:bg-pink-500/20 dark:text-pink-100"
                    icon={<HiTag />}
                />
            )
        default:
            return null
    }
}

const StatisticCard = ({ data = {} }: { data: Partial<Statistic> }) => {
    return (
        <Link href={`/dashboard/${data?.name?.replace(/\s+/g, '').toLowerCase()}/list`}>
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
