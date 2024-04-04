"use client";

import React, { useState } from "react";

import SearchBar from "@/components/frontend/search-bar";
import TransitionText from "@/components/frontend/transition-text";
import { PillIcon } from "lucide-react";

const Hero = () => {
   const TEXTS = [
      "Acupunture",
      "Massage",
      "Chiropractor",
      "Dental",
      "Cosmetic",
      "Dietitian",
      "Speech Therapist",
      "Occupational Therapist",
      "Acupunturist",
   ];

   return (
      <div className="relative bg-blue-950 pb-[110px] pt-[50px] dark:bg-dark lg:pt-[50px]">
         <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="-mx-4 flex flex-wrap">
               <div className="w-full px-4 lg:w-6/12">
                  <div className="hero-content">
                     <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-gray-50 dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl flex flex-wrap items-center gap-x-3">
                        <span>Book your</span>{" "}
                        <TransitionText
                           className="text-blue-500"
                           TEXTS={TEXTS}
                        />{" "}
                        <br />
                        <span>sessions now</span>
                     </h1>
                     <p className="mb-8 max-w-[480px] text-base text-gray-200 dark:text-gray-50-6">
                        Health shouldn't be a puzzle, we are cutting through the
                        B.S to bring you simple, affordable and transparent
                        healthcare.
                     </p>

                     <SearchBar />

                     {/* cta btns */}
                     <ul className="flex flex-wrap items-center">
                        <li>
                           <a
                              href="/#"
                              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-700 lg:px-7"
                           >
                              Need Doctor Urgently
                           </a>
                        </li>
                        <li>
                           <a
                              href="/#"
                              className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-gray-50 hover:text-blue-500 dark:text-white"
                           >
                              <span className="mr-2">
                                 <PillIcon className="flex-shrink-0 size-5 text-blue-600" />
                              </span>
                              Need a refill
                           </a>
                        </li>
                        <li className="flex text-center pt-8 gap-5">
                           <div>
                              <p className="font-semibold text-white">600</p>
                              <p className="text-gray-500">
                                 Active Specialists
                              </p>
                           </div>
                           <div>
                              <p className="font-semibold text-white">1800</p>
                              <p className="text-gray-500">Active Patients</p>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="hidden px-4 lg:block lg:w-1/12"></div>
               <div className="w-full px-4 lg:w-5/12">
                  <div className="lg:ml-auto lg:text-right">
                     <div className="relative z-10 inline-block pt-11 lg:pt-0">
                        <img
                           src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                           alt="hero"
                           className="max-w-full lg:ml-auto"
                        />
                        <span className="absolute -bottom-8 -left-8 z-[-1]">
                           <svg
                              width="93"
                              height="93"
                              viewBox="0 0 93 93"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <circle
                                 cx="2.5"
                                 cy="2.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="2.5"
                                 cy="24.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="2.5"
                                 cy="46.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="2.5"
                                 cy="68.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="2.5"
                                 cy="90.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="24.5"
                                 cy="2.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="24.5"
                                 cy="24.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="24.5"
                                 cy="46.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="24.5"
                                 cy="68.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="24.5"
                                 cy="90.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="46.5"
                                 cy="2.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="46.5"
                                 cy="24.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="46.5"
                                 cy="46.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="46.5"
                                 cy="68.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="46.5"
                                 cy="90.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="68.5"
                                 cy="2.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="68.5"
                                 cy="24.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="68.5"
                                 cy="46.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="68.5"
                                 cy="68.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="68.5"
                                 cy="90.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="90.5"
                                 cy="2.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="90.5"
                                 cy="24.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="90.5"
                                 cy="46.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="90.5"
                                 cy="68.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                              <circle
                                 cx="90.5"
                                 cy="90.5"
                                 r="2.5"
                                 fill="#3056D3"
                              />
                           </svg>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;

const SingleImage = ({ href, imgSrc }: { href: string; imgSrc: string }) => {
   return (
      <>
         <a href={href} className="flex w-full items-center justify-center">
            <img src={imgSrc} alt="brand image" className="h-10 w-full" />
         </a>
      </>
   );
};
