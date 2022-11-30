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
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column", width: "100%", height: "auto", }}>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "100%", height: "25%", marginTop: 5 }}>
                    <Typography sx={{ marginBottom: 2, color: "#595959" }}>
                        Título:
                    </Typography>
                    <TextField sx={{ color: "#595959" }} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "100%", height: "25%", marginTop: 5 }}>
                    <Typography sx={{ marginBottom: 2, color: "#595959" }}>
                        Problema a ser resolvido (situação atual):
                    </Typography>
                    <TextField
                        multiline
                        rows={7}
                        maxRows={Infinity} sx={{ color: "#595959" }} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "100%", height: "25%", marginTop: 5 }}>
                    <Typography sx={{ marginBottom: 2, color: "#595959" }}>
                        Proposta / Solicitação de proposta:
                    </Typography>
                    <TextField
                        multiline
                        rows={7}
                        maxRows={Infinity} sx={{ color: "#595959" }} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "25%", marginTop: 5 }}>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "100%", height: "100%" }}>
                        <Typography sx={{ marginBottom: 2, color: "#595959" }}>
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