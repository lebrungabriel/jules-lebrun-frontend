import React from "react";
import Image from "next/image";
import antoine01 from "../images/antoine01.jpg";

const DUMMY_COVER_NAME = ["Keroue", "Neyt", "Dale", "Assaf"];
const DUMMY_COVER_EP = ["KER", "2020", "Préface", "Asf"];

const CoverSection = () => {
  return (
    <section className="w-screen gap-x-2 gap-y-10 p-2 py-10 grid grid-cols-1 place-items-center items-center lg:grid-cols-2">
      <div>
        <Image
          src={antoine01}
          alt="cover-image"
          width="400px"
          height="400px"
          objectFit="cover"
        />
        <div className="flex justify-evenly py-4">
          <h3>Assaf</h3>
          <h4>EP 2020</h4>
          <h5>10/03/1994</h5>
        </div>
      </div>
      <div>
        <Image
          src={antoine01}
          alt="cover-image"
          width="400px"
          height="400px"
          objectFit="cover"
        />
        <div className="flex justify-evenly py-4">
          <h3>Assaf</h3>
          <h4>EP 2020</h4>
          <h5>10/03/1994</h5>
        </div>
      </div>
    </section>
  );
};

export default CoverSection;
