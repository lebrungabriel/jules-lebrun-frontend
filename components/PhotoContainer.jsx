import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { BsFillTrashFill, BsCloudUpload } from "react-icons/bs";
import { Progress } from "@chakra-ui/react";

const PhotoContainer = () => {
  const [imageUpload, setImageUpload] = useState("");
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const uploadImageHandler = () => {
    setIsLoading(true);
    const formData = new FormData();

    formData.append("photoFromFront", imageUpload);

    fetch("https://jules-lebrun-backend.vercel.app/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setImageData([...imageData, data.image]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetch("https://jules-lebrun-backend.vercel.app/images")
      .then((response) => response.json())
      .then((data) => setImageData(data.images));
  }, []);

  const deleteImageHandler = (image) => {
    const imageId = image._id;
    fetch(`https://jules-lebrun-backend.vercel.app/delete/${imageId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setImageData((prevImageData) =>
          prevImageData.filter((img) => img._id !== imageId)
        );
      });
  };

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
        {imageData.map((image, i) => (
          <div key={i} className="h-[500px] relative">
            <BsCloudUpload className="text-2xl text-white absolute left-3 top-5" />
            <BsFillTrashFill
              className="text-2xl text-white absolute right-3 top-5"
              onClick={() => deleteImageHandler(image)}
            />
            <img
              src={image.url}
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="h-[100%]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoContainer;
