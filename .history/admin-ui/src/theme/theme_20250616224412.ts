import { defaultTheme } from "react-admin";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { merge } from "lodash";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#20a4f3",
    },
    secondary: {
      main: "#7950ed",
    },
    error: {
      main: "#e93c51",
    },
    warning: {
      main: "#f6aa50",
    },
    info: {
      main: "#144bc1",
    },
    success: {
      main: "#31c587",
    },
  },
};

export const theme = createTheme(merge({}, defaultTheme, themeOptions));
