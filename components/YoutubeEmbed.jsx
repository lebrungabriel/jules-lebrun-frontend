import React from "react";

const YoutubeEmbed = ({ embedId }) => (
  <div className="w-[100%] h-[250px] p-2 sm:h-[300px] sm:w-[70%] lg:w-[70%] lg:h-[400px] xl:w-[60%]">
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
