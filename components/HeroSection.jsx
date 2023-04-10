import React from "react";
import { Image } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <section className="container mx-auto h-screen bg-red-200 flex justify-center ">
      <div className="grid grid-cols-8 grid-rows-6 gap-2 w-full lg:w-10/12 h-full px-2 sm:px-0">
        <div className="relative col-span-3 row-start-1 row-end-3">
          <Image
            src="assets/lomepal.jpg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative col-span-5 row-start-1 row-end-2 md:col-span-6">
          <Image
            src="assets/maria03.jpg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative col-span-5 row-start-2 row-end-3 md:col-span-6">
          <Image
            src="assets/elio.jpg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative col-span-4 row-start-3 row-end-5 md:col-start-4">
          <Image
            src="assets/anthony01.jpg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative col-span-4 row-start-3 row-end-5">
          <Image
            src="assets/street.jpg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative col-span-8 row-start-5 row-end-7">
          <Image
            src="assets/neyt.jpg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
