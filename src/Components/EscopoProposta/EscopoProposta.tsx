import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import {
  BoxContainerGeral,
  BoxPadrao,
  BoxPaybackExecucao,
} from "./EscopoProposta.styles";

export default function EscopoProposta() {
  return (
    <>
      <BoxContainerGeral>
        <BoxPadrao>
          <Typography>Escopo</Typography>
          <TextField
            sx={{ width: "100%" }}
            multiline
            rows={7}
            maxRows={Infinity}
          />
        </BoxPadrao>
        <BoxPadrao>
          <Typography>Tabelas de Custo</Typography>
          {/* Outro componente provavelmente */}
        </BoxPadrao>
        <BoxPaybackExecucao>
          <Box>
            <Typography>Payback</Typography>
            <TextField></TextField>
          </Box>
          <Box>
            <Typography>Período de execução</Typography>
            <TextField></TextField>
          </Box>
        </BoxPaybackExecucao>
        <Box>
          <Box>
            <Typography>Nome do responsável</Typography>
            <TextField></TextField>
          </Box>
          <Box>
            <Typography>Área do responsável</Typography>
            <TextField></TextField>
          </Box>
        </Box>
        {/* Outro componente de arquivos */}
      </BoxContainerGeral>
    </>
  );
}
