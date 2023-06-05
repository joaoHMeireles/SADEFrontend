import { useContext, useState } from "react"
import { TextReaderContext } from "../../TextReaderContext/TextReaderContext"
import { Modal } from "../../../constants/interfaces"
import { Alert, IconButton, TextField } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { BoxBotoesModal, BoxConteudoModal, BoxTituloModal, TypographyTituloModal } from "../../../Pages/TelaProcesso/TelaProcesso.styles";
import { BotaoPrimario, BotaoSecundario } from "../../../Pages/App.styles";


export default function ModalMotivoDevolucao(props: Modal) {
    let { lerTexto } = useContext(TextReaderContext) as any
    const [erroMotivoDevolucao, setErroMotivoDevolucao] = useState({ error: false, helperText: "" })
    const conteudoFeedback = (
        <Alert onClose={() => { props.setFeedbackAberto(false) }} severity="success" sx={{ width: '100%' }} onClick={lerTexto}>
            Motivo da devolução enviado
        </Alert>
    )

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

        props.abrirFeedback(conteudoFeedback)
    }

    return (
        <BoxConteudoModal>
            <BoxTituloModal >
                <TypographyTituloModal variant='h5' onClick={lerTexto}>
                    Informe o motivo da devolução
                </TypographyTituloModal>
                <IconButton onClick={props.fecharModal}>
                    <CloseIcon />
                </IconButton>
            </BoxTituloModal>
            <TextField
                id='textareaMotivo'
                placeholder='Informe o motivo'
                multiline
                rows={7}
                sx={{ marginBottom: "30px" }}
                {...erroMotivoDevolucao}
            />
            <BoxBotoesModal>
                <BotaoSecundario onClick={(e: any) => { lerTexto(e); props.fecharModal(e) }} variant='outlined'>
                    Cancelar
                </BotaoSecundario>
                <BotaoPrimario onClick={(e: any) => { lerTexto(e); finalizarAcao() }} variant="contained" sx={{ marginLeft: "20px" }}>
                    Enviar
                </BotaoPrimario>
            </BoxBotoesModal>
        </BoxConteudoModal>
    )
}