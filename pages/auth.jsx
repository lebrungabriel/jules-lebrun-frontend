import React from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

const Auth = () => {
  return (
    <>
      <Navbar />
      <div className="h-[60vh] flex flex-col justify-center items-center">
        <Form />
      </div>
    </>
  );
};

export default Auth;
