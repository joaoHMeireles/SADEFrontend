import Box from "@mui/material/Box";
import List from "@mui/material/List";
import styled from "@emotion/styled";

export const Container = styled(Box)({
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "space-evenly",
    width: "100%"
});

export const FirstColumn = styled(Box)({
    backgroundColor: "#FFF",
    borderRadius: "1rem",
    boxShadow: "5px 5px 10px 0px #00000050, -5px -5px 10px 0px #00000050",
    height: "75vh",
    margin: "2rem 0 0rem 0",
    width: "20%"
})

export const Lista = styled(List)({
    backgroundColor: "#FFF",
    borderRadius: "1rem",
    color: "#595959",
    height: "100%",
    width: "100%"
});

export const SecondColumn = styled(Box)({
    backgroundColor: "#FFF",
    borderRadius: "1rem",
    boxShadow: "5px 5px 10px 0px #00000050, -5px -5px 10px 0px #00000050",
    height: "75vh",
    margin: "2rem 0 0rem 0",
    width: "65%"
});