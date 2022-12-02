import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Dropzone from "../Dropzone/DropZone";

import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";

import { BoxContainerGeral, BoxContainerConteudo } from "./InputAnexos.styles";
import { useState } from "react";

export default function InputAnexos() {
  const [file, setFile] = useState("");

  return (
    <>
      <BoxContainerGeral>
        <Dropzone setFile={setFile} />
        {file?.name}
        <BoxContainerConteudo>
          {/* <Button
            variant="outlined"
            component="label"
            sx={{
              height: "60%",
              border: "2px solid",
              "&:hover": {
                border: "2px solid",
                backgroundColor: "#1976d21a",
                transition: "ease-in 0.5s",
              },
            }}
          >
            Escolher arquivo
            <input hidden accept="image/*" multiple type="file" />
            <AttachFileRoundedIcon />
          </Button> */}
          {/* <Typography sx={{ marginLeft: 3, color: "#595959" }}>
            Nenhum item selecionado
          </Typography> */}
        </BoxContainerConteudo>
      </BoxContainerGeral>
    </>
  );
}
