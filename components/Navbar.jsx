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
    <>
      <nav className="flex flex-col justify-evenly relative items-center h-[40vh] lg:h-[300px] xl:h-[400px] w-screen">
        <Link href="/">
          <div className="w-full flex flex-col items-center justify-center h-[50%} cursor-pointer">
            <h1 className="text-center text-2xl md:text-4xl">Jules Lebrun</h1>
            <h4>Réalisateur - Photographe</h4>
          </div>
        </Link>
        {tokenSelector.token && (
          <FiLogOut
            className="absolute top-8 right-8 text-2xl"
            onClick={() => logoutHandler()}
          />
        )}

        <ChakraDrawer />

        <div className="hidden md:flex md:justify-evenly w-full">
          <div className="h-[40px] w-[150px] flex justify-center hover-underline-animation">
            <a href="/photo" className="md:text-lg lg:text-xl xl:text-xl">
              Photos
            </a>
          </div>

          <div className="h-[40px] w-[150px] flex justify-center hover-underline-animation">
            <a href="/clips" className="md:text-lg lg:text-xl xl:text-xl">
              Clips
            </a>
          </div>

          <div className="h-[40px] w-[150px] flex justify-center hover-underline-animation">
            <a href="/cover" className="md:text-lg lg:text-xl xl:text-xl">
              Cover
            </a>
          </div>

          <div className="h-[40px] w-[150px] flex justify-center hover-underline-animation">
            <a href="/films" className="md:text-lg lg:text-xl xl:text-xl">
              Films
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
