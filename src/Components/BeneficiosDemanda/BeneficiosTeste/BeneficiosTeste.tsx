import {
    BoxContainerGeral,
    BoxFrequencia, BoxIcones,
    BoxTitulos, SelectEdited, TypographyLabels,
    TypographyTitulos
} from "../BeneficiosDemanda.styles";
import { useContext, useEffect, useState } from "react";
import { TextReaderContext } from "../../TextReaderContext/TextReaderContext";
import MenuItem from "@mui/material/MenuItem";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { BeneficioPotencialRender, BeneficioQualitativoRender, BeneficioRealRender } from "./BeneficiosRender";

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

    const [beneficiosReais, setBeneficiosReais] = useState<any>([])
    const [beneficiosPotenciais, setBeneficiosPotenciais] = useState<any>([])
    const [beneficiosQualitativos, setBeneficiosQualitativos] = useState<any>([])

    if (props.proposta) {
        useEffect(() => {
            // inputs preenchidos
        }, [])
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

                <BeneficioPotencial numeroBeneficiosPotencias={props.numeroBeneficiosPotenciais} beneficiosPotenciais={beneficiosPotenciais} />

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

                <BeneficioQualitativo numeroBeneficiosQualitativos={props.numeroBeneficiosQualitativos} beneficiosQualitativos={beneficiosQualitativos} />

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

    let beneficios: any[] = [];

    for (let i = 0; i < props.numeroBeneficiosReais; i++) {
        if (props.beneficiosReais[i] != undefined || props.beneficiosReais[i]) {
            beneficios.push(<BeneficioRealRender key={i} index={i} />)
        } else {
            beneficios.push(<BeneficioRealRender key={i} index={i} />)
        }
    }

    return <>{beneficios}</>
}

function BeneficioPotencial(props: { numeroBeneficiosPotencias: number, beneficiosPotenciais: any }) {

    let beneficios: any[] = []

    for (let i = 0; i < props.numeroBeneficiosPotencias; i++) {
        if (props.beneficiosPotenciais[i] != undefined || props.beneficiosPotenciais[i]) {
            beneficios.push(<BeneficioPotencialRender key={i} index={i} />)
        } else {
            beneficios.push(<BeneficioPotencialRender key={i} index={i} />)
        }
    }

    return <>{beneficios}</>
}

function BeneficioQualitativo(props: { numeroBeneficiosQualitativos: number, beneficiosQualitativos: any }) {

    let beneficios: any[] = []

    for (let i = 0; i < props.numeroBeneficiosQualitativos; i++) {
        if (props.beneficiosQualitativos[i] != undefined || props.beneficiosQualitativos[i]) {
            beneficios.push(<BeneficioQualitativoRender key={i} index={i} />)
        } else {
            beneficios.push(<BeneficioQualitativoRender key={i} index={i} />)
        }
    }

    return <>{beneficios}</>
}