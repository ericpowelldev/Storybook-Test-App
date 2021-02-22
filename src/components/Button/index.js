import React from "react";
import { makeStyles, Button } from "@material-ui/core";

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
  color: `default`,
  variant: `text`,
  size: `medium`,
  disabled: false,
};

export default Btn;

//////////////////////// STYLES ////////////////////////
const useStyles = makeStyles((theme) => ({
  button: {
    boxShadow: `none`,
    "&:hover": {
      boxShadow: `none`,
    },
    "&:active": {
      boxShadow: `none`,
    },
  },
}));
