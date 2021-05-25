import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';

//////////////////////// COMPONENT ////////////////////////
function Input({ children, ...rest }) {
  const cls = useStyles();
  return <TextField className={cls.input} {...rest} />;
}

Input.defaultProps = {
  color: `primary`,
  disabled: false,
  fullWidth: true,
  label: null,
  helperText: null,
  placeholder: null,
  required: false,
  rows: null,
  rowsMax: null,
  size: `small`,
  value: ``,
  variant: `outlined`,
};

export default Input;

//////////////////////// STYLES ////////////////////////
const useStyles = makeStyles(theme => ({
  input: {
    // margin: 0,
  },
}));
