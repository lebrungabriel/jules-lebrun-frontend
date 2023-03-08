import React, { Suspense } from "react";
import Loading from "../components/loading";

import Navbar from "../components/Navbar";
import PhotoContainer from "../components/PhotoContainer";

const Photo = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <PhotoContainer />
      </Suspense>
    </>
  );
};

export default Photo;
