import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/wegLogo.png";
import "./Login.scss";
import api from "../../api/api";
import Box from "@mui/material/Box";

import AccountCircle from "@mui/icons-material/AccountCircle";
import InputRoundedIcon from "@mui/icons-material/InputRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';

import {
  BoxEsqueceuSenha, BoxLogoWEG, ContainerBackgroundLogin, ContainerBotaoLogin, ContainerGeralLogin, ContainerInputsLogin,
  ContainerLogin, ContainerTituloTexto, InputEmail, InputSenha, TextoEsqueceuSenha, TypographyTexto, TypographyTitulo,
  EstilosBotao
} from "./Login.styles";

/**
 * 
 * @param props 
 * @returns Função que retorna a tela de login
 */

export default function Login(props: {
  setAberto: React.Dispatch<React.SetStateAction<boolean>>;
  setFiltro: React.Dispatch<React.SetStateAction<boolean>>;
  tamanhoNavbar: string;
}) {
  const [tipo, setTipo] = useState("password");
  // localStorage.setItem("PESSOA", "Solicitante")
  localStorage.setItem("PAGINATUAL", "login")


  const [usuarios, setUsuarios] = useState<User[]>([])
  const [logado, setLogado] = useState(false)
  const [user, setUser] = useState({
    email: '',
    senha: ''
  });

  function atualizarUsuario(event: any) {
    setUser({
      ...user, [event.target.name]: event.target.value
    })
  }

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const config = {
        withCredentials: true,
      };

      api.post(`/sod/login/auth`, user, config).then((response: any) => {
        console.log(response.data);

        setLogado(true);

        //ver como pegar o tipo do filha da puta
        localStorage.setItem("TIPOUSUARIO", "gerenteTI");
        localStorage.setItem("IDUSUARIO", JSON.stringify(response.data.idUsuario));
        // location.href = "/home";

      }).catch((err: any) => {
        console.log(err);
      })

    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Função para setar o filtro e o menu como fechados
   */
  useEffect(() => {
    props.setAberto(false);
    props.setFiltro(false);
  });


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
                  name="email"
                  placeholder="Usuário"
                  onChange={atualizarUsuario}
                  InputProps={{
                    startAdornment: <AccountCircle sx={{ color: "#595959", paddingRight: 1 }} />,
                  }}
                />
                <InputSenha type={tipo} id="inputSenha"
                  placeholder="Senha"
                  name="senha"
                  onChange={atualizarUsuario}
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
              <ContainerBotaoLogin onClick={handleLogin}>
                <EstilosBotao
                  variant="contained"
                  startIcon={<InputRoundedIcon />}
                >
                  Entrar
                </EstilosBotao>
              </ContainerBotaoLogin>
            </ContainerBackgroundLogin>
          </ContainerLogin>
        </ContainerGeralLogin>
      </Box>
    </>
  );
}

interface User {
  cargo: string,
  chatsUsuario: [],
  departamento: string,
  email: string,
  idUsuario: number,
  nomeUsuario: string,
  notificacoesUsuario: [],
  numeroCadastro: number,
  senha: string,
  setor: string
}