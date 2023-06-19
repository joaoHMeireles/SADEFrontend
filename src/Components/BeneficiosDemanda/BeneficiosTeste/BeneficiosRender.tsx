import { useContext, useEffect, useState } from "react";
import { TextReaderContext } from "../../TextReaderContext/TextReaderContext";
import {
    BoxContainerDivisorio, BoxContainerGeralBeneficio, BoxDescricaoRequisitosControle, BoxInputs, BoxInputsAbaixo,
    BoxInputsAcima, BoxValorMensal, FormControlEdited, SelectEdited, TextFieldEdited,
    TypographyLabels
} from "../BeneficiosDemanda.styles";
import { InputAdornment, MenuItem, OutlinedInput } from "@mui/material";

const moedas = [
    "DOLAR",
    "EURO",
    "REAL"
]

export const BeneficioRealRender = (props: BeneficioRender) => {
    const { lerTexto } = useContext(TextReaderContext) as any
    const [currencyInput, setCurrencyInput] = useState(0);
    const [valueInput, setValueInput] = useState<any>();
    const [idBeneficioComponente, setIdBeneficioComponente] = useState<any>(props.idBeneficio);

    const [moedaBeneficio, setMoedaBeneficio] = useState(moedas[2]);

    useEffect(() => {
        if (props.proposta || props.rascunho) {
            for (const beneficio of props.beneficios) {
                if (beneficio.idBeneficio == props.idBeneficio) {
                    setMoedaBeneficio(beneficio.moeda)
                }
            }
        }
    }, [])

    useEffect(() => {
        switch (moedaBeneficio) {
            case "REAL": {
                setCurrencyInput(0);
                break;
            }
            case "DOLAR": {
                setCurrencyInput(1);
                break;
            }
            case "EURO": {
                setCurrencyInput(2);
                break;
            }
        }
    }, [moedaBeneficio]);

    return (
        <>
            <BoxContainerGeralBeneficio key={props.index}>
                <BoxContainerDivisorio>

                    <BoxInputsAcima>
                        <BoxValorMensal>
                            <TypographyLabels onClick={lerTexto}>Valor Mensal: </TypographyLabels>
                        </BoxValorMensal>
                        <BoxInputs>
                            {currencyInput == 0 ?
                                <FormControlEdited
                                    variant="outlined"
                                    sx={{ marginRight: "2rem" }}
                                    onChange={(e: any) => {
                                        setValueInput(e.target.value);

                                        if (props.atualizarObjetos != null) {
                                            props.atualizarObjetos();
                                        } else {
                                            atualizarBeneficiosDemanda(
                                                props.informacaoProcesso.beneficiosDemanda,
                                                idBeneficioComponente,
                                                setIdBeneficioComponente,
                                                "valor",
                                                e.target.value,
                                                props.informacaoProcesso,
                                                props.setInformacaoProcesso,
                                                "REAL"
                                            );
                                        }
                                    }}
                                >
                                    <OutlinedInput value={valueInput} id={`valorMensalReal${props.index}`} startAdornment={<InputAdornment position="start">R$</InputAdornment>} />
                                </FormControlEdited>
                                :
                                currencyInput == 1 ?
                                    <FormControlEdited
                                        variant="outlined"
                                        sx={{ marginRight: "2rem" }}
                                        onChange={(e: any) => {
                                            setValueInput(e.target.value);

                                            if (props.atualizarObjetos != null) {
                                                props.atualizarObjetos();
                                            } else {
                                                atualizarBeneficiosDemanda(
                                                    props.informacaoProcesso.beneficiosDemanda,
                                                    idBeneficioComponente,
                                                    setIdBeneficioComponente,
                                                    "valor",
                                                    e.target.value,
                                                    props.informacaoProcesso,
                                                    props.setInformacaoProcesso,
                                                    "REAL"
                                                );
                                            }
                                        }}
                                    >
                                        <OutlinedInput value={valueInput} id={`valorMensalReal${props.index}`} startAdornment={<InputAdornment position="start">$</InputAdornment>} />
                                    </FormControlEdited>
                                    :
                                    <FormControlEdited
                                        variant="outlined"
                                        sx={{ marginRight: "2rem" }}
                                        onChange={(e: any) => {
                                            setValueInput(e.target.value);

                                            if (props.atualizarObjetos != null) {
                                                props.atualizarObjetos();
                                            } else {
                                                atualizarBeneficiosDemanda(
                                                    props.informacaoProcesso.beneficiosDemanda,
                                                    idBeneficioComponente,
                                                    setIdBeneficioComponente,
                                                    "valor",
                                                    e.target.value,
                                                    props.informacaoProcesso,
                                                    props.setInformacaoProcesso,
                                                    "REAL"
                                                );
                                            }
                                        }}
                                    >
                                        <OutlinedInput value={valueInput} id={`valorMensalReal${props.index}`} startAdornment={<InputAdornment position="start">€</InputAdornment>} />
                                    </FormControlEdited>
                            }

                            <SelectEdited
                                id={`moedaReal${props.index}`}
                                sx={{ width: "7vw" }}
                                value={moedaBeneficio}
                                onChange={(e: any) => {
                                    setMoedaBeneficio(e.target.value);

                                    if (props.atualizarObjetos != null) {
                                        props.atualizarObjetos();
                                    } else {
                                        atualizarBeneficiosDemanda(
                                            props.informacaoProcesso.beneficiosDemanda,
                                            idBeneficioComponente,
                                            setIdBeneficioComponente,
                                            "moeda",
                                            e.target.value,
                                            props.informacaoProcesso,
                                            props.setInformacaoProcesso,
                                            "REAL"
                                        );
                                    }
                                }}
                            >
                                {moedas.map((option: any, index: number) => (
                                    <MenuItem id={`moedaRealoptions${props.index}`} key={index} value={option} onClick={lerTexto}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </SelectEdited>
                        </BoxInputs>
                    </BoxInputsAcima>

                    <BoxInputsAbaixo>
                        <TypographyLabels onClick={lerTexto}>Descrição: </TypographyLabels>
                        <TextFieldEdited
                            id={`descricaoReal${props.index}`}
                            onChange={(e: any) => {
                                if (props.atualizarObjetos != null) {
                                    props.atualizarObjetos();
                                } else {
                                    atualizarBeneficiosDemanda(
                                        props.informacaoProcesso.beneficiosDemanda,
                                        idBeneficioComponente,
                                        setIdBeneficioComponente,
                                        "descricao",
                                        e.target.value,
                                        props.informacaoProcesso,
                                        props.setInformacaoProcesso,
                                        "REAL"
                                    );
                                }
                            }}
                            multiline
                            maxRows={Infinity}
                            sx={{ width: "100%", boxShadow: "5px 5px 10px 0 #00000050" }}>
                        </TextFieldEdited>
                    </BoxInputsAbaixo>

                </BoxContainerDivisorio>

            </BoxContainerGeralBeneficio>
        </>
    )
}

export const BeneficioPotencialRender = (props: BeneficioRender) => {
    const { lerTexto } = useContext(TextReaderContext) as any
    const [currencyInput, setCurrencyInput] = useState(0);
    const [valueInput, setValueInput] = useState<any>();
    const [idBeneficioComponente, setIdBeneficioComponente] = useState<any>(props.idBeneficio);

    const [moedaBeneficio, setMoedaBeneficio] = useState(moedas[2]);

    useEffect(() => {
        if (props.proposta || props.rascunho) {
            for (const beneficio of props.beneficios) {
                if (beneficio.idBeneficio == props.idBeneficio) {
                    setMoedaBeneficio(beneficio.moeda)
                }
            }
        }
    }, [])

    useEffect(() => {
        switch (moedaBeneficio) {
            case "REAL": {
                setCurrencyInput(0);
                break;
            }
            case "DOLAR": {
                setCurrencyInput(1);
                break;
            }
            case "EURO": {
                setCurrencyInput(2);
                break;
            }
        }
    }, [moedaBeneficio]);

    return (
        <>
            <BoxContainerGeralBeneficio key={props.index}>
                <BoxContainerDivisorio>
                    <BoxInputsAcima>
                        <BoxValorMensal>
                            <TypographyLabels onClick={lerTexto}>Valor Mensal:</TypographyLabels>
                        </BoxValorMensal>

                        <BoxInputs>
                            {currencyInput == 0 ?
                                <FormControlEdited
                                    variant="outlined"
                                    sx={{ marginRight: "2rem" }}
                                    onChange={(e: any) => {
                                        setValueInput(e.target.value);

                                        if (props.atualizarObjetos != null) {
                                            props.atualizarObjetos();
                                        } else {
                                            atualizarBeneficiosDemanda(
                                                props.informacaoProcesso.beneficiosDemanda,
                                                idBeneficioComponente,
                                                setIdBeneficioComponente,
                                                "valor",
                                                e.target.value,
                                                props.informacaoProcesso,
                                                props.setInformacaoProcesso,
                                                "POTENCIAL"
                                            );
                                        }
                                    }}
                                >
                                    <OutlinedInput value={valueInput} id={`valorMensalPotencial${props.index}`} startAdornment={<InputAdornment position="start">R$</InputAdornment>} />
                                </FormControlEdited>
                                :
                                currencyInput == 1 ?
                                    <FormControlEdited
                                        variant="outlined"
                                        sx={{ marginRight: "2rem" }}
                                        onChange={(e: any) => {
                                            setValueInput(e.target.value);

                                            if (props.atualizarObjetos != null) {
                                                props.atualizarObjetos()
                                            } else {
                                                atualizarBeneficiosDemanda(
                                                    props.informacaoProcesso.beneficiosDemanda,
                                                    idBeneficioComponente,
                                                    setIdBeneficioComponente,
                                                    "valor",
                                                    e.target.value,
                                                    props.informacaoProcesso,
                                                    props.setInformacaoProcesso,
                                                    "POTENCIAL"
                                                );
                                            }
                                        }}
                                    >
                                        <OutlinedInput value={valueInput} id={`valorMensalPotencial${props.index}`} startAdornment={<InputAdornment position="start">$</InputAdornment>} />
                                    </FormControlEdited>
                                    :
                                    <FormControlEdited
                                        variant="outlined"
                                        sx={{ marginRight: "2rem" }}
                                        onChange={(e: any) => {
                                            setValueInput(e.target.value);

                                            if (props.atualizarObjetos != null) {
                                                props.atualizarObjetos()
                                            } else {
                                                atualizarBeneficiosDemanda(
                                                    props.informacaoProcesso.beneficiosDemanda,
                                                    idBeneficioComponente,
                                                    setIdBeneficioComponente,
                                                    "valor",
                                                    e.target.value,
                                                    props.informacaoProcesso,
                                                    props.setInformacaoProcesso,
                                                    "POTENCIAL"
                                                );
                                            }
                                        }}
                                    >
                                        <OutlinedInput value={valueInput} id={`valorMensalPotencial${props.index}`} startAdornment={<InputAdornment position="start">€</InputAdornment>} />
                                    </FormControlEdited>
                            }

                            <SelectEdited
                                id={`moedaPotencial${props.index}`}
                                sx={{ width: "7vw" }}
                                value={moedaBeneficio}
                                onChange={(e: any) => {
                                    setMoedaBeneficio(e.target.value);

                                    if (props.atualizarObjetos != null) {
                                        props.atualizarObjetos();
                                    } else {
                                        atualizarBeneficiosDemanda(
                                            props.informacaoProcesso.beneficiosDemanda,
                                            idBeneficioComponente,
                                            setIdBeneficioComponente,
                                            "moeda",
                                            e.target.value,
                                            props.informacaoProcesso,
                                            props.setInformacaoProcesso,
                                            "POTENCIAL"
                                        );
                                    }
                                }}
                            >
                                {moedas.map((moeda: any, index: number) => (
                                    <MenuItem id={`moedaPotencial${props.index}`} key={index} value={moeda} onClick={lerTexto}>
                                        {moeda}
                                    </MenuItem>
                                ))}
                            </SelectEdited>
                        </BoxInputs>
                    </BoxInputsAcima>

                    <BoxInputsAbaixo>
                        <TypographyLabels onClick={lerTexto}>Descrição: </TypographyLabels>

                        <TextFieldEdited
                            id={`descricaoPotencial${props.index}`}
                            onChange={(e: any) => {
                                if (props.atualizarObjetos != null) {
                                    props.atualizarObjetos();
                                } else {
                                    atualizarBeneficiosDemanda(
                                        props.informacaoProcesso.beneficiosDemanda,
                                        idBeneficioComponente,
                                        setIdBeneficioComponente,
                                        "descricao",
                                        e.target.value,
                                        props.informacaoProcesso,
                                        props.setInformacaoProcesso,
                                        "POTENCIAL"
                                    );
                                }
                            }}
                            multiline
                            maxRows={Infinity}>
                        </TextFieldEdited>
                    </BoxInputsAbaixo>
                </BoxContainerDivisorio>
            </BoxContainerGeralBeneficio>
        </>
    )
}

export const BeneficioQualitativoRender = (props: BeneficioRender) => {
    const { lerTexto } = useContext(TextReaderContext) as any

    const [idBeneficioComponente, setIdBeneficioComponente] = useState<any>(props.idBeneficio);

    return (
        <>
            <BoxContainerGeralBeneficio key={props.index}>
                <BoxDescricaoRequisitosControle>
                    <TypographyLabels onClick={lerTexto}>Descrição: </TypographyLabels>

                    <TextFieldEdited
                        id={`beneficiosQualitativos${props.index}`}
                        onChange={(e: any) => {
                            if (props.atualizarObjetos != null) {
                                props.atualizarObjetos();
                            } else {
                                atualizarBeneficiosDemanda(
                                    props.informacaoProcesso.beneficiosDemanda,
                                    idBeneficioComponente,
                                    setIdBeneficioComponente,
                                    "descricao",
                                    e.target.value,
                                    props.informacaoProcesso,
                                    props.setInformacaoProcesso,
                                    "QUALITATIVO"
                                );
                            }
                        }
                        }
                        multiline
                        maxRows={Infinity}>
                    </TextFieldEdited>

                </BoxDescricaoRequisitosControle>
            </BoxContainerGeralBeneficio>
        </>
    )
}

function atualizarBeneficiosDemanda(
    atualizacaoBeneficiosDemanda: any[],
    idBeneficioComponente: number,
    setIdBeneficioComponente: React.Dispatch<React.SetStateAction<number>>,
    nomeAtributo: string,
    valorInput: string,
    informacaoProcesso: any,
    setInformacaoProcesso: React.Dispatch<React.SetStateAction<any>>,
    tipoBeneficio: string
) {
    const beneficioComponente = atualizacaoBeneficiosDemanda.find((beneficio: any) => beneficio.idBeneficio == idBeneficioComponente);
    let newBeneficio: {
        idBeneficio?: number,
        descricao?: string,
        moeda?: string,
        tipoBeneficio?: string,
        valor?: number,
        novo?: boolean
    };

    if (beneficioComponente == null) {
        let idNovoBeneficio = -1;

        if (atualizacaoBeneficiosDemanda.length == 0) {
            idNovoBeneficio = 1;
        } else {
            idNovoBeneficio = atualizacaoBeneficiosDemanda[atualizacaoBeneficiosDemanda.length - 1].idBeneficio + 1;
        }

        setIdBeneficioComponente(idNovoBeneficio);

        newBeneficio = {
            idBeneficio: idNovoBeneficio,
            [nomeAtributo]: Number.parseInt(valorInput),
            novo: true
        };

        atualizacaoBeneficiosDemanda.push(newBeneficio);
    } else {
        newBeneficio = {
            ...beneficioComponente,
            [nomeAtributo]: valorInput as any,
            tipoBeneficio: tipoBeneficio
        }

        let index = -1;

        for (let i = 0; i < atualizacaoBeneficiosDemanda.length; i++) {
            if (atualizacaoBeneficiosDemanda[i].idBeneficio == idBeneficioComponente) {
                index = i;
            }
        }

        atualizacaoBeneficiosDemanda[index] = newBeneficio;
    }

    const novaInfoDemanda = {
        ...informacaoProcesso,
        beneficiosDemanda: atualizacaoBeneficiosDemanda
    };

    if (novaInfoDemanda) {
        setInformacaoProcesso(novaInfoDemanda);
    }
}

interface BeneficioRender {
    index: number,
    proposta: boolean,
    rascunho: boolean,
    beneficios: any,
    informacaoProcesso: any,
    setInformacaoProcesso: any,
    idBeneficio?: number,
    atualizarObjetos: any
}