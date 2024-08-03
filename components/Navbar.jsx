import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import ChakraDrawer from "./ChakraDrawer";
import { removeTokenToStore } from "../reducers/user";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const tokenSelector = useSelector((state) => state.user.value);
  console.log(tokenSelector.token);

  const logoutHandler = () => {
    dispatch(removeTokenToStore());
    router.push("/");
  };

  return (
    <section className="container mx-auto flex flex-col justify-evenly relative items-center h-[180px] lg:h-[230px]">
      <Link href="/">
        <div className="w-full flex flex-col items-center justify-center h-[50%} cursor-pointer">
          <h1 className="text-center text-2xl md:text-4xl font-custom tracking-widest">
            Jules Lebrun
          </h1>
          <h4 className="tracking-wider">Réalisateur - Photographe</h4>
        </div>
      </Link>
      {tokenSelector.token && (
        <FiLogOut
          className="absolute top-8 right-8 text-2xl"
          onClick={() => logoutHandler()}
        />
      )}

      <ChakraDrawer />

      <div className="hidden md:flex md:justify-evenly w-full font-custom">
        <div className="h-[40px] w-[150px] lg:flex lg:justify-center lg:items-center hover-underline-animation cursor-pointer">
          <a
            href="/photo"
            className="tracking-widest md:text-lg lg:text-xl xl:text-xl"
          >
            Photos
          </a>
        </div>

        <div className="h-[40px] w-[150px] lg:flex lg:justify-center lg:items-center hover-underline-animation cursor-pointer">
          <a
            href="/clips"
            className="tracking-widest md:text-lg lg:text-xl xl:text-xl"
          >
            Clips
          </a>
        </div>

        <div className="h-[40px] w-[150px] lg:flex lg:justify-center lg:items-center hover-underline-animation cursor-pointer">
          <a
            href="/cover"
            className="tracking-widest md:text-lg lg:text-xl xl:text-xl"
          >
            Cover
          </a>
        </div>

        <div className="h-[40px] w-[150px] lg:flex lg:justify-center lg:items-center hover-underline-animation cursor-pointer">
          <a
            href="/films"
            className="tracking-widest md:text-lg lg:text-xl xl:text-xl"
          >
            Films
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
