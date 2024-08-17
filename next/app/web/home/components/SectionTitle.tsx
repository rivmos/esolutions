"use client"
import Link from "next/link"
import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";

const SectionTitle = ({ title, colored, className }: { title: string, colored?: boolean, className?: string  }) => {
    return (
        <motion.h1
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: [20, -5, 0],
            }}
            transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
            }}
            className={`text-xl -mt-8 md:text-2xl lg:text-4xl font-bold mb-8 lg:mb-11 text-center leading-normal ${className}`}
        >
            {
                colored
                    ?
                    <div>
                        {title.split(' ')[0] + ' '}
                        {title.split(' ').length > 1 && <Highlight className="text-white dark:text-white">
                            {title.split(' ').slice(1).join(' ')}
                        </Highlight>}
                    </div>
                    :
                    title
            }
        </motion.h1>
    )
}

export default SectionTitle
