import { useContext, useEffect, useState } from "react"

import {
  BoxContainerGeral,
  BoxContainerConteudo,
  BoxTypographyAnexos,
} from "./InputAnexos.styles";

import Typography from "@mui/material/Typography";

import Dropzone from "../Dropzone/Dropzone";
import { TextReaderContext } from "../TextReaderContext/TextReaderContext";
import { arquivoDemandaToFile, transformArquivosToFile } from "../../utils";

export default function InputAnexos(props: {
  rascunho: boolean;
  proposta: boolean;
  files?: any[];
  setFiles?: React.Dispatch<React.SetStateAction<any[]>>;
  arquivosProposta?: any[];
  setArquivosProposta?: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const { lerTexto } = useContext(TextReaderContext) as any
  const [files, setFiles] = props.files && props.setFiles ? [props.files, props.setFiles] : useState<any[]>([])

  useEffect(() => {
    if (props.arquivosProposta) {
      setFiles(props.arquivosProposta)
    }
  }, [])

  return (
    <>
      <BoxTypographyAnexos>
        <Typography sx={{ color: "#595959", fontWeight: "bold", marginTop: 2 }} onClick={lerTexto}>Anexos</Typography>
      </BoxTypographyAnexos>
      <BoxContainerGeral sx={{ "&:hover": { borderColor: "#00579D" } }}>
        <BoxContainerConteudo>
          <Dropzone rascunho={props.rascunho} proposta={props.proposta} files={files} setFiles={setFiles} arquivosProposta={props.arquivosProposta} setArquivosProposta={props.setArquivosProposta} />
        </BoxContainerConteudo>
      </BoxContainerGeral>
    </>
  );
}
