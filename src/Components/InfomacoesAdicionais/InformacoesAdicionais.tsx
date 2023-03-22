import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import api from "../../api/api";

export default function InfomacoesAdicionais(props: {
    valorTamanho: string;
    setValorTamanho: React.Dispatch<React.SetStateAction<string>>;
    valorBUSolicitante: string;
    setValorBUSolicitante: React.Dispatch<React.SetStateAction<string>>;
    valorBUsBeneficadas: string[];
    setValorBUsBeneficadas: React.Dispatch<React.SetStateAction<string[]>>;
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
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginY: 5 }}>
                <Box sx={{ width: "100%", backgroundColor: "#00579d", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h6" component={"h1"} sx={{ fontSize: "20px", color: "#FFF" }}>Informações Adicionais</Typography>
                </Box>
                <Box>
                    <Typography>Tamanho: </Typography>
                    <Select
                        id="tamanhos"
                        label="Tamanho"
                        value={props.valorTamanho}
                        onChange={(e: SelectChangeEvent) => { props.setValorTamanho(e.target.value as string) }}
                    >
                        {tamanhos.map((tamanho: string) => {
                            return (
                                <MenuItem value={tamanho}>{tamanho}</MenuItem>
                            )
                        })}

                    </Select>
                </Box>
                <Box>
                    <Typography>BU Solicitante: </Typography>
                    <Select
                        id="busolicitante"
                        label="BU Solicitante"
                        value={props.valorBUSolicitante}
                        onChange={(e: SelectChangeEvent) => { props.setValorBUSolicitante(e.target.value as string) }}
                    >
                        {bus.map((bu: any) => {
                            return (
                                <MenuItem value={bu.nomeBU}>{bu.nomeBU}</MenuItem>
                            )
                        })}
                    </Select>
                </Box>
                <Box>
                    <Typography>BUs Beneficiadas: </Typography>
                    <Select
                        id="busBeneficiadas"
                        label="BUs Beneficiadas"
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
                    </Select>
                </Box>
                <Box>
                    <Typography>Sessão TI responsável: </Typography>
                    <TextField id="sessaoTIResponsavel" label="Sessão TI" type="search"></TextField>
                </Box>
                <Box>
                    <Typography>Prazo elaboração da proposta: </Typography>
                    <DatePicker label="Prazo"></DatePicker>
                </Box>
            </Box>
        </>
    );
}