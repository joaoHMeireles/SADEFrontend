import Box from "@mui/material/Box";
import styled from "@emotion/styled";
const styledBox = styled(Box)

export const ImageBox = styledBox({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "70vh",
    justifyContent: "center",
    width: "100%",
    color:"#595959",
    "& #imagem": {
        width: "250px",
        height: "250px"
    }
})