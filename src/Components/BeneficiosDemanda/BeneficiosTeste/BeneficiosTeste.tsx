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
// criacao proposta - inputs preenchidos ou let inputs - PRONTO
// rascunho - inputs preenchidos ou ler inputs - PRONTO - verificar inputs de moeda
// demanda devolvida - inputs preenchidos ou ler inputs - PRONTO

export default function BeneneficiosTeste(props: {
    proposta: boolean,
    rascunho: boolean,
    editarDemanda: any,
    numeroBeneficiosReais: number,
    setNumeroBeneficiosReais: any,
    numeroBeneficiosPotenciais: number,
    setNumeroBeneficiosPotenciais: any,
    numeroBeneficiosQualitativos: number,
    setNumeroBeneficiosQualitativos: any,
    frequenciaUso?: any,
    setFrequenciaUso?: any,
    informacaoProcesso?: any,
    setInformacaoProcesso?: any,
    partDoisDemanda?: any
}) {
    const { lerTexto } = useContext(TextReaderContext) as any

    const [beneficiosReais, setBeneficiosReais] = useState<any>([])
    const [beneficiosPotenciais, setBeneficiosPotenciais] = useState<any>([])
    const [beneficiosQualitativos, setBeneficiosQualitativos] = useState<any>([])

    const [frequenciaUso, setFrequenciaUso] = useState("DIARIAMENTE");

    if (props.proposta || props.rascunho || props.editarDemanda) {
        let numeroBeneficiosPotenciais = 0;
        let numeroBeneficiosReais = 0;
        let numeroBeneficiosQualitativos = 0;

        useEffect(() => {
            let info;

            if (props.rascunho) {
                info = JSON.parse(localStorage.getItem("RASCUNHOESCOLHIDO") as string);
            } else if (props.proposta || props.editarDemanda) {
                info = JSON.parse(localStorage.getItem("DEMANDASELECIONADA") as string);
            }

            props.setInformacaoProcesso(info);

            if (info) {
                numeroBeneficiosReais = info.beneficiosDemanda.filter((beneficio: any) => beneficio.tipoBeneficio == "REAL").length;
                numeroBeneficiosPotenciais = info.beneficiosDemanda.filter((beneficio: any) => beneficio.tipoBeneficio == "POTENCIAL").length;
                numeroBeneficiosQualitativos = info.beneficiosDemanda.filter((beneficio: any) => beneficio.tipoBeneficio == "QUALITATIVO").length;
            }

            if (props.setNumeroBeneficiosReais && props.setNumeroBeneficiosPotenciais && props.setNumeroBeneficiosQualitativos) {
                props.setNumeroBeneficiosReais(numeroBeneficiosReais);
                props.setNumeroBeneficiosPotenciais(numeroBeneficiosPotenciais);
                props.setNumeroBeneficiosQualitativos(numeroBeneficiosQualitativos);
            }
        }, [])

        useEffect(() => {
            for (let atributo in props.informacaoProcesso) {
                if (atributo == "frequenciaUso") {
                    setFrequenciaUso(props.informacaoProcesso[atributo])
                }

                if (atributo == "beneficiosDemanda") {
                    let beneficiosBancoReais = props.informacaoProcesso[atributo].filter((beneficio: any) => beneficio.tipoBeneficio == "REAL");
                    let beneficiosBancoPotenciais = props.informacaoProcesso[atributo].filter((beneficio: any) => beneficio.tipoBeneficio == "POTENCIAL");
                    let beneficiosBancoQualitativos = props.informacaoProcesso[atributo].filter((beneficio: any) => beneficio.tipoBeneficio == "QUALITATIVO");

                    setBeneficiosReais(beneficiosBancoReais);
                    setBeneficiosPotenciais(beneficiosBancoPotenciais);
                    setBeneficiosQualitativos(beneficiosBancoQualitativos);

                    for (let i = 0; i < props.numeroBeneficiosReais; i++) {
                        const beneficioRealValorMensal = document.getElementById("valorMensalReal" + i) as HTMLInputElement;
                        const beneficioRealDescricaoReal = document.getElementById("descricaoReal" + i) as HTMLInputElement;
                        const beneficioRealMoeda = document.getElementById("moedaReal" + i) as HTMLInputElement;

                        if (beneficioRealValorMensal && beneficiosBancoReais[i]) {
                            beneficioRealValorMensal.value = beneficiosBancoReais[i].valor;
                        }

                        if (beneficioRealDescricaoReal && beneficiosBancoReais[i]) {
                            beneficioRealDescricaoReal.value = beneficiosBancoReais[i].descricao;
                        }

                        if (beneficioRealMoeda && beneficiosBancoReais[i]) {
                            beneficioRealMoeda.innerText = beneficiosBancoReais[i].moeda
                        }
                    }

                    for (let i = 0; i < props.numeroBeneficiosPotenciais; i++) {
                        const beneficioPotencialValorMensal = document.getElementById("valorMensalPotencial" + i) as HTMLInputElement;
                        const beneficioPotencialDescricaoPotencial = document.getElementById("descricaoPotencial" + i) as HTMLInputElement;
                        const beneficioPotencialMoeda = document.getElementById("moedaPotencial" + i) as HTMLInputElement;

                        if (beneficioPotencialValorMensal && beneficiosBancoPotenciais[i]) {
                            beneficioPotencialValorMensal.value = beneficiosBancoPotenciais[i].valor;
                        }

                        if (beneficioPotencialDescricaoPotencial && beneficiosBancoPotenciais[i]) {
                            beneficioPotencialDescricaoPotencial.value = beneficiosBancoPotenciais[i].descricao;
                        }

                        if (beneficioPotencialMoeda && beneficiosBancoPotenciais[i]) {
                            beneficioPotencialMoeda.innerText = beneficiosBancoPotenciais[i].moeda
                        }
                    }

                    for (let i = 0; i < props.numeroBeneficiosQualitativos; i++) {
                        const beneficioQualitativoDescricao = document.getElementById("beneficiosQualitativos" + i) as HTMLInputElement;

                        if (beneficioQualitativoDescricao && beneficiosBancoQualitativos[i]) {
                            beneficioQualitativoDescricao.value = beneficiosBancoQualitativos[i].descricao;
                        }
                    }
                }
            }
        }, [props.informacaoProcesso])
    }

    return (
        <>
            <BoxContainerGeral>
                <BoxTitulos>
                    <TypographyTitulos onClick={lerTexto}>Benefício Real</TypographyTitulos>
                </BoxTitulos>

                <BeneficioReal numeroBeneficios={props.numeroBeneficiosReais} beneficios={beneficiosReais}
                    proposta={props.proposta} rascunho={props.rascunho} editarDemanda={props.editarDemanda}
                    informacaoProcesso={props.informacaoProcesso} setInformacaoProcesso={props.setInformacaoProcesso} atualizarObjetoRascunho={props.partDoisDemanda} />

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

                <BeneficioPotencial numeroBeneficios={props.numeroBeneficiosPotenciais} beneficios={beneficiosPotenciais}
                    proposta={props.proposta} rascunho={props.rascunho} editarDemanda={props.editarDemanda}
                    informacaoProcesso={props.informacaoProcesso} setInformacaoProcesso={props.setInformacaoProcesso} atualizarObjetoRascunho={props.partDoisDemanda} />

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

                <BeneficioQualitativo numeroBeneficios={props.numeroBeneficiosQualitativos} beneficios={beneficiosQualitativos}
                    proposta={props.proposta} rascunho={props.rascunho} editarDemanda={props.editarDemanda}
                    informacaoProcesso={props.informacaoProcesso} setInformacaoProcesso={props.setInformacaoProcesso} atualizarObjetoRascunho={props.partDoisDemanda} />

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

                    {props.proposta || props.rascunho || props.editarDemanda ?
                        <>
                            <SelectEdited sx={{ width: "15vw" }}
                                id="frequenciaUso"
                                value={frequenciaUso}
                                onChange={(e: any) => {
                                    setFrequenciaUso(e.target.value);

                                    const novaInfoDemanda = {
                                        ...props.informacaoProcesso,
                                        frequenciaUso: e.target.value,
                                    };

                                    if (props.setInformacaoProcesso || props.informacaoProcesso) {
                                        props.setInformacaoProcesso(novaInfoDemanda);
                                    }
                                }}
                            >
                                {valoresFrequencia.map((valor: any, index: number) => {
                                    return (
                                        <MenuItem key={index} value={valor} onClick={lerTexto}>{valor}</MenuItem>
                                    );
                                })}
                            </SelectEdited>
                        </>
                        :
                        <>
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
                        </>}

                </BoxFrequencia>

            </BoxContainerGeral >
        </>
    )
}

