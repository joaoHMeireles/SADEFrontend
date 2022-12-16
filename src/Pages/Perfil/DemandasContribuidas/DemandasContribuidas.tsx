import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Dia() {
  return (
    <Box sx={{ backgroundColor: "#eee", borderRadius: "0.2rem", height: "1rem", margin: "0.2rem", width: "1rem" }} />
  );
};

function Semanas() {
  const colunasDias = [];

  for (let i = 0; i < 7; i++) {
    colunasDias.push(<Dia />);
  };

  return (
    <Box sx={{ alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      {colunasDias}
    </Box>
  );
};

function Mes(props: { mesMostrar: string }) {
  const colunasSemanas = [];

  for (let i = 0; i < 4; i++) {
    colunasSemanas.push(<Semanas />);
  };

  return (
    <Box sx={{ alignItems: "flex-start", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <p>
        {props.mesMostrar}
      </p>
      <Box sx={{ alignItems: "center", display: "flex", justifyContent: "center", marginTop: "0.4rem" }}>
        {colunasSemanas}
      </Box>
    </Box>

  );
};

export default function DemandasContribuidas() {
  const colunasMeses = [];
  const mesAtual = new Date().getMonth();
  const ordemMeses = getOrdem(mesAtual);

  for (let i = 0; i < 12; i++) {
    colunasMeses.push(<Mes mesMostrar={ordemMeses[i]} />);
  };

  return (
    <Container sx={{ color: "#595959" }}>
      <p>0 contribuições no último ano</p>

      <Box sx={{ border: "1px solid #595959", borderRadius: "0.5rem", margin: "0.4rem 0", padding: "1rem" }}>
        <Box sx={{ alignItems: "center", display: "flex", justifyContent: "center" }}>
          {colunasMeses}
        </Box>
      </Box>

      <Box sx={{ alignItems: "center", display: "flex", justifyContent: "flex-end" }}>
        <p>Menos</p>
        <Box sx={{ backgroundColor: "#eee", borderRadius: "0.2rem", height: "1rem", margin: "0.2rem", width: "1rem" }} />
        <Box sx={{ backgroundColor: "#95B9D5", borderRadius: "0.2rem", height: "1rem", margin: "0.2rem", width: "1rem" }} />
        <Box sx={{ backgroundColor: "#5B93BF", borderRadius: "0.2rem", height: "1rem", margin: "0.2rem", width: "1rem" }} />
        <Box sx={{ backgroundColor: "#00579D", borderRadius: "0.2rem", height: "1rem", margin: "0.2rem", width: "1rem" }} />
        <p>Mais</p>
      </Box>
    </Container>
  );
}

function getOrdem(mesAtual: number) {
  const meses = {
    0: ['Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan'],
    1: ['Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan', 'Fev'],
    2: ['Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar'],
    3: ['Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar', 'Abr'],
    4: ['Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
    5: ['Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    6: ['Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
    7: ['Set', 'Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
    8: ['Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
    9: ['Nov', 'Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'],
    10: ['Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov'],
    11: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  };

  return (meses as any)[mesAtual];
}