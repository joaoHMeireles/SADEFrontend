import Box from "@mui/material/Box";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Chat from "../../Components/Chat/Chat";
import { TextField, Typography } from "@mui/material";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AttachmentRoundedIcon from '@mui/icons-material/AttachmentRounded';
import "./Chats.scss"

export default function Chats() {

  const pessoaLocalStorage = localStorage.getItem("PESSOA");

  const listaMessages = [
    { mensagem: "Mensagem 1", pessoa: "Diego" },
    { mensagem: "Mensagem 2", pessoa: "Diego" },
    { mensagem: "Mensagem 3", pessoa: "Solicitante" },
    { mensagem: "Mensagem 4", pessoa: "Solicitante" },
    { mensagem: "Mensagem 5", pessoa: "Diego" },
    { mensagem: "Mensagem 6", pessoa: "Diego" },
    { mensagem: "Mensagem 7", pessoa: "Solicitante" },
    { mensagem: "Mensagem 8", pessoa: "Solicitante" },
    { mensagem: "Mensagem 9", pessoa: "Diego" },
    { mensagem: "Mensagem 10", pessoa: "Diego" },
    { mensagem: "Mensagem 11", pessoa: "Solicitante" },
    { mensagem: "Mensagem 12", pessoa: "Solicitante" },
    { mensagem: "Mensagem 13", pessoa: "Diego" },
    { mensagem: "Mensagem 14", pessoa: "Diego" },
    { mensagem: "Mensagem 15", pessoa: "Solicitante" },
    { mensagem: "Mensagem 16", pessoa: "Solicitante" },
    { mensagem: "Mensagem 17", pessoa: "Diego" },
    { mensagem: "Mensagem 18", pessoa: "Diego" },
    { mensagem: "Mensagem 19", pessoa: "Solicitante" },
    { mensagem: "Mensagem 20", pessoa: "Solicitante" },
  ]

  const listaChats = [
    { titulo: "Titulo 01", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
    { titulo: "Titulo 02", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
    { titulo: "Titulo 03", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
    { titulo: "Titulo 04", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
    { titulo: "Titulo 05", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
    { titulo: "Titulo 06", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
    { titulo: "Titulo 07", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
    { titulo: "Titulo 08", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
    { titulo: "Titulo 09", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
    { titulo: "Titulo 10", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
    { titulo: "Titulo 11", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
    { titulo: "Titulo 12", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
    { titulo: "Titulo 13", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
    { titulo: "Titulo 14", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
    { titulo: "Titulo 15", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
    { titulo: "Titulo 16", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
    { titulo: "Titulo 17", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
    { titulo: "Titulo 18", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
    { titulo: "Titulo 19", pessoa: "Diego", mensagem: "A demanda foi aprovada" },
    { titulo: "Titulo 20", pessoa: "Solicitante", mensagem: "A demanda foi recusada" },
  ]

  function Messages(props: { mensagem: string, pessoa: string }) {
    if (pessoaLocalStorage == props.pessoa) {
      return (
        <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", borderRadius: "5px", }}>
          <Box sx={{ width: "10%", height: "100%", position: "relative", top: 30, right: 10, marginY: 1 }}>
            <Box sx={{ background: "#FFF", borderRadius: "5px 5px 0 5px", padding: 0.5, boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}>
              <Typography variant="body1" component="div" sx={{ color: "#00579D", fontWeight: "bold", fontSize: "14px" }}>Diego</Typography>
              <Typography variant="body2" component="div" sx={{ color: "#595959" }}>
                teste
              </Typography>
            </Box>
          </Box>
        </Box>
      )
    } else {
      return (
        <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
          <Box sx={{ width: "10%", height: "100%", position: "relative", left: 10, top: 30, marginY: 1 }}>
            <Box sx={{ background: "#FFF", borderRadius: "5px 5px 5px 0", padding: 0.5, boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}>
              <Typography variant="body1" component="div" sx={{ color: "#00579D", fontWeight: "bold", fontSize: "14px" }}>Diego</Typography>
              <Typography variant="body2" component="div" sx={{ color: "#595959" }}>
                teste
              </Typography>
            </Box>
          </Box>
        </Box>
      )
    }
  }


  return (
    <>
      <Box sx={{ margin: "24px" }}>
        <Breadcrumb />
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", height: "80%" }}>
          <Box marginY={1} sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", width: "30%", maxHeight: "80vh", borderRight: "1px solid black", overflowX: "hidden", overflowY: "scroll", '&::-webkit-scrollbar': { backgroundColor: "transparent" } }}>
            <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", flexDirection: "column", width: "100%", maxHeight: "auto" }}>
              {listaChats.map((chats) => (
                <Chat titulo={chats.titulo} pessoa={chats.pessoa} mensagem={chats.mensagem} />
              ))}
            </Box>
          </Box>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            minHeight: "80vh",
            background: "rgba(0, 0, 0, 0.15)",
            borderRadius: "5px"
          }}>
            <Box sx={{
              width: "100%",
              minHeight: "70vh",
              maxHeight: "75vh",
              overflowX: "hidden",
              overflowY: "scroll",
              '&::-webkit-scrollbar': { backgroundColor: "transparent" },
            }}>
              {listaMessages.map((messages) => (
                <Messages mensagem={messages.mensagem} pessoa={messages.pessoa} />
              ))}
            </Box>
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center", width: "100%", height: "10%",
              padding: 1
            }}>
              <AttachmentRoundedIcon sx={{ color: "#595959", "&:hover": { cursor: "pointer" } }} />
              <TextField sx={{ width: "80%", padding: "5px", "& input": { padding: "5px", fontSize: "14px" } }} InputProps={{
                endAdornment: <SendRoundedIcon sx={{ color: "#595959", "&:hover": { cursor: "pointer" } }} />
              }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
