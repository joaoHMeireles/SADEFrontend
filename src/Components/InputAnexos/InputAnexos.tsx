import {
  BoxContainerGeral,
  BoxContainerConteudo,
  BoxTypographyAnexos,
} from "./InputAnexos.styles";

import Typography from "@mui/material/Typography";

import Dropzone from "../Dropzone/Dropzone";

export default function InputAnexos() {
  return (
    <>
      <BoxTypographyAnexos>
        <Typography sx={{ color: "#595959" }}>Anexos</Typography>
      </BoxTypographyAnexos>
      <BoxContainerGeral sx={{ "&:hover": { borderColor: "#00579D" } }}>
        <BoxContainerConteudo>
          <Dropzone />
        </BoxContainerConteudo>
      </BoxContainerGeral>
    </>
  );
}
