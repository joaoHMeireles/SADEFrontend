import Box from "@mui/material/Box";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ marginRight: 5 }}>{<PersonRoundedIcon />}</Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "100%" }}>{props.titulo}</Box>
          <Box
            sx={{
              width: "100%",
              dispaly: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Box>{props.pessoa}:</Box>
            <Box>{props.mensagem}</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
