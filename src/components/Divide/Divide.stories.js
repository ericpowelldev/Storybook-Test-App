import React from "react";
import Divide from "./index";

//////////////////////// EXPORT COMPONENT ////////////////////////
export default {
  title: `Divide`,
  component: Divide,
  argTypes: {
    actions: {
      control: {
        type: `array`,
      },
    },
    children: {
      control: {
        type: `text`,
      },
    },
    color: {
      control: {
        type: `inline-radio`,
        options: [`default`, `light`, `dark`, `white`],
      },
    },
    marginBottom: {
      control: {
        type: `range`,
        min: 0,
        max: 80,
        step: 1,
      },
    },
    marginTop: {
      control: {
        type: `range`,
        min: 0,
        max: 80,
        step: 1,
      },
    },
    spacer: {
      control: {
        type: `boolean`,
      },
    },
    tip: {
      control: {
        type: `text`,
      },
    },
  },
};

//////////////////////// EXPORT TYPES ////////////////////////
export const Default = (args) => <Divide {...args}>{args.children}</Divide>;
