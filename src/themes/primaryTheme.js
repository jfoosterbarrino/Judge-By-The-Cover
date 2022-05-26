import { createTheme } from "@mui/material/styles";

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#ba8f95',
    },
    secondary: {
      main: '#6b0504',
    },
    background: {
      default: '#fffffa',
      paper: '#ffffff',
    },
    error: {
      main: '#ff0000',
    },
    info: {
      main: '#05204a',
    },
    success: {
      main: '#539987',
    },
    divider: '#000000',
    warning: {
      main: '#3a6ea5',
    },
  },
};

  const theme = createTheme(themeOptions);
  export default theme;