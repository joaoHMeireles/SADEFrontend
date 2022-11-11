import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Notification from "../../Components/Notificacao/Notificacao";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import EditNotificationsRoundedIcon from "@mui/icons-material/EditNotificationsRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";

import { BoxContainerNotifications } from "./Notificacoes.styles";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

const listNotifications: {
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

export default function Notifications() {
  localStorage.setItem("PAGINATUAL", "notification")

  return (
    <BoxContainerNotifications>
      <Breadcrumb />
      <Container>
        <Box>
          {listNotifications.map((notification, index) => (
            <Notification key={index} Icone={notification.Icone} titulo={notification.titulo} mensagem={notification.mensagem} />
          ))}
        </Box>
      </Container>
    </BoxContainerNotifications>
  );
}
