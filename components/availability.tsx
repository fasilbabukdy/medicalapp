"use client";

import React, { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const Availability = () => {
   const [bookDate, setBookDate] = useState<Date | undefined>(new Date());
   const formattedDate = `${bookDate
      ?.toString()
      .split(" ")
      .slice(0, 3)
      .join(" ")} - GMT${bookDate?.toString().split("GMT")[1].split(" ")[0]}`;

   const timestamps = [
      { time: "8:30", period: "am" },
      { time: "9:30", period: "am" },
      { time: "10:30", period: "am" },
      { time: "11:30", period: "am" },
      { time: "12:30", period: "pm" },
      { time: "01:30", period: "pm" },
      { time: "02:30", period: "pm" },
   ];

   return (
      <div>
         <h2 className="font-bold text-xl uppercase mb-2 tracking-wider">
            Select a Date and Time
         </h2>
         <div className="grid grid-cols-2 gap-4 mb-36">
            <div className="col-span-full sm:col-span-1">
               <Calendar
                  mode="single"
                  selected={bookDate}
                  onSelect={setBookDate}
                  className="rounded-md border calender-full"
               />
            </div>
            <div className="col-span-full sm:col-span-1">
               {bookDate && (
                  <h2 className="py-2.5 px-4 font-semibold border border-gray-200 rounded-md text-center">
                     {formattedDate}
                  </h2>
               )}

               <div className="py-2 grid grid-cols-3 gap-1">
                  {timestamps.map((item, index) => (
                     <button
                        className="bg-blue-500 hover:bg-blue-500/80 transition-all text-center text-white p-2 flex items-center justify-center text-sm rounded-sm"
                        key={index}
                     >
                        {item.time} {item.period}
                     </button>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Availability;
