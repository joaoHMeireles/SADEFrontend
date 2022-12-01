import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import {
  BoxContainerGeralInformacaoGeral,
  BoxContainerLabels,
  TypographyLabels,
  BoxContainerCentroCusto,
} from "./InformacaoGeral.styles";

export default function InformacaoGeral() {
  const listaTeste = [
    { label: "teste 1" },
    { label: "teste 2" },
    { label: "teste 3" },
    { label: "teste 4" },
    { label: "teste 5" },
  ];

  return (
    <>
      <BoxContainerGeralInformacaoGeral>
        <BoxContainerLabels>
          <TypographyLabels>Título:</TypographyLabels>
          <TextField />
        </BoxContainerLabels>
        <BoxContainerLabels>
          <TypographyLabels>
            Problema a ser resolvido (situação atual):
          </TypographyLabels>
          <TextField multiline rows={7} maxRows={Infinity} />
        </BoxContainerLabels>
        <BoxContainerLabels>
          <TypographyLabels>
            Proposta / Solicitação de proposta:
          </TypographyLabels>
          <TextField multiline rows={7} maxRows={Infinity} />
        </BoxContainerLabels>
        <BoxContainerLabels>
          <BoxContainerCentroCusto>
            <TypographyLabels>Centros de custo:</TypographyLabels>
            <Autocomplete
              multiple
              disablePortal
              options={listaTeste}
              renderInput={(params) => <TextField {...params} />}
            />
          </BoxContainerCentroCusto>
        </BoxContainerLabels>
      </BoxContainerGeralInformacaoGeral>
    </>
  );
}
