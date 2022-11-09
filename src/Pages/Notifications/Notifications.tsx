import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Notificacao from "../../Components/Notification/Notification";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import EditNotificationsRoundedIcon from "@mui/icons-material/EditNotificationsRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";

import { BoxContainerNotificacoes } from "./Notifications.styles";

/**
 * Lista de notificações, cuja função é usar como algo mais dinâmico com o componente de notificação
 */
const listaNotificacoes: {
  Icone: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  }, titulo: string, mensagem: string
}[] = [
    {
      Icone: EditNotificationsRoundedIcon,
      titulo: "Redefinição requisitada",
      mensagem: "Nome da demanda"
    },
    {
      Icone: CheckBoxRoundedIcon,
      titulo: "Redefinição requisitada",
      mensagem: "Nome da demanda"
    },
    {
      Icone: EventAvailableRoundedIcon,
      titulo: "Redefinição requisitada",
      mensagem: "Nome da demanda"
    },
    {
      Icone: EditNotificationsRoundedIcon,
      titulo: "Redefinição requisitada",
      mensagem: "Nome da demanda"
    },
    {
      Icone: CheckBoxRoundedIcon,
      titulo: "Redefinição requisitada",
      mensagem: "Nome da demanda"
    },
    {
      Icone: EventAvailableRoundedIcon,
      titulo: "Redefinição requisitada",
      mensagem: "Nome da demanda"
    },
  ]

/**
 * 
 * @returns Retorna uma lista de componentes de notificações, sendo que cada componente tem seus dados puxados de um lista estatica
 */
export default function Notificacoes() {
  return (
    <BoxContainerNotificacoes>
      <Breadcrumb />
      <Container>
        <Box>
          {listaNotificacoes.map((notificacao, index) => (
            <Notificacao key={index} Icone={notificacao.Icone} titulo={notificacao.titulo} mensagem={notificacao.mensagem} />
          ))}
        </Box>
      </Container>
    </BoxContainerNotificacoes>
  );
}
