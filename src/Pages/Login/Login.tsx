import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/wegLogo.png";
import "./Login.scss";
import Box from "@mui/material/Box";

import AccountCircle from "@mui/icons-material/AccountCircle";
import InputRoundedIcon from "@mui/icons-material/InputRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';

import {
  BoxEsqueceuSenha, BoxLogoWEG, ContainerBackgroundLogin, ContainerBotaoLogin,
  ContainerGeralLogin, ContainerInputsLogin, ContainerLogin, ContainerTituloTexto,
  InputEmail, InputSenha, TextoEsqueceuSenha, TypographyTexto, TypographyTitulo,
  EstilosBotao
} from "./Login.styles";

/**
 * 
 * @param props 
 * @returns Função que retorna a tela de login
 */

function Login(props: {
  setAberto: React.Dispatch<React.SetStateAction<boolean>>;
  setFiltro: React.Dispatch<React.SetStateAction<boolean>>;
  tamanhoNavbar: string;
}) {
  const [tipo, setTipo] = useState("password");
  localStorage.setItem("PESSOA", "Solicitante")
  localStorage.setItem("PAGINATUAL", "login")

  /**
   * Função para setar o filtro e o menu como fechados
   */
  useEffect(() => {
    props.setAberto(false);
    props.setFiltro(false);
  });

  /**
   * Função que coloca o  tipo do usuário no localStorage
   */
  function colocaPessoa() {
    localStorage.setItem("TIPOUSUARIO", "analista");
  }

  /**
   * Função para conseguir ver a senha do input password
   */
  function mostrarSenha() {
    if (tipo == "text") {
      setTipo("password")
    } else {
      setTipo("text")
    }
  }

  return (
    <>
      <Box id="login">
        <ContainerGeralLogin>
          <BoxLogoWEG>
            <img className="imagemLogo" src={logo} alt="logoWeg" />
          </BoxLogoWEG>
          <ContainerLogin className="text">
            <ContainerBackgroundLogin>
              <ContainerTituloTexto >
                <TypographyTitulo variant="h5">
                  Bem vindo ao SOD
                </TypographyTitulo>
                <TypographyTexto variant="body2">
                  Sistema Sustentável de Organização de Demandas de TI
                </TypographyTexto>
              </ContainerTituloTexto>
              <ContainerInputsLogin>
                <InputEmail
                  placeholder="Usuário"
                  InputProps={{
                    startAdornment: <AccountCircle sx={{ color: "#595959", paddingRight: 1 }} />,
                  }}
                />
                <InputSenha type={tipo} id="inputSenha"
                  placeholder="Senha"
                  InputProps={{
                    startAdornment: <LockRoundedIcon sx={{ color: "#595959", paddingRight: 1 }} />,
                    endAdornment: (tipo == "text" ? <VisibilityOffRoundedIcon onClick={mostrarSenha} sx={{ color: "#595959", cursor: "pointer" }} /> : <RemoveRedEyeRoundedIcon onClick={mostrarSenha} sx={{ color: "#595959", cursor: "pointer" }} />)
                  }}
                />
                <BoxEsqueceuSenha>
                  <TextoEsqueceuSenha variant="body2">
                    Esqueci minha senha
                  </TextoEsqueceuSenha>
                </BoxEsqueceuSenha>
              </ContainerInputsLogin>
              <ContainerBotaoLogin>
                <EstilosBotao
                  variant="contained"
                  startIcon={<InputRoundedIcon />}
                >
                  <Link className="textoBotao" onClick={colocaPessoa} to="/home">
                    Entrar
                  </Link>
                </EstilosBotao>
              </ContainerBotaoLogin>
            </ContainerBackgroundLogin>
          </ContainerLogin>
        </ContainerGeralLogin>
      </Box>
    </>
  );
}

export default Login;
