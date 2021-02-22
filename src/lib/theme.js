import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: `#f44232`,
      light: `#ff8876`,
      dark: `#c83212`,
      contrastText: `#ffffff`,
    },
    secondary: {
      main: `#509090`,
      light: `#88b4b4`,
      dark: `#406464`,
      contrastText: `#ffffff`,
    },
    tertiary: {
      main: `#2b3d59`,
      light: `#5072a0`,
      dark: `#102030`,
      contrastText: `#ffffff`,
    },
    quaternary: {
      main: `#ffc050`,
      light: `#ffda99`,
      dark: `#e8a020`,
      contrastText: `#ffffff`,
    },
    info: {
      main: `#2496ff`,
      contrastText: `#ffffff`,
    },
    success: {
      main: `#20c820`,
      contrastText: `#ffffff`,
    },
    warning: {
      main: `#ffa040`,
      contrastText: `#ffffff`,
    },
    error: {
      main: `#ff2040`,
      contrastText: `#ffffff`,
    },

    text: {
      primary: `#323232`,
      secondary: `#323232a0`,
      tertiary: `#32323280`,
      disabled: `#32323280`,
      hint: `#32323280`,
      contrast: `#ffffff`,
    },

    divider: `#32323220`,
    lightDivider: `#32323212`,
    darkDivider: `#32323228`,

    background: {
      default: `#ffffff`,
      light: `#fafafa`,
      main: `#f6f6f6`,
      dark: `#f2f2f2`,
    },
  },

  spacing: 4,

  shape: {
    borderRadius: 6,
  },

  breakpoints: {
    keys: {
      ["0"]: `min`,
      ["1"]: `xs`,
      ["2"]: `sm`,
      ["3"]: `md`,
      ["4"]: `lg`,
      ["5"]: `xl`,
      ["6"]: `max`,
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
