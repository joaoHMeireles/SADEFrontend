import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

const styledBox = styled(Box);
const styledButton = styled(Button);
const styledTextField = styled(TextField);

export const BoxImage = styledBox({
    height: "100vh",
    width: "65vw"
});

export const BoxInputs = styledBox({
    display: "flex",
    flexDirection: "column",
    height: "auto",
    marginBottom: "4rem",
    marginTop: "4rem",
    width: "auto"
});

export const BoxLogin = styledBox({
    alignItems: "center",
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    width: "100vw"
});

export const BoxLogos = styledBox({
    alignItems: "center",
    display: "flex",
    height: "auto",
    justifyContent: "center",
    marginBottom: "2rem",
    width: "auto"
});

export const BoxRememberMe = styledBox({
    alignItems: "center",
    display: "flex",
    height: "auto",
    justifyContent: "flex-start",
    width: "100%"
});

export const BoxTexts = styledBox({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    justifyContent: "center",
    width: "auto"
});

export const ButtonEdited = styledButton({
    backgroundColor: "#00579d",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    fontSize: "16px",
    padding: "1rem 2rem"
});

export const Column = styledBox({
    alignItems: "center",
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    padding: "1rem",
    width: "35vw"
});

export const Container = styledBox({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "auto",
    width: "100%"
});

export const TextFieldEdited = styledTextField({
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    "& fieldset": { border: "none" },
    width: "20vw"
});