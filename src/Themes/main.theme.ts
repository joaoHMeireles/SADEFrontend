import { createTheme } from "@mui/material";

export const MainTheme = createTheme({
  palette: {
    primary: {
      dark: "#003c6d",
      main: "#00579d",
      light: "#3378b0",
      contrastText: "white"
    },
    error: {
      dark: "#b22f2f",
      main: "#ff4444",
      light: "#ff6969",
    },
    warning: {
      dark: "#a75b00",
      main: "#EF8300",
      light: "#f29b33",
    },
    background: {
      default: "#f6fff8"
    },
    action: {
      focus: "#00579d"
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

export const ContentTheme = createTheme({
  palette: {
    background: {
      default: "#f6fff8",
      paper: "#EEEEEE",
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
})