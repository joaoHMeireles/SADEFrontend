import '@progress/kendo-theme-default/dist/default-ocean-blue.scss';
import TextField from "@mui/material/TextField";

import InputAnexos from "../InputAnexos/InputAnexos";

import TabelaCustoCriacao from "../Tabelas/TabelaCustoCriacao/TabelaCustoCriacao";

import {
  BoxContainerGeral,
  BoxPadrao,
  BoxPaybackExecucao,
  BoxResponsavel,
  BoxPaybackExe,
  BoxResponsaveis,
  TextFieldEdited,
  TypographyStyled
} from "./EscopoProposta.styles";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useContext, useEffect, useState } from "react";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import api from "../../api/api";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";

import { Editor, EditorTools } from "@progress/kendo-react-editor";
import { TextReaderContext } from '../TextReaderContext/TextReaderContext';
const {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignRight,
  AlignCenter,
  Indent,
  Outdent,
  OrderedList,
  UnorderedList,
  Undo,
  Redo,
  FontName,
} = EditorTools;

export default function EscopoProposta(props: {
  proposta: boolean
  escopoProposta: string
  setEscopoProposta: React.Dispatch<React.SetStateAction<string>>
  payback: number
  setPayback: React.Dispatch<React.SetStateAction<number>>
  periodoExecucaoInicio: any
  setPeriodoExecucaoInicio: React.Dispatch<React.SetStateAction<any>>
  periodoExecucaoFim: any
  setPeriodoExecucaoFim: React.Dispatch<React.SetStateAction<any>>
  usuariosResponsaveis: any[]
  setUsuariosResponsaveis: React.Dispatch<React.SetStateAction<any[]>>
  centroCusto: any
  centroCustoEscolhidas: Object[]
  setCentroCustoEscolhidas: React.Dispatch<React.SetStateAction<Object[]>>
  arquivosProposta: any[]
  setArquivosProposta: React.Dispatch<React.SetStateAction<any[]>>
}) {
  const { lerTexto } = useContext(TextReaderContext) as any
  const [usuarios, setUsuarios] = useState<any[]>([])

  useEffect(() => {
    api.get("/sade/usuario").then((res) => {
      setUsuarios(res.data)
    })
  }, [])

  return (
    <>
      <BoxContainerGeral>
        <BoxPadrao>
          <TypographyStyled onClick={lerTexto}>Escopo:</TypographyStyled>

          <Editor style={{
            backgroundColor: "#eee",
            borderRadius: "10px",
            boxShadow: "5px 5px 10px 0 #00000025",
          }}
            tools={[
              [Bold, Italic, Underline],
              [Undo, Redo],
              [AlignLeft, AlignCenter, AlignRight],
              [OrderedList, UnorderedList, Indent, Outdent],
              FontName,
            ]}
            contentStyle={{
              height: 320,
              width: "100%",
              fontFamily: "'Roboto','Helvetica','Arial', sans-serif"
            }}
            onChange={(e: any) => {
              props.setEscopoProposta(e.target.value.textContent)
            }} />
        </BoxPadrao>

        <BoxPadrao>
          <TypographyStyled onClick={lerTexto}>Tabelas de Custo:</TypographyStyled>

          <TabelaCustoCriacao
            centroCusto={props.centroCusto}
            centroCustoEscolhidas={props.centroCustoEscolhidas}
            setCentroCustoEscolhidas={props.setCentroCustoEscolhidas} />
        </BoxPadrao>

        <BoxPaybackExecucao>
          <BoxPaybackExe>
            <TypographyStyled onClick={lerTexto}>Período de Execução Inicio:</TypographyStyled>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                InputProps={{
                  sx: {
                    backgroundColor: "#eee",
                    borderRadius: "10px",
                    boxShadow: "5px 5px 10px 0 #00000025",
                    "& fieldset": { border: "none" },
                    width: "15vw"
                  }
                }}
                value={props.periodoExecucaoInicio}
                onChange={(e: any) => {
                  props.setPeriodoExecucaoInicio(e.$d);
                }}
                renderInput={(params: any) => <TextField id='periodoExecucaoInicio' {...params} />} />
            </LocalizationProvider>
          </BoxPaybackExe>

          <BoxPaybackExe>
            <TypographyStyled onClick={lerTexto}>Período de execução Fim:</TypographyStyled>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                InputProps={{
                  sx: {
                    backgroundColor: "#eee",
                    borderRadius: "10px",
                    boxShadow: "5px 5px 10px 0 #00000025",
                    "& fieldset": { border: "none" },
                    width: "15vw"
                  }
                }}
                value={props.periodoExecucaoFim}
                onChange={(e: any) => {
                  props.setPeriodoExecucaoFim(e.$d);
                }}
                renderInput={(params: any) => <TextField id='periodoExecucaoFim' {...params} />} />
            </LocalizationProvider>
          </BoxPaybackExe>

          <BoxPaybackExe>
            <TypographyStyled onClick={lerTexto}>Payback:</TypographyStyled>

            <TextFieldEdited
              value={props.payback}
              onChange={(e: any) => {
                props.setPayback(e.target.value)
              }}
              sx={{ width: "15vw" }}>
            </TextFieldEdited>
          </BoxPaybackExe>
        </BoxPaybackExecucao>

        <BoxResponsavel>
          <BoxResponsaveis>
            <TypographyStyled onClick={lerTexto}>Nome dos responsáveis:</TypographyStyled>

            <Autocomplete
              id="nomeResponsavel"
              sx={{ boxShadow: "5px 5px 10px 0 #00000025" }}
              multiple
              disableCloseOnSelect
              onChange={(e: any, valor: any) => {
                let usuariosSelecionados: Object[] = []

                for (let usuarioSelecionado of valor) {
                  for (let usuario of usuarios) {
                    if (usuario.nomeUsuario == usuarioSelecionado) {
                      usuariosSelecionados.push({ idUsuario: usuario.idUsuario, nomeUsuario: usuario.nomeUsuario })
                    }
                  }
                }
                props.setUsuariosResponsaveis(usuariosSelecionados);
              }}
              renderOption={(props, nomeResponsavel, { selected }) => {
                return (
                  <li {...props} id="listaBU">
                    <Checkbox
                      id="checkbox"
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      style={{ marginRight: 8 }}
                      checked={selected} />

                    <span onClick={lerTexto}>
                      {nomeResponsavel}
                    </span>
                  </li>
                );
              }}
              options={usuarios.map((usuario: any) => usuario.nomeUsuario)}
              renderInput={(params) => <TextField {...params} />} />
          </BoxResponsaveis>
        </BoxResponsavel>

        <BoxPadrao>
          <InputAnexos rascunho={false} proposta={false} arquivosProposta={props.arquivosProposta} setArquivosProposta={props.setArquivosProposta} />
        </BoxPadrao>
      </BoxContainerGeral >
    </>
  );
}
