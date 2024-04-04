import Image from "next/image";

import Hero from "@/components/frontend/hero";
import Brands from "@/components/frontend/brands";
import TabbedSection from "@/components/frontend/tabbed-section";
import TabbedItems from "@/components/frontend/tabbed-items";
import DoctorsList from "@/components/doctors-list";

export default function Home() {
   return (
      <section className="">
         <Hero />
         <Brands />
         <TabbedSection />
         <TabbedItems />
         <DoctorsList title="Telehealth visit" />
         <DoctorsList
            title="In-person doctor visit"
            className="bg-slate-100"
            isInPerson
         />
      </section>
   );
}
