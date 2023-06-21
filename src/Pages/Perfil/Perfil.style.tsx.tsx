import Box from "@mui/material/Box";
import styled from "@emotion/styled";

export const BoxBackground = styled(Box)({
    alignItems: "center",
    color: "#444",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    width: "100%"
});

export const FirstContainer = styled(Box)({
    alignItems: "flex-start",
    borderBottom: "2px solid #ddd",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "2rem 0",
    width: "90%"
})

export const SecondContainer = styled(Box)({
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2rem 0",
    width: "90%"
})

export const BoxImage = styled(Box)({
    alignItems: "center",
    borderRadius: "360px",
    display: "flex",
    height: "10vw",
    justifyContent: "center",
    overflow: "hidden",
    marginTop: "1rem",
    width: "10vw"
})