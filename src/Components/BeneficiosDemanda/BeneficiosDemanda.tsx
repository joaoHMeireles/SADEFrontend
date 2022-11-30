import { useState } from "react";

import Box from "@mui/material/Box";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from "@mui/material/FormControlLabel"
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import AddRoundedIcon from '@mui/icons-material/AddRounded';

export default function BeneficiosDemanda() {

    let listaBeneficioReal = [
        { beneficio: < BeneficioReal /> }
    ]


    return (
        <>
            <Box sx={{ width: '100%', height: "auto", display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column" }}>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#00579D", marginTop: 3 }}>
                    <Typography sx={{ color: "#FFF", height: "2rem", display: "flex", justifyContent: "center", alignItems: "center", }}>
                        Benefício Real
                    </Typography>
                </Box>
                {listaBeneficioReal.map((item) => {
                    console.log(item)
                })}
                < Box sx={{ marginTop: 3 }}>
                    <AddRoundedIcon sx={{ fontSize: "2rem", cursor: "pointer" }} />
                </Box>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#00579D", marginTop: 3 }}>
                    <Typography sx={{ color: "#FFF", height: "2rem", display: "flex", justifyContent: "center", alignItems: "center", }}>
                        Benefício Potencial
                    </Typography>
                </Box>
                <BeneficioPotencial />
                <BeneficioQualitativo />
            </Box>
        </>
    )
}

function BeneficioReal() {

    const [moeda, setMoeda] = useState("BRL");

    const moedas = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];

    return (
        <>
            <Box sx={{ width: "100%", height: "50%", display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column" }}>
                <Box sx={{ width: "100%", height: "80%", display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column", marginTop: 5 }}>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column" }}>
                        <Box sx={{ width: "100%", marginBottom: 1 }}>
                            <Typography sx={{ color: "#595959" }}>Valor Mensal: </Typography>
                        </Box>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "start", alignItems: "center" }}>
                            <TextField sx={{ width: "30%", marginRight: 5 }} />
                            <TextField
                                sx={{ width: "10%" }}
                                id="outlined-select-currency"
                                select
                                label="Moeda"
                                value={moeda}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMoeda(event.target.value)}
                            >
                                {moedas.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                    </Box>
                    <Box sx={{ width: "100%", height: "50%", marginTop: 3 }}>
                        <Typography sx={{ color: "#595959" }}>Descrição: </Typography>
                        <TextField multiline
                            rows={7}
                            maxRows={Infinity} sx={{ width: "100%" }}></TextField>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

function BeneficioPotencial() {

    const [moeda, setMoeda] = useState("BRL");

    const moedas = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];

    return (
        <>
            <Box sx={{ width: "100%", height: "50%", display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column" }}>
                <Box sx={{ width: "100%", height: "80%", display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column", marginTop: 5 }}>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column" }}>
                        <Box sx={{ width: "100%", marginBottom: 1 }}>
                            <Typography sx={{ color: "#595959" }}>Valor Mensal: </Typography>
                        </Box>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "start", alignItems: "center" }}>
                            <TextField sx={{ width: "30%", marginRight: 5 }} />
                            <TextField
                                sx={{ width: "10%" }}
                                id="outlined-select-currency"
                                select
                                label="Moeda"
                                value={moeda}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMoeda(event.target.value)}
                            >
                                {moedas.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                    </Box>
                    <Box sx={{ width: "100%", height: "50%", marginTop: 3 }}>
                        <Typography sx={{ color: "#595959" }}>Descrição: </Typography>
                        <TextField multiline
                            rows={7}
                            maxRows={Infinity} sx={{ width: "100%" }}></TextField>
                    </Box>
                </Box>
                <Box sx={{ width: "100%", marginTop: 2 }}>
                    <Typography sx={{ color: "#595959" }}>
                        Obrigação legal
                        <Checkbox />
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

function BeneficioQualitativo() {
    const [frequencia, setFrequencia] = useState("Frequência");

    const frequencias = [
        {
            value: 'Frequência 01',
            label: '$',
        },
        {
            value: 'Frequência 02',
            label: '€',
        },
        {
            value: 'Frequência 03',
            label: '฿',
        },
        {
            value: 'Frequência 04',
            label: '¥',
        },
    ];

    return (
        <>
            <Box sx={{ width: "100%", height: "50%", display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column" }}>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#00579D", marginTop: 3 }}>
                    <Typography sx={{ color: "#FFF", height: "2rem", display: "flex", justifyContent: "center", alignItems: "center", }}>
                        Benefício Qualitativo
                    </Typography>
                </Box>
                <Box sx={{ width: "100%", height: "50%", marginTop: 5 }}>
                    <Typography sx={{ color: "#595959" }}>Descrição: </Typography>
                    <TextField multiline
                        rows={7}
                        maxRows={Infinity} sx={{ width: "100%" }}></TextField>
                </Box>
                <Box sx={{ width: "100%", height: "50%", flexDirection: "column", marginTop: 5 }}>
                    <Typography sx={{ color: "#595959" }}>
                        Frequêcia de uso da solução:
                    </Typography>
                    <TextField sx={{ width: "30%", marginTop: 1 }}
                        select
                        value={frequencia}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFrequencia(event.target.value)}
                    >
                        {frequencias.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                <Box sx={{ width: "100%", height: "50%", marginTop: 5 }}>
                    <Typography sx={{ color: "#595959" }}>
                        Requesito de controles internos:
                    </Typography>
                    <RadioGroup sx={{ width: "auto", display: "flex", flexDirection: "row" }}
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel sx={{ marginRight: 4, color: "#595959" }} value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel sx={{ color: "#595959" }} value="não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </Box>
            </Box>
        </>
    )
}