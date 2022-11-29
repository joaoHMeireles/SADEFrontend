import { useState } from "react";

import Box from "@mui/material/Box";
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function BeneficiosDemanda() {
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
            <Box sx={{ width: '100%', height: "100vh", display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column" }}>
                {/* // beneficio real */}
                <Box sx={{ width: "100%", height: "50%", display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column" }}>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#00579D", marginTop: 3 }}>
                        <Typography sx={{ color: "#FFF" }}>
                            Benefício Real
                        </Typography>
                    </Box>
                    <Box sx={{ width: "100%", height: "80%", display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column" }}>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column" }}>
                            <Box sx={{ width: "100%", marginBottom: 1 }}>
                                <Typography>Valor Mensal: </Typography>
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
                        <Box sx={{ width: "100%", height: "50%" }}>
                            <Typography>Descrição: </Typography>
                            <TextField multiline
                                rows={7}
                                maxRows={Infinity} sx={{ width: "100%" }}></TextField>
                        </Box>
                    </Box>
                </Box>

                {/* // beneficio potencial */}
                <Box sx={{ width: "100%", height: "50%", display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column" }}>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#00579D", marginTop: 3 }}>
                        <Typography sx={{ color: "#FFF" }}>
                            Benefício Potencial
                        </Typography>
                    </Box>
                    <Box sx={{ width: "100%", height: "80%", display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column" }}>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column" }}>
                            <Box sx={{ width: "100%", marginBottom: 1 }}>
                                <Typography>Valor Mensal: </Typography>
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
                        <Box sx={{ width: "100%", height: "50%" }}>
                            <Typography>Descrição: </Typography>
                            <TextField multiline
                                rows={7}
                                maxRows={Infinity} sx={{ width: "100%" }}></TextField>
                        </Box>
                    </Box>
                    <Box sx={{ width: "100%", marginTop: 2 }}>
                        Obrigação legal
                        <Checkbox />
                    </Box>
                </Box>

                {/* Beneficio Qualitativo */}
                <Box sx={{ width: "100%", height: "50%", display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column" }}>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#00579D", marginTop: 3 }}>
                        <Typography sx={{ color: "#FFF" }}>
                            Benefício Qualitativo
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}