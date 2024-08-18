import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import { ReactNode } from "react";
import clsx from "clsx";

export default function CustomButton({ href, children, className, variant='filled' } : {href: string, children: ReactNode, className?: string, variant?:'bordered' | 'filled' | 'card'}) {
  return (
    <Link href={href}>
      {/* <Button
        className={`bg-white text-gray-800 rounded-md 
                    h-12 w-32 text-sm 
                    sm:h-14 sm:w-36 sm:text-base 
                    md:h-14 md:w-36 md:text-base 
                    hover:bg-blue-600-dark transition-colors duration-300 hover:text-blue-600 border-blue-400 ${className}`}>
        {children}
      </Button> */}
      <button type="button" className={clsx("h-12 w-40 text-sm sm:h-12 sm:w-40 md:h-12 md:w-52 md:text-base rounded-md font-medium transition-all duration-300", {"text-white bg-blue-600" : variant === 'filled'}, {"text-blue-600 border-blue-600 border-[1px]" : variant === 'bordered'}, {"text-gray-400 border-gray-400 border-b-[1px] rounded-none !py-2 !px-0 hover:text-blue-600 hover:border-blue-600 !h-full !w-full !font-normal" : variant === 'card'})}>{children}</button>
    </Link>
  );
}


