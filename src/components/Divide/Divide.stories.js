import React from 'react';
import Divide from './index';

//////////////////////// EXPORT COMPONENT ////////////////////////
export default {
  title: `Divide`,
  component: Divide,
  argTypes: {
    color: {
      control: {
        type: `inline-radio`,
        options: [`default`, `light`, `dark`, `white`],
      },
    },
    children: {
      control: {
        type: `text`,
      },
    },
    tip: {
      control: {
        type: `text`,
      },
    },
    actions: {
      control: {
        type: `array`,
      },
    },
    spacer: {
      control: {
        type: `boolean`,
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
    marginBottom: {
      control: {
        type: `range`,
        min: 0,
        max: 80,
        step: 1,
      },
    },
  },
};

//////////////////////// EXPORT TYPES ////////////////////////
export const Default = args => <Divide {...args}>{args.children}</Divide>;
