import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, PluginChartOptions } from 'chart.js';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data1 = {
  labels: ["Concluídas", "Em andamento", "Aprovadas", "Reprovadas"],
  datasets: [{
    label: "Demandas",
    data: [1, 3, 2, 1],
    backgroundColor: ["#00579D", "#5B93BF", "#95B9D5", "#FFF"],
    borderColor: ["#EEE"],
    borderWidth: 1
  }]
}

const options1: _DeepPartialObject<PluginChartOptions<"doughnut">> = {
  plugins: {
    legend: {
      position: "left",
      labels: {
        padding: 16,
        usePointStyle: true,
        pointStyle: "circle"
      }
    }
  }
}

export default function MeuDesempenho() {
  return (
    <Container sx={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ backgroundColor: "#EEE", borderRadius: "1rem", boxShadow: "5px 5px 10px 0 #00000050", height: "auto", padding: "1rem 2rem 1rem 1rem", width: "auto" }}>
        <Box sx={{ height: "auto", width: "20vw" }}>
          <Doughnut data={data1} options={options1}  />
        </Box>
      </Box>
    </Container>
  );
};