import React from "react";
import ServiceCard from "./service-card";
import { ServiceProps } from "@/types";

const ServicesList = ({ services }: { services: ServiceProps[] }) => {
   return (
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-col-1 gap-6">
         {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
         ))}
      </div>
   );
};

export default ServicesList;
