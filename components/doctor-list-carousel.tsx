"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BaggageClaim } from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DoctorCard from "./doctor-card";

const DoctorListCarousel = ({
   doctors,
   isInPerson,
}: {
   doctors: any[];
   isInPerson?: boolean;
}) => {
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1280 },
         items: 4,
         slidesToSlide: 3, // optional, default to 1.
      },
      tablet: {
         breakpoint: { max: 1280, min: 464 },
         items: 3,
         slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 2,
         slidesToSlide: 1, // optional, default to 1.
      },
   };

   return (
      <Carousel
         swipeable={false}
         draggable={false}
         showDots={true}
         responsive={responsive}
         ssr={true} // means to render carousel on server-side.
         infinite={true}
         autoPlay={true}
         autoPlaySpeed={5000}
         keyBoardControl={true}
         customTransition="all .5"
         transitionDuration={1000}
         containerClass="carousel-container -mx-3"
         removeArrowOnDeviceType={["tablet", "mobile"]}
         // deviceType={}
         dotListClass="custom-dot-list-style"
         itemClass="px-3"
      >
         {doctors.map((doctor, i) => {
            return <DoctorCard isInPerson={isInPerson} key={i} />;
         })}
      </Carousel>
   );
};

export default DoctorListCarousel;
