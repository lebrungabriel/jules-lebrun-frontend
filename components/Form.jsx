import React from "react";

const Form = () => {
  return (
    <div
      width="80%"
      className="h-[400px] w-[50%] flex flex-col items-center justify-evenly shadow-lg"
    >
      <div className="flex flex-col md:w-[80%] lg:w-[50%]">
        <label>Adresse mail</label>
        <input type="email" className="border-b-[1px]" />
      </div>
      <div className="flex flex-col md:w-[80%] lg:w-[50%]">
        <label>Mot de passe</label>
        <input type="password" className="border-b-[1px]" />
      </div>

      {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      <button className="bg-gradient-to-r text-white shadow-md from-sky-500 to-sky-600 py-4 rounded-md md:w-[80%] lg:w-[50%]">
        Se connecter
      </button>
    </div>
  );
};
export default Form;
