import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";


import Typography from "@mui/material/Typography";

import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

import { BoxContainerUploadImagens, BoxTypography } from "./Dropzone.styles";
import Arquivo from "../Arquivo/Arquivo";


type Anexos = {
  nome: string;
  tipo: string;
};

export default function Dropzone(props: {
  rascunho: boolean;
  proposta: boolean;
  files: any[];
  setFiles: React.Dispatch<React.SetStateAction<any[]>>;
  arquivosProposta?: any[];
  setArquivosProposta?: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const [arquivos, setArquivos] = useState<Array<Anexos>>([]);

  useEffect(() => {
    // let info;
    // if (props.rascunho) {
    //   info = JSON.parse(localStorage.getItem("RASCUNHOESCOLHIDO") as string);
    // } else if (props.proposta) {
    //   info = JSON.parse(localStorage.getItem("DEMANDASELECIONADA") as string);
    // }


    // if (info) {
    //   const novosArquivos: any = [];

    //   for (const arquivos of info.arquivosDemanda) {
    //     novosArquivos.push(arquivos)
    //   }

    //   setArquivos(novosArquivos);
    // }
  }, []);

  const onDrop = useCallback((acceptedFiles: any) => {
    const files: [] = acceptedFiles.map((file: any) => {
      return file
    })

    if (files == undefined) {
      return
    }

    for (const file of files) {
      props.files.push(file)
    }

    props.setFiles(props.files);

    if (props.setArquivosProposta && props.arquivosProposta) {
      props.setArquivosProposta(props.files);
    }
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
        {/* {props.rascunho &&
          arquivos.map((e: Anexos, index: number) => {
            return <Arquivo key={index} id={index} icone={e.tipo} nome={e.nome} />;
          })} */}

        {/* {props.proposta &&
          arquivos.map((e: Anexos, index: number) => {
            return <Arquivo key={index} id={index} icone={e.tipo} nome={e.nome} 
            // files={props.files} setFiles={props.setFiles}
            />;
          })}

        {(!props.rascunho && !props.proposta) && */}
          <>
            {props.files && props.files.map((e: any, index: number) => {
              return (
                <Arquivo
                  key={index}
                  id={index}
                  icone={e["type"]}
                  nome={e["name"]}
                  files={props.files}
                  setFiles={props.setFiles} />
              );
            })}
          </>
        {/* } */}
      </BoxContainerUploadImagens>
    </>
  );
}