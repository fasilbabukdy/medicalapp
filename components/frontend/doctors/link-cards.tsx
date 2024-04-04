import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const LinkCards = ({ className }: { className?: string }) => {
   return (
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-col-1 gap-6">
         <Link
            href="#"
            className={cn(
               "rounded-md bg-slate-700 text-slate-50 p-4 transition-all duration-300 flex gap-4",
               className
            )}
         >
            <h2>Anxiety</h2>
            <span aria-hidden="true">&rarr;</span>
         </Link>
         <Link
            href="#"
            className={cn(
               "rounded-md bg-slate-700 text-slate-50 p-4 transition-all duration-300 flex gap-4",
               className
            )}
         >
            <h2>Anxiety</h2>
            <span aria-hidden="true">&rarr;</span>
         </Link>
         <Link
            href="#"
            className={cn(
               "rounded-md bg-slate-700 text-slate-50 p-4 transition-all duration-300 flex gap-4",
               className
            )}
         >
            <h2>Anxiety</h2>
            <span aria-hidden="true">&rarr;</span>
         </Link>
         <Link
            href="#"
            className={cn(
               "rounded-md bg-slate-700 text-slate-50 p-4 transition-all duration-300 flex gap-4",
               className
            )}
         >
            <h2>Anxiety</h2>
            <span aria-hidden="true">&rarr;</span>
         </Link>
         <Link
            href="#"
            className={cn(
               "rounded-md bg-slate-700 text-slate-50 p-4 transition-all duration-300 flex gap-4",
               className
            )}
         >
            <h2>Anxiety</h2>
            <span aria-hidden="true">&rarr;</span>
         </Link>
         <Link
            href="#"
            className={cn(
               "rounded-md bg-slate-700 text-slate-50 p-4 transition-all duration-300 flex gap-4",
               className
            )}
         >
            <h2>Anxiety</h2>
            <span aria-hidden="true">&rarr;</span>
         </Link>
      </div>
   );
};

export default LinkCards;
