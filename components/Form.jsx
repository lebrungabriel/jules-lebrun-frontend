import React from "react";
import { Input } from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const Form = () => {
  return (
    <FormControl
      width="80%"
      className="h-[80%] flex flex-col justify-around md:items-center"
    >
      <div className="md:w-[80%] lg:w-[50%]">
        <FormLabel>Adresse mail</FormLabel>
        <Input type="email" />
      </div>
      <div className="md:w-[80%] lg:w-[50%]">
        <FormLabel>Mot de passe</FormLabel>
        <Input type="password" />
      </div>

      {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      <button className="bg-gradient-to-r text-white shadow-md from-sky-500 to-sky-600 py-4 rounded-md md:w-[80%] lg:w-[50%]">
        Se connecter
      </button>
    </FormControl>
  );
};
export default Form;
