import {
  Box,
  IconButton,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
const styledBox = styled(Box);

export const TableContainerEstilizado = styled(TableContainer)({
  borderRadius: "10px",
  boxShadow: "5px 5px 10px 0 #00000025",
});

export const TableCellEstilzada = styled(TableCell)(({ theme: Theme }) => ({
  color: "#444",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#00579d",
    color: Theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

export const TableRowEstilizada = styled(TableRow)(({ theme: Theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: Theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const BoxContainerTabela = styledBox({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  width: "auto",
  borderRadius: "5px",
  boxShadow: "5px 5px 10px 0 #00000025"
});

export const PlusIconButton = styled(IconButton)({
  backgroundColor: "#00579d",
  color: "white",
  boxShadow: "5px 5px 10px 0 #00000025",
  '&:hover': {
    backgroundColor: "#003c6d",
    transition: 'ease-in-out',
    transitionDuration: "0.7s"
  }
})