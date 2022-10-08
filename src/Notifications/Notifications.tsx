import Notification from "../Components/Notification/Notification";
import EditNotificationsRoundedIcon from "@mui/icons-material/EditNotificationsRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import NewReleasesRoundedIcon from '@mui/icons-material/NewReleasesRounded';
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function Notifications() {
  return (
    <Box sx={{ margin: "24px" }}>
      <Breadcrumb />
      <Container>
        <Box sx={{ marginTop: 5 }}>
          <Notification
            Icone={EditNotificationsRoundedIcon}
            titulo="Redefinição requisitada"
            mensagem="Nome da demanda"
          />
          <Notification
            Icone={CheckBoxRoundedIcon}
            titulo="Redefinição requisitada"
            mensagem="Nome da demanda"
          />
          <Notification
            Icone={EventAvailableRoundedIcon}
            titulo="Redefinição requisitada"
            mensagem="Nome da demanda"
          />
          <Notification
            Icone={EditNotificationsRoundedIcon}
            titulo="Redefinição requisitada"
            mensagem="Nome da demanda"
          />
          <Notification
            Icone={CheckBoxRoundedIcon}
            titulo="Redefinição requisitada"
            mensagem="Nome da demanda"
          />
          <Notification
            Icone={EventAvailableRoundedIcon}
            titulo="Redefinição requisitada"
            mensagem="Nome da demanda"
          />
          <Notification
            Icone={NewReleasesRoundedIcon}
            titulo="Redefinição requisitada"
            mensagem="Nome da demanda"
          />
          <Notification
            Icone={CheckBoxRoundedIcon}
            titulo="Redefinição requisitada"
            mensagem="Nome da demanda"
          />
          <Notification
            Icone={NewReleasesRoundedIcon}
            titulo="Redefinição requisitada"
            mensagem="Nome da demanda"
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Notifications;
