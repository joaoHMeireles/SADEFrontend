import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import api from "../../api/api";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

import {
    BoxPadraoDireta, BoxPadraoEsquerda, BoxTitulo, BoxGeral, TypographyPadrao,
    SelectPadrao, BoxContainerInputs, BoxSessaoTIECodigoPPM
} from "./InfomacoesAdicionais.styles";

export default function InfomacoesAdicionais(props: {
    informacaoProcesso: any;
    valorTamanho: string;
    setValorTamanho: React.Dispatch<React.SetStateAction<string>>;
    valorBUSolicitante: string;
    setValorBUSolicitante: React.Dispatch<React.SetStateAction<string>>;
    valorBUsBeneficadas: Object[];
    setValorBUsBeneficadas: React.Dispatch<React.SetStateAction<Object[]>>;
    prazoElaboracao: Dayjs | null;
    setPrazoElaboracao: React.Dispatch<React.SetStateAction<Dayjs | null>>;
    valorSessaoTI: Object;
    setValorSessaoTI: React.Dispatch<React.SetStateAction<Object>>;
}) {

    const tamanhos = [
        "MUITO PEQUENO",
        "PEQUENO",
        "MEDIO",
        "GRANDE",
        "MUITO GRANDE",
    ]

    const sessoesTI = [
        { nome: "Sistemas de Tecnologias Digitais", abreviacao: "STD" },
        { nome: "Arquitetura e Governança de Dados", abreviacao: "AGD" },
        { nome: "Segurança", abreviacao: "SEG" },
        { nome: "Suporte", abreviacao: "SGI" },
        { nome: "Tecnologias", abreviacao: "TIN" },
        { nome: "Atendimento", abreviacao: "AAS" },
        { nome: "Projetos de TI", abreviacao: "PTI" },
        { nome: "Sistemas Corporativos", abreviacao: "SCO" },
        { nome: "Sistemas de Manufatura", abreviacao: "SIM" },
        { nome: "Sistemas de Engenharia", abreviacao: "SIE" },
        { nome: "Sistemas de Vendas e ECommerce", abreviacao: "SVE" }
    ]

    const [bus, setBus] = useState<any[]>([])

    useEffect(() => {
        api.get("/sod/bu").then((res) => {
            const listaBus = res.data.map((bu: any) => bu.nomeBU)
            setBus(listaBus)
        }).catch((err) => console.log(err));
    }, [])

    useEffect(() => {
        if (props.informacaoProcesso) {
            // let nomeSessaoTIResponsavel;
            props.setValorTamanho(props.informacaoProcesso.tamanho);
            // props.setValorBUSolicitante(props.informacaoProcesso.busolicitante.nomerBU);
            props.setPrazoElaboracao(props.informacaoProcesso.prazoElaboracao);

            // for (const sessao of sessoesTI) {
            //     if (sessao.abreviacao == props.informacaoProcesso.secaoTIResponsavel) {
            //         nomeSessaoTIResponsavel = sessao.nome;
            //     }
            // }

            // const sessao = {
            //     nome: nomeSessaoTIResponsavel,
            //     abreviacao: props.informacaoProcesso.secaoTIResponsavel
            // }

            // props.setValorSessaoTI(sessao)

            console.log(props.valorBUsBeneficadas);

            for (const bu of props.informacaoProcesso.busBeneficiadas) {
                const buBeneficiada = {
                    idBU: bu.idBU,
                    nomeBU: bu.nomeBU
                }
                props.valorBUsBeneficadas.push(buBeneficiada)
                props.setValorBUsBeneficadas(props.valorBUsBeneficadas)
            }


            const codigoPPM = document.getElementById("codigoPPM");
            const linkJira = document.getElementById("linkJira");

            if (codigoPPM) {
                codigoPPM.value = props.informacaoProcesso.codigoPPM;
            }

            if (linkJira) {
                linkJira.value = props.informacaoProcesso.linkJira;
            }
        }
    }, [])

    return (
        <>
            <BoxGeral>

                <BoxTitulo>
                    <Typography variant="h6" component={"h1"} sx={{ fontSize: "20px", color: "#FFF" }}>Informações Adicionais</Typography>
                </BoxTitulo>

                <BoxContainerInputs>
                    <BoxPadraoDireta>
                        <TypographyPadrao>Tamanho: </TypographyPadrao>
                        <SelectPadrao
                            id="tamanhos"
                            value={props.valorTamanho}
                            onChange={(e: SelectChangeEvent) => { props.setValorTamanho(e.target.value as string) }}
                        >
                            {tamanhos.map((tamanho: string, index: number) => {
                                return (
                                    <MenuItem key={index} value={tamanho}>{tamanho}</MenuItem>
                                )
                            })}

                        </SelectPadrao>
                    </BoxPadraoDireta>
                    <Box>
                        <TypographyPadrao>Prazo elaboração da proposta: </TypographyPadrao>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={props.prazoElaboracao}
                                onChange={(newValue) => {
                                    props.setPrazoElaboracao(newValue);
                                }}
                                renderInput={(params) => <TextField id='inputDataInformacoes' {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>
                    <BoxPadraoEsquerda>
                        <Box sx={{ width: "50%" }}>
                            <TypographyPadrao>BU Solicitante: </TypographyPadrao>
                        </Box>
                        <SelectPadrao
                            id="busolicitante"
                            value={props.valorBUSolicitante}
                            onChange={(e: SelectChangeEvent) => { props.setValorBUSolicitante(e.target.value as string) }}
                        >
                            {bus.map((bu: any, index: number) => {
                                return (
                                    <MenuItem key={index} value={bu}>{bu}</MenuItem>
                                )
                            })}
                        </SelectPadrao>
                    </BoxPadraoEsquerda>
                </BoxContainerInputs>

                <Box sx={{ width: "100%" }}>
                    <TypographyPadrao>BUs Beneficiadas: </TypographyPadrao>
                    <Autocomplete
                        id="BU"
                        sx={{ boxShadow: "5px 5px 10px 0 #00000050" }}
                        multiple
                        disableCloseOnSelect
                        defaultValue={props.informacaoProcesso.busBeneficiadas.map((bus: any) => bus.nomeBU)}
                        onChange={(e, valor: any) => {
                            let busBeneficiadas: Object[] = []

                            for (let buSelecionada of valor) {
                                for (let bu of props.informacaoProcesso.busBeneficiadas) {
                                    if (bu.nomeBU == buSelecionada) {
                                        props.valorBUsBeneficadas.push({ idBU: bu.idBU, nomeBU: bu.nomeBU })
                                    }
                                }
                            }

                            props.setValorBUsBeneficadas(props.valorBUsBeneficadas);
                        }}
                        renderOption={(props, bu, { selected }) => {
                            return (
                                <li {...props} id="listaBU">
                                    <Checkbox
                                        id="checkbox"
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                    />
                                    {bu}
                                </li>
                            );
                        }}
                        options={bus}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Box>

                <BoxSessaoTIECodigoPPM>
                    <Box sx={{ width: "30%", marginRight: 5 }}>
                        <TypographyPadrao>Sessão TI responsável: </TypographyPadrao>
                        <SelectPadrao
                            id="sessaoTI"
                            value={props.valorSessaoTI}
                            onChange={(e: SelectChangeEvent) => {
                                const sessaoTI = {
                                    nome: e.target.value,
                                    abreviacao: props.informacaoProcesso.secaoTIResponsavel
                                }
                                props.setValorSessaoTI(sessaoTI)
                            }}>
                            {sessoesTI.map((sessao: any, index: number) => {
                                return (
                                    <MenuItem key={index} value={sessao.nome}>
                                        {sessao.nome}
                                    </MenuItem>
                                )
                            })}
                        </SelectPadrao>
                    </Box>
                    <Box sx={{ width: "30%" }}>
                        <TypographyPadrao>Codigo PPM: </TypographyPadrao>
                        <TextField sx={{ width: "80%" }} id="codigoPPM" type="search"></TextField>
                    </Box>
                </BoxSessaoTIECodigoPPM>

                <Box sx={{ width: "100%" }}>
                    <TypographyPadrao>Link EPIC Jira: </TypographyPadrao>
                    <TextField sx={{ width: "100%" }} id="linkJira" type="search"></TextField>
                </Box>

            </BoxGeral>
        </>
    );
}