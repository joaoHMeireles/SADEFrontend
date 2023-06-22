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
      default: "#f6fff8",
      paper: "#eee",
    },
    action: {
      focus: "#00579d"
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          minHeight: "7vh"
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          ":hover": {
            border: "none"
          }
        }
      }
    }
  }
})

export const PopperMenuTheme = createTheme({
  components: {
    MuiPopper: {
      defaultProps: {
        sx: {
          backgroundColor: "red",
          "& .MuiDataGrid-filterForm": {
            backgroundColor: "red"
          }
        }
      }
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
})