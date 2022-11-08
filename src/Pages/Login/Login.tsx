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
  BoxForgotPassword, BoxLogoWEG, ContainerBackgroundLogin, ContainerButtonLogin,
  ContainerGeneralLogin, ContainerInputsLogin, ContainerLogin, ContainerTitleText,
  InputEmail, InputPassword, TextForgotPassword, TypographyText, TypographyTitle,
  StylesButton
} from "./Login.styles";

function Login(props: {
  setAberto: React.Dispatch<React.SetStateAction<boolean>>;
  setFiltro: React.Dispatch<React.SetStateAction<boolean>>;
  tamanhoNavbar: string;
}) {
  const [tipo, setTipo] = useState("password");
  localStorage.setItem("PAGINATUAL", "login")

  useEffect(() => {
    props.setAberto(false);
    props.setFiltro(false);
  });

  function colocaPessoa() {
    localStorage.setItem("TIPOUSUARIO", "analista");
  }

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
        <ContainerGeneralLogin>
          <BoxLogoWEG>
            <img className="imagemLogo" src={logo} alt="logoWeg" />
          </BoxLogoWEG>
          <ContainerLogin>
            <ContainerBackgroundLogin>
              <ContainerTitleText>
                <TypographyTitle variant="h5">
                  Bem vindo ao SOD
                </TypographyTitle>
                <TypographyText variant="body2">
                  Sistema Sustentável de Organização de Demandas de TI
                </TypographyText>
              </ContainerTitleText>
              <ContainerInputsLogin>
                <InputEmail
                  placeholder="Usuário"
                  InputProps={{
                    startAdornment: <AccountCircle sx={{ color: "#595959", paddingRight: 1 }} />,
                  }}
                />
                <InputPassword type={tipo} id="inputSenha"
                  placeholder="Senha"
                  InputProps={{
                    startAdornment: <LockRoundedIcon sx={{ color: "#595959", paddingRight: 1 }} />,
                    endAdornment: (tipo == "text" ? <VisibilityOffRoundedIcon onClick={mostrarSenha} sx={{ color: "#595959" }} /> : <RemoveRedEyeRoundedIcon onClick={mostrarSenha} sx={{ color: "#595959" }} />)
                  }}
                />
                <BoxForgotPassword>
                  <TextForgotPassword variant="body2">
                    Esqueci minha senha
                  </TextForgotPassword>
                </BoxForgotPassword>
              </ContainerInputsLogin>
              <ContainerButtonLogin>
                <StylesButton
                  variant="contained"
                  startIcon={<InputRoundedIcon />}
                >
                  <Link className="textBotao" onClick={colocaPessoa} to="/home">
                    Entrar
                  </Link>
                </StylesButton>
              </ContainerButtonLogin>
            </ContainerBackgroundLogin>
          </ContainerLogin>
        </ContainerGeneralLogin>
      </Box>
    </>
  );
}

export default Login;