function BeneficioReal(props: Beneficio) {

    let beneficios: any[] = [];

    for (let i = 0; i < props.numeroBeneficios; i++) {
        if (props.beneficios[i] != undefined || props.beneficios[i]) {
            beneficios.push(<BeneficioRealRender key={i} index={i} proposta={props.proposta} rascunho={props.rascunho} editandoDemanda={props.editarDemanda} beneficios={props.beneficios}
                informacaoProcesso={props.informacaoProcesso} setInformacaoProcesso={props.setInformacaoProcesso}
                idBeneficio={props.beneficios[i].idBeneficio} atualizarObjetos={props.atualizarObjetoRascunho} />)
        } else {
            beneficios.push(<BeneficioRealRender key={i} index={i} proposta={props.proposta} rascunho={props.rascunho} editandoDemanda={props.editarDemanda} beneficios={props.beneficios}
                informacaoProcesso={props.informacaoProcesso} setInformacaoProcesso={props.setInformacaoProcesso} atualizarObjetos={props.atualizarObjetoRascunho} />)
        }
    }

    return <>{beneficios}</>
}

function BeneficioPotencial(props: Beneficio) {

    let beneficios: any[] = []

    for (let i = 0; i < props.numeroBeneficios; i++) {
        if (props.beneficios[i] != undefined || props.beneficios[i]) {
            beneficios.push(<BeneficioPotencialRender key={i} index={i} proposta={props.proposta} rascunho={props.rascunho} editandoDemanda={props.editarDemanda} beneficios={props.beneficios}
                informacaoProcesso={props.informacaoProcesso} setInformacaoProcesso={props.setInformacaoProcesso}
                idBeneficio={props.beneficios[i].idBeneficio} atualizarObjetos={props.atualizarObjetoRascunho} />)
        } else {
            beneficios.push(<BeneficioPotencialRender key={i} index={i} proposta={props.proposta} rascunho={props.rascunho} editandoDemanda={props.editarDemanda} beneficios={props.beneficios}
                informacaoProcesso={props.informacaoProcesso} setInformacaoProcesso={props.setInformacaoProcesso} atualizarObjetos={props.atualizarObjetoRascunho} />)
        }
    }

    return <>{beneficios}</>
}

