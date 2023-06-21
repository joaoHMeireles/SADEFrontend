import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const BoxBackground = styled(Box)({
    alignItems: "flex-start",
    color: "#444",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "flex-start",
    padding: "2rem",
    width: "100%"
});

export const BoxImage = styled(Box)({
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem", 
    width: "100%"
});

export const P = styled(Box)({
    marginBottom: "1rem"
});

export const Space = styled(Box) ({
    color: "#fff"
});

export const Title = styled(Box)({
    fontWeight: "bold",
    marginBottom: "1rem"
});