import { useEffect, useState, useContext, useRef } from "react";
import { getDateFormat, stringAvatar } from '../../utils/index'
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Chat from "../../Components/Chat/Chat";
import Toolbar from "../../Components/Toolbar/Toolbar";
import AttachmentRoundedIcon from '@mui/icons-material/AttachmentRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {
    BoxBarraPesquisa, BoxBreadcrumb, ContainerChats, ContainerGeralChats, LadoEsquerdoChat, LadoEsquerdoGeralChats, LadoDiretoChat,
    LadoDireitoGeralChats, BarraPesquisa, TypographyMensagemEsquerda, TypographyMensagemDireita, BoxGeralMensagensLadoDireito,
    BoxMensagensLadoDireito, BoxMensagemLadoDireito, TypographyPessoa, BoxGeralMensagensLadoEsquerdo, BoxMensagensLadoEsquerdo,
    BoxMensagemLadoEsquerdo, InputPesquisaChat, BoxIconeEnviar, BoxLadoDireitoTituloDemanda, TypographyTituloDemandaLadoDireito, TypographyQuantidadeMembrosLadoDireito, BoxBreadcrumbTituloChat, BoxMensagemHorario, TypographyHoraMensagem, BoxTextoDiaMensagem, BoxContainerDiaMensagem
} from "./Chats.styles";
import ResultadoVazio from "../../Components/ResultadoVazio/ResultadoVazio";
import semChats from "../../Assets/leaf.png"
import { WebSocketContext } from "../../api/websocketservice.jsx";
import api from "../../api/api";
import InputAdornment from "@mui/material/InputAdornment";
import selecionarChat from "../../Assets/selecionarChat.png"
import { Avatar, Box } from "@mui/material";
import { TextReaderContext } from "../../Components/TextReaderContext/TextReaderContext";

/**
 * Função que tem dois componentes jutamente a ela, sendo um para chats e outro para as mensagem de determinado chat
 * @param props
 * @returns Retorna a tela de chat
 */

