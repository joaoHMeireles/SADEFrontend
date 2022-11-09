import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Chat from "../../Components/Chat/Chat";
import Toolbar from "../../Components/Toolbar/Toolbar";
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

const listaMensagens = [
  { mensagem: "Mensagem 1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", pessoa: "Diego" },
  { mensagem: "Mensagem 2", pessoa: "Diego" },
  { mensagem: "Mensagem 3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", pessoa: "Solicitante" },
  { mensagem: "Mensagem 4", pessoa: "Solicitante" },
  { mensagem: "Mensagem 5", pessoa: "Diego" },
  { mensagem: "Mensagem 6", pessoa: "Diego" },
  { mensagem: "Mensagem 7", pessoa: "Solicitante" },
  { mensagem: "Mensagem 8", pessoa: "Solicitante" },
  { mensagem: "Mensagem 9", pessoa: "Diego" },
  { mensagem: "Mensagem 10", pessoa: "Diego" },
  { mensagem: "Mensagem 11", pessoa: "Solicitante" },
  { mensagem: "Mensagem 12", pessoa: "Solicitante" },
  { mensagem: "Mensagem 13", pessoa: "Diego" },
  { mensagem: "Mensagem 14", pessoa: "Diego" },
  { mensagem: "Mensagem 15", pessoa: "Solicitante" },
  { mensagem: "Mensagem 16", pessoa: "Solicitante" },
  { mensagem: "Mensagem 17", pessoa: "Diego" },
  { mensagem: "Mensagem 18", pessoa: "Diego" },
  { mensagem: "Mensagem 19", pessoa: "Solicitante" },
  { mensagem: "Mensagem 20", pessoa: "Solicitante" },
]

const listaChats = [
  { titulo: "Titulo 01", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
  { titulo: "Titulo 02", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
  { titulo: "Titulo 03", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
  { titulo: "Titulo 04", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
  { titulo: "Titulo 05", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
  { titulo: "Titulo 06", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
  { titulo: "Titulo 07", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
  { titulo: "Titulo 08", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
  { titulo: "Titulo 09", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
  { titulo: "Titulo 10", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
  { titulo: "Titulo 11", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
  { titulo: "Titulo 12", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
  { titulo: "Titulo 13", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
  { titulo: "Titulo 14", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
  { titulo: "Titulo 15", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
  { titulo: "Titulo 16", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
  { titulo: "Titulo 17", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
  { titulo: "Titulo 18", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
  { titulo: "Titulo 19", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
  { titulo: "Titulo 20", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
]

/**
 * Função que tem dois componentes jutamente a ela, sendo um para chats e outro para as mensagem de determinado chat
 * @param props 
 * @returns Retorna a tela de chat
 */

export default function Chats(props: { aberto: boolean }) {

  return (
    <>
      <ContainerGeralChats>
        <Breadcrumb />
        <ContainerChats sx={{ width: (props.aberto ? "80vw" : "92vw") }}>
          <LadoEsquerdoGeralChats>
            <LadoEsquerdoChat>
              {listaChats.map((chat) => (
                <Chat titulo={chat.titulo} pessoa={chat.pessoa} mensagem={chat.mensagem} />
              ))}
            </LadoEsquerdoChat>
          </LadoEsquerdoGeralChats>
          <LadoDireitoGeralChats>
            <LadoDiretoChat>
              {listaMensagens.map((mensagem) => (
                <Mensagens mensagem={mensagem.mensagem} pessoa={mensagem.pessoa} />
              ))}
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