import api from "../../api/api";

import {Box} from "@mui/system";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import {
    BoxNotificacao,
    NotificacaoBoxIcone,
    NotificacaoLadoEsquerdo,
    NotificacaoLadoDireito,
    TypographyMensagem,
    TypographyTitulo,
} from "./Notificacao.styles";
import {TipoColecaoComponenteProcesso, TipoComponenteProcesso} from "../../constants/enuns";

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
    setNotificacoes: React.Dispatch<React.SetStateAction<Array<Object>>>;
    tipoNotificacao: any;
    linkNotificacao: any;
    idComponenteLink: any;
}) {
    const idUsuario = localStorage.getItem("IDUSUARIO") as string;

    const bodyNotificacaoDTO: any = {
        notificacao: {
            idNotificacao: props.idNotificacao
        },
        usuario: {
            idUsuario: parseInt(idUsuario)
        }
    }

    function redirecionar() {
        if (props.tipoNotificacao == "DEMANDA") {
            console.log("entrou aqui")
            api.get("/sade/demanda/" + props.idComponenteLink).then((response) => {
                response.data.id = response.data.idDemanda
                response.data.tipo = TipoComponenteProcesso.Demanda

                localStorage.setItem(
                    `DEMANDASELECIONADA`,
                    JSON.stringify(response.data)
                );

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
        }

    }

    return (
        <BoxNotificacao>
            <NotificacaoLadoEsquerdo onClick={redirecionar}>
                <NotificacaoBoxIcone>
                    <props.Icone sx={{color: "#595959"}}></props.Icone>
                </NotificacaoBoxIcone>
                <Box>
                    <Box>
                        <TypographyTitulo variant="h6">{props.titulo}</TypographyTitulo>
                    </Box>
                    <Box>
                        <TypographyMensagem variant="caption">
                            {props.mensagem}
                        </TypographyMensagem>
                    </Box>
                </Box>
            </NotificacaoLadoEsquerdo>
            <NotificacaoLadoDireito>
                <DeleteRoundedIcon
                    sx={{color: "#595959", cursor: "pointer"}}
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
        </BoxNotificacao>
    );
}
