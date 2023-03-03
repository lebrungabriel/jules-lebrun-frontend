import React, { useEffect } from "react";
import { useState } from "react";
import { Image } from "@chakra-ui/react";

import { Progress } from "@chakra-ui/react";

export default function PhotoContainer() {
  const [imageUpload, setImageUpload] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [displayImages, setDisplayImages] = useState([]);

  const uploadImageHandler = () => {
    const data = new FormData();
    data.append("file", imageUpload);
    data.append("upload_preset", "juleslebrunsite");
    data.append("cloud_name", "dgzq3bicw");

    setIsLoading(true);

    fetch("https://api.cloudinary.com/v1_1/dgzq3bicw/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setDisplayImages((prevImages) => [...prevImages, data.url]);
        uploadUrlOnDB(data.url);
        setIsLoading(false);
      });
  };

  const uploadUrlOnDB = (url) => {
    fetch("http://localhost:3000/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    }).then((response) => response.json());
  };

  useEffect(() => {
    fetch("http://localhost:3000/images")
      .then((response) => response.json())
      .then((data) => {
        const urls = data.images.map((image) => image.url);
        setDisplayImages(urls);
      });
  }, []);

  return (
    <section className="w-screen flex flex-col items-center">
      <div className="flex flex-col items-center h-[200px] w-[90%] shadow-xl justify-evenly">
        <input
          type="file"
          onChange={(e) => setImageUpload(e.target.files[0])}
          className="pl-10"
        />
        <button
          className="border border-black py-2 px-10 rounded-2xl"
          onClick={() => uploadImageHandler()}
        >
          Publier
        </button>
      </div>

      {isLoading && (
        <div className="w-[90%]">
          <Progress
            value={100}
            hasStripe
            colorScheme="blue"
            isIndeterminate
            height="2px"
          />
        </div>
      )}

      <div className="flex flex-col-reverse items-center gap-8 w-full py-20">
        {displayImages.map((data, i) => (
          <Image
            className="w-[80%] object-cover"
            src={data}
            key={i}
            alt="coco"
          />
        ))}
      </div>
    </section>
  );
}
