import React from "react";

import { GridItems } from "./index";

export default {
  title: "Patterns/GridItems",
  component: GridItems,
  argTypes: {},
};

const Template = (args) => <GridItems {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  imageHeight: 340,
  imageWidth: 340,
  imageSizesAtt: "(max-width: 600px) 100vw, 20vw",
  gridGap: "1rem",
  minWidth: 300,
  items: [
    {
      alt: "grid item alt",
      link: "/new-in",
      src:
        "https://media.missguided.com/i/missguided/playboy_storybook_default",
      text: "shirts from £24",
    },
    {
      alt: "grid item alt",
      link: "/clothing/joggers",
      src:
        "https://media.missguided.com/i/missguided/playboy_storybook_default_2",
      text: "jumpers from £12",
    },
    {
      alt: "grid item alt",
      link: "/clothing/coats-jackets",
      src:
        "https://media.missguided.com/i/missguided/playboy_storybook_default_3",
      text: "caps from £18",
    },
  ],
};
