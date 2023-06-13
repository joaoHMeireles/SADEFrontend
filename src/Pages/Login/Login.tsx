import { useEffect, useState, useContext } from "react";
import { TextReaderContext } from "../../Components/TextReaderContext/TextReaderContext";
import "./Login.scss";
import {
  BoxImage,
  BoxInputs,
  BoxLogin,
  BoxLogos,
  BoxRememberMe,
  BoxTexts,
  ButtonEdited,
  Column,
  Container,
  TextFieldEdited
} from "./Login.styles";
import { BotaoPrimario } from "../App.styles";
import wegLogo from "../../Assets/wegLogoAzul.png"
import sadeLogo from "../../Assets/sadeLogoAzul.png"
import TextField from '@mui/material/TextField';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Checkbox from '@mui/material/Checkbox';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { Alert, FormControl, FormHelperText, InputAdornment, Snackbar } from "@mui/material";
import { WebSocketContext } from "../../api/websocketservice";
import api from "../../api/api";
import Cookies from "js-cookie";

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
  const [feedbackAberto, setFeedbackAberto] = useState(false);
  const [invalido, setInvalido] = useState(false);
  const [user, setUser] = useState({ email: '', senha: '' });
  const { lerTexto } = useContext(TextReaderContext) as any;
  const webSocketService: any = useContext(WebSocketContext);
  const handleLogin = async (e: any) => {
    e.preventDefault();

    if ((user.email == '' || user.email == null) || (user.senha == '' || user.senha == null)) {
      setInvalido(true);
      return;
    } else {
      setInvalido(false);
    }

    const config = {
      withCredentials: true,
    }

    api.post(`/sade/login/auth`, user, config).then((response: any) => {
      const dadosUserJPA = response.data;
      localStorage.setItem("TIPOUSUARIO", dadosUserJPA.authorities[0].authority);
      localStorage.setItem("USUARIO", JSON.stringify(dadosUserJPA.usuario));
      localStorage.setItem("IDUSUARIO", JSON.stringify(dadosUserJPA.usuario.idUsuario));

      const inputCheckbox = document.getElementById("checkboxLembrarDeMim") as HTMLInputElement

      if (inputCheckbox.checked) {
        api.post(`/sade/login/auth/cookie`, user, config)
      }

      return dadosUserJPA;
    }).then(() => {
      webSocketService.conectar();
      location.href = "/home";
    }).catch((err: any) => {
      console.log(err);
      setFeedbackAberto(true);
    });
  }

  localStorage.setItem("PAGINATUAL", "login");

  // useEffect(() => {


  // }, [])

  /**
 * Função para setar o filtro e o menu como fechados
 */
  useEffect(() => {
    props.setAberto(false);
    props.setFiltro(false);
  });

  function atualizarUsuario(event: any) {
    setUser({
      ...user, [event.target.name]: event.target.value
    });
  }

  /**
   * Função para conseguir ver a senha do input password
   */
  function mostrarSenha() {
    if (tipo == "text") {
      setTipo("password");
    } else {
      setTipo("text");
    }
  }

  function onClickToDo(e: any) {
    lerTexto();
    handleLogin(e);
  }


  return (
    <>
      <BoxLogin>
        <BoxImage id="backgroundLogin" />

        <Column>
          <Container>
            <BoxLogos>
              <img id="wegLogo" src={wegLogo} alt="WEG Logo" />

              <img id="sadeLogo" src={sadeLogo} alt="SADE Logo" />
            </BoxLogos>

            <BoxTexts >
              <p id="title">Login</p>

              <p id="text">Insira suas crendenciais para acessar sua conta</p>
            </BoxTexts>

            <BoxInputs>
              <FormControl>
                <TextFieldEdited sx={{ marginBottom: "2rem" }} name="email" onChange={atualizarUsuario}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmailRoundedIcon sx={{ color: "#00579d" }} />
                      </InputAdornment>)
                  }} variant="outlined" placeholder="Email" />

                <TextFieldEdited sx={{ marginBottom: "0.5rem" }} name="senha" type={tipo} onChange={atualizarUsuario}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon sx={{ color: "#00579d" }} />
                      </InputAdornment>),
                    endAdornment: (
                      tipo == "text" ? <VisibilityOffOutlinedIcon onClick={mostrarSenha} sx={{ color: "#00579d", cursor: "pointer" }} /> : <VisibilityOutlinedIcon onClick={mostrarSenha} sx={{ color: "#00579d", cursor: "pointer" }} />)
                  }} variant="outlined" placeholder="Senha" />

                <FormHelperText id="component-error-text" sx={{ color: "#E90821" }}>
                  {invalido && "Um dos campos não foi preenchido"}
                </FormHelperText>
              </FormControl>

              <BoxRememberMe>
                <Checkbox id="checkboxLembrarDeMim" />
                <p id="text">Lembrar de mim</p>
              </BoxRememberMe>
            </BoxInputs>

            <BotaoPrimario variant="contained" startIcon={<LoginRoundedIcon />} onClick={onClickToDo}>
              Entrar
            </BotaoPrimario>
          </Container>
        </Column>
      </BoxLogin>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={3000}
        open={feedbackAberto}
        onClose={() => { setFeedbackAberto(false) }}>

        <Alert onClose={() => { setFeedbackAberto(false) }} severity="error" sx={{ width: '100%' }}>
          Usuário ou senha inválido
        </Alert>
      </Snackbar>
    </>
  )
}
