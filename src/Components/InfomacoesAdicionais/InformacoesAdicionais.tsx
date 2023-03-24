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
    valorBUsBeneficadas: string[];
    setValorBUsBeneficadas: React.Dispatch<React.SetStateAction<string[]>>;
    prazoElaboracao: Dayjs | null;
    setPrazoElaboracao: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}) {

    const tamanhos = [
        "MUITO PEQUENO",
        "PEQUENO",
        "MEDIO",
        "GRANDE",
        "MUITO GRANDE",
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
            console.log(props.informacaoProcesso.busolicitante.nomeBU);
            props.setValorTamanho(props.informacaoProcesso.tamanho);
            props.setValorBUSolicitante(props.informacaoProcesso.busolicitante.nomerBU)

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
                        onChange={(e, valor: any) => { }}
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
                        <TextField sx={{ width: "100%" }} id="sessaoTIResponsavel" label="Sessão TI" type="search"></TextField>
                    </Box>
                    <Box sx={{ width: "30%" }}>
                        <TypographyPadrao>Codigo PPM: </TypographyPadrao>
                        <TextField sx={{ width: "80%" }} id="codigoPPM" label="Codigo PPM" type="search"></TextField>
                    </Box>
                </BoxSessaoTIECodigoPPM>

                <Box sx={{ width: "100%" }}>
                    <TypographyPadrao>Link EPIC Jira: </TypographyPadrao>
                    <TextField sx={{ width: "100%" }} id="linkJira" label="Link EPIC Jira" type="search"></TextField>
                </Box>

            </BoxGeral>
        </>
    );
}