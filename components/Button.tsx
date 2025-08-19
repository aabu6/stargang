import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
   href: string;
   children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
   return (
      <Link
         href={href}
         className="relative inline-block group perspective-1000"
      >
         <span className="relative z-10 inline-block px-7 py-3.5 text-sm  font-bold uppercase tracking-[0.25em] text-transparent border-2 border-[#FEB129] bg-transparent cursor-pointer overflow-hidden">
            <span className="absolute inset-0 bg-white text-[#2E60C8] flex items-center justify-center transition-all duration-500 ease-in-out origin-left group-hover:left-full group-hover:scale-0 group-hover:opacity-0">
               {children}
            </span>
            <span className="absolute inset-0 -left-full bg-white text-[#2E60C8] flex items-center justify-center transition-all duration-500 ease-in-out origin-right scale-0 opacity-0 group-hover:left-0 group-hover:scale-100 group-hover:opacity-100">
               {children}
            </span>
            {children}
         </span>
      </Link>
   );
};

export default Button;
