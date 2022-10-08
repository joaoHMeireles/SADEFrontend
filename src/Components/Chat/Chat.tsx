import Box from "@mui/material/Box";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { Typography } from "@mui/material";

import "./Chat.scss";

export default function Chat(props: {
  titulo: string;
  pessoa: string;
  mensagem: string;
}) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          backgroundColor: "#EEEEEE",
          borderRadius: "5px",
          marginY: 3,
        }}
      >
        <Box className="containerIconPessoa" sx={{ marginX: 3 }}>{<PersonRoundedIcon />}</Box>
        <Box
          className="containerChat"
          sx={{
            width: "30%",
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box className="containerTitulo" sx={{ width: "100%" }}>
            <Typography variant="h6" component="h1">
              {props.titulo}
            </Typography>
          </Box>
          <Box className="containerPessoaMensagem" sx={{ width: "100%" }}>
            <Typography variant="caption" component="h2" gutterBottom>
              {props.pessoa}: {props.mensagem}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
