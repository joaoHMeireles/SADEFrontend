import { Box, Grid, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const BoxColecaoComponente = styled(Box)({
  margin: "none",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  width: "70%",
});

export const BoxGridCorProcesso = styled(Box)({
  borderRadius: "5px 0 0 5px",
  height: "100%",
  width: "25%",
});

export const BoxListaCorProcesso = styled(Box)({
  borderRadius: "5px 0 0 5px",
  height: "100%",
  width: "0.8%"
});

export const ContainerLista = styled(Box)({
  alignItems: "center",
  display: "flex",
  fontSize: "14px",
  height: "2.5rem",
  justifyContent: "flex-start",
  width: "100%"
});

export const GridBoxTituloRadio = styled(Box)({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const GridComponenteProcesso = styled(Grid)({
  color: "#444",
  cursor: "pointer",
  display: "grid",
  height: "21vh",
  padding: "15px 15px 15px 0",
});

export const GridLinkColecaoTypograpfy = styled(Box)({
  width: "25%",
});

export const GridLinkTypograpfy = styled(Typography)({
  alignItems: "center",
  display: "flex",
  justifyContent: "end",
  "& a": {
    color: "#3d83bc",
    "&:hover": {
      color: "#00579d",
      fontWeight: "500",
    },
  },
});

export const GridTituloTypography = styled(Box)({
  display: "block",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "85%",
  whiteSpace: "nowrap",
});

export const GridTypography = styled(Typography)({
  alignItems: "center",
  display: "flex",
  justifyContent: "start",
  margin: "none",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  "& span": {
    fontWeight: "500",
  },
});

export const ListaComponenteProcesso = styled(Box)({
  alignItems: "center",
  color: "#444",
  cursor: "pointer",
  display: "flex",
  height: "100%",
  justifyContent: "flex-start",
  padding: "0.5rem 1rem",
  width: "99.2%"
});

export const ListaTypography = styled(Box)({
  alignItems: "center",
  display: "block",
  justifyContent: "center",
  marginRight: "1rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "15%",
  whiteSpace: "nowrap",
  "& a": {
    color: "#3d83bc",
    "&:hover": {
      color: "#00579d",
      fontWeight: "500",
    },
  },
});

export const MainPaper = styled(Paper)({
  borderRadius: "5px",
  boxShadow: "5px 5px 10px 0 #00000025",
  height: "100%",
  width: "90%",
});

export const StatusBox = styled(Box)({
  alignItems: "center",
  display: "flex",
});

export const StatusColorIconBox = styled(StatusBox)({
  fontSize: "12px",
  marginLeft: "5px"
});

export const StatusListaBox = styled(Box)({
  alignItems: "center",
  display: "flex",
  justifyContent: "flex-start",
  marginRight: "0 !important",
  width: "20%"
});

export const UltimaLinhaGridBox = styled(Box)({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  width: "95%"
});

export const UltimaListaTypography = styled(ListaTypography)({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  width: "2%",
  "& a": {
    color: "#3d83bc",
    "&:hover": {
      color: "#00579d",
      fontWeight: "500",
    },
  },
});