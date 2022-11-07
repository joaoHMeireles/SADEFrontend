import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const stylesBox = styled(Box);
const stylesTypography = styled(Typography);
const stylesTextField = styled(TextField);

export const ContainerGeneralLogin = stylesBox({
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
})

export const BoxLogoWEG = stylesBox({
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "start",
    padding: 48,
    width: "50%",
})

export const ContainerLogin = stylesBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    width: "50%",
})

export const ContainerBackgroundLogin = stylesBox({
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.25)",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "80%",
    width: "60%",
})

export const ContainerTitleText = stylesBox({
    alignItems: "center",
    color: "#FFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "25%",
    width: "100%",
})

export const TypographyTitle = stylesTypography({
    color: "#FFF",
    marginBottom: 16
})

export const TypographyText = stylesTypography({
    color: "#FFF",
})

export const ContainerInputsLogin = stylesBox({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "50%",
    width: "100%",
})

export const InputEmail = stylesTextField({
    background: "#FFF",
    borderRadius: "5px",
    boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
    marginBottom: 40,
    width: "70%",
})

export const InputPassword = stylesTextField({
    color: "#FFF",
    background: "#FFF",
    borderRadius: "5px",
    boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
    width: "70%",
})

export const BoxForgotPassword = stylesBox({
    alignContent: "center",
    color: "#FFF",
    display: "flex",
    justifyContent: "start",
    marginTop: 8,
    width: "70%",
})

export const TextForgotPassword = stylesTypography({
    textDecoration: "underline"
})

export const ContainerButtonLogin = stylesBox({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    height: "25%",
    width: "100%",
})

export const StylesButton = styled(Button)({
    backgroundColor: "#00579D",
    color: "#fffffff",
    textDecoration: "none",
    width: "150px",
})