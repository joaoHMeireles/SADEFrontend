import { useEffect, useState, useContext } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Chat from "../../Components/Chat/Chat";
import Toolbar from "../../Components/Toolbar/Toolbar";
import AttachmentRoundedIcon from '@mui/icons-material/AttachmentRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {
  BoxBarraPesquisa, ContainerChats, ContainerGeralChats, LadoEsquerdoChat, LadoEsquerdoGeralChats, LadoDiretoChat,
  LadoDireitoGeralChats, BarraPesquisa
} from "./Chats.styles";
import {
  BoxGeralMensagensLadoDireito, BoxGeralMensagensLadoEsquerdo, BoxMensagensLadoDireito, BoxMensagensLadoEsquerdo,
  BoxMensagemLadoDireito, BoxMensagemLadoEsquerdo, TypographyPessoa, TypographyMensagem
} from "./Chats.styles";
import ResultadoVazio from "../../Components/ResultadoVazio/ResultadoVazio";
import semChats from "../../Assets/leaf.png"
import { WebSocketContext } from "../../api/websocketservice.jsx";
import api from "../../api/api";
import { useLocationChange } from "../../utils";


/**
 * Função que tem dois componentes jutamente a ela, sendo um para chats e outro para as mensagem de determinado chat
 * @param props 
 * @returns Retorna a tela de chat
 */

export default function Chats(props: { aberto: boolean }) {
  localStorage.setItem("PAGINATUAL", "chat")

  const [listaChats, setListaChats] = useState<any[]>([])
  const [componenteChats, setComponenteChats] = useState<any>()
  const [chatEscolhido, setChatEscolhido] = useState<any>({ mensagens: [] })
  const webSocketService: any = useContext(WebSocketContext)
  let requisitouChats = false

  //fazer só puxar os chats da pessoa
  useEffect(() => {
    const idUsuario = localStorage.getItem("IDUSUARIO")

    if (listaChats.length == 0 && !requisitouChats) {
      api.get("/sod/usuario/" + idUsuario + "/chat").then((response) => {
        setListaChats(response.data)
      }).catch((err) => {
        console.log(err);
      })
      requisitouChats = true
    }
  }, []);

  useEffect(() => {
    atualizarComponentes()
    setChatEscolhido(listaChats[0])
  }, [listaChats])

  useEffect(() => {
    if(webSocketService.stompClient == null){
      return
    }
    
    for (let chat of listaChats) {
      webSocketService.inscrever(`/demanda/${chat.idChat}/chat`, acaoNovaMensagem)
    }

    atualizarComponentes()
  }, [webSocketService.stompClient])

  useLocationChange(() => {
    webSocketService.desconectar()
  })

  function acaoNovaMensagem(response: any) {
    const body = JSON.parse(response.body)
    const mensagemRecebida = body[0];

    console.log(body);
    console.log(chatEscolhido);

    const indexChat = listaChats.findIndex((chat: any) => chat.idChat == body[1])
    const chatNovaMensagem = listaChats[indexChat]

    chatNovaMensagem.mensagens.push(mensagemRecebida)
    listaChats[indexChat] = chatNovaMensagem

    if (body[1] == chatEscolhido.idChat) {
      setChatEscolhido(chatNovaMensagem)
    }

    atualizarComponentes()
  }

  function verChat(e: any) {
    const chatAtual = listaChats.find(chat => chat.idChat == parseInt(e.target.id))

    setChatEscolhido(chatAtual)
  }

  function atualizarComponentes() {
    const componenteChatsNovo = listaChats.map((chat) => {
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
            titulo={chat.demanda.tituloDemanda}
            pessoa={(usuario?.nomeUsuario != undefined ? usuario.nomeUsuario : "")}
            mensagem={ultimaMensagem ? ultimaMensagem.mensagem : ""} verChat={verChat} />
        )
      }
    })

    setComponenteChats(componenteChatsNovo)
  }

  return (
    <>
      <ContainerGeralChats>
        <Breadcrumb />
        <ContainerChats sx={{ width: (props.aberto ? "80vw" : "92vw") }}>
          {listaChats.length != 0 ?
            <>
              <LadoEsquerdoGeralChats>
                <LadoEsquerdoChat>
                  {componenteChats}
                </LadoEsquerdoChat>
              </LadoEsquerdoGeralChats>
              <LadoDireitoGeralChats>
                <ConversaChat chatEscolhido={chatEscolhido} enviar={webSocketService.enviar} />
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

function ConversaChat(props: { chatEscolhido: any, enviar: Function }) {
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
  const [elementoMensagens, setElementoMensagens] = useState<any>()

  useEffect(() => {
    if (props.chatEscolhido != null) {
      if (props.chatEscolhido.mensagens != null) {
        if (props.chatEscolhido.mensagens.length == 0) {
          return
        }
      } else {
        return
      }
    } else {
      return
    }

    const componenteMensagensNovo = props.chatEscolhido.mensagens.map((mensagem: any) => {
      const usuario = props.chatEscolhido.usuariosChat.find((usuario: any) => usuario.idUsuario == mensagem.usuario.idUsuario);

      return (
        <Mensagens mensagem={mensagem.mensagem} usuario={usuario} />
      )
    })

    setElementoMensagens(componenteMensagensNovo)
  }, [props.chatEscolhido])

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

    props.enviar("/sod/demanda/" + props.chatEscolhido.idChat, mensagem)

    setDefaultMensagem()
  }

  return (
    <>
      <LadoDiretoChat>
        {elementoMensagens}
        <Toolbar />
      </LadoDiretoChat>
      <BoxBarraPesquisa>
        <AttachmentRoundedIcon sx={{ color: "#595959", "&:hover": { cursor: "pointer" } }} />
        <BarraPesquisa onChange={atualizarMensagem} id="input-mensagem" />
        <SendRoundedIcon sx={{ color: "#595959", "&:hover": { cursor: "pointer" } }} onClick={enviarMensagem} />
      </BoxBarraPesquisa>
    </>
  )
}


/**
 * 
 * @param props 
 * @returns Retorna uma mensagem que será direcionada de acordo com quem é, e para qual lado a mensagem dever ir, sendo esquerdo ou direito
 */
function Mensagens(props: { mensagem: string, usuario: any }) {
  const idUsuarioLocalStorage = parseInt(localStorage.getItem("IDUSUARIO") as string);

  if (idUsuarioLocalStorage == props.usuario.idUsuario) {
    return (
      <BoxGeralMensagensLadoDireito>
        <BoxMensagensLadoDireito>
          <BoxMensagemLadoDireito>
            <TypographyPessoa variant="body1">{props.usuario.nomeUsuario}</TypographyPessoa>
            <TypographyMensagem variant="body2">
              {props.mensagem}
            </TypographyMensagem>
          </BoxMensagemLadoDireito>
        </BoxMensagensLadoDireito>
      </BoxGeralMensagensLadoDireito>
    )
  } else {
    return (
      <BoxGeralMensagensLadoEsquerdo>
        <BoxMensagensLadoEsquerdo>
          <BoxMensagemLadoEsquerdo>
            <TypographyPessoa variant="body1">{props.usuario.nomeUsuario}</TypographyPessoa>
            <TypographyMensagem variant="body2">
              {props.mensagem}
            </TypographyMensagem>
          </BoxMensagemLadoEsquerdo>
        </BoxMensagensLadoEsquerdo>
      </BoxGeralMensagensLadoEsquerdo>
    )
  }
}