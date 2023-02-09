import { BoxConteudo } from "../../Pages/App.styles";
import { PDFExport } from "@progress/kendo-react-pdf";
import "./EsqueletoPDF.scss";
import { useRef } from "react";
import Box from "@mui/material/Box";

import {
  BoxData, BoxPrincipal, BoxTitulo,
  BoxItens, BoxTityuloItens, BoxObjetivo,
  TypographyData, TypographyTitulos, TypographyTextos,
  TableCellStyled, TypographyParticipantes
} from "./EsqueletoPDF.styles";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

interface ATA {
  tituloATA: string,
  numeroAno: number,
  numeroDG: number,
  data: Date,
  inicioReuniao: Date,
  terminoReuniao: Date,
  itensProposta: [ItensATA],
  participantes: [
    ""
  ]
}

interface ItensATA {
  titulo: string,
  objetivo: string,
  escopo: [""],
  naoFazParteEscopo: string,
  abrangencia: string,
  resultadosQualitativos: [""],
  resultadosPotenciais: [""],
  custosTotais: {
    totalDespesas: number,
    tabelas: [
      {
        titulo: string,
        temLicenca: boolean,
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
}

const ata = [
  {
    tituloATA: "Titulo ATA",
    numeroAno: 2022,
    numeroDG: 101010,
    data: new Date(),
    inicioReuniao: new Date(),
    terminoReuniao: new Date(),
    itensProposta: [
      {
        titulo: "Titulo 01",
        objetivo: "Objetivo 01",
        escopo: ["Escopo 01", "Escopo 02", "Escopo 03"],
        naoFazParteEscopo: "Nao faz parte escopo",
        abrangencia: "Abrangencia 01",
        resultadosQualitativos: ["Resultados Qualitativos 01", "Resultados Qualitativos 02"],
        resultadosPotenciais: ["Resultados Potenciais 01", "Resultados Potenciais 02"],
        custosTotais: {
          totalDespesas: 50000,
          tabelas: [
            {
              titulo: "Titulo Tabela",
              temLicenca: false,
              centrosCusto: [
                {
                  nomeCentroCusto: "Centro Custo 01",
                  porcentagemDespesa: 20
                }
              ],
              linhastabela: [
                {
                  tituloDespesa: "Titulo Despesa",
                  quantidade: 5,
                  valorQuantidade: 10
                }
              ]
            }
          ]
        },
        periodoExecucaoInicio: new Date(),
        periodoExecucaoFim: new Date(),
        payback: 4,
        responsavel: "Responsavel 01",
        parecerComissao: "Parecer comissao",
      }
    ],
    participantes: [
      "Participante 01",
      "Participante 02",
      "Participante 03"
    ]
  },
]

export default function EsqueletoPDF() {
  const pdfCompoente = useRef<PDFExport>(null)

  const exportPDFWithComponent = () => {
    if (pdfCompoente.current) {
      pdfCompoente.current.save();
    }
  };

  const ATA = (props: { ata: ATA }) => {
    return (
      <BoxPrincipal>
        <BoxTitulo>
          <TypographyTitulos variant="h6">{props.ata.tituloATA}</TypographyTitulos>
        </BoxTitulo>
        <BoxData>
          <TypographyData variant="body2">
            ATA {props.ata.numeroDG}/{props.ata.numeroAno}
          </TypographyData>
          <TypographyData variant="body2">
            Data: {props.ata.data.toLocaleDateString()}
          </TypographyData>
          <TypographyData variant="body2">
            Início: {props.ata.inicioReuniao.toLocaleTimeString()}
          </TypographyData>
          <TypographyData variant="body2">
            Término: {props.ata.terminoReuniao.toLocaleTimeString()}
          </TypographyData>
        </BoxData>
        <ItensATA ata={props.ata} />
        <ParticipantesReuniao ata={props.ata} />
      </BoxPrincipal>
    )
  }

  const ItensATA = (props: { ata: ATA }) => {
    return (
      <BoxItens>
        {props.ata.itensProposta.map((proposta: ItensATA, index: number) => {
          return (
            <>
              <BoxTityuloItens>
                <TypographyTitulos> {index + 1}. {proposta.titulo}</TypographyTitulos>
              </BoxTityuloItens>
              <BoxObjetivo>
                <TypographyTextos>Objetivo: {proposta.objetivo} </TypographyTextos>
              </BoxObjetivo>
              <BoxObjetivo>
                <TypographyTextos>Escopo projeto: </TypographyTextos>
                <ul style={{ width: "50%", fontSize: "10px", marginLeft: 15 }}>
                  {proposta.escopo.map((escopo: string, index: number) => {
                    return (
                      <li key={index} className="itensEscopoProjeto">{escopo}</li>
                    )
                  })}
                </ul>
              </BoxObjetivo>
              <BoxObjetivo>
                <TypographyTextos>Não faz parte do Escopo do Projeto:{proposta.naoFazParteEscopo}</TypographyTextos>
              </BoxObjetivo>
              <BoxObjetivo>
                <TypographyTextos>Abrangência do Projeto:{proposta.abrangencia}</TypographyTextos>
              </BoxObjetivo>
              <BoxObjetivo>
                <TypographyTextos>Resultados Esperados (Qualitativos):  </TypographyTextos>
                <ul style={{ width: "50%", fontSize: "10px", marginLeft: 15 }}>
                  {proposta.resultadosQualitativos.map((resultadosQualitativos: string, index: number) => {
                    return (<li key={index}>{resultadosQualitativos}</li>)
                  })}
                </ul>
              </BoxObjetivo>
              <BoxObjetivo>
                <TypographyTextos>Benefícios potencias: </TypographyTextos>
                <ul style={{ width: "50%", fontSize: "10px", marginLeft: 15 }}>
                  {proposta.resultadosPotenciais.map((resultadosPotenciais: string, index: number) => {
                    return (<li key={index}>{resultadosPotenciais}</li>)
                  })}
                </ul>
              </BoxObjetivo>
              <BoxObjetivo>
                <TypographyTextos> <b> Custos totais do projeto: R${proposta.custosTotais.totalDespesas}</b> </TypographyTextos>
                <TypographyTextos>Total despesas recursos externos (Desembolso): R${proposta.custosTotais.totalDespesas}</TypographyTextos>
              </BoxObjetivo>
              <CentrosCusto proposta={proposta} />
              <BoxObjetivo>
                <TypographyTextos>Período de execução: {proposta.periodoExecucaoInicio.toLocaleDateString()} à {proposta.periodoExecucaoFim.toLocaleDateString()}</TypographyTextos>
              </BoxObjetivo>
              <BoxObjetivo>
                <TypographyTextos>Payback: {proposta.payback} meses</TypographyTextos>
              </BoxObjetivo>
              <BoxObjetivo>
                <TypographyTextos>Responsável Negócio: {proposta.responsavel}</TypographyTextos>
              </BoxObjetivo>
              <BoxObjetivo>
                <TypographyParticipantes>PARECER COMISSÃO: {proposta.parecerComissao}</TypographyParticipantes>
              </BoxObjetivo>
            </>
          )
        })}
      </BoxItens>
    )
  }

  const CentrosCusto = (props: { proposta: ItensATA }) => {

    return (
      <Box sx={{ width: "100%" }}>
        {props.proposta.custosTotais.tabelas.map((tabela: any) => {
          return (
            <div>aaaa</div>
          )
        })}
      </Box>
    )
  }

  const ParticipantesReuniao = (props: { ata: ATA }) => {
    return (
      <BoxObjetivo>
        <>
          <TypographyParticipantes>Participantes</TypographyParticipantes>
          {props.ata.participantes.map((parti: string, index: number) => {
            return <TypographyTextos key={index}>{parti}</TypographyTextos>
          })}
        </>
      </BoxObjetivo >
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
        {ata.map((ata: any, index: number) => {
          return <ATA key={index} ata={ata} />
        })}
      </PDFExport>
    </BoxConteudo >
  );
}


{/* <TableContainer component={Paper} sx={{ width: "50%" }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCellStyled>Despesas (Desembolso)</TableCellStyled>
                          <TableCellStyled>Esforço</TableCellStyled>
                          <TableCellStyled>Valor total</TableCellStyled>
                          <TableCellStyled>CC Pagante</TableCellStyled>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCellStyled>Analista Funcional SAP SD </TableCellStyled>
                          <TableCellStyled>100h</TableCellStyled>
                          <TableCellStyled>R$ 10.000,00</TableCellStyled>
                        </TableRow>
                        <TableRow>
                          <TableCellStyled>Desenvolvimento Externo Abap </TableCellStyled>
                          <TableCellStyled>100h</TableCellStyled>
                          <TableCellStyled>R$ 10.000,00</TableCellStyled>
                        </TableRow>
                        <TableRow>
                          <TableCellStyled>Desenvolvimento Externo Java  </TableCellStyled>
                          <TableCellStyled>100h</TableCellStyled>
                          <TableCellStyled>R$ 10.000,00</TableCellStyled>
                        </TableRow>
                        <TableRow>
                          <TableCellStyled>TOTAL Despesas </TableCellStyled>
                          <TableCellStyled>300h</TableCellStyled>
                          <TableCellStyled>R$ 30.000,00</TableCellStyled>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer> */}