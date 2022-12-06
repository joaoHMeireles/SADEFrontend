import { BoxContainerGeral, BoxContainerConteudo } from "./InputAnexos.styles";

import Dropzone from "../Dropzone/Dropzone";

export default function InputAnexos() {
  return (
    <>
      <BoxContainerGeral sx={{ "&:hover": { borderColor: "#00579D" } }}>
        <BoxContainerConteudo>
          <Dropzone />
        </BoxContainerConteudo>
      </BoxContainerGeral>
    </>
  );
}
