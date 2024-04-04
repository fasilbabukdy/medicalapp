import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ServiceProps } from "@/types";

const ServiceCard = ({ title, image, slug }: ServiceProps) => {
   return (
      <Link
         href={`/services/${slug}`}
         className="rounded-md items-center bg-slate-100 hover:bg-slate-300 transition-all duration-300 flex"
      >
         <Image
            priority
            src={image}
            width={1170}
            height={848}
            alt="service"
            className="w-1/3 rounded-l-md object-cover aspect-video self-stretch"
         />
         <div className="flex flex-col w-2/3 py-3 px-3">
            <h2 className="text-sm font-semibold">{title}</h2>
            <p className="text-xs">936 Doctors Available</p>
         </div>
      </Link>
   );
};

export default ServiceCard;