export default function Chats(props: { aberto: boolean }) {
    const { lerTexto } = useContext(TextReaderContext) as any
    const [listaChats, setListaChats] = useState<any[]>([])
    const [listaChatsFiltrados, setListaChatsFiltrados] = useState<any[]>([])
    const [componenteChats, setComponenteChats] = useState<any>()
    const [chatEscolhido, setChatEscolhido] = useState<any>({ mensagens: [] })
    const [elementoMensagens, setElementoMensagens] = useState<any>()
    const webSocketService: any = useContext(WebSocketContext)
    const usuario = JSON.parse(localStorage.getItem("USUARIO") as string)
    let requisitouChats = false
    let contagemMembros = 0

    localStorage.setItem("PAGINATUAL", "chat")

    useEffect(() => {
        const idUsuario = localStorage.getItem("IDUSUARIO")
        if (listaChats.length == 0 && !requisitouChats) {
            api.get("/sade/usuario/" + idUsuario + "/chat").then((response) => {
                setListaChats(response.data)
            }).catch((err) => {
                console.log(err);
            })
        }
    }, []);

    useEffect(() => {
        setListaChatsFiltrados(listaChats)
    }, [listaChats])

    useEffect(() => {
        atualizarComponentes()
    }, [listaChatsFiltrados])

    useEffect(() => {
        atualizarTela()

        localStorage.setItem(`NOVAMENSAGEMCHAT${chatEscolhido.idChat}NOTIFICADA`, "false")
    }, [chatEscolhido])

    useEffect(() => {
        if (webSocketService.stompClient == null) {
            return
        }

        for (let chat of listaChats) {
            function acaoNovaMensagem(response: any) {
                const infoMensagem = JSON.parse(response.body)
                //infoMensagem[0] = objeto da mensagem
                const mensagemRecebida = infoMensagem[0];

                const indexChat = listaChats.findIndex((chatAcharIndex: any) => chatAcharIndex.idChat == infoMensagem[1])
                const chatNovaMensagem = listaChats[indexChat]

                chatNovaMensagem.mensagens.push(mensagemRecebida)
                listaChats[indexChat] = chatNovaMensagem

                // infoMensagem[1] = id do chat da mensagem
                if (infoMensagem[1] == chat.idChat) {
                    setChatEscolhido(chatNovaMensagem)
                    atualizarMensagensNovaMensagem()
                } else {
                    atualizarComponentes()
                }


                if (localStorage.getItem(`NOVAMENSAGEMCHAT${chat.idChat}NOTIFICADA`) == "false" && localStorage.getItem("PAGINATUAL") != "chat") {
                    api.post("/sade/notificacao/chat/" + chat.idChat, chat).then((res) => {
                        localStorage.setItem(`NOVAMENSAGEMCHAT${chat.idChat}NOTIFICADA`, "true")
                    })
                }
            }

            function atualizarMensagensNovaMensagem() {
                if (chat != null) {
                    if (chat.mensagens != null) {
                        if (chat.mensagens.length == 0) {
                            return
                        }
                    } else {
                        return
                    }
                } else {
                    return
                }

                const componenteMensagensNovo = chat.mensagens.map((mensagem: any) => {
                    const usuario = chat.usuariosChat.find((usuario: any) => usuario.idUsuario == mensagem.usuario.idUsuario);

                    return (
                        <Mensagem mensagem={mensagem.mensagem} horaMensagem={mensagem.dataHoraMensagem} usuario={usuario} />
                    )
                })

                setElementoMensagens(componenteMensagensNovo)
                atualizarComponentes()
            }

            webSocketService.inscrever(`/demanda/${chat.idChat}/chat`, acaoNovaMensagem)
        }

        atualizarTela()
    }, [webSocketService.stompClient, listaChats])

    function verChat(idChat: any) {
        const chatAtual = listaChats.find(chat => chat.idChat == idChat)
        setChatEscolhido(chatAtual)
    }

    function atualizarTela() {
        atualizarComponentes()
        atualizarMensagens()
    }

    function atualizarComponentes() {
        const componenteChatsNovo = listaChatsFiltrados.map((chat) => {
            if (chat.usuariosChat) {
                let ultimaMensagem: any = null

                if (chat.mensagens.length > 0) {
                    ultimaMensagem = chat.mensagens[chat.mensagens.length - 1]
                }

                const usuario = chat.usuariosChat.find((usuario: any) => {
                    if (ultimaMensagem) {
                        if (usuario.idUsuario == ultimaMensagem.usuario.idUsuario) {
                            return usuario;
                        }
                    }
                })

                return (
                    <Chat
                        id={chat.idChat}
                        idChatEscolhido={chatEscolhido.idChat}
                        titulo={chat.demanda.tituloDemanda}
                        pessoa={(usuario?.nomeUsuario != undefined ? usuario.nomeUsuario : "")}
                        mensagem={ultimaMensagem ? ultimaMensagem.mensagem : ""}
                        horaMensagem={ultimaMensagem ? ultimaMensagem.dataHoraMensagem : ""}
                        verChat={verChat} />
                )
            }
        })

        setComponenteChats(componenteChatsNovo)
    }

    function atualizarMensagens() {
        if (chatEscolhido != null) {
            if (chatEscolhido.mensagens != null) {
                if (chatEscolhido.mensagens.length == 0) {
                    return
                }
            } else {
                return
            }
        } else {
            return
        }

        const componenteMensagensNovo = chatEscolhido.mensagens.map((mensagem: any) => {
            const usuario = chatEscolhido.usuariosChat.find((usuario: any) => usuario.idUsuario == mensagem.usuario.idUsuario);

            return (
                <Mensagem mensagem={mensagem.mensagem} horaMensagem={mensagem.dataHoraMensagem} usuario={usuario} />
            )
        })

        setElementoMensagens(componenteMensagensNovo)
    }

    function filtrarPelaSearchBar(e: any) {
        const valorPesquisa = e.target.value

        if (valorPesquisa !== '') {
            const filteredData = listaChats.filter((chat) => {
                return chat.demanda.tituloDemanda.toLowerCase().includes(valorPesquisa.toLowerCase())
            })

            setListaChatsFiltrados(filteredData)
        }
        else {
            setListaChatsFiltrados(listaChats)
        }
    }

    return (
        <>
            <ContainerGeralChats>
                <BoxBreadcrumbTituloChat>
                    <BoxBreadcrumb>
                        <Breadcrumb />
                    </BoxBreadcrumb>
                    {(listaChatsFiltrados.length != 0 && chatEscolhido.demanda != null) &&
                        <BoxLadoDireitoTituloDemanda>
                            <TypographyTituloDemandaLadoDireito variant="h6" onClick={lerTexto}>{chatEscolhido.demanda.tituloDemanda}</TypographyTituloDemandaLadoDireito>

                            <Box sx={{ display: "flex" }}>
                                <TypographyQuantidadeMembrosLadoDireito onClick={(e: any) => { lerTexto(e); window.open("/profile?", "_blank") }}>
                                    Você,
                                </TypographyQuantidadeMembrosLadoDireito>
                                {chatEscolhido.usuariosChat.map((usuarioChat: any, index: number) => {
                                    contagemMembros++
                                    if (usuario.idUsuario == usuarioChat.idUsuario) {
                                        return
                                    }

                                    return (
                                        <TypographyQuantidadeMembrosLadoDireito onClick={(e: any) => { lerTexto(e); window.open("/profile?" + usuarioChat.idUsuario, "_blank") }}>
                                            {usuarioChat.nomeUsuario}{contagemMembros - 1 != chatEscolhido.usuariosChat.length - 1 && ","}
                                        </TypographyQuantidadeMembrosLadoDireito>
                                    )
                                })}
                            </Box>
                        </BoxLadoDireitoTituloDemanda>
                    }
                </BoxBreadcrumbTituloChat>

                <ContainerChats>
                    {listaChats.length != 0 ?
                        <>
                            <LadoEsquerdoGeralChats>
                                <LadoEsquerdoChat>
                                    <InputPesquisaChat placeholder="Pesquisar"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchRoundedIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                        onChange={filtrarPelaSearchBar}
                                    />
                                    {componenteChats}
                                </LadoEsquerdoChat>
                            </LadoEsquerdoGeralChats>

                            <LadoDireitoGeralChats>
                                {chatEscolhido.idChat == null ?
                                    <ResultadoVazio imagem={selecionarChat} legenda={"Selecione um chat disponível"} />
                                    :
                                    <>
                                        <ConversaChat chatEscolhido={chatEscolhido} mensagens={elementoMensagens} enviar={webSocketService.enviar} />
                                    </>
                                }
                            </LadoDireitoGeralChats>
                        </>
                        :
                        <ResultadoVazio imagem={semChats} legenda={"Nenhum chat disponível"} />
                    }
                </ContainerChats>
            </ContainerGeralChats>
        </>
    );
}


