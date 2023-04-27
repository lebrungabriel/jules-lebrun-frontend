import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Spinner } from "@chakra-ui/react";
import { BsFillTrashFill, BsChevronUp } from "react-icons/bs";

const PhotoContainer = () => {
  const [imageUpload, setImageUpload] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [displayImages, setDisplayImages] = useState([]);

  const tokenSelector = useSelector((state) => state.user.value);

  const isBrowser = () => typeof window !== "undefined";

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    setIsLoading(true);
    fetch("https://jules-lebrun-backend.vercel.app/images")
      .then((response) => response.json())
      .then((data) => {
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
    <section className="container mx-auto flex flex-col items-center">
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

      <div className="flex flex-col-reverse items-center gap-8 w-full py-20">
        {isLoading ? (
          <Spinner size="xl" />
        ) : (
          displayImages.map((image, i) => (
            <div
              key={i}
              className="w-[80%] h-[480px] sm:w-[40%] lg:w-[300px] relative"
            >
              <Image
                className="w-full h-full object-contain"
                src={image.url}
                alt="photo"
                layout="fill"
              />

              {tokenSelector.token && (
                <div
                  className="bg-slate-100 flex  justify-center items-center rounded-full absolute top-6 right-4 w-[30px] h-[30px]"
                  onClick={() => deleteHandler(image)}
                >
                  <BsFillTrashFill className="text-black text-md cursor-pointer" />
                </div>
              )}
            </div>
          ))
        )}
      </div>
      <div
        className="fixed bottom-3 right-3 h-[40px] w-[40px] rounded-full cursor-pointer flex items-center justify-center bg-black"
        onClick={scrollToTop}
      >
        <BsChevronUp className="text-white text-lg" />
      </div>
    </section>
  );
};

export default PhotoContainer;
