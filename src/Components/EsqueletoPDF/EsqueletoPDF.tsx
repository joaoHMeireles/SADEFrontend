import { BoxConteudo } from "../../Pages/App.styles";

import { PDFExport } from "@progress/kendo-react-pdf";

import "./EsqueletoPDF.scss";
import { useRef } from "react";
import Box from "@mui/material/Box";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

export default function EsqueletoPDF() {
  const pdfCompoente = useRef<PDFExport>(null)

  const exportPDFWithComponent = () => {
    if (pdfCompoente.current) {
      pdfCompoente.current.save();
    }
  };

  const Content = () => {
    return (
      <Box sx={{ width: "100%" }}>
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ color: "#0070c0", fontSize: "12px", width: "100%" }} variant="h6" component="h1">ATA REUNIÃO COMISSÃO PROCESSOS DE VENDAS E DESENVOLVIMENTO DE PRODUTO </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-end", flexDirection: "column" }}>
          <Typography sx={{ fontSize: "10px" }} variant="body2">
            ATA Nº
            10/2021
          </Typography>
          <Typography variant="body2">
            Data:
            09/05/21
          </Typography>
          <Typography variant="body2">
            Início:
            10:00
          </Typography>
          <Typography variant="body2">
            Término:
            12:00
          </Typography>
        </Box>
      </Box>
    )
  }

  const PageTemplate = (props: { pageNum: number, totalPages: number }) => {
    return (
      <Box style={{ position: "absolute", top: "97%", left: "10px" }}>
        Page {props.pageNum} of {props.totalPages}
      </Box>
    );
  }

  return (
    <BoxConteudo>
      <div className="example-config">
        <button
          onClick={exportPDFWithComponent}
        >
          Export to PDF with component
        </button>
      </div>
      <PDFExport pageTemplate={PageTemplate} paperSize="A4" margin="2cm" ref={pdfCompoente}>
        <Content />
      </PDFExport>
    </BoxConteudo >
  );
}
