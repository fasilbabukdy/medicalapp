import React, { ReactNode } from "react";

import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
   return (
      <>
         <Navbar />
         <Sidebar />
         <main>{children}</main>
      </>
   );
}
