import React from "react";
import Input from "./index";

//////////////////////// EXPORT COMPONENT ////////////////////////
export default {
  title: `Form/Input`,
  component: Input,
  argTypes: {
    fullWidth: {
      control: {
        type: `boolean`,
      },
    },
    required: {
      control: {
        type: `boolean`,
      },
    },
    color: {
      control: {
        type: `inline-radio`,
        options: [`primary`, `secondary`],
      },
    },
    variant: {
      control: {
        type: `inline-radio`,
        options: [`outlined`, `standard`, `filled`],
      },
    },
    size: {
      control: {
        type: `inline-radio`,
        options: [`small`, `normal`],
      },
    },
    label: {
      control: {
        type: `text`,
      },
    },
    placeholder: {
      control: {
        type: `text`,
      },
    },
    value: {
      control: {
        type: `text`,
      },
    },
    helperText: {
      control: {
        type: `text`,
      },
    },
    multiline: {
      control: {
        type: `boolean`,
      },
    },
    rows: {
      control: {
        type: `number`,
      },
    },
    rowsMax: {
      control: {
        type: `number`,
      },
    },
    disabled: {
      control: {
        type: `boolean`,
      },
    },
  },
};

//////////////////////// EXPORT TYPES ////////////////////////
export const Default = (args) => <Input {...args} />;
