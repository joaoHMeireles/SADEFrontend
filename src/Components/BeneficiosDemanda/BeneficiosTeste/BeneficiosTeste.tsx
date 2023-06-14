import {
    BoxContainerDivisorio,
    BoxContainerGeral,
    BoxContainerGeralBeneficio, BoxDescricaoRequisitosControle, BoxFrequencia, BoxIcones, BoxInputs, BoxInputsAbaixo, BoxInputsAcima,
    BoxTitulos, BoxValorMensal, FormControlEdited, SelectEdited, TextFieldEdited, TypographyLabels,
    TypographyTitulos
} from "../BeneficiosDemanda.styles";
import { useContext, useEffect, useState } from "react";
import { TextReaderContext } from "../../TextReaderContext/TextReaderContext";
import { InputAdornment, OutlinedInput } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

const moedas = [
    "DOLAR",
    "EURO",
    "REAL"
]

const valoresFrequencia = [
    "DIARIAMENTE",
    "SEMANALMENTE",
    "MENSALMENTE"
]

// criacao demanda - ler inputs - PRONTO
// criacao proposta - inputs preenchidos ou let inputs
// rascunho - inputs preenchidos ou ler inputs
// demanda devolvida - inputs preenchidos ou ler inputs

export default function BeneneficiosTeste(props: {
    proposta: boolean,
    numeroBeneficiosReais: number,
    setNumeroBeneficiosReais: any,
    numeroBeneficiosPotenciais: number,
    setNumeroBeneficiosPotenciais: any,
    numeroBeneficiosQualitativos: number,
    setNumeroBeneficiosQualitativos: any,
    frequenciaUso: any,
    setFrequenciaUso: any
}) {
    const { lerTexto } = useContext(TextReaderContext) as any

    if (props.proposta) {
        useEffect(() => {

            // inputs preenchidos
        }, [])
    }

    // useEffect(() => {
    //     console.log(props.frequenciaUso);
    // }, [props.frequenciaUso])

    let beneficiosReais: any[] = [];

    const BeneficioRealRender = (props: { index: number }) => {
        const { lerTexto } = useContext(TextReaderContext) as any
        const [currencyInput, setCurrencyInput] = useState(0);
        const [valueInput, setValueInput] = useState<any>();

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
                                    // onChange={(e: any) => {
                                    //     setValueInput(e.target.value);

                                    //     if (atualizarObjetos != null) {
                                    //         atualizarObjetos();
                                    //     } else {
                                    //         atualizarBeneficiosDemanda(
                                    //             props.informacaoProcesso.beneficiosDemanda,
                                    //             idBeneficioComponente,
                                    //             setIdBeneficioComponente,
                                    //             "valor",
                                    //             e.target.value,
                                    //             props.informacaoProcesso,
                                    //             props.setInformacaoProcesso,
                                    //             "REAL"
                                    //         );
                                    //     }
                                    // }}
                                    >
                                        <OutlinedInput value={valueInput} id={`valorMensalReal${props.index}`} startAdornment={<InputAdornment position="start">R$</InputAdornment>} />
                                    </FormControlEdited>
                                    :
                                    currencyInput == 1 ?
                                        <FormControlEdited
                                            variant="outlined"
                                            sx={{ marginRight: "2rem" }}
                                        // onChange={(e: any) => {
                                        //     setValueInput(e.target.value);

                                        //     if (atualizarObjetos != null) {
                                        //         atualizarObjetos();
                                        //     } else {
                                        //         atualizarBeneficiosDemanda(
                                        //             props.informacaoProcesso.beneficiosDemanda,
                                        //             idBeneficioComponente,
                                        //             setIdBeneficioComponente,
                                        //             "valor",
                                        //             e.target.value,
                                        //             props.informacaoProcesso,
                                        //             props.setInformacaoProcesso,
                                        //             "REAL"
                                        //         );
                                        //     }
                                        // }}
                                        >
                                            <OutlinedInput value={valueInput} id={`valorMensalReal${props.index}`} startAdornment={<InputAdornment position="start">$</InputAdornment>} />
                                        </FormControlEdited>
                                        :
                                        <FormControlEdited
                                            variant="outlined"
                                            sx={{ marginRight: "2rem" }}
                                        // onChange={(e: any) => {
                                        //     setValueInput(e.target.value);

                                        //     if (atualizarObjetos != null) {
                                        //         atualizarObjetos();
                                        //     } else {
                                        //         atualizarBeneficiosDemanda(
                                        //             props.informacaoProcesso.beneficiosDemanda,
                                        //             idBeneficioComponente,
                                        //             setIdBeneficioComponente,
                                        //             "valor",
                                        //             e.target.value,
                                        //             props.informacaoProcesso,
                                        //             props.setInformacaoProcesso,
                                        //             "REAL"
                                        //         );
                                        //     }
                                        // }}
                                        >
                                            <OutlinedInput value={valueInput} id={`valorMensalReal${props.index}`} startAdornment={<InputAdornment position="start">€</InputAdornment>} />
                                        </FormControlEdited>
                                }

                                <SelectEdited
                                    id={`moedaReal${props.index}`}
                                    sx={{ width: "7vw" }}
                                // value={moedaBeneficio}
                                // onChange={(e: any) => {
                                //     setMoedaBeneficio(e.target.value);

                                //     console.log("e ==> ", e.target.value)
                                //     console.log("props.moeda ==> " + props.moedaReal)

                                //     props.moedaReal.push(e.target.value);
                                //     props.setMoedaReal(props.moedaReal);

                                //     if (atualizarObjetos != null) {
                                //         atualizarObjetos();
                                //     } else {
                                //         atualizarBeneficiosDemanda(
                                //             props.informacaoProcesso.beneficiosDemanda,
                                //             idBeneficioComponente,
                                //             setIdBeneficioComponente,
                                //             "moeda",
                                //             e.target.value,
                                //             props.informacaoProcesso,
                                //             props.setInformacaoProcesso,
                                //             "REAL"
                                //         );
                                //     }
                                // }}
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
                                // onChange={(e: any) => {
                                //     if (atualizarObjetos != null) {
                                //         atualizarObjetos();* /}
                                //     } else {* /}
                                //         atualizarBeneficiosDemanda(
                                //             props.informacaoProcesso.beneficiosDemanda,
                                //             idBeneficioComponente,
                                //             setIdBeneficioComponente,
                                //             "descricao",
                                //             e.target.value,
                                //             props.informacaoProcesso,
                                //             props.setInformacaoProcesso,
                                //             "REAL"
                                //         );
                                //     }
                                // }}
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

    for (let i = 0; i < props.numeroBeneficiosReais; i++) {
        beneficiosReais.push(<BeneficioRealRender key={i} index={i} />)
    }

    return (
        <>
            <BoxContainerGeral>
                <BoxTitulos>
                    <TypographyTitulos onClick={lerTexto}>Benefício Real</TypographyTitulos>
                </BoxTitulos>

                <BeneficioReal numeroBeneficiosReais={props.numeroBeneficiosReais} beneficiosReais={beneficiosReais} />

                <BoxIcones>
                    {props.numeroBeneficiosReais > 0 &&
                        (
                            <RemoveRoundedIcon
                                sx={{
                                    fontSize: "2rem",
                                    marginRight: 3,
                                    cursor: "pointer",
                                    color: "#595959",
                                }}
                                onClick={() => {
                                    props.setNumeroBeneficiosReais(props.numeroBeneficiosReais - 1)

                                }} />
                        )
                    }
                    <AddRoundedIcon
                        sx={{ fontSize: "2rem", cursor: "pointer", color: "#595959" }}
                        onClick={() => {
                            props.setNumeroBeneficiosReais(props.numeroBeneficiosReais + 1)
                        }} />
                </BoxIcones>

                <BoxTitulos>
                    <TypographyTitulos onClick={lerTexto}>Benefício Potencial</TypographyTitulos>
                </BoxTitulos>

                <BeneficioPotencial numeroBeneficiosPotencias={props.numeroBeneficiosPotenciais} />

                <BoxIcones>
                    {props.numeroBeneficiosPotenciais > 0 &&
                        (
                            <RemoveRoundedIcon
                                sx={{
                                    fontSize: "2rem",
                                    marginRight: 3,
                                    cursor: "pointer",
                                    color: "#595959",
                                }}
                                onClick={() => {
                                    props.setNumeroBeneficiosPotenciais(props.numeroBeneficiosPotenciais - 1)
                                }} />
                        )
                    }
                    <AddRoundedIcon
                        sx={{ fontSize: "2rem", cursor: "pointer", color: "#595959" }}
                        onClick={() => {
                            props.setNumeroBeneficiosPotenciais(props.numeroBeneficiosPotenciais + 1)
                        }} />
                </BoxIcones>

                <BoxTitulos>
                    <TypographyTitulos onClick={lerTexto}>Benefício Qualitativo</TypographyTitulos>
                </BoxTitulos>

                <BeneficioQualitativo numeroBeneficiosQualitativos={props.numeroBeneficiosQualitativos} />

                <BoxIcones>
                    {props.numeroBeneficiosQualitativos > 0 &&
                        (
                            <RemoveRoundedIcon
                                sx={{
                                    fontSize: "2rem",
                                    marginRight: 3,
                                    cursor: "pointer",
                                    color: "#595959",
                                }}
                                onClick={() => {
                                    props.setNumeroBeneficiosQualitativos(props.numeroBeneficiosQualitativos - 1)

                                }} />
                        )
                    }
                    <AddRoundedIcon
                        sx={{ fontSize: "2rem", cursor: "pointer", color: "#595959" }}
                        onClick={() => {
                            props.setNumeroBeneficiosQualitativos(props.numeroBeneficiosQualitativos + 1)
                        }} />
                </BoxIcones>


                <BoxFrequencia>
                    <TypographyLabels onClick={lerTexto}>Frequência de uso da solução:</TypographyLabels>

                    <SelectEdited sx={{ width: "15vw" }}
                        id="frequenciaUso"
                        defaultValue={valoresFrequencia[0]}
                    >
                        {valoresFrequencia.map((valor: any, index: number) => {
                            return (
                                <MenuItem key={index} value={valor} onClick={lerTexto}>{valor}</MenuItem>
                            );
                        })}
                    </SelectEdited>
                </BoxFrequencia>

            </BoxContainerGeral >
        </>
    )
}

