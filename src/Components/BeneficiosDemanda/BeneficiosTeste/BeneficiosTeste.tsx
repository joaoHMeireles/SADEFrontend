import Box from "@mui/material/Box";
import {
    BoxContainerDivisorio,
    BoxContainerGeral,
    BoxContainerGeralBeneficio, BoxDescricaoRequisitosControle, BoxFrequencia, BoxIcones, BoxInputs, BoxInputsAbaixo, BoxInputsAcima,
    BoxTitulos, BoxValorMensal, FormControlEdited, SelectEdited, TextFieldEdited, TypographyLabels,
    TypographyTitulos
} from "../BeneficiosDemanda.styles";
import { useContext, useEffect, useState } from "react";
import { TextReaderContext } from "../../TextReaderContext/TextReaderContext";
import TextField from "@mui/material/TextField";
import { FormControl, InputAdornment, OutlinedInput, Select } from "@mui/material";
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

export default function BeneneficiosTeste() {
    const { lerTexto } = useContext(TextReaderContext) as any
    const [numeroBeneficiosReais, setNumeroBeneficiosReais] = useState<number>(1);
    const [numeroBeneficiosPotenciais, setNumeroBeneficiosPotenciais] = useState<number>(1);
    // const [numeroBeneficiosQualitativos, setNumeroBeneficiosQualitativos] = useState<number>(0);
    const [listaBeneficiosReal, setListaBeneficiosReal] = useState<any[]>(
        [
            <BeneficioReal index={0} numeroBeneficiosReais={numeroBeneficiosReais} />
        ]
    );
    const [listaBeneficiosPotencial, setListaBeneficiosPotencial] = useState<any[]>([
        <BeneficioPotencial index={0} numeroBeneficiosPotencias={numeroBeneficiosPotenciais} />
    ]);
    const [listaBeneficiosQualitativos, setListaBeneficiosQualitativos] = useState<any[]>(
        [
            <BeneficioQualitativo index={0} />
        ]
    );

    useEffect(() => {
        console.log(listaBeneficiosReal);
    }, [])

    return (
        <>
            <BoxContainerGeral>
                <BoxTitulos>
                    <TypographyTitulos onClick={lerTexto}>Benefício Real</TypographyTitulos>
                </BoxTitulos>

                <BeneficioReal index={listaBeneficiosReal.length} numeroBeneficiosReais={numeroBeneficiosReais} />
                {/* {listaBeneficiosReal} */}

                <BoxIcones>
                    {numeroBeneficiosReais > 0 &&
                        (
                            <RemoveRoundedIcon
                                sx={{
                                    fontSize: "2rem",
                                    marginRight: 3,
                                    cursor: "pointer",
                                    color: "#595959",
                                }}
                                onClick={() => {
                                    // console.log("Entrou -");
                                    // console.log("Antes: ", listaBeneficiosReal);
                                    // listaBeneficiosReal.pop();
                                    // console.log("Depois: ", listaBeneficiosReal);

                                    // setListaBeneficiosReal(listaBeneficiosReal)

                                    setNumeroBeneficiosReais(numeroBeneficiosReais - 1)

                                }} />
                        )
                    }
                    <AddRoundedIcon
                        sx={{ fontSize: "2rem", cursor: "pointer", color: "#595959" }}
                        onClick={() => {
                            // console.log("Entrou +");

                            // console.log("Antes: ", listaBeneficiosReal);
                            // listaBeneficiosReal.push(<BeneficioReal index={listaBeneficiosReal.length + 1} />)
                            // console.log("Depois: ", listaBeneficiosReal);
                            // setListaBeneficiosReal(listaBeneficiosReal)
                            setNumeroBeneficiosReais(numeroBeneficiosReais + 1)
                        }} />
                </BoxIcones>

                <BoxTitulos>
                    <TypographyTitulos onClick={lerTexto}>Benefício Potencial</TypographyTitulos>
                </BoxTitulos>

                <BeneficioPotencial index={listaBeneficiosPotencial.length} numeroBeneficiosPotencias={numeroBeneficiosPotenciais} />
                {/* {listaBeneficiosPotencial} */}

                <BoxIcones>
                    {listaBeneficiosPotencial.length > 0 &&
                        (
                            <RemoveRoundedIcon
                                sx={{
                                    fontSize: "2rem",
                                    marginRight: 3,
                                    cursor: "pointer",
                                    color: "#595959",
                                }}
                                onClick={() => {
                                    setNumeroBeneficiosPotenciais(numeroBeneficiosPotenciais - 1)
                                    // listaBeneficiosPotencial.pop();
                                    // setListaBeneficiosPotencial(listaBeneficiosPotencial)
                                }} />
                        )
                    }
                    <AddRoundedIcon
                        sx={{ fontSize: "2rem", cursor: "pointer", color: "#595959" }}
                        onClick={() => {
                            setNumeroBeneficiosPotenciais(numeroBeneficiosPotenciais + 1)
                            // listaBeneficiosPotencial.push(<BeneficioPotencial index={listaBeneficiosPotencial.length} />)
                            // setListaBeneficiosPotencial(listaBeneficiosPotencial)
                        }} />
                </BoxIcones>

                <BoxTitulos>
                    <TypographyTitulos onClick={lerTexto}>Benefício Qualitativo</TypographyTitulos>
                </BoxTitulos>

                {listaBeneficiosQualitativos}

                <BoxIcones>
                    {listaBeneficiosQualitativos.length > 0 &&
                        (
                            <RemoveRoundedIcon
                                sx={{
                                    fontSize: "2rem",
                                    marginRight: 3,
                                    cursor: "pointer",
                                    color: "#595959",
                                }}
                                onClick={() => {
                                    listaBeneficiosQualitativos.pop();
                                    setListaBeneficiosQualitativos(listaBeneficiosQualitativos)

                                }} />
                        )
                    }
                    <AddRoundedIcon
                        sx={{ fontSize: "2rem", cursor: "pointer", color: "#595959" }}
                        onClick={() => {
                            listaBeneficiosQualitativos.push(<BeneficioQualitativo index={listaBeneficiosQualitativos.length} />)
                            setListaBeneficiosQualitativos(listaBeneficiosQualitativos)
                        }} />
                </BoxIcones>


                <BoxFrequencia>
                    <TypographyLabels onClick={lerTexto}>Frequência de uso da solução:</TypographyLabels>

                    <SelectEdited sx={{ width: "15vw" }}
                        id="frequenciaUso"
                    // value={frequencia}
                    // onChange={onFrequenciaChange}
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

function BeneficioReal(props: { index: number, numeroBeneficiosReais: number }) {
    const { lerTexto } = useContext(TextReaderContext) as any
    const [currencyInput, setCurrencyInput] = useState(0);
    const [valueInput, setValueInput] = useState<any>();

    let beneficiosReais: any[] = [];

    const BeneficioReal = () => {
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
        beneficiosReais.push(<BeneficioReal />)
    }

    return <>{beneficiosReais}</>
}

function BeneficioPotencial(props: { index: number, numeroBeneficiosPotencias: number }) {
    const { lerTexto } = useContext(TextReaderContext) as any
    const [currencyInput, setCurrencyInput] = useState(0);
    const [valueInput, setValueInput] = useState<any>();

    let beneficiosPotenciais: any[] = []

    const BeneficioPotencial = () => {
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
        beneficiosPotenciais.push(<BeneficioPotencial />)
    }

    return <>{beneficiosPotenciais}</>
}

function BeneficioQualitativo(props: { index: number }) {
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