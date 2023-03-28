import TextField from "@mui/material/TextField";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

import InputAnexos from "../InputAnexos/InputAnexos";

import TabelaCustoCriacao from "../Tabelas/TabelaCustoCriacao/TabelaCustoCriacao";

import {
  BoxContainerGeral, BoxPadrao, BoxPaybackExecucao,
  BoxResponsavel, BoxPaybackExe, BoxResponsaveis,
  TypographyStyled
} from "./EscopoProposta.styles";

export default function EscopoProposta(props: {
  proposta: boolean
  escopoProposta: string
  setEscopoProposta: React.Dispatch<React.SetStateAction<string>>
  payback: number
  setPayback: React.Dispatch<React.SetStateAction<number>>
  periodoExecucao: Date | null
  setPeriodoExecucao: React.Dispatch<React.SetStateAction<Date | null>>
  nomeResponsavel: string
  setNomeResponsavel: React.Dispatch<React.SetStateAction<string>>
  areaResponsavel: string
  setAreaResponsavel: React.Dispatch<React.SetStateAction<string>>
  centroCusto: any
  centroCustoEscolhidas: any[]
  setCentroCustoEscolhidas: React.Dispatch<React.SetStateAction<any[]>>
  // centroCustoTabela: string[]
  // setCentroCustoTabela: React.Dispatch<React.SetStateAction<string[]>>
  // valorTotalTabela: number
  // setValorTotalTabela: React.Dispatch<React.SetStateAction<number>>
  // esforcoTabela: number
  // setEsforcoTabela: React.Dispatch<React.SetStateAction<number>>
  // tituloLinhaTabela: string
  // setTituloLinhaTabela: React.Dispatch<React.SetStateAction<string>>
}) {

  return (
    <>
      <BoxContainerGeral>
        <BoxPadrao>
          <TypographyStyled>Escopo: </TypographyStyled>
          <TextField
            sx={{ width: "100%", boxShadow: "5px 5px 10px 0 #00000050" }}
            multiline
            maxRows={Infinity}
            onChange={(e: any) => {
              props.setEscopoProposta(e.target.value)
            }}
          />
        </BoxPadrao>
        <BoxPadrao>
          <TypographyStyled>Tabelas de Custo: </TypographyStyled>
          <TabelaCustoCriacao
            centroCusto={props.centroCusto}
            centroCustoEscolhidas={props.centroCustoEscolhidas}
            setCentroCustoEscolhidas={props.setCentroCustoEscolhidas}
          // centroCustoTabela={props.centroCustoTabela} setCentroCustoTabela={props.setCentroCustoTabela}
          //   valorTotalTabela={props.valorTotalTabela} setValorTotalTabela={props.setValorTotalTabela}
          //   esforcoTabela={props.esforcoTabela} setEsforcoTabela={props.setEsforcoTabela}
          //   tituloLinhaTabela={props.tituloLinhaTabela} setTituloLinhaTabela={props.setTituloLinhaTabela} 
          />
        </BoxPadrao>
        <BoxPaybackExecucao>
          <BoxPaybackExe>
            <TypographyStyled>Payback: </TypographyStyled>
            <TextField onChange={(e: any) => { props.setPayback(e.target.value) }}
              sx={{ width: "95%", boxShadow: "5px 5px 10px 0 #00000050" }}
            ></TextField>
          </BoxPaybackExe>
          <BoxPaybackExe>
            <TypographyStyled>Período de execução: </TypographyStyled>
            <TextField
              onChange={(e: any) => { props.setPeriodoExecucao(e.target.value) }}
              sx={{ width: "100%", boxShadow: "5px 5px 10px 0 #00000050" }}
              InputProps={{ endAdornment: <CalendarMonthRoundedIcon /> }}
            ></TextField>
          </BoxPaybackExe>
        </BoxPaybackExecucao>
        <BoxResponsavel>
          <BoxResponsaveis>
            <TypographyStyled>Nome do responsável: </TypographyStyled>
            <TextField
              onChange={(e: any) => { props.setNomeResponsavel(e.target.value) }}
              sx={{ width: "95%", boxShadow: "5px 5px 10px 0 #00000050" }}
            ></TextField>
          </BoxResponsaveis>
          <BoxResponsaveis>
            <TypographyStyled>Área do responsável: </TypographyStyled>
            <TextField
              onChange={(e: any) => { props.setAreaResponsavel(e.target.value) }}
              sx={{ width: "100%", boxShadow: "5px 5px 10px 0 #00000050" }}
            ></TextField>
          </BoxResponsaveis>
        </BoxResponsavel>
        <BoxPadrao>
          <InputAnexos rascunho={false} proposta={false} />
        </BoxPadrao>
      </BoxContainerGeral>
    </>
  );
}
