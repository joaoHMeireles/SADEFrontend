import { Box } from "@mui/material";
import { ImageBox } from "./ResultadoVazio.style";
import { useContext } from "react";
import { TextReaderContext } from "../TextReaderContext/TextReaderContext";


export default function ResultadoVazio(props: { imagem: string, legenda: string }) {
    const { lerTexto } = useContext(TextReaderContext) as any

    return (
        <ImageBox>
            <img id="imagem" src={props.imagem} />
            
            <Box sx={{ marginTop: "30px" }} onClick={lerTexto}>
                {props.legenda}
            </Box>
        </ImageBox>
    )
}