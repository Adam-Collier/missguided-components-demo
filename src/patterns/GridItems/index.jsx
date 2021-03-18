import React from "react";
import { GridItem } from "../../components/GridItem";
import "./GridItems.scss";

export const GridItems = ({
  items,
  gridGap = "1rem",
  minWidth = 300,
  imageHeight,
  imageWidth,
}) => {
  let styles = {
    gridGap,
    gridTemplateColumns: `repeat(auto-fill, minmax(min(${minWidth}px, 100%), 1fr))`,
  };

  return (
    <div className="grid-items" style={styles}>
      {items.map((item) => {
        let itemWithDimensions = {
          ...item,
          height: imageHeight,
          width: imageWidth,
        };

        return <GridItem {...itemWithDimensions} />;
      })}
    </div>
  );
};
