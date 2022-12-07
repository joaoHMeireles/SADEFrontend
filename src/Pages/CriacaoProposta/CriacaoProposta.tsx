import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import EscopoProposta from "../../Components/EscopoProposta/EscopoProposta";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import { BoxConteudo } from "../App.styles";

import LensRoundedIcon from "@mui/icons-material/LensRounded";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";

import { ContainerGeral } from "./CriacaoProposta.styles";

export default function CriacaoProposta() {
  const [valor, setValor] = useState(0);

  function mudarValor(event: React.SyntheticEvent, newValue: number) {
    setValor(newValue);
  }

  return (
    <BoxConteudo>
      <Breadcrumb />
      <ContainerGeral>
        <Tabs value={valor} onChange={mudarValor}>
          {valor == 0 ? (
            <Tab icon={<LensRoundedIcon sx={{ color: "#00579d" }} />}></Tab>
          ) : (
            <Tab icon={<LensRoundedIcon sx={{ color: "#90caf9" }} />}></Tab>
          )}
          {valor == 1 ? (
            <Tab icon={<LensRoundedIcon sx={{ color: "#00579d" }} />}></Tab>
          ) : (
            <Tab icon={<PanoramaFishEyeRoundedIcon />}></Tab>
          )}
        </Tabs>

        {valor == 0 && ""}
        {valor == 1 && <EscopoProposta />}
      </ContainerGeral>
    </BoxConteudo>
  );
}
