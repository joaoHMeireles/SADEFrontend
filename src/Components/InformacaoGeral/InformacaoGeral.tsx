import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';

export default function InformacaoGeral() {

    const listaTeste = [
        { label: 'teste 1' },
        { label: 'teste 2' },
        { label: 'teste 3' },
        { label: 'teste 4' },
        { label: 'teste 5' },
    ]

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column", width: "100%", minHeight: "70vh", maxHeight: "80vh" }}>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "100%", height: "25%" }}>
                    <Typography>
                        Título:
                    </Typography>
                    <TextField />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "100%", height: "25%" }}>
                    <Typography>
                        Problema a ser resolvido (situação atual):
                    </Typography>
                    <TextField
                        multiline
                        rows={7}
                        maxRows={Infinity} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "100%", height: "25%" }}>
                    <Typography>
                        Proposta / Solicitação de proposta:
                    </Typography>
                    <TextField
                        multiline
                        rows={7}
                        maxRows={Infinity} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "25%" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "100%", height: "100%" }}>
                        <Typography>
                            Centros de custo:
                        </Typography>
                        <Autocomplete
                            multiple
                            disablePortal
                            options={listaTeste}
                            renderInput={(params) => <TextField {...params} />} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}