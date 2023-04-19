import { useState } from "react"

import {
  BoxContainerGeral,
  BoxContainerConteudo,
  BoxTypographyAnexos,
} from "./InputAnexos.styles";

import Typography from "@mui/material/Typography";

import Dropzone from "../Dropzone/Dropzone";

export default function InputAnexos(props: {
  rascunho: boolean;
  proposta: boolean;
  files?: any[];
  setFiles?: React.Dispatch<React.SetStateAction<any[]>>;
  arquivosProposta?: any[];
  setArquivosProposta?: React.Dispatch<React.SetStateAction<any[]>>;
}) {

  const [files, setFiles] = useState<any[]>([])

  return (
    <>
      <BoxTypographyAnexos>
        <Typography sx={{ color: "#595959", fontWeight: "bold", marginTop: 2 }}>Anexos</Typography>
      </BoxTypographyAnexos>
      <BoxContainerGeral sx={{ "&:hover": { borderColor: "#00579D" } }}>
        <BoxContainerConteudo>
          <Dropzone rascunho={props.rascunho} proposta={props.proposta} files={files} setFiles={setFiles} arquivosProposta={props.arquivosProposta} setArquivosProposta={props.setArquivosProposta}/>
        </BoxContainerConteudo>
      </BoxContainerGeral>
    </>
  );
}
