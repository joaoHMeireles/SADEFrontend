import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

import { BoxChat, BoxContainerChat, BoxIconPerson, ContainerGeneralChat, 
  TypographyPersonMessage, TypographyTitle } from "./Chat.styles";

/**
 * 
 * @param props 
 * @returns Retorna um componente chat
 */

export default function Chat(props: {
  titulo: string;
  pessoa: string;
  mensagem: string;
}) {
  return (
    <>
      <ContainerGeneralChat>
        <BoxIconPerson>
          {<PersonRoundedIcon />}
        </BoxIconPerson>
        <BoxContainerChat>
          <BoxChat>
            <TypographyTitle variant="h6">
              {props.titulo}
            </TypographyTitle>
          </BoxChat>
          <BoxChat>
            <TypographyPersonMessage
              variant="caption">
              {props.pessoa}: {props.mensagem}
            </TypographyPersonMessage>
          </BoxChat>
        </BoxContainerChat>
      </ContainerGeneralChat>
    </>
  );
}
