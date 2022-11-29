import { useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import InformacaoGeral from "../../Components/InformacaoGeral/InformacaoGeral";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PanoramaFishEyeRoundedIcon from '@mui/icons-material/PanoramaFishEyeRounded';
import LensRoundedIcon from '@mui/icons-material/LensRounded';
import { BotaoPrimario, BotaoTerciario, BoxConteudo } from "../App.styles";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export default function TelaCriacaoDemanda() {

    const [valor, setValor] = useState(0);

    return (
        <BoxConteudo>
            <Breadcrumb />
            <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 3, flexDirection: "column" }}>
                <Tabs onChange={(e) => {
                    console.log(e);
                }}>
                    /* Onde ta (azul), passou (cinza), não chegou (bolinha nao preenchida) */
                    <Tab value={1} icon={<LensRoundedIcon sx={{ color: "#00579d" }} />}></Tab>
                    <Tab value={2} icon={<PanoramaFishEyeRoundedIcon />}></Tab>
                    <Tab value={3} icon={<PanoramaFishEyeRoundedIcon />}></Tab>
                </Tabs>
                <InformacaoGeral />
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginTop: 5 }}>
                    <BotaoTerciario sx={{ width: "15%", height: "3rem" }} variant='outlined'>Cancelar</BotaoTerciario>
                    <BotaoPrimario sx={{ width: "15%", height: "3rem" }} variant='contained' endIcon={<ArrowForwardIosRoundedIcon sx={{ width: "15px" }} />}>Proximo</BotaoPrimario>
                </Box>
            </Container>
        </BoxConteudo>
    )
}