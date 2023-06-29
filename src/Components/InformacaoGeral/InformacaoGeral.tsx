import { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import api from "../../api/api";
import {
  AutocompleteEdited,
  BoxContainerCentroCusto,
  BoxContainerGeralInformacaoGeral,
  BoxContainerLabels,
  TextFieldEdited,
  TypographyLabels
} from "./InformacaoGeral.styles";
import { TextReaderContext } from "../TextReaderContext/TextReaderContext";
import { Checkbox } from "@mui/material";

export default function InformacaoGeral(props: {
  proposta: boolean,
  rascunho?: boolean,
  centroCusto?: any[],
  setCentroCusto?: React.Dispatch<React.SetStateAction<Object[]>>
  informacaoProcesso?: any
  setInformacaoProcesso?: React.Dispatch<React.SetStateAction<any>>
  partUmDemanda?: Function;
  editarDemanda?: boolean;
  informacoesPreenchidas?: boolean;
}) {
  const { lerTexto } = useContext(TextReaderContext) as any
  const [centrosCustoBanco, setCentrosCustoBanco] = useState<any[]>([]);
  const [centroCustoSelect, setCentroCustoSelect] = useState<any[]>([]);
  const [centrosDeCustoCriacao, setCentrosDeCustoCriacao] = useState<any[]>([])

  const info = localStorage.getItem("DEMANDASELECIONADA") ? localStorage.getItem("DEMANDASELECIONADA") : localStorage.getItem("RASCUNHOESCOLHIDO")
  const demandaSelecionada = JSON.parse(info as string);

  console.log("info", info);
  

  useEffect(() => {
    api.get("/sade/centroCusto").then((res: any) => {
      const listaCentroCusto = res.data.map((centroCusto: any) => centroCusto.nomeCentroCusto)
      setCentrosCustoBanco(res.data)
      setCentroCustoSelect(listaCentroCusto)
    }).catch((err: any) => {
      console.log(err);
    })
  }, [])

  useEffect(() => {
    if (props.proposta || props.editarDemanda) {
      for (let atributo in demandaSelecionada) {
        if ((demandaSelecionada as any)[atributo]) {
          const inputAtributo = document.getElementById(
            getIdByAtributo(atributo)
          ) as HTMLInputElement;
          if (inputAtributo) {
            if (inputAtributo.id == "titulo") {
              inputAtributo.value = demandaSelecionada.tituloDemanda;
            }
            if (inputAtributo.id == "objetivo") {
              inputAtributo.value = demandaSelecionada.objetivo;
            }
            if (inputAtributo.id == "situacaoAtual") {
              inputAtributo.value = demandaSelecionada.situacaoAtual;
            }
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    const infoDemandaNova = JSON.parse(localStorage.getItem("DADOSDEMANDACRIACAO") as string)

    if (infoDemandaNova != null) {
      for (let atributo in infoDemandaNova) {
        if ((infoDemandaNova as any)[atributo]) {
          const inputAtributo = document.getElementById(
            getIdByAtributo(atributo)
          ) as HTMLInputElement;
          if (inputAtributo) {
            if (inputAtributo.id == "titulo") {
              inputAtributo.value = infoDemandaNova.tituloDemanda;
            }
            if (inputAtributo.id == "objetivo") {
              inputAtributo.value = infoDemandaNova.objetivo;
            } InformacaoGeral
            if (inputAtributo.id == "situacaoAtual") {
              inputAtributo.value = infoDemandaNova.situacaoAtual;
            }
          }
        }
      }

      setCentrosDeCustoCriacao(infoDemandaNova.centroCustoDemanda.map((centroCusto: any) => centroCusto.nomeCentroCusto))
    }
  }, [props.informacoesPreenchidas]);

  function getIdByAtributo(atributo: string) {
    const idsInputsAtributo = {
      tituloDemanda: "titulo",
      centrosDeCusto: "centroDeCusto",
      objetivo: "objetivo",
      situacaoAtual: "situacaoAtual",
    };
    return (idsInputsAtributo as any)[atributo];
  }

  return (
    <>
      <BoxContainerGeralInformacaoGeral>
        <BoxContainerLabels>
          <TypographyLabels onClick={lerTexto}>
            Título:
          </TypographyLabels>

          <TextFieldEdited
            id="titulo"
            sx={{ boxShadow: "5px 5px 10px 0 #00000025" }}
            onChange={(e: any) => {
              const novaInfoDemanda = {
                ...props.informacaoProcesso,
                tituloDemanda: e.target.value,
              };

              if (props.setInformacaoProcesso) {
                props.setInformacaoProcesso(novaInfoDemanda);
              }

              if (props.partUmDemanda != null) {
                props.partUmDemanda()
              }
            }}
          />
        </BoxContainerLabels>

        <BoxContainerLabels>
          <TypographyLabels onClick={lerTexto}>
            Problema a ser resolvido (situação atual):
          </TypographyLabels>

          <TextFieldEdited
            id="situacaoAtual"
            sx={{ boxShadow: "5px 5px 10px 0 #00000025" }}
            multiline
            maxRows={Infinity}
            onChange={(e: any) => {
              const novaInfoDemanda = {
                ...props.informacaoProcesso,
                situacaoAtual: e.target.value,
              };

              if (props.setInformacaoProcesso) {
                props.setInformacaoProcesso(novaInfoDemanda);
              }

              if (props.partUmDemanda != null) {
                props.partUmDemanda()
              }
            }}
          />
        </BoxContainerLabels>

        <BoxContainerLabels>
          <TypographyLabels onClick={lerTexto}>
            Proposta / Solicitação de proposta:
          </TypographyLabels>

          <TextFieldEdited
            id="objetivo"
            sx={{ boxShadow: "5px 5px 10px 0 #00000025" }}
            multiline
            maxRows={Infinity}
            onChange={(e: any) => {
              const novaInfoDemanda = {
                ...props.informacaoProcesso,
                objetivo: e.target.value,
              };

              if (props.setInformacaoProcesso) {
                props.setInformacaoProcesso(novaInfoDemanda);
              }

              if (props.partUmDemanda != null) {
                props.partUmDemanda()
              }
            }}
          />
        </BoxContainerLabels>

        <BoxContainerLabels>
          <BoxContainerCentroCusto>
            <TypographyLabels onClick={lerTexto}>
              Centros de custo:
            </TypographyLabels>

            {props.proposta || props.rascunho || props.editarDemanda ? (
              <AutocompleteEdited
                id="centrosDeCusto"
                defaultValue={demandaSelecionada.centroCustoDemanda.map((centroCusto: any) => centroCusto.nomeCentroCusto)}
                sx={{ boxShadow: "5px 5px 10px 0 #00000025" }}
                multiple
                disableCloseOnSelect
                onChange={(e, valor: any) => {
                  if (props.setInformacaoProcesso) {
                    let centroCustoDemanda: Object[] = []

                    for (let centroCustoSelecionado of valor) {
                      for (let centroCustoBanco of centrosCustoBanco) {
                        if (centroCustoBanco.nomeCentroCusto == centroCustoSelecionado) {
                          centroCustoDemanda.push({ idCentroCusto: centroCustoBanco.idCentroCusto })
                        }
                      }
                    }

                    if (props.setCentroCusto) {
                      props.setCentroCusto(centroCustoDemanda)
                    }

                    const novaInfoDemanda = {
                      ...props.informacaoProcesso,
                      centroCustoDemanda: centroCustoDemanda,
                    };

                    if (novaInfoDemanda) {
                      props.setInformacaoProcesso(novaInfoDemanda);
                    }
                  }
                }}
                renderOption={(props, nomeCentroCusto: any, { selected }) => {
                  const objetoCentroCusto = centrosCustoBanco.find((cc: any) => cc.nomeCentroCusto == nomeCentroCusto)

                  return (
                    <li {...props} id="listaCentroCusto" >
                      <Checkbox
                        id="checkbox"
                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                        style={{ marginRight: 8 }}
                        checked={selected} />

                      <span onClick={lerTexto}>
                        {objetoCentroCusto.numeroCentroCusto} - {nomeCentroCusto}
                      </span>
                    </li>
                  );
                }}
                options={centroCustoSelect}
                renderInput={(params) => <TextField {...params} onClick={lerTexto} />} />
            ) : (
              <AutocompleteEdited
                id="centrosDeCusto"
                sx={{ boxShadow: "5px 5px 10px 0 #00000025" }}
                value={centrosDeCustoCriacao}
                multiple
                disableCloseOnSelect
                onChange={(e, valor: any) => {
                  let centroCustoDemanda: Object[] = []
                  for (let centroCustoSelecionado of valor) {
                    for (let centroCustoBanco of centrosCustoBanco) {
                      if (centroCustoBanco.nomeCentroCusto == centroCustoSelecionado) {
                        centroCustoDemanda.push({ idCentroCusto: centroCustoBanco.idCentroCusto, nomeCentroCusto: centroCustoBanco.nomeCentroCusto })
                      }
                    }
                  }

                  setCentrosDeCustoCriacao(centroCustoDemanda.map((centroCusto: any) => centroCusto.nomeCentroCusto))

                  if (props.setCentroCusto) {
                    props.setCentroCusto(centroCustoDemanda)
                  }
                }}
                renderOption={(props, nomeCentroCusto: any, { selected }) => {
                  const objetoCentroCusto = centrosCustoBanco.find((cc: any) => cc.nomeCentroCusto == nomeCentroCusto)

                  return (
                    <li {...props} id="listaCentroCusto">
                      <Checkbox
                        id="checkbox"
                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      <span onClick={lerTexto}>
                        {objetoCentroCusto.numeroCentroCusto} - {nomeCentroCusto}
                      </span>
                    </li>
                  );
                }}
                options={centroCustoSelect}
                renderInput={(params) => <TextField sx={{
                  backgroundColor: "#eee",
                  borderRadius: "10px",
                  boxShadow: "5px 5px 10px 0 #00000025",
                  "& fieldset": { border: "none" }
                }} {...params} onClick={lerTexto} />}
              />)}
          </BoxContainerCentroCusto>
        </BoxContainerLabels>
      </BoxContainerGeralInformacaoGeral>
    </>
  );
}