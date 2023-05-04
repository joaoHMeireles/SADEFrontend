import Box from "@mui/material/Box";
import styled from "@emotion/styled";

export const BoxBackground = styled(Box)({
    alignItems: "flex-start",
    color: "#595959",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "flex-start",
    padding: "2rem",
    width: "100%"
});

export const Title = styled(Box)({
    fontWeight: "bold",
    marginBottom: "1rem"
});

export const P = styled(Box)({
    marginBottom: "1rem"
});

export const BoxImage = styled(Box)({
    alignItems: "flex-start",
    display: "flex",
    height: "auto",
    justifyContent: "center",
    width: "100%"
});