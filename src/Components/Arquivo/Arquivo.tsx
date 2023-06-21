import { TypographyUploadFiles, BoxTypographyFiles } from "./Arquivo.styles";

import Box from "@mui/material/Box"

import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

import { getIconeArquivo } from "../../utils/index";

export default function Arquivo(props: { id: number, icone: string; nome: string, files?: any, setFiles?: any }) {
  const Icone = getIconeArquivo(props.icone);

  return (
    <BoxTypographyFiles>
      <Icone sx={{ color: "#444" }} />

      <TypographyUploadFiles variant="body2">
        {props.nome}
      </TypographyUploadFiles>
      
      <Box>
        <ClearRoundedIcon sx={{ cursor: "pointer", color: "#444" }} onClick={() => {
          if(props.files != null){
            props.files.splice(props.id, 1)
            props.setFiles(props.files)
          } else {
            console.log(props.files);
          }
        }} />
      </Box>
    </BoxTypographyFiles>
  );
}
