import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import api from "../../api/api";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

import {
    BoxPadraoDireta, BoxPadraoEsquerda, BoxTitulo, BoxGeral, TypographyPadrao,
    SelectPadrao, BoxContainerInputs
} from "./InfomacoesAdicionais.styles";

export default function InfomacoesAdicionais(props: {
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
        "Muito Pequeno",
        "Pequeno",
        "Médio",
        "Grande",
        "Muito Grande",
    ]

    const [bus, setBus] = useState<Object[]>([])

    useEffect(() => {
        api.get("/sod/bu").then((res) => setBus(res.data)).catch((err) => console.log(err));
    }, [])

    return (
        <>
            <BoxGeral>
                <BoxTitulo>
                    <Typography variant="h6" component={"h1"} sx={{ fontSize: "20px", color: "#FFF" }}>Informações Adicionais</Typography>
                </BoxTitulo>
                <BoxContainerInputs>
                    <BoxPadraoDireta sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                        <TypographyPadrao>Tamanho: </TypographyPadrao>
                        <SelectPadrao
                            id="tamanhos"
                            value={props.valorTamanho}
                            onChange={(e: SelectChangeEvent) => { props.setValorTamanho(e.target.value as string) }}
                        >
                            {tamanhos.map((tamanho: string) => {
                                return (
                                    <MenuItem value={tamanho}>{tamanho}</MenuItem>
                                )
                            })}

                        </SelectPadrao>
                    </BoxPadraoDireta>
                    <Box>
                        <Typography>Prazo elaboração da proposta: </Typography>
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
                        <TypographyPadrao>BU Solicitante: </TypographyPadrao>
                        <SelectPadrao
                            id="busolicitante"
                            value={props.valorBUSolicitante}
                            onChange={(e: SelectChangeEvent) => { props.setValorBUSolicitante(e.target.value as string) }}
                        >
                            {bus.map((bu: any) => {
                                return (
                                    <MenuItem value={bu.nomeBU}>{bu.nomeBU}</MenuItem>
                                )
                            })}
                        </SelectPadrao>
                    </BoxPadraoEsquerda>
                </BoxContainerInputs>

                {/* <BoxPadrao>
                    <TypographyPadrao>BUs Beneficiadas: </TypographyPadrao>
                    <SelectPadrao
                        id="busBeneficiadas"
                        multiple
                        value={props.valorBUsBeneficadas}
                        onChange={(e: SelectChangeEvent<typeof props.valorBUsBeneficadas>) => {

                            const {
                                target: { value },
                            } = e;
                            props.setValorBUsBeneficadas(
                                typeof value === 'string' ? value.split(',') : value,
                            );

                            // props.valorBUsBeneficadas.push(e.target.value);
                            props.setValorBUsBeneficadas(props.valorBUsBeneficadas);
                        }}
                    >
                        {bus.map((bu: any) => {
                            return (
                                <MenuItem value={bu.nomeBU}>
                                    <Checkbox checked={props.valorBUsBeneficadas.indexOf(bu.nomeBU) > -1} />
                                    {bu.nomeBU}
                                </MenuItem>
                            )
                        })}
                    </SelectPadrao>
                </BoxPadrao>
                <BoxPadrao>
                    <Typography>Sessão TI responsável: </Typography>
                    <TextField id="sessaoTIResponsavel" label="Sessão TI" type="search"></TextField>
                </BoxPadrao>
                <Box>
                    <Typography>Codigo PPM: </Typography>
                    <TextField id="codigoPPM" label="Codigo PPM" type="search"></TextField>
                </Box>
                <Box>
                    <Typography>Link EPIC Jira: </Typography>
                    <TextField id="linkJira" label="Link EPIC Jira" type="search"></TextField>
                </Box> */}
            </BoxGeral>
        </>
    );
}