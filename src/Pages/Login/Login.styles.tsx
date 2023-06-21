import { Box, TextField } from "@mui/material";
import styled from "@emotion/styled";

export const BoxImage = styled(Box)({
    height: "100vh",
    width: "65vw"
});

export const BoxInputs = styled(Box)({
    display: "flex",
    flexDirection: "column",
    marginBottom: "4rem",
    marginTop: "4rem",
    width: "auto"
});

export const BoxLogin = styled(Box)({
    alignItems: "center",
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    width: "100vw"
});

export const BoxLogos = styled(Box)({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: "2rem",
    width: "auto"
});

export const BoxRememberMe = styled(Box)({
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-start",
    width: "100%"
});

export const BoxTexts = styled(Box)({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "auto"
});

export const Column = styled(Box)({
    alignItems: "center",
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    padding: "1rem",
    width: "35vw"
});

export const Container = styled(Box)({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%"
});

export const TextFieldEdited = styled(TextField)({
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    "& fieldset": { border: "none" },
    width: "20vw"
});