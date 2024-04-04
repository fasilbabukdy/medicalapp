import React from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

const FixedBookButton = () => {
   return (
      <div className="fixed bottom-0 z-10  border-t border-slate-100 shadow-[0px_-3px_10px_1px_#E4E4E4] inset-x-0 bg-white rounded-t-md">
         <div className="max-w-4xl mx-auto py-4 flex justify-between items-center">
            <div>
               <h2 className="font-bold text-xl">$56</h2>
               <small className="text-sm font-semibold text-gray-500">
                  Tue, Mar 12-8.00 AM GMT+3
               </small>
            </div>
            <Button
               variant="outline"
               className="inline-flex items-center uppercase justify-center px-4 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-500 hover:text-slate-50"
            >
               <PlusIcon className="size-4 mr-1" /> Book
            </Button>
         </div>
      </div>
   );
};

export default FixedBookButton;
