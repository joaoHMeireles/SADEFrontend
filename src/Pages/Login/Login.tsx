import { useEffect, useState, useContext } from "react";
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
import { Alert, FormControl, FormHelperText, Snackbar } from "@mui/material";
import { WebSocketContext } from "../../api/websocketservice";
import { novaNotificacao } from "../Notificacoes/Notificacoes";

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
  const [feedbackAberto, setFeedbackAberto] = useState(false)
  const [invalido, setInvalido] = useState(false)
  const [user, setUser] = useState({
    email: '',
    senha: ''
  });
  
  const webSocketService: any = useContext(WebSocketContext)
  localStorage.setItem("PAGINATUAL", "login")

  function atualizarUsuario(event: any) {
    setUser({
      ...user, [event.target.name]: event.target.value
    })
  }

  const handleLogin = async (e: any) => {
    e.preventDefault();

    if ((user.email == '' || user.email == null) || (user.senha == '' || user.senha == null)) {
      setInvalido(true)
      return
    } else {
      setInvalido(false)
    }

    const config = {
      withCredentials: true,
    };

    api.post(`/sod/login/auth`, user, config).then((response: any) => {
      const dadosUserJPA = response.data
      localStorage.setItem("TIPOUSUARIO", dadosUserJPA.authorities[0].authority);
      localStorage.setItem("USUARIO", JSON.stringify(dadosUserJPA.usuario))
      localStorage.setItem("IDUSUARIO", JSON.stringify(dadosUserJPA.usuario.idUsuario));

      return dadosUserJPA
    }).then((res) => {
      console.log(res);

      api.get("/sod/demanda/usuario/" + localStorage.getItem("IDUSUARIO")).then((res) => {
        for (const demanda of res.data) {
          console.log(webSocketService);

          webSocketService.inscrever(`/notificacao/demanda/${demanda.idDemanda}`, novaNotificacao)
        }
      }).then(() => {
        location.href = "/home";
      })
    }).catch((err: any) => {
      console.log(err);
      setFeedbackAberto(true)
    })
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
                <FormControl sx={{ minWidth: "80%" }}>
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
                  <FormHelperText id="component-error-text" sx={{ color: "#E90821" }}>
                    {invalido && "Um dos campos não foi preenchido"}
                  </FormHelperText>
                </FormControl>
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
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={3000}
        open={feedbackAberto}
        onClose={() => { setFeedbackAberto(false) }}
      >
        <Alert onClose={() => { setFeedbackAberto(false) }} severity="error" sx={{ width: '100%' }}>
          Usuário ou senha, inválidos
        </Alert>
      </Snackbar>
    </>
  );
}
