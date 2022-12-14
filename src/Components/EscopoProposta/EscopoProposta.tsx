import TextField from "@mui/material/TextField";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

import InputAnexos from "../InputAnexos/InputAnexos";

import TabelaCustoCriacao from "../Tabelas/TabelaCustoCriacao/TabelaCustoCriacao";

import {
  BoxContainerGeral,
  BoxPadrao,
  BoxPaybackExecucao,
  BoxResponsavel,
  BoxPaybackExe,
  BoxResponsaveis,
  TypographyStyled,
} from "./EscopoProposta.styles";

export default function EscopoProposta() {
  return (
    <>
      <BoxContainerGeral>
        <BoxPadrao>
          <TypographyStyled>Escopo</TypographyStyled>
          <TextField
            sx={{ width: "100%", boxShadow: "5px 5px 10px 0 #00000050" }}
            multiline
            rows={7}
            maxRows={Infinity}
          />
        </BoxPadrao>
        <BoxPadrao>
          <TypographyStyled>Tabelas de Custo</TypographyStyled>
          <TabelaCustoCriacao />
        </BoxPadrao>
        <BoxPaybackExecucao>
          <BoxPaybackExe>
            <TypographyStyled>Payback</TypographyStyled>
            <TextField
              sx={{ width: "95%", boxShadow: "5px 5px 10px 0 #00000050" }}
            ></TextField>
          </BoxPaybackExe>
          <BoxPaybackExe>
            <TypographyStyled>Período de execução</TypographyStyled>
            <TextField
              sx={{ width: "100%", boxShadow: "5px 5px 10px 0 #00000050" }}
              InputProps={{ endAdornment: <CalendarMonthRoundedIcon /> }}
            ></TextField>
          </BoxPaybackExe>
        </BoxPaybackExecucao>
        <BoxResponsavel>
          <BoxResponsaveis>
            <TypographyStyled>Nome do responsável</TypographyStyled>
            <TextField
              sx={{ width: "95%", boxShadow: "5px 5px 10px 0 #00000050" }}
            ></TextField>
          </BoxResponsaveis>
          <BoxResponsaveis>
            <TypographyStyled>Área do responsável</TypographyStyled>
            <TextField
              sx={{ width: "100%", boxShadow: "5px 5px 10px 0 #00000050" }}
            ></TextField>
          </BoxResponsaveis>
        </BoxResponsavel>
        <BoxPadrao>
          <InputAnexos rascunho={false} />
        </BoxPadrao>
      </BoxContainerGeral>
    </>
  );
}
