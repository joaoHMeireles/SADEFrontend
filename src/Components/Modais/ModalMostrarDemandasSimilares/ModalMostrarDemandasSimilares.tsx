import { useContext, useState } from "react"
import { TextReaderContext } from "../../TextReaderContext/TextReaderContext"
import { Modal } from "../../../constants/interfaces"
import { Alert, Box, IconButton, TextField, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import { BoxBotoesModal, BoxConteudoModal, BoxTituloModal, TypographyTituloModal } from "../../../Pages/TelaProcesso/TelaProcesso.styles";
import { BotaoPrimario, BotaoSecundario } from "../../../Pages/App.styles";


export default function ModalMostrarDemandasSimilares() {
    let { lerTexto } = useContext(TextReaderContext) as any
    const [erroMotivoDevolucao, setErroMotivoDevolucao] = useState({ error: false, helperText: "" })
    // const conteudoFeedback = (
    //     <Alert onClose={() => { props.setFeedbackAberto(false) }} severity="success" sx={{ width: '100%' }} onClick={lerTexto}>
    //         Motivo da devolução enviado
    //     </Alert>
    // )

    function finalizarAcao() {
        const textarea = (document.getElementById("textareaMotivo") as HTMLInputElement).value

        if (textarea == "") {
            setErroMotivoDevolucao({
                error: true,
                helperText: "Motivo não informado"
            })
            return
        } else {
            setErroMotivoDevolucao({
                error: false,
                helperText: ""
            })
        }

        // props.abrirFeedback(conteudoFeedback)
    }

    return (
        <BoxConteudoModal>

            <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                <CloseRoundedIcon sx={{ color: "#444" }} />
            </Box>

            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Typography sx={{ color: "#00579D", fontSize: "20px", fontWeight: "bold" }} variant="h6">Atenção</Typography>
                <ReportProblemRoundedIcon sx={{ color: "#00579d", width: "80px", height: "80px", marginTop: 2 }} />
            </Box>

            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Typography sx={{ textAlign: "center", marginTop: 2 }}>
                    Foi encontrado uma demanda similar a sua.
                    Para evitar redundância em nosso sistema, avalie a demanda abaixo.
                    Caso a problemática ou a solução seja diferente, prossiga com seu cadastro.
                </Typography>

                <Typography sx={{ textDecoration: "underline", marginY: 4, color: "#00579d", cursor: "pointer" }}>Ver demanda</Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <BotaoSecundario onClick={(e: any) => {
                    lerTexto(e);
                    // props.fecharModal(e) 
                }} variant='outlined'>
                    Continuar
                </BotaoSecundario>
                <BotaoPrimario onClick={(e: any) => { lerTexto(e); finalizarAcao() }} variant="contained">
                    Cancelar
                </BotaoPrimario>
            </Box>
        </BoxConteudoModal>
    )
}