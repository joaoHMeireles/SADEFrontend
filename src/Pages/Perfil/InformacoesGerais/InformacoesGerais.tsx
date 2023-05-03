import "./InformacoesGerais.scss";

import fotoPerfilVazia from '../../../Assets/fotoPerfilVazia.png';
import { BoxBackground, FirstContainer, BoxImage, SecondContainer } from "./InformacoesGerais.style";
import { useEffect, useState } from "react";
import api from "../../../api/api";

export default function InformacoesGerais() {
  const usuario = JSON.parse(localStorage.getItem("USUARIO") as string);
  const [fotoUsuario, setFotoUsuario] = useState<any>({size: 0});

  useEffect(() => {
    api.get("/sod/usuario/fotousuario/" + usuario.idUsuario, { responseType: 'blob' })
      .then((response) => {
        console.log(response.data);
        setFotoUsuario(response.data);
      });
  }, []);

  return (
    <BoxBackground>
      <FirstContainer>
        <h2>Dados pessoais</h2>

        <BoxImage>
          {fotoUsuario.size != 0 ? <img id="fotoPerfil" src={URL.createObjectURL(fotoUsuario)} alt="Foto de perfil" /> : <img id="fotoPerfil" src={fotoPerfilVazia} alt="Foto de perfil" />}
        </BoxImage>

        <h4>Nome</h4>

        <p>{usuario.nomeUsuario}</p>

        <h4>Email</h4>

        <p>{usuario.email}</p>
      </FirstContainer>

      <SecondContainer>
        <h2>Dados empresariais</h2>

        <h4>Departamento</h4>

        <p>{usuario.departamento}</p>

        <h4>Setor</h4>

        <p>{usuario.setor}</p>
      </SecondContainer>
    </BoxBackground>
  );
}