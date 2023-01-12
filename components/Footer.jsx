import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center h-[200px] w-screen">
      <ul className="flex justify-around items-center w-full">
        <li className="flex flex-col items-center justify-center">
          <a href="#">
            <AiFillInstagram className="w-[30px] h-[30px] text-zinc-800 mb-2 hover:text-zinc-600" />
          </a>
          <p>instagram</p>
        </li>
        <li className="hidden md:flex md:flex-col md:items-center md:justify-center">
          <a href="#">
            <MdLocationOn className="w-[30px] h-[30px] text-zinc-800 mb-2 hover:text-zinc-600" />
          </a>
          <p>Paris FR.</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <a href="#">
            <GrMail className="w-[30px] h-[30px] text-zinc-800 mb-2 hover:text-zinc-600" />
          </a>
          <p>jules@gmail.com</p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
