import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
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
      {props.idChatEscolhido == null ? <ContainerGeralChat id={props.id + ""} onClick={props.verChat} key={props.id}>
        <BoxIconePessoa id={props.id + ""} >
          {<PersonRoundedIcon id={props.id + ""} />}
        </BoxIconePessoa>
        <BoxContainerChat id={props.id + ""} >
          <BoxChat id={props.id + ""} >
            <TypographyTitulo variant="h6" id={props.id + ""} >
              {props.titulo}
            </TypographyTitulo>
          </BoxChat>
          <BoxChat id={props.id + ""} >
            <TypographyPessoaMensagem id={props.id + ""}
              variant="caption">
              {props.pessoa}: {props.mensagem}
            </TypographyPessoaMensagem>
          </BoxChat>
        </BoxContainerChat>
      </ContainerGeralChat>
        :
        <ContainerGeralChatEscolhido id={props.id + ""} onClick={props.verChat} key={props.id}>
          <BoxIconePessoa id={props.id + ""} >
            {<PersonRoundedIcon id={props.id + ""} />}
          </BoxIconePessoa>
          <BoxContainerChat id={props.id + ""} >
            <BoxChat id={props.id + ""} >
              <TypographyTitulo variant="h6" id={props.id + ""} >
                {props.titulo}
              </TypographyTitulo>
            </BoxChat>
            <BoxChat id={props.id + ""} >
              <TypographyPessoaMensagem id={props.id + ""}
                variant="caption">
                {props.pessoa}: {props.mensagem}
              </TypographyPessoaMensagem>
            </BoxChat>
          </BoxContainerChat>
        </ContainerGeralChatEscolhido>}
    </>
  );
}
