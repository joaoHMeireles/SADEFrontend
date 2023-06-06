import { Box, Grid, Skeleton, Tooltip, useMediaQuery } from "@mui/material";
import { BoxContainer } from "../../Pages/App.styles";
import ComponenteProcesso from "../ComponenteProcesso/ComponenteProcesso";
import ComponenteColecaoProcesso from "../ComponenteProcesso/ComponenteColecaoProcesso/ComponenteColecaoProcesso";
import { useState } from "react";
import { BoxColecaoComponente, BoxGridCorProcesso, GridBoxTituloRadio, GridComponenteProcesso, GridLinkTypograpfy, GridTypography, MainPaper } from "../ComponenteProcesso/ComponenteProcesso.styles";
import { Link } from "react-router-dom";

export default function CardsProcesso(props: {
  listaComponents: any[];
  grid: boolean;
  rascunho?: boolean;
  proposta?: boolean;
  pauta?: boolean;
  temDemandaDevolvida?: boolean;
  propostas?: any[];
  setPropostas?: React.Dispatch<React.SetStateAction<Array<Object>>>;
  propostaSelecionada?: number;
  setPropostaSelecionada?: React.Dispatch<React.SetStateAction<number>>;
  criandoATA?: boolean;
  pautaEscolhida?: any;
  setPautaEscolhida?: React.Dispatch<React.SetStateAction<any>>;
  conteudoCarregou?: boolean
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
          temDemandaDevolvida={props.temDemandaDevolvida}
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
          criandoATA={props.criandoATA}
          pautaEscolhida={props.pautaEscolhida}
          setPautaEscolhida={props.setPautaEscolhida}
        />
      );
    }

    return (
      <Grid key={index} item xs={props.grid ? (!matches ? 4 : 6) : 12} sx={{ marginBottom: props.grid ? "2rem" : "1rem" }}>
        <BoxContainer>{componente}</BoxContainer>
      </Grid>
    );
  });

  const componentesSkeleton = []

  for (let i = 0; i < 9; i++) {
    componentesSkeleton.push(
      <Grid item xs={4} sx={{ marginBottom: props.grid ? "2rem" : "1rem" }}>
        <BoxContainer>
          <MainPaper>
            <Skeleton variant="rectangular" sx={{borderRadius: "5px", height: "20vh"}}/>
          </MainPaper>
        </BoxContainer>
      </Grid>

    )
  }

  return (
    <BoxContainer>
      <Box sx={{ width: "90%" }}>
        <Grid container>
          {!props.conteudoCarregou ?
            <>
              {componentesSkeleton}
            </>
            :
            <>
              {componentesProcessos}
            </>
          }
        </Grid>
      </Box>
    </BoxContainer>
  );
}
