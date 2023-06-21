import { Box, Grid } from '@mui/material';
import styled from '@emotion/styled';

export const BoxCorStatus = styled(Box)({
    borderRadius: "10px 0 0 10px",
    height: "100%",
    width: "100%"
});

export const GridContainer = styled(Grid)({
    borderRadius: "10px",
    boxShadow: "5px 5px 10px 0 #00000025",
    color: "#444",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "2.5vh",
    width: "100%"
});

export const GridContainerHeader = styled(Grid)({
    marginBottom: "15px",
    minHeight: "80px"
});

export const GridInformacao = styled(Grid)({
    backgroundColor: "white",
    borderRadius: "0 10px 10px 0",
    padding: "25px"
});

export const GridTitulo = styled(Grid)({
    alignItems: "center",
    display: "flex"
});