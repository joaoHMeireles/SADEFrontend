import { useState } from "react";

import Box from "@mui/material/Box";
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
            <Box sx={{ width: '100%', height: "calc(100vh - 220px)" }}>
                <Box>
                    <Box>
                        <Typography>
                            Benefício Real
                        </Typography>
                    </Box>
                    <Box>
                        <Box>
                            <Typography>Valor Mensal: </Typography>
                            <Box>
                                <TextField />
                                <TextField
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
                        <Box>
                            <Typography>Descrição: </Typography>
                            <TextField></TextField>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}