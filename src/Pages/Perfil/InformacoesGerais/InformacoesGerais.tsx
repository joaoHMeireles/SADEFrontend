import "./InformacoesGerais.scss";

import Box from '@mui/material/Box';
import fotoPerfilVazia from '../../../Assets/fotoPerfilVazia.png';
import { BoxBackground, FirstContainer, BoxImage, SecondContainer } from "./InformacoesGerais.style";

export default function InformacoesGerais() {
  const usuario = JSON.parse(localStorage.getItem("USUARIO") as string);

  return (
    <BoxBackground>
      <FirstContainer>
        <h2>Dados pessoais</h2>

        <BoxImage>
          {usuario.foto != null ? <img id="fotoPerfil" src={usuario.foto} alt="Foto de perfil" /> : <img id="fotoPerfil" src={fotoPerfilVazia} alt="Foto de perfil" />}
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