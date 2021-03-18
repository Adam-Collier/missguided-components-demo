import React from "react";
import { Image } from "../Image";
import "./GridItem.scss";

export const GridItem = (Props) => {
  const { text, link } = Props;

  return (
    <a href={link} className="grid-item">
      <Image {...Props} />
      <p>{text}</p>
    </a>
  );
};
