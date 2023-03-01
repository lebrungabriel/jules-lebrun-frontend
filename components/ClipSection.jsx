import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const ClipSection = () => {
  return (
    <section className="w-full grid grid-cols-1 gap-y-8 place-items-center">
      <YoutubeEmbed embedId="ImLbCHTEcOc" />
      <YoutubeEmbed embedId="ImLbCHTEcOc" />
    </section>
  );
};

export default ClipSection;
