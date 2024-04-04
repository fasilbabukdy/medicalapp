"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import FixedBookButton from "./fixed-book-button";
import Availability from "@/components/availability";

const DoctorDetails = () => {
   const [isActive, setIsActive] = useState<String>("availability");

   return (
      <div className="tabs">
         <div className="flex bg-slate-100 rounded-md overflow-hidden mb-4">
            <button
               onClick={() => setIsActive("details")}
               className={cn(
                  "flex-1 py-2 px-4 uppercase tracking-wider font-medium text-slate-500 transition-all duration-300",
                  {
                     "bg-blue-200 text-blue-500": isActive === "details",
                  }
               )}
            >
               Service Details
            </button>
            <button
               onClick={() => setIsActive("availability")}
               className={cn(
                  "flex-1 py-2 px-4 uppercase tracking-wider font-medium text-slate-500 transition-all duration-300",
                  {
                     "bg-blue-200 text-blue-500": isActive === "availability",
                  }
               )}
            >
               Availability
            </button>
         </div>

         <div className="tab-content">
            {isActive === "availability" ? (
               <Availability />
            ) : (
               <div>Service Details Component</div>
            )}
         </div>
         <FixedBookButton />
      </div>
   );
};

export default DoctorDetails;
