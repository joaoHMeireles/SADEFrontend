import { Box, Grid, useMediaQuery } from "@mui/material";
import { BoxContainer } from "../../Pages/App.styles";
import ComponenteProcesso from "../ComponenteProcesso/ComponenteProcesso";
import ComponenteColecaoProcesso from "../ComponenteProcesso/ComponenteColecaoProcesso/ComponenteColecaoProcesso";
import { useState } from "react";

export default function CardsProcesso(props: {
  listaComponents: any[];
  grid: boolean;
  rascunho?: boolean;
  proposta?: boolean;
  pauta?: boolean;
  propostas?: any[];
  setPropostas?: React.Dispatch<React.SetStateAction<Array<Object>>>;
  propostaSelecionada?: number;
  setPropostaSelecionada?: React.Dispatch<React.SetStateAction<number>>;
}) {
  const matches = useMediaQuery("(max-width:1100px)");
  const [demandaSelecionada, setDemandaSelecionada] = useState(0)

  const componentesProcessos = props.listaComponents.map((processo: any, index: number) => {
    let componente;
    if (!processo.propostas) {
      componente = (
        <ComponenteProcesso
          atributosProcesso={processo}
          grid={props.grid}
          rascunho={props.rascunho}
          proposta={props.proposta}
          pauta={props.pauta}
          propostas={props.propostas}
          setPropostas={props.setPropostas}
          propostaSelecionada={props.propostaSelecionada}
          setPropostaSelecionada={props.setPropostaSelecionada}
          demandaSelecionada={demandaSelecionada}
          setDemandaSelecionada={setDemandaSelecionada}
        />
      );
    } else {
      componente = (
        <ComponenteColecaoProcesso
          atributosColecaoProcesso={processo}
          grid={props.grid}
        />
      );
    }

    return (
      <Grid key={index} item xs={props.grid ? (!matches ? 4 : 6) : 12}>
        <BoxContainer>{componente}</BoxContainer>
      </Grid>
    );
  });

  return (
    <BoxContainer>
      <Box sx={{ width: "90%" }}>
        <Grid container spacing={2}>
          {componentesProcessos}
        </Grid>
      </Box>
    </BoxContainer>
  );
}
