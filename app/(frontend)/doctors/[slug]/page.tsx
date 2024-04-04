import DoctorDetails from "@/components/frontend/doctor-details";
import Image from "next/image";
import React from "react";

const DoctorDetailPage = () => {
   return (
      <div className="bg-slate-100 py-5">
         <div className="bg-white max-w-4xl border border-gray-200 mx-auto shadow-lg py-5 px-6 rounded-md">
            <div className="flex justify-between mb-4">
               <div className="mb-3">
                  <h2 className="font-bold text-xl">VIJAL PATEL, PAC</h2>
                  <small className="text-gray-500 uppercase">
                     Adult Health
                  </small>
                  <div className="mt-4">
                     <p className="font-semibold">In-person doctor visit</p>
                     <p className="text-gray-500">
                        3250 Lincoln Highway, Kendall Park NJ 08824
                     </p>
                  </div>
               </div>
               <div className="size-28 relative">
                  <Image
                     src="/doctor.png"
                     alt="Doctor"
                     fill
                     className="size-28 object-cover rounded-full shadow-sm"
                  />
               </div>
            </div>

            <DoctorDetails />
         </div>
      </div>
   );
};

export default DoctorDetailPage;
