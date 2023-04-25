import React from "react";
import Navbar from "../components/Navbar";
import YoutubeEmbed from "../components/YoutubeEmbed";

const films = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto grid grid-cols-1 gap-y-8 place-items-center">
        <YoutubeEmbed embedId="FWDhcpipLtc" />
        <YoutubeEmbed embedId="jpdBSHabF2w" />
        <YoutubeEmbed embedId="CwdS6XBclXc" />
        <YoutubeEmbed embedId="XR8WAROd3rw" />
      </div>
      <div className="w-screen h-[100px]" />
    </>
  );
};

export default films;
