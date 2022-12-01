import "./Perfil.scss";

import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { BoxContainer, BoxConteudo, BotaoTerciario, BotaoPrimario } from "../App.styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import fotoPerfil from "../../Assets/fotoPerfil.jpg"

export default function Perfil() {
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
                    </div>

                    <div className="row">
                        <div className="text">
                            <p>Email</p>
                        </div>
                    </div>

                    <div className="row" id="last">
                        <div className="text">
                            <p>Senha</p>
                        </div>
                    </div>
                </div>
            </div>
        </BoxConteudo >
    )
}