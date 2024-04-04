import Navbar from "@/components/frontend/navbar";
import React, { ReactNode } from "react";

export default function FrontendLayout({ children }: { children: ReactNode }) {
   return (
      <>
         <Navbar />
         <main className="pt-[72px]">{children}</main>
      </>
   );
}
