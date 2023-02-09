import { BoxConteudo } from "../../Pages/App.styles";

import { PDFExport } from "@progress/kendo-react-pdf";
import { Text, View, Page, Document } from "@react-pdf/renderer";

import "./EsqueletoPDF.scss";
import { useRef } from "react";
import Box from "@mui/material/Box";

import { BoxData, BoxPrincipal, BoxTitulo, BoxItens, BoxTityuloItens, BoxObjetivo, TypographyData, TypographyTitulos, TypographyTextos } from "./EsqueletoPDF.styles";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

interface ATA {
  numeroAno: number,
  numeroDG: number,
  data: Date,
  itensProposta: [
    {
      titulo: string,
      objetivo: string,
      escopo: string,
      abrangencia: string,
      resultadosQualitativos: string,
      resultadosGanhos: string,
      custosTotais: {
        totalDespesas: number,
        temLicenca: boolean,
        tabelas: [
          {
            titulo: string,
            centrosCusto: [
              nomeCentroCusto: string,
              porcentagemDespesa: number
            ],
            linhastabela: [
              {
                tituloDespesa: string,
                quantidade: number,
                valorQuantidade: number
              }
            ]
          }
        ]
      },
      periodoExecucaoInicio: Date,
      periodoExecucaoFim: Date,
      payback: number,
      responsavel: string,
      parecerComissao: string,
      participantes: [
        ""
      ]
    }
  ]
}

export default function EsqueletoPDF(props: ATA) {
  const pdfCompoente = useRef<PDFExport>(null)

  const exportPDFWithComponent = () => {
    if (pdfCompoente.current) {
      pdfCompoente.current.save();
    }
  };

  const ATA = () => {
    return (
      <BoxPrincipal>
        <BoxTitulo>
          <TypographyTitulos variant="h6">ATA REUNIÃO COMISSÃO PROCESSOS DE VENDAS E DESENVOLVIMENTO DE PRODUTO </TypographyTitulos>
        </BoxTitulo>
        <BoxData>
          <TypographyData variant="body2">
            ATA Nº
            10/2021
          </TypographyData>
          <TypographyData variant="body2">
            Data:
            09/05/21
          </TypographyData>
          <TypographyData variant="body2">
            Início:
            10:00
          </TypographyData>
          <TypographyData variant="body2">
            Término:
            12:00
          </TypographyData>
        </BoxData>
        <ItensATA />
      </BoxPrincipal>
    )
  }

  const ItensATA = () => {
    return (
      <BoxItens>
        <BoxTityuloItens>
          <TypographyTitulos>1. REPLANEJAMENTO DATA DE ENTREGA DE OVS EM MASSA _1000025759 </TypographyTitulos>
        </BoxTityuloItens>
        <BoxObjetivo>
          <TypographyTextos>Objetivo: Melhorar e automatizar as ferramentas existentes para reprogramação de prazos de entregas, buscando agilidade no processamento, gestão da carteira de pedidos em linha com a capacidade fabril e consequentemente retornos rápidos aos clientes.</TypographyTextos>
        </BoxObjetivo>
        <BoxObjetivo>
          <TypographyTextos>Escopo projeto: </TypographyTextos>
          <ul style={{ width: "50%", fontSize: "10px", marginLeft: 15 }}>
            <li>Adequação do relatório de composição de preços;</li>
            <li>Antecipar ordens de vendas que estão no futuro com “cotas consumidas”;</li>
            <li> Alteração de postergação de 1 OV para N/OV’s e vice-versa;</li>
          </ul>
        </BoxObjetivo>
        <BoxObjetivo>
          <TypographyTextos>Não faz parte do Escopo do Projeto:  Não deverá ser contemplado nesta alteração as OV’s que estão no Período Firme. Para esse caso continuará o processo de alteração pelo fluxo da PCR.</TypographyTextos>
        </BoxObjetivo>
        <BoxObjetivo>
          <TypographyTextos>Abrangência do Projeto:  Para a Unidade de Negócios WMO que utiliza a ferramenta PCR</TypographyTextos>
        </BoxObjetivo>
        <BoxObjetivo>
          <TypographyTextos>Benefícios potencias: R$ 30.000,00 mensais considerando: </TypographyTextos>
          <ul style={{ width: "50%", fontSize: "10px", marginLeft: 15 }}>
            <li>R$ 10.000,00 com redução do tempo do PCP para replanejamento manual das OVs planejadas.</li>
            <li>R$ 20.000,00 com redução de esforço na gestão das OVs, solicitação de alteração ao PCP e resposta ao cliente.</li>
          </ul>
        </BoxObjetivo>
        <BoxObjetivo>
          <TypographyTextos> <b> Custos totais do projeto: R$50.000,00</b> </TypographyTextos>
          <TypographyTextos>Total despesas recursos externos (Desembolso): R$30.000,00</TypographyTextos>
          <TypographyTextos>Total despesa recursos internos: R$20.000,00</TypographyTextos>
        </BoxObjetivo>
        <CentrosCusto />
        <BoxObjetivo>
          <TypographyTextos>Período de execução: Mar/2021 à Ago/21</TypographyTextos>
        </BoxObjetivo>
        <BoxObjetivo>
          <TypographyTextos>Payback: 1,7 meses</TypographyTextos>
        </BoxObjetivo>
        <BoxObjetivo>
          <TypographyTextos>Responsável Negócio: Fulano da Silva – Seção Administração de Ordens</TypographyTextos>
        </BoxObjetivo>
        <BoxObjetivo>
          <TypographyTextos>PARECER COMISSÃO: APROVADO.</TypographyTextos>
        </BoxObjetivo>
      </BoxItens>
    )
  }

  const CentrosCusto = () => {
    return (
      <Box sx={{ width: "100%" }}>
        <TableContainer sx={{ width: "60%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Despesas (Desembolso)</TableCell>
                <TableCell>Esforço</TableCell>
                <TableCell>Valor total</TableCell>
                <TableCell>CC Pagante</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Analista Funcional SAP SD </TableCell>
                <TableCell>100h</TableCell>
                <TableCell>R$ 10.000,00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Desenvolvimento Externo Abap </TableCell>
                <TableCell>100h</TableCell>
                <TableCell>R$ 10.000,00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Desenvolvimento Externo Java  </TableCell>
                <TableCell>100h</TableCell>
                <TableCell>R$ 10.000,00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>TOTAL Despesas </TableCell>
                <TableCell>300h</TableCell>
                <TableCell>R$ 30.000,00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
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
      <PDFExport pageTemplate={PageTemplate} margin="2cm" ref={pdfCompoente}>
        <ATA />
      </PDFExport>
    </BoxConteudo >
  );
}
