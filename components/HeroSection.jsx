import React from "react";
// import Image from "next/image";
import { Image } from "@chakra-ui/react";
// import antoine02 from "assets/antoine02.jpg";
// import antoine03 from "assets/antoine03.jpg";
// import sarah01 from "assets/sarah01.jpg";
// import antoine04 from "assets/antoine04.jpg";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-5 gap-2 w-full p-2">
      <div className="h-[300px] sm:h-[500px] relative col-span-3">
        <Image
          src="assets/yassine01.jpg"
          alt="s"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-[300px] sm:h-[500px] relative col-span-2">
        <Image
          src="assets/anthony01.jpg"
          alt="s"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-[300px] sm:h-[500px] relative col-span-2">
        <Image
          src="assets/sarah01.jpg"
          alt="s"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-[300px] sm:h-[500px] relative col-span-3">
        <Image
          src="assets/antoine03.jpg"
          alt="s"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-[300px] sm:h-[500px] relative col-span-5">
        <Image
          src="assets/antoine02.jpg"
          alt="s"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
