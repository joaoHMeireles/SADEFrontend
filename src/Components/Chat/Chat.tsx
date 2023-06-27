import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import {
  BoxChat, BoxContainerChat, BoxIconePessoa, ContainerGeralChat,
  TypographyPessoaMensagem, TypographyTitulo, ContainerGeralChatEscolhido, TypographyHoraMensagem
} from "./Chat.styles";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

  let data: any;

  if (props.horaMensagem) {
    data = new Date(props.horaMensagem);
  } else {
    data = "";
  }

  function HoraUltimaMensagem() {
    return (
      <>
        {data ?
          <TypographyHoraMensagem>{data.getHours() + ":" + data.getMinutes()}</TypographyHoraMensagem>
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
            <BoxChat>
              <TypographyTitulo variant="h6">{props.titulo}</TypographyTitulo>
            </BoxChat>

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
            <BoxChat>
              <TypographyTitulo variant="h6" >{props.titulo}</TypographyTitulo>
            </BoxChat>

            <BoxChat>
              <TypographyPessoaMensagem variant="caption">{props.mensagem.length > 0 ? mensagem : ""}</TypographyPessoaMensagem>

              <HoraUltimaMensagem />
            </BoxChat>
          </BoxContainerChat>
        </ContainerGeralChatEscolhido>}
    </>
  );
}
