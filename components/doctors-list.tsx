import React from "react";

import SectionHeading from "./section-heading";
import TobbleButton from "./toggle-button";
import Link from "next/link";
import DoctorCard from "./doctor-card";
import { cn } from "@/lib/utils";
import { Map } from "lucide-react";
import DoctorListCarousel from "./doctor-list-carousel";

const DoctorsList = ({
   title,
   isInPerson,
   className,
}: {
   title: string;
   isInPerson?: boolean;
   className?: string;
}) => {
   const doctors = [
      {
         name: "John",
      },
      {
         name: "John",
      },
      {
         name: "John",
      },
      {
         name: "John",
      },
      {
         name: "John",
      },
      {
         name: "John",
      },
      {
         name: "John",
      },
   ];

   return (
      <div className={cn("bg-pink-100 py-8 lg:py-24", className)}>
         <div className="container">
            <SectionHeading title={title} />
            <div className="py-4 flex justify-between items-center">
               {isInPerson ? (
                  <Link
                     href="#"
                     className="text-blue-500 text-sm font-semibold flex items-center gap-2"
                  >
                     <Map className="size-5" />
                     <span>Map View</span>
                  </Link>
               ) : (
                  <TobbleButton />
               )}
               <Link
                  className="py-2 px-6 border border-blue-600 bg-white"
                  href="#"
               >
                  See All
               </Link>
            </div>

            <DoctorListCarousel doctors={doctors} isInPerson={isInPerson} />
         </div>
      </div>
   );
};

export default DoctorsList;
