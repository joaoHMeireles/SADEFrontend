import Box from "@mui/material/Box";
import {
    BoxContainerDivisorio,
    BoxContainerGeral,
    BoxContainerGeralBeneficio, BoxInputs, BoxInputsAbaixo, BoxInputsAcima,
    BoxTitulos, BoxValorMensal, TypographyLabels,
    TypographyTitulos
} from "../BeneficiosDemanda.styles";
import {useContext, useEffect} from "react";
import {TextReaderContext} from "../../TextReaderContext/TextReaderContext";


export default function BeneneficiosTeste() {
    const {lerTexto} = useContext(TextReaderContext) as any

    useEffect(() => {
        // gerarBeneficios()
    }, [])

    return (
        <>
            <BoxContainerGeral>
                <BoxTitulos>
                    <TypographyTitulos onClick={lerTexto}>Benefício Real</TypographyTitulos>
                </BoxTitulos>



            </BoxContainerGeral>
        </>
    )
}

function BeneficioRealPotencial(props: {tipoBeneficio: string}) {
    const {lerTexto} = useContext(TextReaderContext) as any

    return (
        <>
            <Box>
                <BoxContainerGeralBeneficio>
                    <BoxContainerDivisorio>

                        <BoxInputsAcima>
                            <BoxValorMensal>
                                <TypographyLabels onClick={lerTexto}>Valor Mensal: </TypographyLabels>
                            </BoxValorMensal>
                            <BoxInputs>
                                {/*{currencyInput == 0 ?*/}
                                {/*    <FormControl*/}
                                {/*        variant="outlined"*/}
                                {/*        sx={{ alignItems: "center", boxShadow: "5px 5px 10px 0 #00000050", display: "flex", m: "1", marginRight: "2rem" }}*/}
                                {/*        onChange={(e: any) => {*/}
                                {/*            setValueInput(e.target.value);*/}

                                {/*            if (atualizarObjetos != null) {*/}
                                {/*                atualizarObjetos();*/}
                                {/*            } else {*/}
                                {/*                atualizarBeneficiosDemanda(*/}
                                {/*                    props.informacaoProcesso.beneficiosDemanda,*/}
                                {/*                    idBeneficioComponente,*/}
                                {/*                    setIdBeneficioComponente,*/}
                                {/*                    "valor",*/}
                                {/*                    e.target.value,*/}
                                {/*                    props.informacaoProcesso,*/}
                                {/*                    props.setInformacaoProcesso,*/}
                                {/*                    "REAL"*/}
                                {/*                );*/}
                                {/*            }*/}
                                {/*        }}>*/}
                                {/*        <OutlinedInput value={valueInput} id={`valorMensalReal${props.index}`} startAdornment={<InputAdornment position="start">R$</InputAdornment>} />*/}
                                {/*    </FormControl>*/}
                                {/*    :*/}
                                {/*    currencyInput == 1 ?*/}
                                {/*        <FormControl*/}
                                {/*            variant="outlined"*/}
                                {/*            sx={{ alignItems: "center", boxShadow: "5px 5px 10px 0 #00000050", display: "flex", m: "1", marginRight: "1rem" }}*/}
                                {/*            onChange={(e: any) => {*/}
                                {/*                setValueInput(e.target.value);*/}

                                {/*                if (atualizarObjetos != null) {*/}
                                {/*                    atualizarObjetos();*/}
                                {/*                } else {*/}
                                {/*                    atualizarBeneficiosDemanda(*/}
                                {/*                        props.informacaoProcesso.beneficiosDemanda,*/}
                                {/*                        idBeneficioComponente,*/}
                                {/*                        setIdBeneficioComponente,*/}
                                {/*                        "valor",*/}
                                {/*                        e.target.value,*/}
                                {/*                        props.informacaoProcesso,*/}
                                {/*                        props.setInformacaoProcesso,*/}
                                {/*                        "REAL"*/}
                                {/*                    );*/}
                                {/*                }*/}
                                {/*            }}>*/}
                                {/*            <OutlinedInput value={valueInput} id={`valorMensalReal${props.index}`} startAdornment={<InputAdornment position="start">$</InputAdornment>} />*/}
                                {/*        </FormControl>*/}
                                {/*        :*/}
                                {/*        <FormControl*/}
                                {/*            variant="outlined"*/}
                                {/*            sx={{ alignItems: "center", boxShadow: "5px 5px 10px 0 #00000050", display: "flex", m: "1", marginRight: "1rem" }}*/}
                                {/*            onChange={(e: any) => {*/}
                                {/*                setValueInput(e.target.value);*/}

                                {/*                if (atualizarObjetos != null) {*/}
                                {/*                    atualizarObjetos();*/}
                                {/*                } else {*/}
                                {/*                    atualizarBeneficiosDemanda(*/}
                                {/*                        props.informacaoProcesso.beneficiosDemanda,*/}
                                {/*                        idBeneficioComponente,*/}
                                {/*                        setIdBeneficioComponente,*/}
                                {/*                        "valor",*/}
                                {/*                        e.target.value,*/}
                                {/*                        props.informacaoProcesso,*/}
                                {/*                        props.setInformacaoProcesso,*/}
                                {/*                        "REAL"*/}
                                {/*                    );*/}
                                {/*                }*/}
                                {/*            }}>*/}
                                {/*            <OutlinedInput value={valueInput} id={`valorMensalReal${props.index}`} startAdornment={<InputAdornment position="start">€</InputAdornment>} />*/}
                                {/*        </FormControl>*/}
                                {/*}*/}

                                {/*<Select*/}
                                {/*    id={`moedaReal${props.index}`}*/}
                                {/*    sx={{ width: "10%", boxShadow: "5px 5px 10px 0 #00000050" }}*/}
                                {/*    value={moedaBeneficio}*/}
                                {/*    onChange={(e: any) => {*/}
                                {/*        setMoedaBeneficio(e.target.value);*/}

                                {/*        console.log("e ==> " , e.target.value)*/}
                                {/*        console.log("props.moeda ==> " + props.moedaReal)*/}

                                {/*        props.moedaReal.push(e.target.value);*/}
                                {/*        props.setMoedaReal(props.moedaReal);*/}

                                {/*        if (atualizarObjetos != null) {*/}
                                {/*            atualizarObjetos();*/}
                                {/*        } else {*/}
                                {/*            atualizarBeneficiosDemanda(*/}
                                {/*                props.informacaoProcesso.beneficiosDemanda,*/}
                                {/*                idBeneficioComponente,*/}
                                {/*                setIdBeneficioComponente,*/}
                                {/*                "moeda",*/}
                                {/*                e.target.value,*/}
                                {/*                props.informacaoProcesso,*/}
                                {/*                props.setInformacaoProcesso,*/}
                                {/*                "REAL"*/}
                                {/*            );*/}
                                {/*        }*/}
                                {/*    }}>*/}
                                {/*    {moedas.map((option: any, index: number) => (*/}
                                {/*        <MenuItem id={`moedaRealoptions${props.index}`} key={index} value={option} onClick={lerTexto}>*/}
                                {/*            {option}*/}
                                {/*        </MenuItem>*/}
                                {/*    ))}*/}
                                {/*</Select>*/}
                            </BoxInputs>
                        </BoxInputsAcima>

                        <BoxInputsAbaixo>
                            <TypographyLabels onClick={lerTexto}>Descrição: </TypographyLabels>

                            {/*<TextField*/}
                            {/*    id={`descricaoReal${props.index}`}*/}
                            {/*    onChange={(e: any) => {*/}
                            {/*        if (atualizarObjetos != null) {*/}
                            {/*            atualizarObjetos();*/}
                            {/*        } else {*/}
                            {/*            atualizarBeneficiosDemanda(*/}
                            {/*                props.informacaoProcesso.beneficiosDemanda,*/}
                            {/*                idBeneficioComponente,*/}
                            {/*                setIdBeneficioComponente,*/}
                            {/*                "descricao",*/}
                            {/*                e.target.value,*/}
                            {/*                props.informacaoProcesso,*/}
                            {/*                props.setInformacaoProcesso,*/}
                            {/*                "REAL"*/}
                            {/*            );*/}
                            {/*        }*/}
                            {/*    }}*/}
                            {/*    multiline*/}
                            {/*    maxRows={Infinity}*/}
                            {/*    sx={{width: "100%", boxShadow: "5px 5px 10px 0 #00000050"}}>*/}
                            {/*</TextField>*/}
                        </BoxInputsAbaixo>
                    </BoxContainerDivisorio>

                </BoxContainerGeralBeneficio>
            </Box>
        </>
    )
}

function BeneficioQualitativo(props: {}) {

    return (
        <>
            <Box>
                <BoxContainerGeralBeneficio>

                </BoxContainerGeralBeneficio>
            </Box>
        </>
    )
}

function gerarBeneficios(tipoBeneficio: string, quantidadeBeneficio: number){
    let listaBeneficiosReais = []
    let listaBeneficiosQualitativos = []

    switch (tipoBeneficio) {
        case "real": {
            for(let i = 0; i < quantidadeBeneficio; i++){
                listaBeneficiosReais.push(<BeneficioRealPotencial tipoBeneficio={"real"}/>)
            }

            return listaBeneficiosReais;
        }
        case "potencial": {
            for(let i = 0; i < quantidadeBeneficio; i++){
                listaBeneficiosReais.push(<BeneficioRealPotencial tipoBeneficio={"potencial"}/>)
            }

            return listaBeneficiosReais;
        }
        case "qualitativo": {
            for(let i = 0; i < quantidadeBeneficio; i++){
                listaBeneficiosQualitativos.push(<BeneficioQualitativo />)
            }

            return listaBeneficiosQualitativos;
        }
    }
}