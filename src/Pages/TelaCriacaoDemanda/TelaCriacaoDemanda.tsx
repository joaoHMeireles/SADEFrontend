import { useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import InformacaoGeral from "../../Components/InformacaoGeral/InformacaoGeral";
import BeneficiosDemanda from "../../Components/BeneficiosDemanda/BeneficiosDemanda";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PanoramaFishEyeRoundedIcon from '@mui/icons-material/PanoramaFishEyeRounded';
import LensRoundedIcon from '@mui/icons-material/LensRounded';
import { BotaoPrimario, BotaoTerciario, BoxConteudo } from "../App.styles";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export default function TelaCriacaoDemanda() {
    const [segundo, setSegundo] = useState(false);
    const [valor, setValor] = useState(0);

    /* Onde ta (azul), passou (cinza), não chegou (bolinha nao preenchida) */

    function mudarValor(event: React.SyntheticEvent, newValue: number) {
        console.log(newValue);
        setValor(newValue);
        if (newValue == 2) {
            setSegundo(true);
        } else {
            setSegundo(false)
        }
    };

    return (
        <BoxConteudo>
            <Breadcrumb />
            <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 3, flexDirection: "column" }}>
                <Tabs value={valor} onChange={mudarValor}>
                    {valor == 0 ? <Tab icon={<LensRoundedIcon sx={{ color: "#00579d" }} />}></Tab> : <Tab icon={<LensRoundedIcon sx={{ color: "#90caf9" }} />}></Tab>}
                    {valor == 1 ? <Tab icon={<LensRoundedIcon sx={{ color: "#00579d" }} />}></Tab> : segundo ? <Tab icon={<LensRoundedIcon sx={{ color: "#90caf9" }} />}></Tab> : <Tab icon={<PanoramaFishEyeRoundedIcon />}></Tab>}
                    {valor == 2 ? <Tab icon={<LensRoundedIcon sx={{ color: "#00579d" }} />}></Tab> : <Tab icon={<PanoramaFishEyeRoundedIcon />}></Tab>}
                </Tabs>
                {valor == 0 &&
                    <>
                        <InformacaoGeral />
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginTop: 5 }}>
                            <BotaoTerciario sx={{ width: "15%", height: "3rem" }} variant='outlined'>Cancelar</BotaoTerciario>
                            <BotaoPrimario sx={{ width: "15%", height: "3rem" }} variant='contained' endIcon={<ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />}>Proximo</BotaoPrimario>
                        </Box>
                    </>
                }
                {
                    valor == 1 &&
                    <>
                        <BeneficiosDemanda />
                    </>
                }

            </Container>
        </BoxConteudo >
    )
}