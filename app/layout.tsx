import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={outfit.className}>
            {children}
            <Toaster />
         </body>
      </html>
   );
}
