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
  imageHeight: 240,
  imageWidth: 240,
  gridGap: "1rem",
  minWidth: 300,
  items: [
    {
      alt: "grid item alt",
      backgroundColor: "#FFA5B8",
      link: "/new-in",
      src:
        "https://media.missguided.com/i/missguided/playboy_storybook_default",
      text: "shirts from £24",
    },
    {
      alt: "grid item alt",
      backgroundColor: "#FFA5B8",
      link: "/clothig/joggers",
      src:
        "https://media.missguided.com/i/missguided/playboy_storybook_default_2",
      text: "jumpers from £12",
    },
    {
      alt: "grid item alt",
      backgroundColor: "#FFA5B8",
      link: "/clothing/coats-jackets",
      src:
        "https://media.missguided.com/i/missguided/playboy_storybook_default_3",
      text: "caps from £18",
    },
  ],
};
