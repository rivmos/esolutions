// components/CustomButton.js
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import { ReactNode } from "react";

export default function CustomButton({ href, children, className } : {href: string, children: ReactNode, className?: string}) {
  return (
    <Link href={href}>
      <Button
        className={`bg-white text-gray-800 rounded-md 
                    h-12 w-32 text-sm 
                    sm:h-14 sm:w-36 sm:text-base 
                    md:h-14 md:w-36 md:text-base 
                    hover:bg-blue-600-dark transition-colors duration-300 hover:text-blue-600 border-blue-400 ${className}`}>
        {children}
      </Button>
    </Link>
  );
}


