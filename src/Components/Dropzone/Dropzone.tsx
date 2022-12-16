import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import Typography from "@mui/material/Typography";

import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

import { BoxContainerUploadImagens, BoxTypography } from "./Dropzone.styles";
import Arquivo from "../Arquivo/Arquivo";
import Box from "@mui/material/Box";

type Anexos = {
  nome: string;
  tipo: string;
};

export default function Dropzone(props: {
  rascunho: boolean;
  proposta: boolean;
}) {
  const [files, setFile] = useState([]);
  const [arquivos, setAquivos] = useState<Array<Anexos>>([]);

  useEffect(() => {
    let info;
    if (props.rascunho) {
      info = JSON.parse(localStorage.getItem("RASCUNHOESCOLHIDO") as string);
    } else if (props.proposta) {
      info = JSON.parse(localStorage.getItem("DEMANDASELECIONADA") as string);
    }

    const novosArquivos = [];

    for (let i = 0; i < info["anexos"].length; i++) {
      novosArquivos.push(info["anexos"][i]);
    }

    setAquivos(novosArquivos);
  }, []);

  const onDrop = useCallback((acceptedFiles: any) => {
    const file: [] = acceptedFiles.map((acceptedFiles: any) => ({
      acceptedFiles,
    }));
    setFile((curr) => [...curr, ...file]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // console.log(files[0]["acceptedFiles"]["type"]);

  return (
    <>
      <BoxContainerUploadImagens {...getRootProps()}>
        <BoxTypography>
          <input id="anexos" {...getInputProps()} />
          <Typography variant="h6" sx={{ color: "#595959" }}>
            Escolher arquivo
          </Typography>
          <FileUploadRoundedIcon sx={{ color: "#595959" }} />
        </BoxTypography>
        {props.rascunho &&
          arquivos.map((e: Anexos) => {
            return <Arquivo icone={e.tipo} nome={e.nome} />;
          })}

        {props.proposta &&
          arquivos.map((e: Anexos) => {
            return <Arquivo icone={e.tipo} nome={e.nome} />;
          })}
        {files.map((e) => {
          return (
            <Arquivo
              icone={e["acceptedFiles"]["type"]}
              nome={e["acceptedFiles"]["name"]}
            />
          );
        })}
      </BoxContainerUploadImagens>
    </>
  );
}

// arquivos.map((arquivo) => {
//   return <Arquivo icone={arquivo} nome={arquivo} />;
// })
