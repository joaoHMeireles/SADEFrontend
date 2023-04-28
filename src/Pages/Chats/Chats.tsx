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
import Cookies from "js-cookie";
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
  const [listaMensagem, setListaMensagem] = useState<any[]>([]);
  const [chatEscolhido, setChatEscolhido] = useState<any>()
  const [inscricao, setInscricao] = useState(null)

  const webSocketService: any = useContext(WebSocketContext)

  //fazer só puxar os chats da pessoa
  useEffect(() => {
    api.get("/sod/chat/").then((response) => {
      setListaChats(response.data)
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  useEffect(() => {
    atualizarComponentes()
    setChatEscolhido(listaChats[0])
  }, [listaChats])

  useEffect(() => {
    if (chatEscolhido) {
      setListaMensagem(chatEscolhido.mensagens)
    }
  }, [chatEscolhido])

  useEffect(() => {
    if (chatEscolhido) {
      const acaoNovaMensagem = (response: any) => {
        const mensagemRecebida = JSON.parse(response.body);

        setListaMensagem((mensagensPrevias) => [...mensagensPrevias, mensagemRecebida])
      }

      if (webSocketService.stompClient && !inscricao) {
        setInscricao(webSocketService.inscrever(`/demanda/${chatEscolhido.idChat}/chat`, acaoNovaMensagem))
      }
    }

    atualizarComponentes()

  }, [listaMensagem, webSocketService.stompClient])

  useLocationChange(() => {
    webSocketService.desconectar()
  })

  function verChat(e: any) {
    setChatEscolhido(listaChats.find(chat => chat.idChat == parseInt(e.target.id)))
  }

  function atualizarComponentes(){
    const componenteChatsNovo = listaChats.map((chat) => {
      if (chat.usuariosChat) {
        console.log(chat);
        
        const ultimaMensagem = listaMensagem[listaMensagem.length - 1]
        console.log(ultimaMensagem);
        

        const usuario = chat.usuariosChat.find((usuario: any) => {
          if(ultimaMensagem){
            if(usuario.idUsuario == ultimaMensagem.usuario.idUsuario){
              return usuario;
            }
          }
        })

        return (
          <Chat id={chat.idChat} titulo={chat.demanda.tituloDemanda} pessoa={(usuario?.nomeUsuario != undefined ? usuario.nomeUsuario : "")} mensagem={ultimaMensagem ? ultimaMensagem.mensagem : ""} verChat={verChat} />
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
                <ConversaChat chatEscolhido={chatEscolhido} listaMensagens={listaMensagem} enviar={webSocketService.enviar} />
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

function ConversaChat(props: { listaMensagens: any[], chatEscolhido: any, enviar: Function }) {
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
    if(props.listaMensagens.length == 0){
      return
    }

    const componenteMensagensNovo = props.listaMensagens.map((mensagem: any) => {
      const usuario = props.chatEscolhido.usuariosChat.find((usuario: any) => usuario.idUsuario == mensagem.usuario.idUsuario);
   
      return (
        <Mensagens mensagem={mensagem.mensagem} usuario={usuario} />
      )
    })

    setElementoMensagens(componenteMensagensNovo)
  }, [props.listaMensagens])

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
        <BarraPesquisa onChange={atualizarMensagem} id="input-mensagem"/>
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