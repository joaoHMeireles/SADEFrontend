import { Box, Grid, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const MainPaper = styled(Paper)({
  borderRadius: "5px",
  boxShadow: "5px 5px 10px 0 #00000025",
  height: "100%",
  width: "90%",
});

export const BoxGridCorProcesso = styled(Box)({
  borderRadius: "5px 0 0 5px",
  height: "100%",
  width: "25%",
});

export const GridComponenteProcesso = styled(Grid)({
  color: "#444",
  cursor: "pointer",
  display: "grid",
  height: "21vh",
  padding: "15px 15px 15px 0",
});

export const GridBoxTituloRadio = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "hidden",
  textOverflow: "ellipsis",
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

export const GridTituloTypography = styled(GridTypography)({
  width: "85%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  display: "block"
})

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

export const UltimaLinhaGridBox = styled(Box)({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  width: "95%"
});

export const StatusBox = styled(Box)({
  alignItems: "center",
  display: "flex",
});

export const StatusColorIconBox = styled(StatusBox)({
  fontSize: "12px",
  marginLeft: "5px"
});

export const GridLinkColecaoTypograpfy = styled(GridLinkTypograpfy)({
  width: "25%",
});

export const BoxListaCorProcesso = styled(Box)({
  borderRadius: "5px 0 0 5px",
  height: "100%",
  maxWidth: "13px",
});

export const ListaComponenteProcesso = styled(Grid)({
  alignItems: "center",
  color: "#444",
  cursor: "pointer",
  display: "flex",
  padding: "5px",
});

export const ListaTypography = styled(GridTypography)({
  display: "flex",
  alignItems: "center",
  "& a": {
    color: "#3d83bc",

    "&:hover": {
      color: "#00579d",
      fontWeight: "500",
    },
  },
});

export const StatusListaBox = styled(Box)({
  alignItems: "center",
  display: "flex",
  fontSize: "12px",
  width: "25%"
})

export const UltimaListaTypography = styled(ListaTypography)({
  display: "flex",
  justifyContent: "end",
  paddingRight: "10px",
  "& a": {
    color: "#3d83bc",
    "&:hover": {
      color: "#00579d",
      fontWeight: "500",
    },
  },
});

export const BoxColecaoComponente = styled(Box)({
  margin: "none",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  width: "70%",
});