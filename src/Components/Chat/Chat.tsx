import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import {
  BoxChat, BoxContainerChat, BoxIconePessoa, ContainerGeralChat,
  TypographyPessoaMensagem, TypographyTitulo, ContainerGeralChatEscolhido
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
  verChat: any
}) {
  return (
    <>
      {props.idChatEscolhido != props.id ?
        <ContainerGeralChat onClick={() => { props.verChat(props.id) }} key={props.id}>
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
                {props.pessoa}: {props.mensagem}
              </TypographyPessoaMensagem>
            </BoxChat>
          </BoxContainerChat>
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
                {props.pessoa}: {props.mensagem}
              </TypographyPessoaMensagem>
            </BoxChat>
          </BoxContainerChat>
        </ContainerGeralChatEscolhido>}
    </>
  );
}
