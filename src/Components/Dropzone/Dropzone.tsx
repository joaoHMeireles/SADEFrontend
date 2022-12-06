import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

import { getIconeArquivo } from "../../utils/index";

import {
  BoxContainerUploadImagens,
  TypographyUploadFiles,
  BoxTypographyFiles,
} from "./Dropzone.styles";

export default function Dropzone() {
  const [files, setFile] = useState([]);

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
        <input {...getInputProps()} />
        <Typography variant="h6" sx={{ color: "#595959" }}>
          Escolher arquivo
        </Typography>
        <FileUploadRoundedIcon sx={{ color: "#595959" }} />
      </BoxContainerUploadImagens>
      {files.map((e) => {
        let lista = [];
        for (let i = 0; i < files.length; i++) {
          const tipo: string = files[i]["acceptedFiles"]["type"];
          lista.push(tipo);
        }

        console.log(lista);

        return (
          <BoxTypographyFiles key={e["acceptedFiles"]["name"]}>
            {lista.map((e) => {
              console.log(e);
              const Icone = getIconeArquivo(e);
              return <Icone />;
            })}
            <TypographyUploadFiles variant="body2">
              {e["acceptedFiles"]["name"]}
            </TypographyUploadFiles>
          </BoxTypographyFiles>
        );
      })}
    </>
  );
}
