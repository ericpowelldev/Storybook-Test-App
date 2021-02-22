import React from "react";
import Button from "./index";

//////////////////////// EXPORT COMPONENT ////////////////////////
export default {
  title: `Button`,
  component: Button,
  argTypes: {
    color: {
      control: {
        type: `inline-radio`,
        options: [`default`, `primary`, `secondary`],
      },
    },
    variant: {
      control: {
        type: `inline-radio`,
        options: [`text`, `outlined`, `contained`],
      },
    },
    size: {
      control: {
        type: `inline-radio`,
        options: [`small`, `medium`, `large`],
      },
    },
    disabled: {
      control: {
        type: `boolean`,
      }
    },
  },
};

//////////////////////// EXPORT TYPES ////////////////////////
export const Default = (args) => <Button {...args}>My Button</Button>;
