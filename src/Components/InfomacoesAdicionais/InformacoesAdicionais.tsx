import { useState, useEffect, useContext } from "react";
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
    AutocompleteEdited,
    BoxContainerInputs,
    BoxGeral,
    BoxPadraoDireta,
    BoxPadraoEsquerda,
    BoxSessaoTIECodigoPPM,
    BoxTitulo,
    SelectEdited,
    TextFieldEdited,
    TypographyPadrao,
} from "./InfomacoesAdicionais.styles";
import { getValueEnum } from "../../utils";
import { sessaoTI } from "../../constants/enuns";
import { TextReaderContext } from "../TextReaderContext/TextReaderContext";

export default function InfomacoesAdicionais(props: {
    valorTamanho: string;
    setValorTamanho: React.Dispatch<React.SetStateAction<string>>;
    valorBUSolicitante: string;
    setValorBUSolicitante: React.Dispatch<React.SetStateAction<string>>;
    valorBUsBeneficadas: Object[];
    setValorBUsBeneficadas: React.Dispatch<React.SetStateAction<Object[]>>;
    prazoElaboracao: Dayjs | null;
    setPrazoElaboracao: React.Dispatch<React.SetStateAction<Dayjs | null>>;
    valorSessaoTI: string;
    setValorSessaoTI: React.Dispatch<React.SetStateAction<string>>;
    valorCodigoPPM: number;
    setValorCodigoPPM: React.Dispatch<React.SetStateAction<number>>;
    valorLinkJira: string;
    setValorLinkJira: React.Dispatch<React.SetStateAction<string>>;
    informacaoProcesso: any
    setInformacaoProcesso: any
}) {
    const { lerTexto } = useContext(TextReaderContext) as any
    const tamanhos = [
        "MUITOPEQUENO",
        "PEQUENO",
        "MEDIO",
        "GRANDE",
        "MUITOGRANDE",
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
    const [objetoBus, setObjetoBus] = useState<any[]>([])

    useEffect(() => {
        api.get("/sade/bu").then((res) => {

            const listaBus = res.data.map((bu: any) => bu.nomeBU)

            setBus(listaBus)
            setObjetoBus(res.data)
        }).catch((err) => console.log(err));
    }, [])

    useEffect(() => {
        if (props.informacaoProcesso) {

            for (const bu of props.informacaoProcesso.busBeneficiadas) {
                props.valorBUsBeneficadas.push({ idBU: bu.idBU, nomeBU: bu.nomeBU })
            }

            props.setValorBUsBeneficadas(props.valorBUsBeneficadas)

            if (props.informacaoProcesso.tamanho) {
                props.setValorTamanho(props.informacaoProcesso.tamanho);
            }

            if (props.informacaoProcesso.prazoElaboracao) {
                props.setPrazoElaboracao(props.informacaoProcesso.prazoElaboracao);
            }

            const sessaoTIResponsavel = getValueEnum(sessaoTI, props.informacaoProcesso.secaoTIResponsavel)

            if (sessaoTIResponsavel) {
                props.setValorSessaoTI(sessaoTIResponsavel)
            }

            if (props.informacaoProcesso.busolicitante) {
                props.setValorBUSolicitante(props.informacaoProcesso.busolicitante.nomeBU)
            }

            if (props.informacaoProcesso.codigoPPM) {
                props.setValorCodigoPPM(props.informacaoProcesso.codigoPPM)
            }

            if (props.informacaoProcesso.linkJira) {
                props.setValorLinkJira(props.informacaoProcesso.linkJira)
            }
        }
    }, [])

    return (
        <>
            <BoxGeral>
                <BoxTitulo>
                    <Typography variant="h6" component={"h1"} sx={{ color: "#FFF", fontSize: "16px", height: "2rem" }} onClick={lerTexto}>Informações Adicionais</Typography>
                </BoxTitulo>

                <BoxContainerInputs>
                    <BoxPadraoDireta>
                        <TypographyPadrao onClick={lerTexto}>Tamanho: </TypographyPadrao>

                        <SelectEdited
                            id="tamanhos"
                            defaultValue={props.valorTamanho}
                            value={props.valorTamanho}
                            onChange={(e: any) => {
                                props.setValorTamanho(e.target.value as string)

                                const novaInfoDemanda = {
                                    ...props.informacaoProcesso,
                                    tamanho: e.target.value,
                                };
                                props.setInformacaoProcesso(novaInfoDemanda);
                            }}
                        >
                            {tamanhos.map((tamanho: string, index: number) => {
                                return (
                                    <MenuItem key={index} value={tamanho} onClick={lerTexto}>{tamanho}</MenuItem>
                                )
                            })}
                        </SelectEdited>
                    </BoxPadraoDireta>

                    <Box>
                        <TypographyPadrao onClick={lerTexto}>Prazo elaboração da proposta: </TypographyPadrao>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                InputProps={{
                                    sx: {
                                        backgroundColor: "#eee",
                                        borderRadius: "10px",
                                        boxShadow: "5px 5px 10px 0 #00000025",
                                        "& fieldset": { border: "none" },
                                        width: "15vw"
                                    }
                                }}
                                value={props.prazoElaboracao}
                                onChange={(e: any) => {
                                    props.setPrazoElaboracao(e.$d);

                                    const novaInfoDemanda = {
                                        ...props.informacaoProcesso,
                                        prazoElaboracao: e.$d,
                                    };
                                    props.setInformacaoProcesso(novaInfoDemanda);
                                }}
                                renderInput={(params: any) => <TextField id='inputDataInformacoes' {...params} />} />
                        </LocalizationProvider>
                    </Box>

                    <BoxPadraoEsquerda>
                        <Box sx={{ width: "50%" }}>
                            <TypographyPadrao onClick={lerTexto}>BU Solicitante: </TypographyPadrao>
                        </Box>

                        <SelectEdited
                            id="busolicitante"
                            value={props.valorBUSolicitante}
                            onChange={(e: any) => {
                                props.setValorBUSolicitante(e.target.value as string)

                                let idBu;

                                let buSolicitanteObjeto: {
                                    idBU: number,
                                    nomeBU: string
                                }

                                for (const bu of objetoBus) {
                                    if (bu.nomeBU == e.target.value) {
                                        idBu = bu.idBU
                                    }
                                }

                                buSolicitanteObjeto = {
                                    idBU: idBu,
                                    nomeBU: e.target.value
                                };

                                const novaInfoDemanda = {
                                    ...props.informacaoProcesso,
                                    busolicitante: buSolicitanteObjeto
                                };

                                if (novaInfoDemanda) {
                                    props.setInformacaoProcesso(novaInfoDemanda);
                                }
                            }}>

                            {bus.map((bu: any, index: number) => {
                                return (
                                    <MenuItem key={index} value={bu} onClick={lerTexto}>{bu}</MenuItem>
                                )
                            })}
                        </SelectEdited>
                    </BoxPadraoEsquerda>
                </BoxContainerInputs>

                <Box sx={{ width: "100%" }}>
                    <TypographyPadrao onClick={lerTexto}>BUs Beneficiadas: </TypographyPadrao>

                    {props.informacaoProcesso.busBeneficiadas ?
                        <AutocompleteEdited
                            id="BU"
                            sx={{ boxShadow: "5px 5px 10px 0 #00000025" }}
                            multiple
                            disableCloseOnSelect
                            defaultValue={props.informacaoProcesso.busBeneficiadas.map((bus: any) => bus.nomeBU)}
                            onChange={(e, valor: any) => {
                                let busBeneficiada: Object[] = []

                                        for (let buSelecionada of valor) {
                                            for (let bu of objetoBus) {
                                                if (bu.nomeBU == buSelecionada) {
                                                    busBeneficiada.push({ idBU: bu.idBU, nomeBU: bu.nomeBU })
                                                }
                                            }
                                        }

                                        props.setValorBUsBeneficadas(busBeneficiada);

                                        const novaInfoDemanda = {
                                            ...props.informacaoProcesso,
                                            busBeneficiadas: busBeneficiada,
                                        };
                                        props.setInformacaoProcesso(novaInfoDemanda);

                            }}
                            renderOption={(props, bu: any, { selected }) => {
                                return (
                                    <li {...props} id="listaBU">
                                        <Checkbox
                                            id="checkbox"
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            style={{ marginRight: 8 }}
                                            checked={selected}
                                        />
                                        <span onClick={lerTexto}>{bu}</span>
                                    </li>
                                );
                            }}
                            options={bus}
                            renderInput={(params) => <TextField {...params} />} />
                        :
                        <AutocompleteEdited
                            id="BU"
                            sx={{ boxShadow: "5px 5px 10px 0 #00000025" }}
                            multiple
                            disableCloseOnSelect
                            onChange={(e, valor: any) => {
                                let busBeneficiada: Object[] = []

                                        for (let buSelecionada of valor) {
                                            for (let bu of objetoBus) {
                                                if (bu.nomeBU == buSelecionada) {
                                                    busBeneficiada.push({ idBU: bu.idBU, nomeBU: bu.nomeBU })
                                                }
                                            }
                                        }

                                        props.setValorBUsBeneficadas(busBeneficiada);

                                        const novaInfoDemanda = {
                                            ...props.informacaoProcesso,
                                            busBeneficiadas: busBeneficiada,
                                        };
                                        props.setInformacaoProcesso(novaInfoDemanda);

                            }}
                            renderOption={(props, bu: any, { selected }) => {
                                return (
                                    <li {...props} id="listaBU">
                                        <Checkbox
                                            id="checkbox"
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            style={{ marginRight: 8 }}
                                            checked={selected}
                                        />
                                        <span onClick={lerTexto}>{bu}</span>
                                    </li>
                                );
                            }}
                            options={bus}
                            renderInput={(params) => <TextField {...params} />} />}
                </Box>

                <BoxSessaoTIECodigoPPM>
                    <Box sx={{ width: "30%", marginRight: 5 }}>
                        <TypographyPadrao onClick={lerTexto}>Sessão TI responsável: </TypographyPadrao>

                        <SelectEdited
                            id="sessaoTI"
                            value={props.valorSessaoTI}
                            onChange={(e: any) => {
                                const sessaoTI = {
                                    nome: e.target.value,
                                    abreviacao: props.informacaoProcesso.secaoTIResponsavel
                                }
                                props.setValorSessaoTI(sessaoTI.nome);

                                let abreviacaoSessao;

                                for (const sessaoTI of sessoesTI) {
                                    if (sessaoTI.nome == e.target.value) {
                                        abreviacaoSessao = sessaoTI.abreviacao;
                                    }
                                }

                                const novaInfoDemanda = {
                                    ...props.informacaoProcesso,
                                    secaoTIResponsavel: abreviacaoSessao,
                                };
                                props.setInformacaoProcesso(novaInfoDemanda);
                            }}>
                            {sessoesTI.map((sessao: any, index: number) => {
                                return (
                                    <MenuItem key={index} value={sessao.nome} onClick={lerTexto}>
                                        {sessao.nome}

                                    </MenuItem>
                                )
                            })}
                        </SelectEdited>
                    </Box>

                    <Box sx={{ width: "30%" }}>
                        <TypographyPadrao onClick={lerTexto}>Código PPM: </TypographyPadrao>
                        <TextFieldEdited sx={{ width: "15vw" }} id="codigoPPM" type="search" value={props.valorCodigoPPM} onChange={(e: any) => {

                            props.setValorCodigoPPM(e.target.value)

                            const novaInfoDemanda = {
                                ...props.informacaoProcesso,
                                codigoPPM: e.target.value,
                            };
                            props.setInformacaoProcesso(novaInfoDemanda);
                        }}>
                        </TextFieldEdited>
                    </Box>
                </BoxSessaoTIECodigoPPM>

                <Box sx={{ width: "100%" }}>
                    <TypographyPadrao onClick={lerTexto}>Link EPIC Jira: </TypographyPadrao>

                    <TextFieldEdited sx={{ width: "100%" }} id="linkJira" type="search" value={props.valorLinkJira}
                        onChange={(e: any) => {
                            props.setValorLinkJira(e.target.value)

                            const novaInfoDemanda = {
                                ...props.informacaoProcesso,
                                linkJira: e.target.value,
                            };
                            props.setInformacaoProcesso(novaInfoDemanda);
                        }}>
                    </TextFieldEdited>
                </Box>
            </BoxGeral>
        </>
    );
}