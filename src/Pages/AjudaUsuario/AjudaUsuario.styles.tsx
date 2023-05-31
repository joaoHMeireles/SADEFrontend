import Box from "@mui/material/Box";
import List from "@mui/material/List";
import styled from "@emotion/styled";

export const Container = styled(Box)({
    alignItems: "flex-start",
    display: "flex",
    height: "100%",
    justifyContent: "space-evenly",
    width: "100%"
});

export const FirstColumn = styled(Box)({
    borderRadius: "1rem",
    boxShadow: "5px 5px 10px 0px #00000025",
    height: "75vh",
    marginTop: "1rem",
    width: "20%"
})

export const Lista = styled(List)({
    borderRadius: "1rem",
    color: "#595959",
    height: "100%",
    width: "100%"
});

export const SecondColumn = styled(Box)({
    borderRadius: "1rem 0.9rem 0.9rem 1rem",
    boxShadow: "5px 5px 10px 0px #00000025",
    height: "75vh",
    marginTop: "1rem",
    overflow: "inherit",
    overflowY: "auto",
    width: "65%",
});