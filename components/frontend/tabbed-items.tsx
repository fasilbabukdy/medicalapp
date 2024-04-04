"use client";

import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";

import LinkCards from "./doctors/link-cards";
import ServicesList from "./services/services-list";
import {
   ActivityIcon,
   MicroscopeIcon,
   StethoscopeIcon,
   SyringeIcon,
} from "lucide-react";

const TabbedItems = () => {
   const services = [
      {
         title: "Telehealth",
         image: "/service-img.png",
         slug: "telehealth",
      },
      {
         title: "Video prescription refill",
         image: "/service-img.png",
         slug: "telehealth",
      },
      {
         title: "In-person doctor visit",
         image: "/service-img.png",
         slug: "telehealth",
      },
      {
         title: "UTI Consult",
         image: "/service-img.png",
         slug: "telehealth",
      },
      {
         title: "Mental health consult",
         image: "/service-img.png",
         slug: "telehealth",
      },
      {
         title: "Urget care visit",
         image: "/service-img.png",
         slug: "telehealth",
      },
   ];

   const tabs = [
      {
         title: "Popular Services",
         icon: StethoscopeIcon,
         content: [],
         component: <ServicesList services={services} />,
      },
      {
         title: "Doctors",
         icon: MicroscopeIcon,
         content: [],
         component: <LinkCards />,
      },
      {
         title: "Specialists",
         icon: ActivityIcon,
         content: [],
         component: <LinkCards className="bg-green-700" />,
      },
      {
         title: "Symptoms",
         icon: SyringeIcon,
         content: [],
         component: <LinkCards className="bg-purple-700" />,
      },
   ];

   return (
      <div className="container mb-6">
         <Tabs aria-label="Tabs with underline" style="underline">
            {tabs.map((tab, index) => (
               <Tabs.Item
                  key={index}
                  title={tab.title}
                  icon={tab.icon}
                  className="!focus:border-none !focus:border-transparent !focus:ring-0 shadow-none focus:ring-offset-0"
               >
                  {tab.component}
               </Tabs.Item>
            ))}
         </Tabs>
      </div>
   );
};

export default TabbedItems;