function ConversaChat(props: { chatEscolhido: any, mensagens: any[], enviar: Function }) {
    const { lerTexto } = useContext(TextReaderContext) as any
    const [mensagem, setMensagem] = useState<any>({
        chat: {
            idChat: 1
        },
        usuario: {
            idUsuario: localStorage.getItem("IDUSUARIO")
        },
        dataHoraMensagem: new Date(),
        mensagem: null
    })
    const [componenteCorpoMensagem, setComponenteCorpoMensagem] = useState<any>()
    const [diasComMensagem, setDiasComMensagem] = useState<any[]>([])

    useEffect(() => {
        if (props.mensagens == null) {
            return
        } else {
            if (props.mensagens.length == 0) {
                return
            }
        }

        let diasDasMensagens: any[] = []

        props.mensagens.forEach((mensagem: any) => {
            const dataMensagem = new Date(mensagem.props.horaMensagem)
            const tituloDataMensagem = getDateFormat(dataMensagem)
            let diaJaPresente = false

            for (let dia of diasDasMensagens) {
                if (tituloDataMensagem == dia.tituloFormatado) {
                    diaJaPresente = true
                }
            }

            if (diaJaPresente) {
                return
            }

            let infoData = {
                tituloFormatado: tituloDataMensagem,
                ano: dataMensagem.getFullYear(),
                mes: dataMensagem.getMonth(),
                dia: dataMensagem.getDate(),
                Date: dataMensagem
            }

            diasDasMensagens.push(infoData)
        })

        for (let i = 0; i < diasDasMensagens.length; i++) {
            const listaMensagens: any[] = []
            const dia = diasDasMensagens[i]

            props.mensagens.forEach((mensagem: any) => {
                const tituloDataMensagem = getDateFormat(new Date(mensagem.props.horaMensagem))

                if (tituloDataMensagem == dia.tituloFormatado) {
                    listaMensagens.push(mensagem)
                }
            })

            dia.mensagens = listaMensagens
            diasDasMensagens[i] = dia
        }

        setDiasComMensagem(diasDasMensagens)
    }, [props.mensagens])

    useEffect(() => {
        const novoComponenteCorpoMensagem = diasComMensagem.map((dia: any) => {
            const hoje = new Date()
            const ontem = new Date()
            ontem.setDate(hoje.getDate() - 1)

            const dataFormatadaAtual = getDateFormat(hoje)
            const dataFormatadaOntem = getDateFormat(ontem)
            let tituloMostrado = ""

            if (dia.tituloFormatado == dataFormatadaAtual) {
                tituloMostrado = "Hoje"
            } else if (dia.tituloFormatado == dataFormatadaOntem) {
                tituloMostrado = "Ontem"
            } else {
                tituloMostrado = dia.tituloFormatado
            }

            return (
                <>
                    <BoxContainerDiaMensagem>
                        <BoxTextoDiaMensagem onClick={lerTexto}>
                            {tituloMostrado}
                        </BoxTextoDiaMensagem>
                    </BoxContainerDiaMensagem>
                    {dia.mensagens}
                </>
            )
        })

        setComponenteCorpoMensagem(novoComponenteCorpoMensagem)
    }, [diasComMensagem])

    function setDefaultMensagem() {
        let mensagemPadrao: any = {
            chat: {
                idChat: props.chatEscolhido.idChat
            },
            usuario: {
                idUsuario: localStorage.getItem("IDUSUARIO")
            },
            dataHoraMensagem: new Date(),
            mensagem: null
        }

        setMensagem(mensagemPadrao)

        const elemento = (document.getElementById("input-mensagem") as HTMLInputElement);
        elemento.value = ""
    }

    function atualizarMensagem(e: any) {
        setMensagem({
            chat: {
                idChat: props.chatEscolhido.idChat
            },
            usuario: {
                idUsuario: localStorage.getItem("IDUSUARIO")
            },
            dataHoraMensagem: new Date(),
            mensagem: e.target.value
        })
    }

    function enviarMensagem(e: any) {
        e.preventDefault()

        props.enviar("/sade/demanda/" + props.chatEscolhido.idChat, mensagem)

        setDefaultMensagem()
    }

    const scroll = useRef(null);
    useEffect(() => {
        const boxScroll: HTMLElement | any = document.getElementById("ladoDireitoChat");

        if (boxScroll) {
            boxScroll.scrollTo = boxScroll.scrollHeight
        }
    }, [props.mensagens])

    return (
        <>
            <LadoDiretoChat id="ladoDireitoChat" ref={scroll}>
                {componenteCorpoMensagem}
                <Toolbar />
            </LadoDiretoChat>

            <BoxBarraPesquisa>
                <BarraPesquisa 
                    onKeyDown={(e:any) => {
                        if(e.key == "Enter"){
                            enviarMensagem(e)
                        }
                    }}
                    onChange={atualizarMensagem} placeholder="Mensagem"
                    InputProps={{
                        id: "input-mensagem",
                        startAdornment: (
                            <InputAdornment position="start">
                                <AttachmentRoundedIcon sx={{ color: "#444", "&:hover": { cursor: "pointer" } }} />
                            </InputAdornment>
                        ),
                    }} />
                <BoxIconeEnviar>
                    <SendRoundedIcon sx={{ color: "#fff", "&:hover": { cursor: "pointer" }, width: "1.2rem" }} onClick={enviarMensagem} />
                </BoxIconeEnviar>
            </BoxBarraPesquisa>
        </>
    )
}


