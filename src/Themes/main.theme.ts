import { createTheme } from "@mui/material";

export const MainTheme = createTheme({
  palette: {
    primary: {
      main: "#00579d"
    },
    background: {
      default: "#f6fff8",
      //colocar esa cor somenrte para os cards principais
      // paper: "#DDDDDD",
    }
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          minHeight: "7vh"
        }
      }
    }
  }
})