function BeneficioReal(props: { numeroBeneficiosReais: number, beneficiosReais: any }) {
    return <>{props.beneficiosReais}</>
}

function BeneficioPotencial(props: { numeroBeneficiosPotencias: number }) {
    const { lerTexto } = useContext(TextReaderContext) as any
    const [currencyInput, setCurrencyInput] = useState(0);
    const [valueInput, setValueInput] = useState<any>();

    let beneficiosPotenciais: any[] = []

    const BeneficioPotencial = (props: { index: number }) => {
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
                                    // onChange={(e: any) => {
                                    //     setValueInput(e.target.value);

                                    //     if (atualizarObjetos != null) {
                                    //         atualizarObjetos();
                                    //     } else {
                                    //         atualizarBeneficiosDemanda(
                                    //             props.informacaoProcesso.beneficiosDemanda,
                                    //             idBeneficioComponente,
                                    //             setIdBeneficioComponente,
                                    //             "valor",
                                    //             e.target.value,
                                    //             props.informacaoProcesso,
                                    //             props.setInformacaoProcesso,
                                    //             "POTENCIAL"
                                    //         );
                                    //     }
                                    // }}
                                    >
                                        <OutlinedInput value={valueInput} id={`valorMensalPotencial${props.index}`} startAdornment={<InputAdornment position="start">R$</InputAdornment>} />
                                    </FormControlEdited>
                                    :
                                    currencyInput == 1 ?
                                        <FormControlEdited
                                            variant="outlined"
                                            sx={{ marginRight: "2rem" }}
                                        // onChange={(e: any) => {
                                        //     setValueInput(e.target.value);

                                        //     if (atualizarObjetos != null) {
                                        //         atualizarObjetos()
                                        //     } else {
                                        //         atualizarBeneficiosDemanda(
                                        //             props.informacaoProcesso.beneficiosDemanda,
                                        //             idBeneficioComponente,
                                        //             setIdBeneficioComponente,
                                        //             "valor",
                                        //             e.target.value,
                                        //             props.informacaoProcesso,
                                        //             props.setInformacaoProcesso,
                                        //             "POTENCIAL"
                                        //         );
                                        //     }
                                        // }}
                                        >
                                            <OutlinedInput value={valueInput} id={`valorMensalPotencial${props.index}`} startAdornment={<InputAdornment position="start">$</InputAdornment>} />
                                        </FormControlEdited>
                                        :
                                        <FormControlEdited
                                            variant="outlined"
                                            sx={{ marginRight: "2rem" }}
                                        // onChange={(e: any) => {
                                        //     setValueInput(e.target.value);

                                        //     if (atualizarObjetos != null) {
                                        //         atualizarObjetos()
                                        //     } else {
                                        //         atualizarBeneficiosDemanda(
                                        //             props.informacaoProcesso.beneficiosDemanda,
                                        //             idBeneficioComponente,
                                        //             setIdBeneficioComponente,
                                        //             "valor",
                                        //             e.target.value,
                                        //             props.informacaoProcesso,
                                        //             props.setInformacaoProcesso,
                                        //             "POTENCIAL"
                                        //         );
                                        //     }
                                        // }}
                                        >
                                            <OutlinedInput value={valueInput} id={`valorMensalPotencial${props.index}`} startAdornment={<InputAdornment position="start">€</InputAdornment>} />
                                        </FormControlEdited>
                                }

                                <SelectEdited
                                    id={`moedaPotencial${props.index}`}
                                    sx={{ width: "7vw" }}
                                // value={moedaBeneficio}
                                // onChange={(e: any) => {
                                //     setMoedaBeneficio(e.target.value);

                                //     props.moedaPotencial.push(e.target.value);
                                //     props.setMoedaPotencial(props.moedaPotencial);

                                //     if (atualizarObjetos != null) {
                                //         atualizarObjetos();
                                //     } else {
                                //         atualizarBeneficiosDemanda(
                                //             props.informacaoProcesso.beneficiosDemanda,
                                //             idBeneficioComponente,
                                //             setIdBeneficioComponente,
                                //             "moeda",
                                //             e.target.value,
                                //             props.informacaoProcesso,
                                //             props.setInformacaoProcesso,
                                //             "POTENCIAL"
                                //         );
                                //     }
                                // }}
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
                                // onChange={(e: any) => {
                                //     if (atualizarObjetos != null) {
                                //         atualizarObjetos();
                                //     } else {
                                //         atualizarBeneficiosDemanda(
                                //             props.informacaoProcesso.beneficiosDemanda,
                                //             idBeneficioComponente,
                                //             setIdBeneficioComponente,
                                //             "descricao",
                                //             e.target.value,
                                //             props.informacaoProcesso,
                                //             props.setInformacaoProcesso,
                                //             "POTENCIAL"
                                //         );
                                //     }
                                // }}
                                multiline
                                maxRows={Infinity}>
                            </TextFieldEdited>
                        </BoxInputsAbaixo>
                    </BoxContainerDivisorio>
                </BoxContainerGeralBeneficio>
            </>
        )
    }

    for (let i = 0; i < props.numeroBeneficiosPotencias; i++) {
        beneficiosPotenciais.push(<BeneficioPotencial key={i} index={i} />)
    }

    return <>{beneficiosPotenciais}</>
}

