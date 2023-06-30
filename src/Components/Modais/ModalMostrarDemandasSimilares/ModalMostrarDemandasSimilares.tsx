import { useContext, useEffect, useState } from "react"
import { TextReaderContext } from "../../TextReaderContext/TextReaderContext"
import { Modal } from "../../../constants/interfaces"
import { Alert, Box, IconButton, TextField, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import { BoxBotoesModal, BoxConteudoModal, BoxTituloModal, TypographyTituloModal } from "../../../Pages/TelaProcesso/TelaProcesso.styles";
import { BotaoPrimario, BotaoSecundario } from "../../../Pages/App.styles";
import { BoxAtencaoModalSimilaridade, BoxBotoesModalDemandaSimilar, BoxConteudoModalDemandaSimilaridade, BoxIconeFecharModal, BoxLinkDemandasSimilares, TypographyAtencaoDemandaSimilar, TypographyFraseDemandaSimilar, TypographyLinkDemandaSimilar, TypographyLinkDemandasSimilar } from "../Modais.style";


export default function ModalMostrarDemandasSimilares(props: { open: any, setOpen: any }) {
    let { lerTexto } = useContext(TextReaderContext) as any
    const [erroMotivoDevolucao, setErroMotivoDevolucao] = useState({ error: false, helperText: "" })
    const [demandasSimilares, setDemandaSimilares] = useState<any>([1, 2])
    const [modalOpen, setModalOpen] = useState<any>(true);

    useEffect(() => {
        props.setOpen(modalOpen)
    }, [modalOpen])

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

            <BoxIconeFecharModal>
                <CloseRoundedIcon sx={{ color: "#444", cursor: "pointer" }}
                    onClick={() => {
                        setModalOpen(false)
                    }}
                />
            </BoxIconeFecharModal>

            <BoxAtencaoModalSimilaridade>
                <TypographyAtencaoDemandaSimilar variant="h6">Atenção</TypographyAtencaoDemandaSimilar>
                <ReportProblemRoundedIcon sx={{ color: "#00579d", width: "80px", height: "80px", marginY: 2 }} />
            </BoxAtencaoModalSimilaridade>

            <BoxConteudoModalDemandaSimilaridade>
                {demandasSimilares.length > 1 ?
                    <>
                        <TypographyFraseDemandaSimilar>
                            Foram encontradas {demandasSimilares.length} demandas similar a sua.
                            Para evitar redundância em nosso sistema, avalie a demanda abaixo.
                            Caso a problemática ou a solução seja diferente, prossiga com seu cadastro.
                        </TypographyFraseDemandaSimilar>
                        <BoxLinkDemandasSimilares>
                            <TypographyLinkDemandasSimilar>Ver demanda</TypographyLinkDemandasSimilar>
                        </BoxLinkDemandasSimilares>
                    </>
                    :
                    <>
                        <TypographyFraseDemandaSimilar>
                            Foi encontrada uma demanda similar a sua.
                            Para evitar redundância em nosso sistema, avalie a demanda abaixo.
                            Caso a problemática ou a solução seja diferente, prossiga com seu cadastro.
                        </TypographyFraseDemandaSimilar>
                        <TypographyLinkDemandaSimilar>Ver demanda</TypographyLinkDemandaSimilar>
                    </>
                }

            </BoxConteudoModalDemandaSimilaridade>

            <BoxBotoesModalDemandaSimilar>
                <BotaoSecundario onClick={(e: any) => {
                    lerTexto(e);
                    // props.fecharModal(e) 
                }} variant='outlined'>
                    Continuar
                </BotaoSecundario>
                <BotaoPrimario onClick={(e: any) => {
                    lerTexto(e)
                    setModalOpen(false)
                }} variant="contained">
                    Cancelar
                </BotaoPrimario>
            </BoxBotoesModalDemandaSimilar>
        </BoxConteudoModal>
    )
}