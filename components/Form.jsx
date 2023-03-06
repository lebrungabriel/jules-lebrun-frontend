import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { addTokenToStore } from "../reducers/user";

import { Progress, FormControl, Input, FormLabel } from "@chakra-ui/react";

const Form = () => {
  let router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signinHandler = () => {
    setIsLoading(true);
    fetch("https://jules-lebrun-backend.vercel.app/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(addTokenToStore(data.token));
          router.push("/");
        }
        setIsLoading(false);
      });
  };

  return (
    <>
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
      <div className="h-[400px] w-[90%] flex flex-col items-center justify-evenly shadow-lg">
        <FormControl
          isRequired
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <FormLabel width="85%">Email</FormLabel>
          <Input
            placeholder="Email"
            width="90%"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </FormControl>

        <FormControl
          isRequired
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <FormLabel width="85%">Mot de passe</FormLabel>
          <Input
            type="password"
            placeholder="Mot de passe"
            width="90%"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </FormControl>

        <button
          onClick={() => signinHandler()}
          className="bg-gradient-to-r text-white shadow-md from-sky-500 to-sky-600 py-4 rounded-md w-[80%] lg:w-[50%]"
        >
          Se connecter
        </button>
      </div>
    </>
  );
};
export default Form;
