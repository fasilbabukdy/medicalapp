"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";

import { LoginInputProps } from "@/types";
import TextInput from "@/components/form-inputs/text-input";
import SubmitButton from "@/components/form-inputs/submit-button";
import { useRouter } from "next/navigation";

const LoginFrom = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const router = useRouter();
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<LoginInputProps>();

   async function onSubmit(data: LoginInputProps) {
      try {
         setIsLoading(true);
         console.log("Attempting to sign in with credentials:", data);
         const loginData = await signIn("credentials", {
            ...data,
            redirect: false,
         });
         console.log("SignIn response:", loginData);
         if (loginData?.error) {
            setIsLoading(false);
            toast.error("Sign-in error: Check your credentials");
         } else {
            // Sign-in was successful
            reset();
            setIsLoading(false);
            toast.success("Login Successful");
            router.push("/dashboard");
         }

         // const promise = new Promise(async (resolve, reject) => {
         //    const loginData = await signIn("credentials", {
         //       ...data,
         //       redirect: false,
         //    })
         //       .then((data) => resolve(data))
         //       .catch((error) => reject(error));
         //    console.log(loginData);
         // });
         // toast.promise(promise, {
         //    loading: "Loading...",
         //    success: (data: any) => {
         //       reset();
         //       setIsLoading(false);
         //       return data.message;
         //    },
         //    error: (error) => {
         //       reset();
         //       setIsLoading(false);
         //       return error.message;
         //    },
         // });
      } catch (error) {
         setIsLoading(false);
         console.error("Network Error:", error);
         toast.error("Its seems something is wrong with your Network");
      }
   }

   return (
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
               Sign in to your account
            </h2>
         </div>

         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
