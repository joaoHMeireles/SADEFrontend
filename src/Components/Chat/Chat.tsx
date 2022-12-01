import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import {
  BoxChat, BoxContainerChat, BoxIconePessoa, ContainerGeralChat,
  TypographyPessoaMensagem, TypographyTitulo
} from "./Chat.styles";

/**
 * 
 * @param props 
 * @returns Retorna um componente chat
 */

export default function Chat(props: {
  id: number,
  titulo: string;
  pessoa: string;
  mensagem: string;
  verChat: any
}) {
  return (
    <>
      <ContainerGeralChat id={props.id + ""} onClick={props.verChat}>
        <BoxIconePessoa>
          {<PersonRoundedIcon />}
        </BoxIconePessoa>
        <BoxContainerChat>
          <BoxChat>
            <TypographyTitulo variant="h6">
              {props.titulo}
            </TypographyTitulo>
          </BoxChat>
          <BoxChat>
            <TypographyPessoaMensagem
              variant="caption">
              {props.pessoa}: {props.mensagem}
            </TypographyPessoaMensagem>
          </BoxChat>
        </BoxContainerChat>
      </ContainerGeralChat>
    </>
  );
}
