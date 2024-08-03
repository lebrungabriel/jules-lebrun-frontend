import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const ClipSection = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-y-8 place-items-center">
      <YoutubeEmbed embedId="9j4lM60yNOM" />
      <YoutubeEmbed embedId="RkpBVk1kzyA" />
      <YoutubeEmbed embedId="3uILi_CpyM4" />
      <YoutubeEmbed embedId="raa6D6X2-oc" />
      <YoutubeEmbed embedId="ImLbCHTEcOc" />
      <YoutubeEmbed embedId="sHtuaqzTbnU" />
    </section>
  );
};

export default ClipSection;
