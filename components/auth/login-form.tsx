"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

import { LoginInputProps } from "@/types";
import TextInput from "@/components/form-inputs/text-input";
import SubmitButton from "@/components/form-inputs/submit-button";

const LoginFrom = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<LoginInputProps>();

   const handleSubmtForm = async (data: LoginInputProps) => {
      console.log(data);
   };

   return (
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
               Sign in to your account
            </h2>
         </div>

         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
               className="space-y-4"
               onSubmit={handleSubmit(handleSubmtForm)}
            >
               <TextInput
                  register={register}
                  errors={errors}
                  label="Email"
                  name="email"
                  placeholder="Email Address"
               />

               <TextInput
                  register={register}
                  errors={errors}
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
               />

               <SubmitButton title="Sign In" isLoading={isLoading} />
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
               Don't have Account?{" "}
               <Link
                  href="/register"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
               >
                  Register
               </Link>
            </p>
         </div>
      </div>
   );
};

export default LoginFrom;
