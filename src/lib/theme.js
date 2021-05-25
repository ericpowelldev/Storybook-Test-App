import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: `#f44232`,
      light: `#f88876`,
      dark: `#e82010`,
      contrastText: `#ffffff`,
    },
    secondary: {
      main: `#486496`,
      light: `#7696c0`,
      dark: `#2b3d59`,
      contrastText: `#ffffff`,
    },
    tertiary: {
      main: `#509090`,
      light: `#88b4b4`,
      dark: `#406464`,
      contrastText: `#ffffff`,
    },
    quaternary: {
      main: `#ffc050`,
      light: `#ffda99`,
      dark: `#e8a020`,
      contrastText: `#ffffff`,
    },

    info: {
      light: `#64b5f6`,
      main: `#2080ff`,
      dark: `#1976d2`,
      contrastText: `#ffffff`,
    },
    error: {
      light: `#ffa0a8`,
      main: `#ff2050`,
      dark: `#d41025`,
      contrastText: `#ffffff`,
    },
    warning: {
      light: `#ffb74d`,
      main: `#ffa040`,
      dark: `#f57c00`,
      contrastText: `#ffffff`,
    },
    success: {
      light: `#81c784`,
      main: `#20c820`,
      dark: `#388e3c`,
      contrastText: `#ffffff`,
    },

    text: {
      primary: `#323232`,
      secondary: `#32323296`,
      disabled: `#32323272`,
      hint: `#32323272`,
      contrast: `#ffffff`,
    },

    fade: [
      `#00000010`,
      `#00000020`,
      `#00000030`,
      `#00000040`,
      `#00000050`,
      `#00000060`,
      `#00000080`,
      `#000000a0`,
      `#000000b4`,
      `#000000c8`,
    ],

    border: `#ddd`,

    background: {
      default: `#ffffff`,
      light: `#fafafa`,
      main: `#f6f6f6`,
      dark: `#f2f2f2`,
    },
  },

  spacing: 4,

  shape: {
    borderRadius: `4px`,
    paperRadius: `8px`,
  },

  shadow: {
    default: `0 0 12px #00000024`,
    soft: `0 0 12px #00000016`,
    harsh: `0 0 12px #00000032`,
  },

  breakpoints: {
    keys: {
      ['0']: `min`,
      ['1']: `xs`,
      ['2']: `sm`,
      ['3']: `md`,
      ['4']: `lg`,
      ['5']: `xl`,
      ['6']: `max`,
    },
    values: {
      min: 0,
      xs: 480,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1600,
      max: 1920,
    },
  },
});
