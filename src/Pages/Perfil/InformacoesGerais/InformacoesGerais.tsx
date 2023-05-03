import "./InformacoesGerais.scss";

import Box from '@mui/material/Box';
import fotoPerfil from '../../../Assets/fotoPerfil.jpg';

export default function InformacoesGerais() {
  return (
    <Box sx={{ alignItems: "center", color: "#595959", display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", width: "100%" }}>
      <Box sx={{ alignItems: "flex-start", borderBottom: "2px solid #ddd", display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "auto", padding: "2rem 0", width: "90%" }}>
        <Box sx={{ alignItems: "center", display: "flex", justifyContent: "space-between", height: "auto", width: "100%" }}>
          <h2>Dados pessoais</h2>
        </Box>

        <Box sx={{ alignItems: "center", borderRadius: "360px", display: "flex", height: "10vw", justifyContent: "center", overflow: "hidden", marginTop: "1rem", width: "10vw" }}>
          <img id="fotoPerfil" src={fotoPerfil} alt="Foto de perfil" />
        </Box>

        <h4>
          Nome
        </h4>

        <p>
          Benson Rodrigues
        </p>

        <h4>
          Email
        </h4>

        <p>
          benson_rodrigues@weg.net
        </p>
      </Box>

      <Box sx={{ alignItems: "flex-start", display: "flex", flexDirection: "column", justifyContent: "center", height: "auto", padding: "2rem 0", width: "90%" }}>
        <h2>Dados empresariais</h2>

        <h4>
          Departamento
        </h4>

        <p>
          Desenvolvimento de RH
        </p>

        <h4>
          Setor
        </h4>

        <p>
          CentroWEG
        </p>
      </Box>
    </Box>
  );
}