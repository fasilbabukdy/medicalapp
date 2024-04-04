"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { createUser } from "@/actions/users";
import SubmitButton from "@/components/form-inputs/submit-button";
import TextInput from "@/components/form-inputs/text-input";
import { RegisterInputProps } from "@/types";
import { UserRole } from "@prisma/client";
import { useState } from "react";

const RegisterFrom = ({ role = "USER" }: { role?: UserRole }) => {
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<RegisterInputProps>();

   const handleSubmtForm = async (data: RegisterInputProps) => {
      setIsLoading(true);
      data.role = role;
      try {
         const promise = new Promise(async (resolve, reject) => {
            await createUser(data)
               .then(async (response) => response)
               .then((data) => resolve(data))
               .catch((error) => reject(error));
         });

         toast.promise(promise, {
            loading: "Loading...",
            success: (data: any) => {
               reset();
               setIsLoading(false);
               return data.message;
            },
            error: (error) => {
               reset();
               setIsLoading(false);
               return error.message;
            },
         });
      } catch (error) {
         setIsLoading(false);
         toast.error("Its seems something is wrong with your Network");
      }
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
               className="space-y-3"
               onSubmit={handleSubmit(handleSubmtForm)}
            >
               <TextInput
                  register={register}
                  errors={errors}
                  label="Full Name"
                  name="fullName"
                  placeholder="First Name"
               />
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
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
               />

               <TextInput
                  register={register}
                  errors={errors}
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
               />

               <SubmitButton
                  title="Create Account"
                  isLoading={isLoading}
                  loadingTitle="Creating please wait..."
               />
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
               Already have Account?{" "}
               <Link
                  href="/login"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
               >
                  Login
               </Link>
            </p>
         </div>
      </div>
   );
};

export default RegisterFrom;
