import { MouseEventHandler } from "react"
import { Box, IconButton, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { BotaoPrimario, BotaoSecundario } from "../../Pages/App.styles"
import { BoxConteudoModal, BoxTituloModal, TypographyTituloModal, BoxBotoesModal } from "../../Pages/TelaProcesso/TelaProcesso.styles"

export default function ConteudoModalConfirmacao(props: {
    tituloModal: string,
    descricaoModal: string,
    opcaoSecundaria: string,
    opcaoPrimaria: string,
    fecharModal: MouseEventHandler<HTMLButtonElement>,
    abrirProximoComponente: Function,
    conteudoProximoComponente: JSX.Element
}) {

    function executarAcao() {
        props.abrirProximoComponente(props.conteudoProximoComponente)
    }

    return (
        <BoxConteudoModal>
            <BoxTituloModal >
                <TypographyTituloModal variant='h5' >
                    {props.tituloModal}
                </TypographyTituloModal>
                <IconButton onClick={props.fecharModal}>
                    <CloseIcon />
                </IconButton>
            </BoxTituloModal>
            <Typography variant='subtitle2' sx={{ marginBottom: "30px" }}>
                {props.descricaoModal}
            </Typography>
            <BoxBotoesModal>
                <BotaoSecundario onClick={props.fecharModal} variant='outlined'>
                    {props.opcaoSecundaria}
                </BotaoSecundario>
                <BotaoPrimario onClick={executarAcao} variant="contained" sx={{ marginLeft: "20px" }}>
                    {props.opcaoPrimaria}
                </BotaoPrimario>
            </BoxBotoesModal>
        </BoxConteudoModal>
    )
}