import { useEffect, useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Chat from "../../Components/Chat/Chat";
import Toolbar from "../../Components/Toolbar/Toolbar";
import Box from "@mui/system/Box";
import AttachmentRoundedIcon from '@mui/icons-material/AttachmentRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {
  BoxBarraPesquisa, ContainerChats, ContainerGeralChats, LadoEsquerdoChat,
  LadoEsquerdoGeralChats, LadoDiretoChat, LadoDireitoGeralChats, BarraPesquisa
} from "./Chats.styles";
import {
  BoxGeralMensagensLadoDireito, BoxGeralMensagensLadoEsquerdo, BoxMensagensLadoDireito,
  BoxMensagensLadoEsquerdo, BoxMensagemLadoDireito, BoxMensagemLadoEsquerdo,
  TypographyPessoa, TypographyMensagem
} from "./Chats.styles";


const listaChats = [
  {
    id: 1,
    tituloDemanda: "Demanda 01",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 1,
        mensagem: "njksfdnjksfdnjkdnjksfdnjksfdnjkfnsdndjkndjkfnsdjkfsdnjkfnsdjkfnsjkdjkfjkjdnksfnjksdfnjksdfnksdnkflsdnf"
      },
      {
        idMensagem: 2,
        idPessoa: 1,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 3,
        mensagem: "njksfdnjksfdnjkdnjksfdnjksfdnjkfnsdndjkndjkfnsdjkfsdnjkfnsdjkfnsjkdjkfjkjdnksfnjksdfnjksdfnksdnkflsdnf"
      },
      {
        idMensagem: 4,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
    ]
  },
  {
    id: 2,
    tituloDemanda: "Demanda 02",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 2,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 2,
        idPessoa: 2,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
    ]
  },
  {
    id: 3,
    tituloDemanda: "Demanda 03",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 3,
        mensagem: "fjdngkfjdngjkfdngkfjdlngklfdngljfdngjklfdngjkdfgfdlgndfgljfdngjkfdngjkfdngfjkdngfjkdngkjfdnjgnfdjkgkjfdgjkfdgjkfdngjkdfngjkfdngjkfdngfjkdjgfdnjgkfjdgnfjkdngfjkdgnfjdngkdfknjg"
      },
      {
        idMensagem: 2,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 2,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 2,
        mensagem: "Mensagem"
      }
    ]
  },
  {
    id: 4,
    tituloDemanda: "Demanda 04",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 3,
        mensagem: "fjdngkfjdngjkfdngkfjdlngklfdngljfdngjklfdngjkdfgfdlgndfgljfdngjkfdngjkfdngfjkdngfjkdngkjfdnjgnfdjkgkjfdgjkfdgjkfdngjkdfngjkfdngjkfdngfjkdjgfdnjgkfjdgnfjkdngfjkdgnfjdngkdfknjg"
      },
      {
        idMensagem: 2,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 1,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 1,
        mensagem: "Mensagem"
      }
    ]
  },
  {
    id: 5,
    tituloDemanda: "Demanda 05",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 3,
        mensagem: "fjdngkfjdngjkfdngkfjdlngklfdngljfdngjklfdngjkdfgfdlgndfgljfdngjkfdngjkfdngfjkdngfjkdngkjfdnjgnfdjkgkjfdgjkfdgjkfdngjkdfngjkfdngjkfdngfjkdjgfdnjgkfjdgnfjkdngfjkdgnfjdngkdfknjg"
      },
      {
        idMensagem: 2,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 1,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 1,
        mensagem: "Mensagem"
      }
    ]
  },
  {
    id: 6,
    tituloDemanda: "Demanda 06",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 3,
        mensagem: "fjdngkfjdngjkfdngkfjdlngklfdngljfdngjklfdngjkdfgfdlgndfgljfdngjkfdngjkfdngfjkdngfjkdngkjfdnjgnfdjkgkjfdgjkfdgjkfdngjkdfngjkfdngjkfdngfjkdjgfdnjgkfjdgnfjkdngfjkdgnfjdngkdfknjg"
      },
      {
        idMensagem: 2,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 2,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 2,
        mensagem: "Mensagem"
      }
    ]
  },
  {
    id: 7,
    tituloDemanda: "Demanda 07",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 3,
        mensagem: "fjdngkfjdngjkfdngkfjdlngklfdngljfdngjklfdngjkdfgfdlgndfgljfdngjkfdngjkfdngfjkdngfjkdngkjfdnjgnfdjkgkjfdgjkfdgjkfdngjkdfngjkfdngjkfdngfjkdjgfdnjgkfjdgnfjkdngfjkdgnfjdngkdfknjg"
      },
      {
        idMensagem: 2,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 1,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 1,
        mensagem: "Mensagem"
      }
    ]
  },
  {
    id: 8,
    tituloDemanda: "Demanda 08",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 3,
        mensagem: "fjdngkfjdngjkfdngkfjdlngklfdngljfdngjklfdngjkdfgfdlgndfgljfdngjkfdngjkfdngfjkdngfjkdngkjfdnjgnfdjkgkjfdgjkfdgjkfdngjkdfngjkfdngjkfdngfjkdjgfdnjgkfjdgnfjkdngfjkdgnfjdngkdfknjg"
      },
      {
        idMensagem: 2,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 2,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 2,
        mensagem: "Mensagem"
      }
    ]
  },
  {
    id: 9,
    tituloDemanda: "Demanda 09",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 3,
        mensagem: "fjdngkfjdngjkfdngkfjdlngklfdngljfdngjklfdngjkdfgfdlgndfgljfdngjkfdngjkfdngfjkdngfjkdngkjfdnjgnfdjkgkjfdgjkfdgjkfdngjkdfngjkfdngjkfdngfjkdjgfdnjgkfjdgnfjkdngfjkdgnfjdngkdfknjg"
      },
      {
        idMensagem: 2,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 1,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 1,
        mensagem: "Mensagem"
      }
    ]
  },
  {
    id: 10,
    tituloDemanda: "Demanda 10",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 3,
        mensagem: "fjdngkfjdngjkfdngkfjdlngklfdngljfdngjklfdngjkdfgfdlgndfgljfdngjkfdngjkfdngfjkdngfjkdngkjfdnjgnfdjkgkjfdgjkfdgjkfdngjkdfngjkfdngjkfdngfjkdjgfdnjgkfjdgnfjkdngfjkdgnfjdngkdfknjg"
      },
      {
        idMensagem: 2,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 2,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 2,
        mensagem: "Mensagem"
      }
    ]
  },
  {
    id: 11,
    tituloDemanda: "Demanda 11",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 3,
        mensagem: "fjdngkfjdngjkfdngkfjdlngklfdngljfdngjklfdngjkdfgfdlgndfgljfdngjkfdngjkfdngfjkdngfjkdngkjfdnjgnfdjkgkjfdgjkfdgjkfdngjkdfngjkfdngjkfdngfjkdjgfdnjgkfjdgnfjkdngfjkdgnfjdngkdfknjg"
      },
      {
        idMensagem: 2,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 1,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 1,
        mensagem: "Mensagem"
      }
    ]
  },
  {
    id: 12,
    tituloDemanda: "Demanda 12",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 3,
        mensagem: "fjdngkfjdngjkfdngkfjdlngklfdngljfdngjklfdngjkdfgfdlgndfgljfdngjkfdngjkfdngfjkdngfjkdngkjfdnjgnfdjkgkjfdgjkfdgjkfdngjkdfngjkfdngjkfdngfjkdjgfdnjgkfjdgnfjkdngfjkdgnfjdngkdfknjg"
      },
      {
        idMensagem: 2,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 2,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 2,
        mensagem: "Mensagem"
      }
    ]
  },
  {
    id: 13,
    tituloDemanda: "Demanda 13",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 3,
        mensagem: "fjdngkfjdngjkfdngkfjdlngklfdngljfdngjklfdngjkdfgfdlgndfgljfdngjkfdngjkfdngfjkdngfjkdngkjfdnjgnfdjkgkjfdgjkfdgjkfdngjkdfngjkfdngjkfdngfjkdjgfdnjgkfjdgnfjkdngfjkdgnfjdngkdfknjg"
      },
      {
        idMensagem: 2,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 1,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 1,
        mensagem: "Mensagem"
      }
    ]
  },
  {
    id: 14,
    tituloDemanda: "Demanda 14",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 3,
        mensagem: "fjdngkfjdngjkfdngkfjdlngklfdngljfdngjklfdngjkdfgfdlgndfgljfdngjkfdngjkfdngfjkdngfjkdngkjfdnjgnfdjkgkjfdgjkfdgjkfdngjkdfngjkfdngjkfdngfjkdjgfdnjgkfjdgnfjkdngfjkdgnfjdngkdfknjg"
      },
      {
        idMensagem: 2,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 2,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 2,
        mensagem: "Mensagem"
      }
    ]
  },
  {
    id: 15,
    tituloDemanda: "Demanda 15",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 3,
        mensagem: "fjdngkfjdngjkfdngkfjdlngklfdngljfdngjklfdngjkdfgfdlgndfgljfdngjkfdngjkfdngfjkdngfjkdngkjfdnjgnfdjkgkjfdgjkfdgjkfdngjkdfngjkfdngjkfdngfjkdjgfdnjgkfjdgnfjkdngfjkdgnfjdngkdfknjg"
      },
      {
        idMensagem: 2,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 1,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 1,
        mensagem: "Mensagem"
      }
    ]
  },
  {
    id: 16,
    tituloDemanda: "Demanda 16",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 3,
        mensagem: "fjdngkfjdngjkfdngkfjdlngklfdngljfdngjklfdngjkdfgfdlgndfgljfdngjkfdngjkfdngfjkdngfjkdngkjfdnjgnfdjkgkjfdgjkfdgjkfdngjkdfngjkfdngjkfdngfjkdjgfdnjgkfjdgnfjkdngfjkdgnfjdngkdfknjg"
      },
      {
        idMensagem: 2,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 2,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 2,
        mensagem: "Mensagem"
      }
    ]
  },
  {
    id: 17,
    tituloDemanda: "Demanda 17",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 3,
        mensagem: "fjdngkfjdngjkfdngkfjdlngklfdngljfdngjklfdngjkdfgfdlgndfgljfdngjkfdngjkfdngfjkdngfjkdngkjfdnjgnfdjkgkjfdgjkfdgjkfdngjkdfngjkfdngjkfdngfjkdjgfdnjgkfjdgnfjkdngfjkdgnfjdngkdfknjg"
      },
      {
        idMensagem: 2,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 1,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 1,
        mensagem: "Mensagem"
      }
    ]
  },
  {
    id: 18,
    tituloDemanda: "Demanda 18",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 3,
        mensagem: "fjdngkfjdngjkfdngkfjdlngklfdngljfdngjklfdngjkdfgfdlgndfgljfdngjkfdngjkfdngfjkdngfjkdngkjfdnjgnfdjkgkjfdgjkfdgjkfdngjkdfngjkfdngjkfdngfjkdjgfdnjgkfjdgnfjkdngfjkdgnfjdngkdfknjg"
      },
      {
        idMensagem: 2,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 2,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 2,
        mensagem: "Mensagem"
      }
    ]
  },
  {
    id: 19,
    tituloDemanda: "Demanda 19",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 3,
        mensagem: "fjdngkfjdngjkfdngkfjdlngklfdngljfdngjklfdngjkdfgfdlgndfgljfdngjkfdngjkfdngfjkdngfjkdngkjfdnjgnfdjkgkjfdgjkfdgjkfdngjkdfngjkfdngjkfdngfjkdjgfdnjgkfjdgnfjkdngfjkdgnfjdngkdfknjg"
      },
      {
        idMensagem: 2,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 1,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 1,
        mensagem: "Mensagem"
      }
    ]
  },
  {
    id: 20,
    tituloDemanda: "Demanda 20",
    mensagens: [
      {
        idMensagem: 1,
        idPessoa: 3,
        mensagem: "fjdngkfjdngjkfdngkfjdlngklfdngljfdngjklfdngjkdfgfdlgndfgljfdngjkfdngjkfdngfjkdngfjkdngkjfdnjgnfdjkgkjfdgjkfdgjkfdngjkdfngjkfdngjkfdngfjkdjgfdnjgkfjdgnfjkdngfjkdgnfjdngkdfknjg"
      },
      {
        idMensagem: 2,
        idPessoa: 3,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 3,
        idPessoa: 2,
        mensagem: "Mensagem"
      },
      {
        idMensagem: 4,
        idPessoa: 2,
        mensagem: "Mensagem"
      }
    ]
  },
]

