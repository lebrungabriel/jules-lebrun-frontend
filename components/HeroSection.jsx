import React from "react";
import { Image } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <section className="container mx-auto flex justify-center ">
      <div className="grid grid-cols-8 grid-rows-4 gap-2 px-2 sm:px-0">
        <div className="h-[100%] sm:h-[100%] lg:h-[100%] 2xl:h-[100%] relative col-span-3 row-span-2">
          <Image
            src="assets/lomepal.jpg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[100%] sm:h-[100%] lg:h-[100%] 2xl:h-[100%] relative col-span-5 row-span-1">
          <Image
            src="assets/maria03.jpg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[100%] sm:h-[100%] lg:h-[100%] 2xl:h-[100%] relative col-span-5 row-span-1">
          <Image
            src="assets/elio.jpg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[100%] sm:h-[100%] lg:h-[100%] 2xl:h-[100%] relative col-span-4 row-span-2">
          <Image
            src="assets/anthony01.jpg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[100%] sm:h-[100%] lg:h-[100%] 2xl:h-[100%] relative col-span-4 row-span-2">
          <Image
            src="assets/street.jpg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[200px] sm:h-[100%] lg:h-[100%] 2xl:h-[100%] relative col-span-8 row-span-2">
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
