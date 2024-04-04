import React from "react";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
   title: string;
   type?: "submit" | "reset" | "button";
   isLoading?: boolean;
   className?: string;
   loadingTitle?: string;
};

const SubmitButton = ({
   title,
   type = "submit",
   isLoading = false,
   className,
   loadingTitle = "Loading",
}: ButtonProps) => {
   return (
      <div className="mt-2">
         <button
            disabled={isLoading}
            type={type}
            className={cn(
               "flex gap-2 items-center w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400",
               className
            )}
         >
            {isLoading ? (
               <>
                  <Loader className="size-5 flex-shrink-0 animate-spin" />{" "}
                  <span>{loadingTitle}</span>
               </>
            ) : (
               <span>{title}</span>
            )}
         </button>
      </div>
   );
};

export default SubmitButton;
