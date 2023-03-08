import React from "react";
import { Image } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <section className="w-screen flex justify-center ">
      <div className="grid grid-cols-7 gap-2 2xl:w-9/12 p-2 ">
        <div className="h-[200px] sm:h-[500px] lg:h-[500px] 2xl:h-[700px] relative col-span-2">
          <Image
            src="assets/elio.jpg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[200px] sm:h-[500px] lg:h-[500px] 2xl:h-[700px] relative col-span-2">
          <Image
            src="assets/maria03.jpg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[200px] sm:h-[500px] lg:h-[500px] 2xl:h-[700px] relative col-span-3">
          <Image
            src="assets/lomepal.jpg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[200px] sm:h-[500px] lg:h-[500px] 2xl:h-[700px] relative col-span-2">
          <Image
            src="assets/anthony01.jpg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[200px] sm:h-[500px] lg:h-[500px] 2xl:h-[700px] relative col-span-3">
          <Image
            src="assets/neyt.jpg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[200px] sm:h-[500px] lg:h-[500px] 2xl:h-[700px] relative col-span-2">
          <Image
            src="assets/street.jpg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[200px] sm:h-[500px] lg:h-[500px] 2xl:h-[700px] relative col-span-5">
          <Image
            src="assets/maria01.jpg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[200px] sm:h-[500px] lg:h-[500px] 2xl:h-[700px] relative col-span-2">
          <Image
            src="assets/anthony02.jpeg"
            alt="s"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
