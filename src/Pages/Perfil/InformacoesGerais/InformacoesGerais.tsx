import "./InformacoesGerais.scss";

import fotoPerfilVazia from '../../../Assets/fotoPerfilVazia.png';
import { BoxBackground, FirstContainer, BoxImage, SecondContainer } from "./InformacoesGerais.style";
import { useContext, useEffect, useState } from "react";
import api from "../../../api/api";
import { TextReaderContext } from "../../../Components/TextReaderContext/TextReaderContext";

export default function InformacoesGerais() {
  const { lerTexto } = useContext(TextReaderContext) as any
  const usuario = JSON.parse(localStorage.getItem("USUARIO") as string);
  const [fotoUsuario, setFotoUsuario] = useState<any>({size: 0});

  useEffect(() => {
    api.get("/sade/usuario/fotousuario/" + usuario.idUsuario, { responseType: 'blob' })
      .then((response) => {
        console.log(response.data);
        setFotoUsuario(response.data);
      });
  }, []);

  return (
    <BoxBackground>
      <FirstContainer>
        <h2 onClick={lerTexto}>Dados pessoais</h2>

        <BoxImage>
          {fotoUsuario.size != 0 ? <img id="fotoPerfil" src={URL.createObjectURL(fotoUsuario)} alt="Foto de perfil" /> : <img id="fotoPerfil" src={fotoPerfilVazia} alt="Foto de perfil" />}
        </BoxImage>

        <h4 onClick={lerTexto}>Nome</h4>

        <p onClick={lerTexto}>{usuario.nomeUsuario}</p>

        <h4 onClick={lerTexto}>Email</h4>

        <p onClick={lerTexto}>{usuario.email}</p>
      </FirstContainer>

      <SecondContainer>
        <h2 onClick={lerTexto}>Dados empresariais</h2>

        <h4 onClick={lerTexto}>Departamento</h4>

        <p onClick={lerTexto}>{usuario.departamento}</p>

        <h4 onClick={lerTexto}>Setor</h4>

        <p onClick={lerTexto}>{usuario.setor}</p>
      </SecondContainer>
    </BoxBackground>
  );
}