import { Box, Grid, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
const styledBox = styled(Box);
const styledGrid = styled(Grid);
const styledTypograpfy = styled(Typography);

export const MainPaper = styled(Paper)({
  borderRadius: "5px",
  boxShadow: "5px 5px 10px 0 #00000025",
  heigth: "90%",
  width: "90%",
});

export const BoxGridCorProcesso = styledBox({
  borderRadius: "5px 0 0 5px",
  height: "100%",
  width: "25%",
});

export const GridComponenteProcesso = styledGrid({
  color: "#595959",
  cursor: "pointer",
  display: "grid",
  height: "21vh",
  // padding: "5px",
});

export const GridBoxTituloRadio = styledBox({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const GridTypography = styledTypograpfy({
  alignItems: "center",
  display: "flex",  
  justifyContent: "start",
  margin: "none",
  overflow: "hidden",
  textOverflow: "ellipsis",
  // width: "80%",
  whiteSpace: "nowrap",
  "& span": {
    fontWeight: "500",
  },
});

export const GridLinkTypograpfy = styledTypograpfy({
  alignItems: "center",
  display: "flex",
  justifyContent: "end",
  width: "95%",
  "& a": {
    color: "#2382BA",
    "&:hover": {
      color: "#00579d",
      fontWeight: "500",
    },
  },
});

export const GridLinkColecaoTypograpfy = styled(GridLinkTypograpfy)({
  width: "25%",
});

export const BoxListaCorProcesso = styledBox({
  borderRadius: "5px 0 0 5px",
  height: "100%",
  maxWidth: "13px",
});

export const ListaComponenteProcesso = styledGrid({
  alignItems: "center",
  color: "#595959",
  cursor: "pointer",
  display: "flex",
  padding: "5px",
});

export const ListaTypography = styled(GridTypography)({
  width: "15vw",
  "& a": {
    color: "#2382BA",

    "&:hover": {
      color: "#00579d",
      fontWeight: "500",
    },
  },
});

export const UltimaListaTypography = styled(ListaTypography)({
  display: "flex",
  justifyContent: "end",
  paddingRight: "10px",
  "& a": {
    color: "#2382BA",

    "&:hover": {
      color: "#00579d",
      fontWeight: "500",
    },
  },
});

export const BoxColecaoComponente = styledBox({
  margin: "none",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  width: "70%",
});
