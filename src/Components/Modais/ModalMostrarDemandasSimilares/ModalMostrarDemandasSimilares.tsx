import { useContext, useEffect, useState } from "react"
import { TextReaderContext } from "../../TextReaderContext/TextReaderContext"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import { BoxConteudoModal } from "../../../Pages/TelaProcesso/TelaProcesso.styles";
import { BotaoPrimario, BotaoSecundario } from "../../../Pages/App.styles";
import { BoxAtencaoModalSimilaridade, BoxBotoesModalDemandaSimilar, BoxConteudoModalDemandaSimilaridade, BoxIconeFecharModal, BoxLinkDemandasSimilares, TypographyAtencaoDemandaSimilar, TypographyFraseDemandaSimilar, TypographyLinkDemandaSimilar, TypographyLinkDemandasSimilar } from "../Modais.style";
import { TipoComponenteProcesso } from "../../../constants/enuns";

export default function ModalMostrarDemandasSimilares(props: {
    open: any,
    setOpen: any,
    demandasSimilares: any[],
    continuarCriacaoDemanda: Function
}) {
    let { lerTexto } = useContext(TextReaderContext) as any
    const [modalOpen, setModalOpen] = useState<any>(true);

    useEffect(() => {
        props.setOpen(modalOpen)
    }, [modalOpen])

    function verProcesso(demanda: any) {
        demanda.id = demanda.idDemanda
        demanda.tipo = TipoComponenteProcesso.Demanda

        localStorage.setItem(
            `DEMANDAESCOLHIDA`,
            JSON.stringify(demanda)
        );

        window.open(
            'http://localhost:8081/home/demand',
            '_blank'
        );
    }

    return (
        <BoxConteudoModal>
            <BoxIconeFecharModal>
                <CloseRoundedIcon sx={{ color: "#444", cursor: "pointer" }}
                    onClick={() => {
                        setModalOpen(false)
                    }} />
            </BoxIconeFecharModal>

            <BoxAtencaoModalSimilaridade>
                <TypographyAtencaoDemandaSimilar variant="h6" onClick={lerTexto}>Atenção</TypographyAtencaoDemandaSimilar>

                <ReportProblemRoundedIcon sx={{ color: "#00579d", width: "80px", height: "80px", marginY: 2 }} />
            </BoxAtencaoModalSimilaridade>

            <BoxConteudoModalDemandaSimilaridade>
                {props.demandasSimilares.length > 1 ?
                    <>
                        <TypographyFraseDemandaSimilar onClick={lerTexto}>
                            Foram encontradas {props.demandasSimilares.length} demandas similares a sua.
                            Para evitar redundância em nosso sistema, avalie as demandas abaixo.
                            Caso a problemática ou a solução seja diferente, prossiga com seu cadastro.
                        </TypographyFraseDemandaSimilar>

                        <BoxLinkDemandasSimilares>
                            {props.demandasSimilares.map((demanda: any) =>
                                <TypographyLinkDemandasSimilar onClick={() => { verProcesso(demanda) }}>
                                    {demanda.tituloDemanda}
                                </TypographyLinkDemandasSimilar>
                            )}
                        </BoxLinkDemandasSimilares>
                    </>
                    :
                    <>
                        <TypographyFraseDemandaSimilar onClick={lerTexto}>
                            Foi encontrada uma demanda similar a sua.
                            Para evitar redundância em nosso sistema, avalie a demanda abaixo.
                            Caso a problemática ou a solução seja diferente, prossiga com seu cadastro.
                        </TypographyFraseDemandaSimilar>

                        <TypographyLinkDemandaSimilar onClick={() => { verProcesso(props.demandasSimilares[0]) }}>{props.demandasSimilares[0].tituloDemanda}</TypographyLinkDemandaSimilar>
                    </>
                }
            </BoxConteudoModalDemandaSimilaridade>

            <BoxBotoesModalDemandaSimilar>
                <BotaoSecundario onClick={(e: any) => {
                    lerTexto(e);
                    setModalOpen(false)
                    props.continuarCriacaoDemanda()
                }} variant='outlined'>
                    Continuar
                </BotaoSecundario>
                
                <BotaoPrimario onClick={(e: any) => {
                    lerTexto(e)
                    setModalOpen(false)

                    location.href = "/home"
                }} variant="contained">
                    Cancelar
                </BotaoPrimario>
            </BoxBotoesModalDemandaSimilar>
        </BoxConteudoModal>
    )
}