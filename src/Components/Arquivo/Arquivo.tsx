import { TypographyUploadFiles, BoxTypographyFiles } from "./Arquivo.styles";

import { getIconeArquivo } from "../../utils/index";

export default function Arquivo(props: { icone: string; nome: string }) {
  const Icone = getIconeArquivo(props.icone);

  return (
    <BoxTypographyFiles>
      <Icone sx={{color: "#595959"}}/>
      <TypographyUploadFiles variant="body2">
        {props.nome}
      </TypographyUploadFiles>
    </BoxTypographyFiles>
  );
}
