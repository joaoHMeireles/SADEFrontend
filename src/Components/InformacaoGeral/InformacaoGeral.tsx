import {useContext, useEffect, useState} from "react";

import TextField from "@mui/material/TextField";
import Autocomplete, {AutocompleteProps} from "@mui/material/Autocomplete";

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
import {Box, Button, ClickAwayListener} from "@mui/material";
import {TextReaderContext} from "../TextReaderContext/TextReaderContext";

export default function InformacaoGeral(props: {
    proposta: boolean,
    rascunho?: boolean,
    centroCusto?: any[],
    setCentroCusto?: React.Dispatch<React.SetStateAction<Object[]>>
    informacaoProcesso?: any
    setInformacaoProcesso?: React.Dispatch<React.SetStateAction<any>>
    partUmDemanda?: Function;
    editarDemanda?: boolean;
}) {
    // const info = JSON.parse(localStorage.getItem("RASCUNHOESCOLHIDO") as string);
    const {lerTexto} = useContext(TextReaderContext) as any
    const [paginaTooltip, setPaginaTooltip] = useState(0);
    const [centroCusto, setCentroCusto] = useState<any[]>([]);
    const [idCentroCusto, setIdCentroCusto] = useState<any[]>([]);

    const info = localStorage.getItem("DEMANDASELECIONADA") ? localStorage.getItem("DEMANDASELECIONADA") : localStorage.getItem("RASCUNHOESCOLHIDO")
    const demandaSelecionada = JSON.parse(info as string);

    useEffect(() => {
        api.get("/sade/centroCusto").then((res: any) => {
            const listaCentroCusto = res.data.map((centroCusto: any) => centroCusto.nomeCentroCusto)
            setIdCentroCusto(res.data)
            setCentroCusto(listaCentroCusto)
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
                    <TextField
                        id="titulo"
                        sx={{boxShadow: "5px 5px 10px 0 #00000050"}}
                        onChange={(e: any) => {
                            const novaInfoDemanda = {
                                ...props.informacaoProcesso,
                                tituloDemanda: e.target.value,
                            };

                            if (props.setInformacaoProcesso) {
                                props.setInformacaoProcesso(novaInfoDemanda);
                            }

                            if (props.partUmDemanda) {
                                props.partUmDemanda()
                            }
                        }}
                    />
                </BoxContainerLabels>
                <BoxContainerLabels>
                    <TypographyLabels onClick={lerTexto}>
                        Problema a ser resolvido (situação atual):
                    </TypographyLabels>
                    <TextField
                        id="situacaoAtual"
                        sx={{boxShadow: "5px 5px 10px 0 #00000050"}}
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

                            if (props.partUmDemanda) {
                                props.partUmDemanda()
                            }
                        }}
                    />
                </BoxContainerLabels>
                <BoxContainerLabels>
                    <TypographyLabels onClick={lerTexto}>
                        Proposta / Solicitação de proposta:
                    </TypographyLabels>
                    <TextField
                        id="objetivo"
                        sx={{boxShadow: "5px 5px 10px 0 #00000050"}}
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

                            if (props.partUmDemanda) {
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
                        {
                            props.proposta || props.rascunho || props.editarDemanda ? (
                                    <Autocomplete
                                        id="centrosDeCusto"
                                        defaultValue={demandaSelecionada.centroCustoDemanda.map((centroCusto: any) => centroCusto.nomeCentroCusto)}
                                        sx={{boxShadow: "5px 5px 10px 0 #00000050"}}
                                        multiple
                                        disableCloseOnSelect
                                        onChange={(e, valor: any) => {
                                            if (props.setInformacaoProcesso) {
                                                let centroCustoDemanda: Object[] = []

                                                for (let centroCustoSelecionado of valor) {
                                                    for (let centroCustoBanco of idCentroCusto) {
                                                        if (centroCustoBanco.nomeCentroCusto == centroCustoSelecionado) {
                                                            centroCustoDemanda.push({idCentroCusto: centroCustoBanco.idCentroCusto})
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
                                        renderOption={(props, centroCusto, {selected}) => {
                                            return (
                                                <li {...props} id="listaCentroCusto">
                                                    <Checkbox
                                                        id="checkbox"
                                                        icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                                                        checkedIcon={<CheckBoxIcon fontSize="small"/>}
                                                        style={{marginRight: 8}}
                                                        checked={selected}
                                                    />
                                                    <span onClick={lerTexto}>
                        {centroCusto}
                      </span>
                                                </li>
                                            );
                                        }}
                                        options={centroCusto}
                                        renderInput={(params) => <TextField {...params} onClick={lerTexto}/>}
                                    />) :
                                (
                                    <Autocomplete
                                        id="centrosDeCusto"
                                        sx={{boxShadow: "5px 5px 10px 0 #00000050"}}
                                        multiple
                                        disableCloseOnSelect
                                        onChange={(e, valor: any) => {
                                            let centroCustoDemanda: Object[] = []

                                            for (let centroCustoSelecionado of valor) {
                                                for (let centroCustoBanco of idCentroCusto) {
                                                    if (centroCustoBanco.nomeCentroCusto == centroCustoSelecionado) {
                                                        centroCustoDemanda.push({
                                                            idCentroCusto: centroCustoBanco.idCentroCusto,
                                                            nomeCentroCusto: centroCustoBanco.nomeCentroCusto
                                                        })
                                                    }
                                                }
                                            }

                                            if (props.setCentroCusto) {
                                                props.setCentroCusto(centroCustoDemanda)
                                            }
                                        }}
                                        renderOption={(props, centroCusto, {selected}) => {
                                            return (
                                                <li {...props} id="listaCentroCusto">
                                                    <Checkbox
                                                        id="checkbox"
                                                        icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                                                        checkedIcon={<CheckBoxIcon fontSize="small"/>}
                                                        style={{marginRight: 8}}
                                                        checked={selected}
                                                    />
                                                    <span onClick={lerTexto}>
                        {centroCusto}
                      </span>
                                                </li>
                                            );
                                        }}
                                        options={centroCusto}
                                        renderInput={(params) => <TextField {...params} onClick={lerTexto}/>}
                                    />)}
                    </BoxContainerCentroCusto>
                </BoxContainerLabels>
            </BoxContainerGeralInformacaoGeral>
        </>
    );
}
