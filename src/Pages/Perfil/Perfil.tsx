import "./Perfil.scss";

import { useState } from 'react';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import { BoxContainer, BoxConteudo, BotaoTerciario, BotaoPrimario } from '../App.styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import fotoPerfil from '../../Assets/fotoPerfil.png';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';

export default function Perfil() {
    const [tipo, setTipo] = useState("password");

    function mostrarSenha() {
        if (tipo == "text") {
            setTipo("password");
        } else {
            setTipo("text");
        };
    };

    return (
        <BoxConteudo>
            <Breadcrumb />

            <div id="container">
                <div id="panel">
                    <div className="row">
                        <div className="text">
                            <p>Foto de perfil</p>
                        </div>

                        <div id="img">
                            <img src={fotoPerfil} alt="Foto de perfil" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="text">
                            <p>Usuário</p>
                        </div>

                        <TextField sx={{ width: "40%" }} value="camilly_pessotti" />
                    </div>

                    <div className="row">
                        <div className="text">
                            <p>Email</p>
                        </div>

                        <TextField sx={{ width: "40%" }} value="camilly_pessotti@weg.net" />
                    </div>

                    <div className="row" id="lastRow">
                        <div className="text">
                            <p>Senha</p>
                        </div>

                        <TextField type={tipo} sx={{ width: "40%" }} value="Abc@123" InputProps={{ endAdornment: (tipo == "text" ? <VisibilityOffRoundedIcon onClick={mostrarSenha} sx={{ color: "#666", cursor: "pointer" }} /> : <RemoveRedEyeRoundedIcon onClick={mostrarSenha} sx={{ color: "#666", cursor: "pointer" }} />) }} />
                    </div>

                    <div id="button">
                        <Button variant="contained" disabled>Salvar alterações</Button>
                    </div>
                </div>
            </div>
        </BoxConteudo >
    )
}