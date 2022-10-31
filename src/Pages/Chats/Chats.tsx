import Box from "@mui/material/Box";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Chat from "../../Components/Chat/Chat";
import { TextField, Typography } from "@mui/material";
import SendRoundedIcon from '@mui/icons-material/SendRounded';

export default function Chats() {

  const pessoaLocalStorage = localStorage.getItem("PESSOA");

  function Messages(props: { mensagem: string, pessoa: string }) {
    if (pessoaLocalStorage == props.pessoa) {
      return (
        <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
          <Box sx={{ width: "10%", height: "100%", position: "relative", top: 50, right: 10 }}>
            <Typography sx={{ background: "#FFF", borderRadius: "5px" }}>
              teste
            </Typography>
          </Box>
        </Box>
      )
    } else {
      return (
        <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
          <Box sx={{ width: "10%", height: "100%", position: "relative", left: 10, top: 50 }}>
            <Typography sx={{ background: "#FFF", borderRadius: "5px", marginY: 1 }}>
              teste
            </Typography>
          </Box>
        </Box>
      )
    }
  }


  return (
    <>
      <Box sx={{ margin: "24px" }}>
        <Breadcrumb />
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", height: "100%" }}>
          <Box marginY={3} sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", width: "30%", minHeight: "80vh", borderRight: "1px solid black", overflowX: "hidden", overflowY: "scroll", '&::-webkit-scrollbar': { backgroundColor: "transparent" } }}>
            <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", flexDirection: "column", width: "100%", height: "auto" }}>
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
          </Box>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column", width: "70%", minHeight: "80vh", background: "rgba(0, 0, 0, 0.15)", overflowX: "hidden", overflowY: "scroll", '&::-webkit-scrollbar': { backgroundColor: "transparent" }
          }}>
            <Box sx={{ width: "100%", height: "90%" }}>
              <Messages mensagem="teste" pessoa="Solicitante" />
              <Messages mensagem="teste" pessoa="Diego" />
              <Messages mensagem="teste" pessoa="Diego" />
            </Box>
            <Box sx={{ width: "100%", height: "10%" }}>
              <TextField InputProps={{
                endAdornment: <SendRoundedIcon sx={{ color: "#595959" }} />
              }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
