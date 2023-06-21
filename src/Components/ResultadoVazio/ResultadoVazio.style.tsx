import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const ImageBox = styled(Box)({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "70vh",
    justifyContent: "center",
    width: "100%",
    color:"#444",
    "& #imagem": {
        width: "250px",
        height: "250px"
    }
});