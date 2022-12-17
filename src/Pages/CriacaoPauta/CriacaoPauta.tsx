import { useState } from "react";

import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CardsProcesso from "../../Components/CardsProcesso/CardsProcesso";
import { BoxConteudo } from "../App.styles";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import LensRoundedIcon from "@mui/icons-material/LensRounded";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";

export default function CriacaoPauta() {
  const [valor, setValor] = useState(0);

  function mudarValor(event: React.SyntheticEvent, newValue: number) {
    console.log(newValue);
    setValor(newValue);
    // if (newValue == 2) {
    //   setSegundo(true);
    // } else {
    //   setSegundo(false);
    // }
  }

  return (
    <BoxConteudo>
      <Breadcrumb />
      {valor != 0 ? (
        <Tabs value={valor} onChange={mudarValor}>
          {valor == 0 ? (
            <Tab icon={<LensRoundedIcon sx={{ color: "#00579d" }} />}></Tab>
          ) : (
            <Tab icon={<LensRoundedIcon sx={{ color: "#90caf9" }} />}></Tab>
          )}
          {valor == 1 ? (
            <Tab icon={<LensRoundedIcon sx={{ color: "#00579d" }} />}></Tab>
          ) : (
            <Tab icon={<LensRoundedIcon sx={{ color: "#90caf9" }} />}></Tab>
          )}
        </Tabs>
      ) : (
        ""
      )}
    </BoxConteudo>
  );
}
