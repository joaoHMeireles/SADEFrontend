import { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import {
  BoxContainerGeralInformacaoGeral,
  BoxContainerLabels,
  TypographyLabels,
  BoxContainerCentroCusto,
} from "./InformacaoGeral.styles";
import Checkbox from "@mui/material/Checkbox";
import api from "../../api/api";

export default function InformacaoGeral(props: { proposta: boolean, centroCusto: any[], setCentroCusto: React.Dispatch<React.SetStateAction<any[]>> }) {
  // const info = JSON.parse(localStorage.getItem("RASCUNHOESCOLHIDO") as string);


  const [centroCusto, setCentroCusto] = useState<any[]>([]);

  useEffect(() => {
    api.get("/sod/centroCusto").then((res) => {
      const lista = res.data.map((centroCusto: any) => centroCusto.nomeCentroCusto)

      setCentroCusto(lista)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  useEffect(() => {
    if (props.proposta) {
      const demandaSelecionada = JSON.parse(
        localStorage.getItem("DEMANDASELECIONADA") as string
      );

      for (let atributo in demandaSelecionada) {
        if ((demandaSelecionada as any)[atributo]) {
          const inputAtributo = document.getElementById(
            getIdByAtributo(atributo)
          ) as HTMLInputElement;
          if (inputAtributo) {
            if (inputAtributo.id == "titulo") {
              inputAtributo.value = demandaSelecionada.titulo;
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
      console.log(demandaSelecionada);
    }
  }, []);

  function getIdByAtributo(atributo: string) {
    const idsInputsAtributo = {
      titulo: "titulo",
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
          <TypographyLabels>Título:</TypographyLabels>
          <TextField
            id="titulo"
            sx={{ boxShadow: "5px 5px 10px 0 #00000050" }}
          />
        </BoxContainerLabels>
        <BoxContainerLabels>
          <TypographyLabels>
            Problema a ser resolvido (situação atual):
          </TypographyLabels>
          <TextField
            id="situacaoAtual"
            sx={{ boxShadow: "5px 5px 10px 0 #00000050" }}
            multiline
            rows={7}
            maxRows={Infinity}
          />
        </BoxContainerLabels>
        <BoxContainerLabels>
          <TypographyLabels>
            Proposta / Solicitação de proposta:
          </TypographyLabels>
          <TextField
            id="objetivo"
            sx={{ boxShadow: "5px 5px 10px 0 #00000050" }}
            multiline
            rows={7}
            maxRows={Infinity}
          />
        </BoxContainerLabels>
        <BoxContainerLabels>
          <BoxContainerCentroCusto>
            <TypographyLabels>Centros de custo:</TypographyLabels>
            <Autocomplete
              id="centrosDeCusto"
              sx={{ boxShadow: "5px 5px 10px 0 #00000050" }}
              multiple
              disableCloseOnSelect
              onChange={(e, valor: any) => {
                props.setCentroCusto(valor)
              }}
              renderOption={(props, centroCusto, { selected }) => {
                return (
                  <li {...props}>
                    <Checkbox
                      id="checkBox"
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {centroCusto}
                  </li>
                );
              }}
              options={centroCusto}
              renderInput={(params) => <TextField {...params} />}
            />
          </BoxContainerCentroCusto>
        </BoxContainerLabels>
      </BoxContainerGeralInformacaoGeral>
    </>
  );
}
