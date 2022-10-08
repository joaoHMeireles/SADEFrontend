import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import Chat from "../Components/Chat/Chat";

export default function Chats() {
  return (
    <>
      <Box sx={{ margin: "24px" }}>
        <Breadcrumb />
        <Container>
          <Box marginY={3}>
            <Chat
              titulo="Titulo da demanda"
              pessoa="Pessoa"
              mensagem="última mensagem"
            ></Chat>
            <Chat
              titulo="Titulo da demanda"
              pessoa="Pessoa"
              mensagem="última mensagem"
            ></Chat>
            <Chat
              titulo="Titulo da demanda"
              pessoa="Pessoa"
              mensagem="última mensagem"
            ></Chat>
          </Box>
        </Container>
      </Box>
    </>
  );
}