const listaPessoas = [
  {
    id: 1,
    nome: "Diego"
  },
  {
    id: 2,
    nome: "João"
  },
  {
    id: 3,
    nome: "Solicitante"
  }
]

/**
 * Função que tem dois componentes jutamente a ela, sendo um para chats e outro para as mensagem de determinado chat
 * @param props 
 * @returns Retorna a tela de chat
 */

export default function Chats(props: { aberto: boolean }) {
  localStorage.setItem("PAGINATUAL", "chat")
  const [listaMensagem, setListaMensagem] = useState<any>([]);

  useEffect(() => {
    setListaMensagem(listaChats[0].mensagens);
  }, [])

  function verChat(e: any) {
    setListaMensagem(listaChats[e.target.id - 1].mensagens);
  }

  return (
    <>
      <ContainerGeralChats>
        <Breadcrumb />
        <ContainerChats sx={{ width: (props.aberto ? "80vw" : "92vw") }}>
          <LadoEsquerdoGeralChats>
            <LadoEsquerdoChat>
              {listaChats.map((chat) => {
                const ultimaMensagem = chat.mensagens[chat.mensagens.length - 1]
                const pessoa = listaPessoas.find(pessoa => pessoa.id == ultimaMensagem.idPessoa)
                return (
                  <Chat id={chat.id} titulo={chat.tituloDemanda} pessoa={(pessoa?.nome != undefined ? pessoa.nome : "")} mensagem={ultimaMensagem.mensagem} verChat={verChat} />
                )
              })}
            </LadoEsquerdoChat>
          </LadoEsquerdoGeralChats>
          <LadoDireitoGeralChats>
            <LadoDiretoChat>
              {
                listaMensagem.map((mensagem: any) => {
                  const pessoa = listaPessoas.find(p => p.id == mensagem.idPessoa);
                  return (
                    <Mensagens mensagem={mensagem.mensagem} pessoa={(pessoa?.nome != undefined ? pessoa.nome : "")} />
                  )
                })}
              <Toolbar />
            </LadoDiretoChat>
            <BoxBarraPesquisa>
              <AttachmentRoundedIcon sx={{ color: "#595959", "&:hover": { cursor: "pointer" } }} />
              <BarraPesquisa />
              <SendRoundedIcon sx={{ color: "#595959", "&:hover": { cursor: "pointer" } }} />
            </BoxBarraPesquisa>
          </LadoDireitoGeralChats>
        </ContainerChats>
      </ContainerGeralChats>
    </>
  );
}

/**
 * 
 * @param props 
 * @returns Retorna uma mensagem que será direcionada de acordo com quem é, e para qual lado a mensagem dever ir, sendo esquerdo ou direito
 */
function Mensagens(props: { mensagem: string, pessoa: string }) {
  const pessoaLocalStorage = localStorage.getItem("PESSOA");

  if (pessoaLocalStorage == props.pessoa) {
    return (
      <BoxGeralMensagensLadoDireito>
        <BoxMensagensLadoDireito>
          <BoxMensagemLadoDireito>
            <TypographyPessoa variant="body1">{props.pessoa}</TypographyPessoa>
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
            <TypographyPessoa variant="body1">{props.pessoa}</TypographyPessoa>
            <TypographyMensagem variant="body2">
              {props.mensagem}
            </TypographyMensagem>
          </BoxMensagemLadoEsquerdo>
        </BoxMensagensLadoEsquerdo>
      </BoxGeralMensagensLadoEsquerdo>
    )
  }
}