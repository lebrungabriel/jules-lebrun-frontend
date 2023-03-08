import React from "react";
import Image from "next/image";

const DUMMY_COVER_NAME = ["Keroue", "Neyt", "Dale", "Assaf"];
const DUMMY_COVER_EP = ["KER", "2020", "Préface", "Asf"];

const CoverSection = () => {
  return (
    <section className="w-screen gap-x-2 gap-y-10 p-2 py-10 grid grid-cols-1 place-items-center items-center lg:grid-cols-2">
      <div>
        <Image
          src="/assets/neyt-still.jpeg"
          alt="cover-image"
          width="300px"
          height="300px"
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
          src="/assets/neyt-lone.jpg"
          alt="cover-image"
          width="300px"
          height="300px"
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
          src="/assets/dalé.jpg"
          alt="cover-image"
          width="300px"
          height="300px"
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
          src="/assets/assaf.jpg"
          alt="cover-image"
          width="300px"
          height="300px"
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
