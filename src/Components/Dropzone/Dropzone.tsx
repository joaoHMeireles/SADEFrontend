import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import Typography from "@mui/material/Typography";

import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

import { BoxContainerUploadImagens, BoxTypography } from "./Dropzone.styles";
import Arquivo from "../Arquivo/Arquivo";

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
        <BoxTypography>
          <input {...getInputProps()} />
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