function BeneficioQualitativo(props: { numeroBeneficiosQualitativos: number }) {
    const { lerTexto } = useContext(TextReaderContext) as any

    let beneficiosQualitativos: any[] = []

    const BeneficioQualitativo = (props: { index: number }) => {
        return (
            <>
                <BoxContainerGeralBeneficio key={props.index}>
                    <BoxDescricaoRequisitosControle>
                        <TypographyLabels onClick={lerTexto}>Descrição: </TypographyLabels>

                        <TextFieldEdited
                            id={`beneficiosQualitativos${props.index}`}
                            // onChange={(e: any) => {
                            //     if (atualizarObjetos != null) {
                            //         atualizarObjetos();
                            //     } else {
                            //         atualizarBeneficiosDemanda(
                            //             props.informacaoProcesso.beneficiosDemanda,
                            //             idBeneficioComponente,
                            //             setIdBeneficioComponente,
                            //             "descricao",
                            //             e.target.value,
                            //             props.informacaoProcesso,
                            //             props.setInformacaoProcesso,
                            //             "QUALITATIVO"
                            //         );
                            //     }
                            // }}
                            multiline
                            maxRows={Infinity}>
                        </TextFieldEdited>
                    </BoxDescricaoRequisitosControle>
                </BoxContainerGeralBeneficio>
            </>
        )
    }

    for (let i = 0; i < props.numeroBeneficiosQualitativos; i++) {
        beneficiosQualitativos.push(<BeneficioQualitativo key={i} index={i} />)
    }

    return <>{beneficiosQualitativos}</>
}