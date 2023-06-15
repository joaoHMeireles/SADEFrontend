import { useContext, useState } from "react";
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

export const BeneficioRealRender = (props: { index: number }) => {
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

export const BeneficioPotencialRender = (props: { index: number }) => {
    const { lerTexto } = useContext(TextReaderContext) as any
    const [currencyInput, setCurrencyInput] = useState(0);
    const [valueInput, setValueInput] = useState<any>();

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

export const BeneficioQualitativoRender = (props: { index: number }) => {
    const { lerTexto } = useContext(TextReaderContext) as any

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