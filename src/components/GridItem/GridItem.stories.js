import React from "react";

import { GridItem } from "./index";

const props = {
  title: "Components/GridItem",
  component: GridItem,
};

export default props;

const Template = (args) => <GridItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  link: "/new-in",
  text: "joggers from £24",
  width: 240,
  height: 240,
  alt: "grid item alt",
  src: "https://media.missguided.com/i/missguided/playboy_storybook_default",
  backgroundColor: "#FFA5B8",
};
