import React from "react";
import Image from "next/image";
import maria from "../public/assets/maria-screenshot.jpg";
import lomepal from "../public/assets/lomepal.jpg";
import elio from "../public/assets/elio-screenshot.jpg";
import chair from "../public/assets/chair.jpg";
import manif from "../public/assets/manif02.jpg";
import yassine from "../public/assets/yassine01.jpg";

const HeroSection = () => {
  return (
    <section className="container mx-auto w-screen h-screen flex justify-center ">
      <div className="grid grid-cols-8 grid-rows-6 gap-2 w-full h-full lg:w-10/12 px-2 sm:px-0">
        <div className="relative col-span-8 row-start-1 row-end-3 lg:col-span-4 lg:col-start-4 lg:col-end-9">
          <Image
            src={maria}
            alt="maria"
            layout="fill"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative col-span-4 row-start-3 row-end-5 lg:col-start-1 lg:col-end-4 lg:row-start-1">
          <Image
            src={lomepal}
            alt="lomepal"
            layout="fill"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative col-span-4 row-start-3 row-end-4 lg:col-span-4 lg:col-start-4 lg:col-end-9 lg:row-start-3 lg:row-end-5">
          <Image
            src={elio}
            alt="huero"
            layout="fill"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative col-span-4 row-start-4 row-end-5 lg:col-start-5 lg:col-end-9 lg:row-start-5 lg:row-end-7">
          <Image
            src={chair}
            alt="chair"
            layout="fill"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative col-span-5 row-start-5 row-end-7 lg:col-start-1 lg:col-end-5">
          <Image
            src={manif}
            alt="manif"
            layout="fill"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative col-span-3 row-start-5 row-end-7 lg:hidden">
          <Image
            src={yassine}
            alt="yassine"
            layout="fill"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
