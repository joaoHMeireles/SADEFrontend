import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import logo from "../../Assets/wegLogo.png";
import {
  Box,
  InputAdornment,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputRoundedIcon from "@mui/icons-material/InputRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';

function Login(props: {
  setAberto: React.Dispatch<React.SetStateAction<boolean>>;
  setFiltro: React.Dispatch<React.SetStateAction<boolean>>;
  tamanhoNavbar: string;
}) {
  const [tipo, setTipo] = useState("password");
  localStorage.setItem("PESSOA", "Solicitante");
  localStorage.setItem("PAGINATUAL", "login")

  useEffect(() => {
    props.setAberto(false);
    props.setFiltro(false);
  });

  function colocaPessoa() {
    localStorage.setItem("TIPOUSUARIO", "solicitante");
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
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "start",
              alignItems: "flex-start",
              padding: 3,
            }}
          >
            <img className="imagemLogo" src={logo} alt="logoWeg" />
          </Box>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                width: "60%",
                height: "80%",
                background: "rgba(255, 255, 255, 0.25)",
                borderRadius: "5px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "#FFF",
                }}
              >
                <Typography sx={{ color: "#FFF", marginBottom: 2 }} variant="h5">
                  Bem vindo ao SOD
                </Typography>
                <Typography sx={{ color: "#FFF" }} variant="body2">
                  Sistema Sustentável de Organização de Demandas de TI
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <TextField
                  sx={{ width: "70%", background: "#FFF", marginBottom: 5, borderRadius: "5px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}
                  placeholder="Usuário"
                  InputProps={{
                    startAdornment: <AccountCircle sx={{ color: "#595959", paddingRight: 1 }} />,
                  }}
                />
                <TextField type={tipo} id="inputSenha"
                  sx={{ width: "70%", color: "#FFF", background: "#FFF", borderRadius: "5px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)" }}
                  placeholder="Senha"
                  InputProps={{
                    startAdornment: <LockRoundedIcon sx={{ color: "#595959", paddingRight: 1 }} />,
                    endAdornment: (tipo == "text" ? <VisibilityOffRoundedIcon onClick={mostrarSenha} sx={{ color: "#595959" }} /> : <RemoveRedEyeRoundedIcon onClick={mostrarSenha} sx={{ color: "#595959" }} />)
                    // <RemoveRedEyeRoundedIcon onClick={mostrarSenha} sx={{ color: "#595959" }} />,
                  }}
                />
                <Box
                  sx={{
                    width: "70%",
                    display: "flex",
                    justifyContent: "start",
                    alignContent: "center",
                    color: "#FFF",
                    marginTop: 1
                  }}
                >
                  <Typography sx={{ textDecoration: "underline" }} variant="body2" component="span">
                    Esqueci minha senha
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    width: "150px",
                    backgroundColor: "#00579D",
                    textDecoration: "none",
                    color: "#fffffff",
                  }}
                  variant="contained"
                  startIcon={<InputRoundedIcon />}
                >
                  <Link className="textBotao" onClick={colocaPessoa} to="/home">
                    Entrar
                  </Link>
                </Button>
              </Box>
            </Box>
          </Box>
          {/* <Box
            sx={{
              width: "35%",
              height: "75%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              opacity: "30%",
              borderRadius: "5px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              marginRight: 10,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: 3,
                marginBottom: 10,
                // color: "#ffffffff"
              }}
            >
              <Typography
                sx={{ marginBottom: 2 }}
                variant="h4"
                component="h1"
              >
                Bem vindo ao SOD!
              </Typography>
              <Typography>
                Sistema Sustentável de Organização de Demandas de TI
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "60%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "60%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <TextField
                  sx={{
                    width: "90%",
                    color: "#595959",
                    marginBottom: 3,
                    backgroundColor: "#ffffff",
                    borderRadius: "5px",
                  }}
                  id="input-with-icon-textfield"
                  label="Usuário"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  variant="filled"
                />
                <Box sx={{ width: "90%" }}>
                  <TextField
                    sx={{
                      width: "100%",
                      color: "#595959",
                      backgroundColor: "#ffffff",
                      borderRadius: "5px",
                    }}
                    id="input-with-icon-textfield"
                    label="Senha"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockRoundedIcon />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <RemoveRedEyeRoundedIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="filled"
                  />
                  <Typography
                    sx={{
                      color: "#ffffff",
                      textDecoration: "underline",
                      marginTop: 1,
                    }}
                  >
                    Esqueci minha senha
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "50%",
                  height: "80%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    width: "80%",
                    height: "25%",
                    backgroundColor: "#00579D",
                    textDecoration: "none",
                    color: "#fffffff"
                  }}
                  variant="contained"
                  startIcon={<InputRoundedIcon />}
                >
                  <Link className="textBotao" onClick={colocaPessoa} to="/home">
                    Entrar
                  </Link>
                </Button>
              </Box>
            </Box>
          </Box> */}
        </Box>
        {/* Login */}
        {/* <Link onClick={colocaPessoa} to="/home">
          inicio
        </Link> */}
      </Box>
    </>
  );
}

export default Login;
