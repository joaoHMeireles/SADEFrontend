import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const ImageBox = styled(Box)({
    alignItems: "center",
    color:"#444",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    "& #imagem": {
        width: "250px",
        height: "250px"
    },
    width: "100%",
});