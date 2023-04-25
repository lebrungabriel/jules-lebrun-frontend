import React from "react";
import Image from "next/image";

const DUMMY_COVER_NAME = ["Keroue", "Neyt", "Dale", "Assaf"];
const DUMMY_COVER_EP = ["KER", "2020", "Préface", "Asf"];

const CoverSection = () => {
  return (
    <section className="container mx-auto gap-x-2 gap-y-10 p-2 py-10 grid grid-cols-1 place-items-center items-center lg:grid-cols-2">
      <div>
        <Image
          src="/assets/lomepal-cover.jpg"
          alt="lomepal-cover"
          width="300px"
          height="300px"
          objectFit="cover"
        />
        <div className="flex justify-evenly py-2">
          <p>
            Lomepal - <span className="italic">Auburn/Tee (live) (Vinyle)</span>
          </p>
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
        <div className="flex justify-evenly py-2">
          <p>
            Assaf - <span className="italic">2020</span>
          </p>
        </div>
      </div>
      <div>
        <Image
          src="/assets/neyt-still.jpeg"
          alt="cover-image"
          width="300px"
          height="300px"
          objectFit="cover"
        />
        <div className="flex justify-evenly py-2">
          <p>
            Neyt - <span className="italic">Still</span>
          </p>
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
        <div className="flex justify-evenly py-2">
          <p>
            Dalé - <span className="italic">Préface</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoverSection;
