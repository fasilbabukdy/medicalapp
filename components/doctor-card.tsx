import { Stethoscope, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DoctorCard = ({ isInPerson = false }: { isInPerson?: boolean }) => {
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
      <div className=" bg-white inline-flex flex-col px-4 pt-6 pb-2 shadow-sm hover:shadow-lg rounded-md">
         <h2 className="font-semibold mb-1 tracking-wider uppercase">
            Vijal Patel, PAC
         </h2>
         <p className="text-gray-500 text-sm mb-3">
            3250 Lincoln Hieghway, Kendall Park, NJ 08824
         </p>
         <Link href="/doctors/slug" className="flex items-center gap-3 mb-4">
            <div className="size-16 relative">
               <Image
                  src="/doctor.png"
                  alt="Doctor"
                  fill
                  className="size-16 object-cover rounded-full shadow-sm"
               />
               {isInPerson && (
                  <Video className="size-7 absolute right-0 bottom-0 text-blue-500 bg-white p-1 rounded-full shadow" />
               )}
            </div>
            <div className="flex flex-col gap-2">
               <p className="flex items-center">
                  <Stethoscope className="size-5 mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium">Family Medicine</span>
               </p>
               <p className="bg-green-200 text-green-600 py-1.5 px-4 uppercase font-semibold text-xs rounded-md">
                  Available today
               </p>
            </div>
         </Link>
         <div className="pt-4 border-t border-gray-200">
            <h3 className="text-sm flex justify-between items-center gap-2">
               <span className="text-gray-600">Tue, Mar 12</span>
               <span className="font-bold">$137</span>
            </h3>
            <div className="py-2 grid grid-cols-3 gap-1">
               {timestamps.slice(0, 5).map((item, index) => (
                  <button
                     className="bg-blue-500 hover:bg-blue-500/80 transition-all text-center text-white p-2 flex items-center justify-center text-sm rounded-sm"
                     key={index}
                  >
                     {item.time} {item.period}
                  </button>
               ))}
               <Link
                  className="bg-blue-900 hover:bg-blue-900/80 transition-all text-white p-2 text-center rounded-sm flex items-center justify-center text-sm"
                  href="/doctors/slug"
               >
                  More
               </Link>
            </div>
         </div>
      </div>
   );
};

export default DoctorCard;
