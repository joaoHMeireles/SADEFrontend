import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import Typography from "@mui/material/Typography";

import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

import { BoxContainerUploadImagens, BoxTypography } from "./Dropzone.styles";
import Arquivo from "../Arquivo/Arquivo";

export default function Dropzone(props: {
  rascunho: boolean;
  proposta: boolean;
}) {
  const [files, setFile] = useState([]);

  useEffect(() => {
    if (props.rascunho) {
      const info = JSON.parse(
        localStorage.getItem("RASCUNHOESCOLHIDO") as string
      );

      for (let atributo in info) {
        if ((info as any)[atributo]) {
          console.log(info["anexos"]);
        }
      }
    } else if (props.proposta) {
      const info = JSON.parse(
        localStorage.getItem("DEMANDASELECIONADA") as string
      );
    }
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
