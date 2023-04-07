import { BoxConteudo } from "../App.styles";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

import { FirstColumn, SecondColumn } from "./AjudaUsuario.styles";

export default function AjudaUsuario(props: { aberto: boolean }) {
    return (
        <BoxConteudo>
            <Breadcrumb />
            <FirstColumn>
                <ol>
                    <li>
                        <a href="#introducao">INTRODUÇÃO</a>
                    </li>
                    <li>
                        <a href="#atividadesPrincipais">ATIVIDADES PRINCIPAIS</a>
                    </li>
                    <li>
                        <a href="#atividadesSecundarias">ATIVIDADES SECUNDÁRIAS</a>
                    </li>
                </ol>
            </FirstColumn>

            <SecondColumn>
                
            </SecondColumn>
        </BoxConteudo>
    );
}