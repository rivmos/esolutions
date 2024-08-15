"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCalendarAlt, FaChartLine, FaClipboardCheck } from 'react-icons/fa';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    href: string
    iconSrc: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const icons = {
    FaCalendarAlt: FaCalendarAlt,
    FaChartLine: FaChartLine,
    FaClipboardCheck: FaClipboardCheck,
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-3 gap-8  py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        //@ts-ignore
        const IconComponent = icons[item.icon];
        return (
          <Link
            href={item.href}
            key={item?.title}
            className="relative group block p-2 h-full w-full border-2 hover:border-transparent rounded-md transition-all duration-300"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card className="bg-white rounded-lg">
              {/* <IconComponent size={28} className="text-blue-600 text-3xl md:text-4xl lg:text-5xl mx-auto mb-4" /> */}
              <div className="flex justify-center mb-8">
                <Image src={`/img/icons/${item.iconSrc}`} alt="icon" width={80} height={80}/>
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">{item.title}</CardTitle>
              <CardDescription className="text-gray-700 text-sm">{item.description}</CardDescription>
            </Card>
          </Link>
        )
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-5", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-6 text-zinc-400 tracking-wide leading-relaxed text-sm lg:px-6",
        className
      )}
    >
      {children}
    </p>
  );
};
