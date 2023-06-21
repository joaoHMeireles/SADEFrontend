import api from "../../api/api";

import { Box } from "@mui/system";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import {
    BoxNotificacao,
    NotificacaoBoxIcone,
    NotificacaoLadoEsquerdo,
    NotificacaoLadoDireito,
    TypographyMensagem,
    TypographyTitulo,
} from "./Notificacao.styles";

import { TipoColecaoComponenteProcesso, TipoComponenteProcesso } from "../../constants/enuns";
import { useContext } from "react";
import { TextReaderContext } from "../TextReaderContext/TextReaderContext";
import { Skeleton } from "@mui/material";


/**
 *
 * @param props
 * @returns Retorna um componente de notificação
 */
export default function Notificacao(props: {
    idNotificacao: number;
    Icone: any;
    titulo: any;
    mensagem: any;
    notificacoes: any[];
    setNotificacoes: any;
    tipoNotificacao: any;
    linkNotificacao: any;
    idComponenteLink: any;
    conteudoCarregou: boolean
}) {
    const { lerTexto, leituraDeSiteAtiva } = useContext(TextReaderContext) as any
    const idUsuario = localStorage.getItem("IDUSUARIO") as string;
    const bodyNotificacaoDTO: any = {
        notificacao: {
            idNotificacao: props.idNotificacao
        },
        usuario: {
            idUsuario: parseInt(idUsuario)
        }
    }

    function redirecionar(e: any) {
        if (leituraDeSiteAtiva) {
            lerTexto(e)
            if (!(e.target.localName == "div")) {
                return
            }
        }


        if (props.tipoNotificacao == "DEMANDA") {
            api.get("/sade/demanda/" + props.idComponenteLink).then((response) => {
                response.data.id = response.data.idDemanda
                response.data.tipo = TipoComponenteProcesso.Demanda
                localStorage.setItem(
                    `DEMANDAESCOLHIDA`,
                    JSON.stringify(response.data)
                );

                console.log(response.data)
                console.log(props.linkNotificacao)
                location.href = props.linkNotificacao
            })
        } else if (props.tipoNotificacao == "PROPOSTA") {
            api.get("/sade/proposta/" + props.idComponenteLink).then((response) => {
                const proposta = response.data

                for (let atributo in proposta.demanda) {
                    console.log(atributo);

                    proposta[atributo] = proposta.demanda[atributo]
                }

                proposta.tipo = TipoComponenteProcesso.Proposta
                proposta.id = proposta.idProposta

                localStorage.setItem(
                    `PROPOSTAESCOLHIDA`,
                    JSON.stringify(proposta)
                );

                location.href = props.linkNotificacao
            })
        } else if (props.tipoNotificacao == "PAUTA") {
            api.get("/sade/pauta/" + props.idComponenteLink).then((response) => {
                let pauta = response.data
                pauta.propostas = pauta.propostasPauta
                pauta.propostasPauta = null
                pauta.tituloReuniao = pauta.tituloReuniaoPauta

                pauta.tipo = TipoColecaoComponenteProcesso.Pauta

                localStorage.setItem(
                    `PAUTAESCOLHIDA`,
                    JSON.stringify(pauta)
                );

                location.href = props.linkNotificacao
            })
        } else if (props.tipoNotificacao == "ATA") {
            api.get("/sade/ata/" + props.idComponenteLink).then((response) => {
                let ata = response.data
                ata.propostas = ata.propostasAta
                ata.propostasPauta = ata.pauta.propostasPauta
                ata.tituloReuniao = ata.tituloReuniaoATA

                ata.tipo = TipoColecaoComponenteProcesso.ATA

                localStorage.setItem(
                    `ATAESCOLHIDA`,
                    JSON.stringify(ata)
                );

                location.href = props.linkNotificacao
            })
        } else if (props.tipoNotificacao == "CHAT") {

            location.href = props.linkNotificacao
        }
    }

    return (
        <BoxNotificacao onClick={redirecionar}>
            {props.conteudoCarregou ?
                <>
                    <NotificacaoLadoEsquerdo>
                        <NotificacaoBoxIcone>
                            <props.Icone sx={{ color: "#444" }}></props.Icone>
                        </NotificacaoBoxIcone>
                        <Box>
                            <Box>
                                <TypographyTitulo variant="h6" onClick={lerTexto}>{props.titulo}</TypographyTitulo>
                            </Box>
                            <Box>
                                <TypographyMensagem variant="caption" onClick={lerTexto}>
                                    {props.mensagem}
                                </TypographyMensagem>
                            </Box>
                        </Box>
                    </NotificacaoLadoEsquerdo>
                    <NotificacaoLadoDireito>
                        <DeleteRoundedIcon
                            sx={{ color: "#444", cursor: "pointer" }}
                            onClick={() => {
                                console.log(bodyNotificacaoDTO);
                                api.delete(`/sade/notificacao/${bodyNotificacaoDTO.notificacao.idNotificacao}/${bodyNotificacaoDTO.usuario.idUsuario}`).then((res) => {
                                    props.setNotificacoes(res.data)
                                }).catch((err) => {
                                    console.log(err);
                                });
                            }}
                        />
                    </NotificacaoLadoDireito>
                </>
                :
                <>
                    <Skeleton variant="rectangular" sx={{width: "100%", height: "6vh"}}/>
                </>
            }
        </BoxNotificacao>
    )
}
