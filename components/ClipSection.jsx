import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const ClipSection = () => {
  return (
    <section className="w-full grid grid-cols-1 gap-y-8 place-items-center">
      <YoutubeEmbed embedId="ImLbCHTEcOc" />
      <YoutubeEmbed embedId="raa6D6X2-oc" />
      <YoutubeEmbed embedId="xs4CV02kDF4" />
      <YoutubeEmbed embedId="sHtuaqzTbnU" />
      <YoutubeEmbed embedId="ReKCKdtp1W0" />
      <YoutubeEmbed embedId="qjFQ_i-ehmQ" />
    </section>
  );
};

export default ClipSection;
