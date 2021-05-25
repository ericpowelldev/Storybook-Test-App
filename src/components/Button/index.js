import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

//////////////////////// COMPONENT ////////////////////////
function Btn({ children, ...rest }) {
  const cls = useStyles();

  return (
    <Button className={cls.button} {...rest}>
      {children}
    </Button>
  );
}

Btn.defaultProps = {
  children: `Button`,
  color: `default`,
  disabled: false,
  fullWidth: false,
  size: `medium`,
  variant: `text`,
};

export default Btn;

//////////////////////// STYLES ////////////////////////
const useStyles = makeStyles(theme => ({
  button: {
    boxShadow: `none`,
    '&:hover': {
      boxShadow: `none`,
    },
    '&:active': {
      boxShadow: `none`,
    },
  },
}));
