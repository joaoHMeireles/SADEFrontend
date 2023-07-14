import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import {
  BoxChat, BoxContainerChat, BoxIconePessoa, ContainerGeralChat,
  TypographyPessoaMensagem, TypographyTitulo, ContainerGeralChatEscolhido, TypographyHoraMensagem
} from "./Chat.styles";

/**
 * 
 * @param props 
 * @returns Retorna um componente chat
 */

export default function Chat(props: {
  id: number,
  idChatEscolhido: number,
  titulo: string;
  pessoa: string;
  mensagem: string;
  horaMensagem: any;
  verChat: any;
}) {

  let mensagem = (
    <>
      {props.pessoa} : {props.mensagem.length > 30 ?
        props.mensagem.slice(0, 25) + "..."
        :
        props.mensagem}
    </>
  )

  let horaCerta: any;

  if (props.horaMensagem) {
    let data = new Date(props.horaMensagem);

    if (data.getMinutes() < 10) {
      horaCerta = data.getHours() + ":" + ("0" + data.getMinutes())
    } else {
      horaCerta = data.getHours() + ":" + data.getMinutes()
    }
  } else {
    horaCerta = "";
  }

  function HoraUltimaMensagem() {
    return (
      <>
        {horaCerta ?
          <TypographyHoraMensagem>{horaCerta}</TypographyHoraMensagem>
          :
          ""
        }
      </>
    )

  }

  return (
    <>
      {props.idChatEscolhido != props.id ?
        <ContainerGeralChat onClick={() => {
          props.verChat(props.id)
        }} key={props.id} id="box-chat">
          <BoxIconePessoa>
            {<GroupsRoundedIcon />}
          </BoxIconePessoa>

          <BoxContainerChat>
            <TypographyTitulo variant="h6">{props.titulo}</TypographyTitulo>

            <BoxChat>
              <TypographyPessoaMensagem variant="caption">{props.mensagem.length > 0 ? mensagem : ""}</TypographyPessoaMensagem>

              <HoraUltimaMensagem />
            </BoxChat>
          </BoxContainerChat>
        </ContainerGeralChat>
        :
        <ContainerGeralChatEscolhido onClick={() => { props.verChat(props.id) }} key={props.id}>
          <BoxIconePessoa >
            {<GroupsRoundedIcon />}
          </BoxIconePessoa>

          <BoxContainerChat>
            <TypographyTitulo variant="h6" >{props.titulo}</TypographyTitulo>

            <BoxChat>
              <TypographyPessoaMensagem variant="caption">{props.mensagem.length > 0 ? mensagem : ""}</TypographyPessoaMensagem>

              <HoraUltimaMensagem />
            </BoxChat>
          </BoxContainerChat>
        </ContainerGeralChatEscolhido>}
    </>
  );
}
