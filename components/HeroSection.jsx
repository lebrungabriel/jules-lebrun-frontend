import React from "react";
import Image from "next/image";
import yassine01 from "../images/yassine01.jpg";
import antoine02 from "../images/antoine02.jpg";
import antoine03 from "../images/antoine03.jpg";
import sarah01 from "../images/sarah01.jpg";
import antoine04 from "../images/antoine04.jpg";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-5 gap-2 w-full p-2">
      <div className="h-[300px] sm:h-[500px] relative col-span-3">
        <Image
          src={yassine01}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="h-[300px] sm:h-[500px] relative col-span-2">
        <Image
          src={antoine02}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="h-[300px] sm:h-[500px] relative col-span-2">
        <Image
          src={antoine03}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="h-[300px] sm:h-[500px] relative col-span-3">
        <Image
          src={sarah01}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="h-[300px] sm:h-[500px] relative col-span-5">
        <Image
          src={antoine04}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
