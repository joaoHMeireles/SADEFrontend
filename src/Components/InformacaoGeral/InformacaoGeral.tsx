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
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Box, Button, ClickAwayListener } from "@mui/material";

export default function InformacaoGeral(props: { proposta: boolean, centroCusto?: any[], setCentroCusto?: React.Dispatch<React.SetStateAction<Object[]>> }) {
  // const info = JSON.parse(localStorage.getItem("RASCUNHOESCOLHIDO") as string);
  const [paginaTooltip, setPaginaTooltip] = useState(0);
  const [centroCusto, setCentroCusto] = useState<any[]>([]);
  const [idCentroCusto, setIdCentroCusto] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const demandaSelecionada = JSON.parse(
    localStorage.getItem("DEMANDASELECIONADA") as string
  );

  useEffect(() => {
    api.get("/sod/centroCusto").then((res: any) => {
      const listaCentroCusto = res.data.map((centroCusto: any) => centroCusto.nomeCentroCusto)
      setIdCentroCusto(res.data)
      setCentroCusto(listaCentroCusto)
    }).catch((err: any) => {
      console.log(err);
    })
  }, [])

  useEffect(() => {
    if (props.proposta) {
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
          <TypographyLabels>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <div>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={open}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title={
                    <>
                      <Box sx={{ width: "200px", height: "150px" }}>
                        {paginaTooltip == 0 ?
                          <Box>
                            informações sobre o titulo e o que deveria ser colocado
                          </Box>
                          : paginaTooltip == 1 ?
                            <Box>
                              informações sobre oproblema a ser resolvido
                            </Box>
                            : paginaTooltip == 2 ?
                              <Box>
                                informações sobre a proposta e tudo mais
                              </Box>
                              :
                              <Box>
                                informações sobre os centros de custo
                              </Box>
                        }
                        <Box color={"white"}>
                          {paginaTooltip > 0 &&
                            <Button onClick={() => { setPaginaTooltip(paginaTooltip - 1) }} sx={{ color: "#ffffff" }}>
                              Voltar
                            </Button>
                          }
                          {paginaTooltip < 3 &&
                            <Button onClick={() => { setPaginaTooltip(paginaTooltip + 1) }} sx={{ color: "#ffffff" }}>
                              Próximo
                            </Button>
                          }
                        </Box>
                      </Box>
                    </>
                  }
                >
                  <IconButton onClick={handleTooltipOpen}>
                    <HelpOutlineIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </div>
            </ClickAwayListener>

            Título:
          </TypographyLabels>
          <TextField
            id="titulo"
            sx={{ boxShadow: "5px 5px 10px 0 #00000050" }}
          />
        </BoxContainerLabels>
        <BoxContainerLabels>
          <TypographyLabels>
            <Tooltip title="Escreva uma breve explicação da situação atual, descrevendo o problema em mais detalhes. Forneça informações relevantes e quantitativas, se possível, para apoiar sua argumentação">
              <IconButton>
                <HelpOutlineIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            Problema a ser resolvido (situação atual):
          </TypographyLabels>
          <TextField
            id="situacaoAtual"
            sx={{ boxShadow: "5px 5px 10px 0 #00000050" }}
            multiline
            maxRows={Infinity}
          />
        </BoxContainerLabels>
        <BoxContainerLabels>
          <TypographyLabels>
            <Tooltip title="Proponha uma solução ou solicite uma proposta para resolver o problema. Se você já tiver uma ideia de como resolver o problema, descreva-a em detalhes. Se você não tiver uma solução, solicite propostas de soluções de outras pessoas ou organizações">
              <IconButton>
                <HelpOutlineIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            Proposta / Solicitação de proposta:
          </TypographyLabels>
          <TextField
            id="objetivo"
            sx={{ boxShadow: "5px 5px 10px 0 #00000050" }}
            multiline
            maxRows={Infinity}
          />
        </BoxContainerLabels>
        <BoxContainerLabels>
          <BoxContainerCentroCusto>
            <TypographyLabels>
              <Tooltip title="Identifique os centros de custo envolvidos na solução do problema. Isso pode incluir recursos financeiros, materiais ou humanos necessários para implementar a solução">
                <IconButton>
                  <HelpOutlineIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              Centros de custo:
            </TypographyLabels>
            {props.proposta ? (
              <Autocomplete
                id="centrosDeCusto"
                defaultValue={demandaSelecionada.centroCustoDemanda.map((centroCusto: any) => centroCusto.nomeCentroCusto)}
                sx={{ boxShadow: "5px 5px 10px 0 #00000050" }}
                multiple
                disableCloseOnSelect
                onChange={(e, valor: any) => {
                  let centroCustoDemanda: Object[] = []

                  for (let centroCustoSelecionado of valor) {
                    for (let centroCustoBanco of idCentroCusto) {
                      if (centroCustoBanco.nomeCentroCusto == centroCustoSelecionado) {
                        centroCustoDemanda.push({ idCentroCusto: centroCustoBanco.idCentroCusto })
                      }
                    }
                  }

                  if (props.setCentroCusto) {
                    props.setCentroCusto(centroCustoDemanda)
                  }
                }}
                renderOption={(props, centroCusto, { selected }) => {
                  return (
                    <li {...props} id="listaCentroCusto">
                      <Checkbox
                        id="checkbox"
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
              />) : (
              <Autocomplete
                id="centrosDeCusto"
                sx={{ boxShadow: "5px 5px 10px 0 #00000050" }}
                multiple
                disableCloseOnSelect
                onChange={(e, valor: any) => {
                  let centroCustoDemanda: Object[] = []

                  for (let centroCustoSelecionado of valor) {
                    for (let centroCustoBanco of idCentroCusto) {
                      if (centroCustoBanco.nomeCentroCusto == centroCustoSelecionado) {
                        centroCustoDemanda.push({ idCentroCusto: centroCustoBanco.idCentroCusto })
                      }
                    }
                  }

                  if (props.setCentroCusto) {
                    props.setCentroCusto(centroCustoDemanda)
                  }
                }}
                renderOption={(props, centroCusto, { selected }) => {
                  return (
                    <li {...props} id="listaCentroCusto">
                      <Checkbox
                        id="checkbox"
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
              />)}

          </BoxContainerCentroCusto>
        </BoxContainerLabels>
      </BoxContainerGeralInformacaoGeral>
    </>
  );
}
