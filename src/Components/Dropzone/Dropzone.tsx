import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

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
  files: any[];
  setFiles: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const [arquivos, setAquivos] = useState<Array<Anexos>>([]);

  useEffect(() => {
    let info;
    if (props.rascunho) {
      info = JSON.parse(localStorage.getItem("RASCUNHOESCOLHIDO") as string);
    } else if (props.proposta) {
      info = JSON.parse(localStorage.getItem("DEMANDASELECIONADA") as string);
    }


    if (info) {
      const novosArquivos: any = [];

      for (const arquivos of info.arquivosDemanda) {
        novosArquivos.push(arquivos)
      }

      setAquivos(novosArquivos);

      console.log(props.files);

    }
  }, []);

  const onDrop = useCallback((acceptedFiles: any) => {
    const file: [] = acceptedFiles.map((acceptedFiles: any) => ({
      acceptedFiles,
    }));

    if (file == undefined) {
      return
    }

    props.files.push(file[0]["acceptedFiles"])

    props.setFiles(props.files);



  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

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

        {props.files.map((e: any, index: any) => {
          return (
            <Arquivo
              key={index}
              icone={e["type"]}
              nome={e["name"]}
            />
          );
        })}
      </BoxContainerUploadImagens>
    </>
  );
}