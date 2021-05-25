import React from 'react';
import { useTheme, makeStyles, Typography, Tooltip, Icon, Menu, MenuItem } from '@material-ui/core';

//////////////////////// COMPONENT ////////////////////////
function Divide(props) {
  const theme = useTheme();
  const cls = useStyles();

  const { color, spacer, marginTop, marginBottom, tip, actions, children } = props;

  const [actionsOpen, setActionsOpen] = React.useState(null);

  if (children && children.length > 0)
    var label = children.replace(/ /g, '\xa0').replace(/-/g, '-\u2060').toUpperCase();

  let lineColor;
  let labelColor;
  if (color === `white`) {
    lineColor = theme.palette.text.contrast;
    labelColor = theme.palette.text.contrast;
  } else if (color === `dark`) {
    lineColor = theme.palette.text.primary;
    labelColor = theme.palette.text.primary;
  } else if (color === `light`) {
    lineColor = theme.palette.text.tertiary;
    labelColor = theme.palette.text.tertiary;
  } else {
    lineColor = theme.palette.text.tertiary;
    labelColor = theme.palette.text.secondary;
  }

  if (actions && actions.length > 0) var filteredActions = actions.filter(a => !a.hide);

  const handleActionsOpen = event => {
    setActionsOpen(event.currentTarget);
  };
  const handleActionsClose = event => {
    setActionsOpen(null);
  };

  const handleAction = action => {
    handleActionsClose();
    if (action.handler) action.handler();
  };

  return (
    <>
      {spacer && <div className={cls.spacer} />}
      <div className={cls.root} style={{ marginTop: marginTop, marginBottom: marginBottom }}>
        {label ? (
          <>
            <div className={cls.hold}>
              <div className={cls.line} style={{ background: lineColor }} />
            </div>
            <Typography className={cls.txt} style={{ color: labelColor }}>
              {label}
            </Typography>
            <div className={cls.hold}>
              <div className={cls.line} style={{ background: lineColor }} />
              {tip ? (
                <>
                  <Tooltip placement='top' title={tip}>
                    <Icon className={cls.tip} style={{ color: labelColor }}>
                      help
                    </Icon>
                  </Tooltip>
                </>
              ) : null}
              {filteredActions && filteredActions.length > 0 ? (
                <>
                  <Tooltip placement='top' title='Actions'>
                    <Icon onClick={handleActionsOpen} className={cls.actions} style={{ color: labelColor }}>
                      settings
                    </Icon>
                  </Tooltip>
                  <Menu
                    keepMounted
                    id={`divide-actions-menu`}
                    anchorEl={actionsOpen}
                    open={Boolean(actionsOpen)}
                    onClose={handleActionsClose}
                  >
                    {filteredActions.map((action, i) => (
                      <MenuItem key={`divide-action-${i}`} onClick={() => handleAction(action)}>
                        {action.label || `Action ${i + 1}`}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : null}
            </div>
          </>
        ) : (
          <div className={cls.flatLine} style={{ background: lineColor }} />
        )}
      </div>
    </>
  );
}

Divide.defaultProps = {
  actions: null,
  color: `default`,
  marginBottom: 4,
  marginTop: 4,
  spacer: false,
  tip: null,
};

export default Divide;

//////////////////////// STYLES ////////////////////////
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    verticalAlign: 'top',
    width: '100%',
  },
  hold: {
    display: 'flex',
    width: '100%',
    height: '1px',
  },
  txt: {
    justifySelf: 'center',
    margin: '2px 12px 0 12px',
    fontSize: 18,
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      margin: '2px 10px 0 10px',
      fontSize: 15,
    },
    [theme.breakpoints.down('xs')]: {
      margin: '2px 8px 0 8px',
      fontSize: 12,
    },
  },
  line: {
    width: '100%',
    height: '1px',
    marginTop: '14px',
    background: theme.palette.text.disabled,
    [theme.breakpoints.down('sm')]: {
      marginTop: '12px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '10px',
    },
  },
  tip: {
    margin: '4px 0 0 10px',
    cursor: `pointer`,
    fontSize: 21,
    [theme.breakpoints.down('sm')]: {
      margin: '2px 0 0 8px',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0 0 0 6px',
    },
  },
  actions: {
    margin: '4px 0 0 10px',
    cursor: `pointer`,
    fontSize: 21,
    [theme.breakpoints.down('sm')]: {
      margin: '2px 0 0 8px',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0 0 0 6px',
    },
  },
  flatLine: {
    width: '100%',
    height: '1px',
    background: theme.palette.text.disabled,
  },
  spacer: {
    width: '100%',
    height: '48px',
    [theme.breakpoints.down('sm')]: {
      height: '36px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '24px',
    },
  },
}));
