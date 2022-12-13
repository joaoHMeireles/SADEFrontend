import { useState } from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import {
  BoxContainerGeralInformacaoGeral,
  BoxContainerLabels,
  TypographyLabels,
  BoxContainerCentroCusto,
} from "./InformacaoGeral.styles";
import Checkbox from "@mui/material/Checkbox";

export default function InformacaoGeral() {
  const info = JSON.parse(localStorage.getItem("RASCUNHOESCOLHIDO") as string);

  const lista = [
    { label: "1234" },
    { label: "teste 2" },
    { label: "teste 3" },
    { label: "5678" },
    { label: "teste 5" },
  ];

  // for (let atributo in info) {
  //   if ((info as any)[atributo]) {
  //     if (atributo == "centrosDeCusto") {
  //       for (let i = 0; i < info[atributo].length; i++) {
  //         for (let j = 0; j < lista.length; j++) {
  //           if (lista[j].label == info[atributo][i]) {
  //             centroCusto.push(lista[j].label);
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

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
                    {centroCusto.label}
                  </li>
                );
              }}
              options={lista}
              renderInput={(params) => <TextField {...params} />}
            />
          </BoxContainerCentroCusto>
        </BoxContainerLabels>
      </BoxContainerGeralInformacaoGeral>
    </>
  );
}
