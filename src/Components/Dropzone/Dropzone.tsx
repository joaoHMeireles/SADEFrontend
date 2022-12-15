import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

import Typography from "@mui/material/Typography";

import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

import { BoxContainerUploadImagens, BoxTypography } from "./Dropzone.styles";
import Arquivo from "../Arquivo/Arquivo";

export default function Dropzone() {
  const [files, setFile] = useState<File[]>([]);

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
