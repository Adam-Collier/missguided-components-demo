import React from "react";
import "./Image.scss";

export const Image = ({
  width = 480,
  height = 480,
  alt = "image alt",
  src,
  quality = 80,
  backgroundColor = "grey",
}) => {
  let imageSizes = [0.25, 0.5, 1, 1.5, 2, 3];

  let srcset = imageSizes
    .map((size) => {
      let imageWidth = width * size;
      return `${src}?w=${imageWidth}&qlt=${quality} ${imageWidth}w`;
    })
    .join(",");

  let styles = {
    paddingTop: `${(height / width) * 100}%`,
    backgroundColor,
  };

  return (
    <div className="image-wrapper" style={styles}>
      <img
        srcSet={srcset}
        alt={alt}
        sizes="(max-width: 600px) 100vw, (min-width: 1280px) 640px, 50vw"
      />
    </div>
  );
};
