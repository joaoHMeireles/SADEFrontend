import "./InformacoesGerais.scss";

import Box from '@mui/material/Box';
import telaLoginWEG from '../../../Assets/telaLoginWEG.png'
import fotoPerfil from '../../../Assets/fotoPerfil.png'
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';

export default function InformacoesGerais() {
  return (
    <Box sx={{ alignItems: "center", color: "#595959", display: "flex", flexDirection: "column", justifyContent: "center", width: "100%" }}>
      <Box sx={{ alignItems: "center", borderBottom: "2px solid #eee", display: "flex", justifyContent: "flex-start", height: "auto", padding: "2rem 0", width: "90%" }}>
        <Box sx={{ alignItems: "center", display: "flex", justifyContent: "space-between", height: "auto", width: "100%" }}>
          <h2>Dados pessoais</h2>

          <Box>
            <IconButton>
              <EditIcon />
            </IconButton>

            <IconButton sx={{ marginLeft: "1rem" }}>
              <SettingsIcon />
            </IconButton>
          </Box>
        </Box>


      </Box>
    </Box>
  );
}