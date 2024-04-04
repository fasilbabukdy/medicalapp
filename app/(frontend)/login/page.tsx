import React from "react";
import Image from "next/image";

import LoginFrom from "@/components/auth/login-form";

const LoginPage = () => {
   return (
      <div className="bg-blue-100 min-h-screen py-8">
         <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="hidden md:flex">
               <Image
                  src="/login-bg.jpg"
                  alt="Login Bg"
                  width={500}
                  height={400}
                  className="object-cover"
               />
            </div>
            <div className="">
               <LoginFrom />
            </div>
         </div>
      </div>
   );
};

export default LoginPage;
