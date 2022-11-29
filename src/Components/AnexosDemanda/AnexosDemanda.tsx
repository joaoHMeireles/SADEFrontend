import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';

export default function AnexosDemanda() {
    return (
        <>
            <Box sx={{ width: "100%", height: "10vh", display: "flex", justifyContent: "center", alignItems: "center", border: "2px solid #595959", borderRadius: "4px", marginTop: 3 }}>
                <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "start", alignItems: "center", marginLeft: 3 }}>
                    <Button variant="outlined" component="label" sx={{ height: "60%", border: "2px solid", "&:hover": { border: "2px solid", backgroundColor: "#1976d21a", transition: "ease-in 0.5s" } }}>
                        Escolher arquivo
                        <input hidden accept="image/*" multiple type="file" />
                        <AttachFileRoundedIcon />
                    </Button>
                    <Typography sx={{ marginLeft: 3 }}>
                        Nenhum item selecionado
                    </Typography>
                </Box>
            </Box>
        </>
    )
}