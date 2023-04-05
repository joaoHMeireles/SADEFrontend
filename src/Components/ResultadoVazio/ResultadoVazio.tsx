import { Box } from "@mui/material";
import { ImageBox } from "./ResultadoVazio.style";


export default function ResultadoVazio(props: { imagem: string, legenda: string }) {

    return (
        <ImageBox>
            <img id="imagem" src={props.imagem} />
            <Box sx={{ marginTop: "30px" }}>
                {props.legenda}
            </Box>
        </ImageBox>
    )
}