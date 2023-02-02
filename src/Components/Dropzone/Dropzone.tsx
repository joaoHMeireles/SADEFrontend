import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

import Typography from "@mui/material/Typography";

import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

import { BoxContainerUploadImagens, BoxTypography } from "./Dropzone.styles";
import Arquivo from "../Arquivo/Arquivo";
import Box from "@mui/material/Box";

export default function Dropzone() {
  const [files, setFile] = useState<File[]>([]);
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

    if (info) {
      const novosArquivos = [];

      for (let i = 0; i < info["anexos"].length; i++) {
        novosArquivos.push(info["anexos"][i]);
      }

      setAquivos(novosArquivos);
    }
  }, []);

  const onDrop = useCallback((acceptedFiles: any) => {
    const file: [] = acceptedFiles.map((acceptedFiles: any) => ({
      acceptedFiles,
    }));

    if(file == undefined){
      return
    }

    files.push(file[0]["acceptedFiles"])

    setFile(files);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  function enviarProback() {
    const formData = new FormData()

    console.log(files);

    for (let i = 0; i < files.length; i++) {
      // console.log(files[i]);
      formData.append("files", files[i])
    }

    console.log(formData.getAll("files"));

    axios.post("http://localhost:8080/sod/demanda", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }).then(response => console.log(response)).catch((err) => {console.log(err)});

  }

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
        {files.map((e, index) => {
          return (
            <Arquivo
              key={index}
              icone={e["type"]}
              nome={e["name"]}
            />
          );
        })}
      </BoxContainerUploadImagens>
      <button onClick={enviarProback}> ir pro back</button>
    </>
  );
}

// arquivos.map((arquivo) => {
//   return <Arquivo icone={arquivo} nome={arquivo} />;
// })