/**
 *
 * @param props
 * @returns Retorna uma mensagem que será direcionada de acordo com quem é, e para qual lado a mensagem dever ir, sendo esquerdo ou direito
 */
function Mensagem(props: { mensagem: string, horaMensagem?: any, usuario: any }) {
    const { lerTexto } = useContext(TextReaderContext) as any
    const idUsuarioLocalStorage = parseInt(localStorage.getItem("IDUSUARIO") as string);
    const [fotoUsuario, setFotoUsuario] = useState<Blob>(new Blob);
    let horarioCerto: any;

    useEffect(() => {
        if (props.usuario != null) {
            api.get("/sade/usuario/fotousuario/" + props.usuario.idUsuario, { responseType: 'blob' })
                .then((response) => {
                    setFotoUsuario(response.data);
                });
        }
    }, [])

    if (props.horaMensagem) {
        let data = new Date(props.horaMensagem);

        if (data.getMinutes() < 10) {
            horarioCerto = data.getHours() + ":" + ("0" + data.getMinutes())
        } else {
            horarioCerto = data.getHours() + ":" + data.getMinutes()
        }
    } else {
        horarioCerto = "";
    }

    function HoraUltimaMensagem() {
        return (
            <>
                {horarioCerto ?
                    <TypographyHoraMensagem>{horarioCerto}</TypographyHoraMensagem>
                    :
                    ""
                }
            </>
        )

    }

    if (idUsuarioLocalStorage == props.usuario.idUsuario) {
        return (
            <BoxGeralMensagensLadoDireito>
                <BoxMensagensLadoDireito>
                    <BoxMensagemLadoDireito>
                        <TypographyPessoa variant="body1" onClick={(e: any) => { lerTexto(e); window.open("/profile", "_blank") }}>Você</TypographyPessoa>

                        <BoxMensagemHorario>
                            <TypographyMensagemDireita variant="body2" onClick={lerTexto}>
                                {props.mensagem}
                            </TypographyMensagemDireita>

                            <HoraUltimaMensagem />
                        </BoxMensagemHorario>
                    </BoxMensagemLadoDireito>
                    <Avatar {...stringAvatar(props.usuario.nomeUsuario)} src={URL.createObjectURL(fotoUsuario)} />
                </BoxMensagensLadoDireito>
            </BoxGeralMensagensLadoDireito>
        )
    } else {
        return (
            <BoxGeralMensagensLadoEsquerdo>
                <BoxMensagensLadoEsquerdo>
                    <Avatar {...stringAvatar(props.usuario.nomeUsuario)} src={URL.createObjectURL(fotoUsuario)} />
                    <BoxMensagemLadoEsquerdo>
                        <TypographyPessoa variant="body1" onClick={(e: any) => { lerTexto(e); window.open("/profile?" + props.usuario.idUsuario, "_blank") }}>{props.usuario.nomeUsuario}</TypographyPessoa>

                        <BoxMensagemHorario>
                            <TypographyMensagemEsquerda variant="body2" onClick={lerTexto}>
                                {props.mensagem}
                            </TypographyMensagemEsquerda>

                            <HoraUltimaMensagem />
                        </BoxMensagemHorario>
                    </BoxMensagemLadoEsquerdo>
                </BoxMensagensLadoEsquerdo>
            </BoxGeralMensagensLadoEsquerdo>
        )
    }
}