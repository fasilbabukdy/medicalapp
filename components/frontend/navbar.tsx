"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import {
   ArrowPathIcon,
   Bars3Icon,
   ChartPieIcon,
   CursorArrowRaysIcon,
   FingerPrintIcon,
   SquaresPlusIcon,
   XMarkIcon,
} from "@heroicons/react/24/outline";
import {
   ChevronDownIcon,
   PhoneIcon,
   PlayCircleIcon,
} from "@heroicons/react/20/solid";

function classNames(...classes: any) {
   return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   return (
      <header className="bg-blue-950 border-b border-blue-400/20 fixed top-0 inset-x-0 w-full z-50">
         <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
            aria-label="Global"
         >
            <div className="flex lg:flex-1">
               <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                     className="h-8 w-auto"
                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                     alt=""
                  />
               </Link>
            </div>
            <div className="flex lg:hidden">
               <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
                  onClick={() => setMobileMenuOpen(true)}
               >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
               </button>
            </div>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
               <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-50"
               >
                  Features
               </a>
               <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-50"
               >
                  Marketplace
               </a>
               <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-50"
               >
                  Company
               </a>
            </Popover.Group>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
               <Link
                  href="/login"
                  className="text-sm font-semibold leading-6 text-gray-50 bg-blue-500 py-2 rounded-md px-6"
               >
                  Log in <span aria-hidden="true">&rarr;</span>
               </Link>
            </div>
         </nav>
         <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
         >
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
               <div className="flex items-center justify-between">
                  <Link href="/" className="-m-1.5 p-1.5">
                     <span className="sr-only">Your Company</span>
                     <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                     />
                  </Link>
                  <button
                     type="button"
                     className="-m-2.5 rounded-md p-2.5 text-gray-50"
                     onClick={() => setMobileMenuOpen(false)}
                  >
                     <span className="sr-only">Close menu</span>
                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
               </div>
               <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-300/20">
                     <div className="space-y-2 py-6">
                        <a
                           href="#"
                           className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50"
                        >
                           Features
                        </a>
                        <a
                           href="#"
                           className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50"
                        >
                           Marketplace
                        </a>
                        <a
                           href="#"
                           className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50"
                        >
                           Company
                        </a>
                     </div>
                     <div className="py-6">
                        <Link
                           href="/login"
                           className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-50"
                        >
                           Log in
                        </Link>
                     </div>
                  </div>
               </div>
            </Dialog.Panel>
         </Dialog>
      </header>
   );
};

export default Navbar;
