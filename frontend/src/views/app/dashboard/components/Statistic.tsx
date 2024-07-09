import classNames from 'classnames'
import Card from '@/components/ui/Card'
import Avatar from '@/components/ui/Avatar'
import {
    HiUserCircle,
    HiMail,
    HiDocumentText,
    HiCalendar,
    HiOutlineTrendingUp,
    HiOutlineTrendingDown,
    HiOutlineMail,
} from 'react-icons/hi'
import { MdCategory } from "react-icons/md";

import type { Statistic } from '../store'

const GrowShrink = ({ value }: { value: number }) => {
    return (
        <span className="flex items-center rounded-full gap-1">
            <span
                className={classNames(
                    'rounded-full p-1',
                    value > 0 &&
                    'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100',
                    value < 0 &&
                    'text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20'
                )}
            >
                {value > 0 && <HiOutlineTrendingUp />}
                {value < 0 && <HiOutlineTrendingDown />}
            </span>
            <span
                className={classNames(
                    'font-semibold',
                    value > 0 && 'text-emerald-600',
                    value < 0 && 'text-red-600'
                )}
            >
                {value > 0 && <>+ </>}
                {value}
            </span>
        </span>
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
            return <div></div>
    }
}

const StatisticCard = ({ data = {} }: { data: Partial<Statistic> }) => {
    return (
        <Card bordered>
            <div className="flex items-center gap-4">
                <StatisticIcon type={data.name} />
                <div>
                    <div className="flex gap-1.5 items-end">
                        <h3 className="font-bold leading-none">{data.value}</h3>
                        <p className="font-semibold">{data.name}</p>
                    </div>
                    {/* <p className="flex items-center gap-1">
                        <GrowShrink value={data.growShrink || 0} />
                        <span>this month</span>
                    </p> */}
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
