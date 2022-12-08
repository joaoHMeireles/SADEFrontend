import { Box, Grid, useMediaQuery } from "@mui/material";
import { BoxContainer, BoxConteudo } from "../../Pages/App.styles";
import ComponenteProcesso from "../ComponenteProcesso/ComponenteProcesso";
import ComponenteColecaoProcesso from "../ComponenteProcesso/ComponenteColecaoProcesso/ComponenteColecaoProcesso";

export default function CardsProcesso(props: { listaComponents: any[], grid: boolean, rascunho: boolean }) {
  const matches = useMediaQuery("(max-width:1100px)");

  const componentesProcessos = props.listaComponents.map((processo: any) => {
    let componente;
    if (!processo.propostas) {
      componente = (
        <ComponenteProcesso atributosProcesso={processo} grid={props.grid} rascunho={props.rascunho}/>
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
      <Grid key={processo.id} item xs={props.grid ? (!matches ? 4 : 6) : 12}>
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
