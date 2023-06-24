import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import {
  BoxChat, BoxContainerChat, BoxIconePessoa, ContainerGeralChat,
  TypographyPessoaMensagem, TypographyTitulo, ContainerGeralChatEscolhido
} from "./Chat.styles";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";

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

  let data = new Date(props.horaMensagem);

  function HoraUltimaMensagem() {
    console.log(data);

    return (
      <>
        {data ?
          <Typography>{data.getHours() + ":" + data.getMinutes()}</Typography>
          :
          ""
        }
      </>
    )

  }



  return (
    <>
      {props.idChatEscolhido != props.id ?
        <ContainerGeralChat onClick={() => { props.verChat(props.id) }} key={props.id}>
          <BoxIconePessoa>
            {<GroupsRoundedIcon />}
          </BoxIconePessoa>
          <BoxContainerChat>
            <BoxChat>
              <TypographyTitulo variant="h6"  >
                {props.titulo}
              </TypographyTitulo>
            </BoxChat>
            <BoxChat>
              <TypographyPessoaMensagem
                variant="caption">
                {props.mensagem.length > 0 ? mensagem : ""}
              </TypographyPessoaMensagem>
            </BoxChat>
          </BoxContainerChat>
          <HoraUltimaMensagem />
        </ContainerGeralChat>
        :
        <ContainerGeralChatEscolhido onClick={() => { props.verChat(props.id) }} key={props.id}>
          <BoxIconePessoa  >
            {<GroupsRoundedIcon />}
          </BoxIconePessoa>
          <BoxContainerChat  >
            <BoxChat  >
              <TypographyTitulo variant="h6"  >
                {props.titulo}
              </TypographyTitulo>
            </BoxChat>
            <BoxChat  >
              <TypographyPessoaMensagem
                variant="caption">
                {props.mensagem.length > 0 ? mensagem : ""}
              </TypographyPessoaMensagem>
            </BoxChat>
          </BoxContainerChat>
        </ContainerGeralChatEscolhido>}
    </>
  );
}
