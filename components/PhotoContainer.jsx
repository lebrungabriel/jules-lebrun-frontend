import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Image } from "@chakra-ui/react";
import { BsFillTrashFill } from "react-icons/bs";

import { Progress, Spinner } from "@chakra-ui/react";

const PhotoContainer = () => {
  const [imageUpload, setImageUpload] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [displayImages, setDisplayImages] = useState([]);

  const tokenSelector = useSelector((state) => state.user.value);

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
        uploadUrlOnDB(data);
        setIsLoading(false);
      });
  };

  const uploadUrlOnDB = (image) => {
    fetch("https://jules-lebrun-backend.vercel.app/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: image.url, public_id: image.public_id }),
    })
      .then((response) => response.json())
      .then((data) => setDisplayImages([...displayImages, data.image]));
  };

  useEffect(() => {
    fetch("https://jules-lebrun-backend.vercel.app/images")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(true);
        setDisplayImages(data.images);
        setIsLoading(false);
      });
  }, []);

  const deleteHandler = (image) => {
    fetch(`https://jules-lebrun-backend.vercel.app/delete/${image._id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setDisplayImages([...data.images]);
      });
  };

  return (
    <section className="w-screen flex flex-col items-center">
      {tokenSelector.token && (
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
      )}

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
        {displayImages.map((image, i) => (
          <div key={i} className="w-[85%] sm:w-[40%] lg:w-[25%] relative">
            {isLoading ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            ) : (
              <Image
                className="w-[100%] object-cover"
                src={image.url}
                alt="coco"
              />
            )}

            {tokenSelector.token && (
              <div
                className="bg-slate-100 flex  justify-center items-center rounded-full absolute top-6 right-4 w-[50px] h-[50px]"
                onClick={() => deleteHandler(image)}
              >
                <BsFillTrashFill className="text-black text-xl" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoContainer;