function BeneficioQualitativo(props: Beneficio) {

    let beneficios: any[] = []

    for (let i = 0; i < props.numeroBeneficios; i++) {
        if (props.beneficios[i] != undefined || props.beneficios[i]) {
            beneficios.push(<BeneficioQualitativoRender key={i} index={i} proposta={props.proposta} rascunho={props.rascunho} editandoDemanda={props.editarDemanda} beneficios={props.beneficios}
                informacaoProcesso={props.informacaoProcesso} setInformacaoProcesso={props.setInformacaoProcesso}
                idBeneficio={props.beneficios[i].idBeneficio} atualizarObjetos={props.atualizarObjetoRascunho} />)
        } else {
            beneficios.push(<BeneficioQualitativoRender key={i} index={i} proposta={props.proposta} rascunho={props.rascunho} editandoDemanda={props.editarDemanda} beneficios={props.beneficios}
                informacaoProcesso={props.informacaoProcesso} setInformacaoProcesso={props.setInformacaoProcesso} atualizarObjetos={props.atualizarObjetoRascunho} />)
        }
    }

    return <>{beneficios}</>
}

interface Beneficio {
    numeroBeneficios: number,
    beneficios: any,
    proposta: boolean,
    rascunho: boolean,
    editarDemanda: boolean,
    informacaoProcesso: any,
    setInformacaoProcesso: any,
    atualizarObjetoRascunho: Function
}