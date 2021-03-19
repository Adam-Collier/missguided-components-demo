import React from "react";
import "./Image.scss";

export const Image = ({
  width = 480,
  height = 480,
  alt = "image alt",
  src,
  quality = 80,
  backgroundColor = "#ECECF2",
  sizes = "(max-width: 600px) 100vw, 20vw",
}) => {
  let imageSizes = [0.25, 0.5, 1, 1.5, 2, 3];
  let imageTypes = ["avif", "webp", "jpeg"];

  let createSrcSet = (type) => {
    return imageSizes
      .map((size) => {
        let imageWidth = width * size;
        return `${src}.${type}?w=${imageWidth}&qlt=${quality} ${imageWidth}w`;
      })
      .join(",");
  };

  let styles = {
    paddingTop: `${(height / width) * 100}%`,
    backgroundColor,
  };

  return (
    <div className="image-wrapper" style={styles}>
      <picture>
        {imageTypes.map((type, index) => (
          <source
            key={index}
            type={`image/${type}`}
            srcSet={createSrcSet(type)}
            sizes={sizes}
          />
        ))}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          alt={alt}
          loading="lazy"
        />
      </picture>
    </div>
  );
};
