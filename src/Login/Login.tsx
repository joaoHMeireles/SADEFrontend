import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import {
  Box,
  InputAdornment,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import InputRoundedIcon from "@mui/icons-material/InputRounded";

function Login(props: {
  setAberto: React.Dispatch<React.SetStateAction<boolean>>;
  tamanhoNavbar: string;
}) {
  useEffect(() => {
    props.setAberto(false);
  });

  function colocaPessoa() {
    localStorage.setItem("TIPOUSUARIO", "solicitante");
  }

  return (
    <>
      <Box
        id="login"
        sx={{ position: "relative", top: `-${props.tamanhoNavbar}` }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "30%",
              height: "75%",
              //   display: "flex",
              //   justifyContent: "space-around",
              //   alignItems: "center",
              //   flexDirection: "column",
              backgroundColor: "#00579D",
              opacity: "75%",
              borderRadius: "5px",
              marginRight: 20,
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
              }}
            >
              <Typography
                sx={{ color: "#ffffffff", marginBottom: 2 }}
                variant="h4"
                component="h1"
              >
                Bem vindo!
              </Typography>
              <Typography sx={{ color: "#ffffffff" }}>
                Que bom te ver de novo...
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
                  }}
                  variant="contained"
                  startIcon={<InputRoundedIcon />}
                >
                  Entrar
                </Button>
              </Box>
            </Box>
          </Box>
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
