import { createTheme } from "@mui/material/styles";

import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: "#262254",
    },
    secondary: {
      main: "#543884",
    },
    error: {
      main: red.A400,
    },
  },
  //   breakpoints: {
  //     values: {
  //       mobile: 0,
  //       tablet: 640,
  //       laptop: 1024,
  //       desktop: 1280,
  //     },
  //   },
});
