import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, PluginChartOptions } from 'chart.js';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Concluídas", "Em andamento", "Aprovadas", "Reprovadas"],
  datasets: [{
    label: "Demandas",
    data: [1, 3, 2, 1],
    backgroundColor: ["#00579D", "#5B93BF", "#95B9D5", "#FFF"]
  }]
}

const options: _DeepPartialObject<PluginChartOptions<"doughnut">> = {
  plugins: {
    legend: {
      position: 'left',
      labels: {
        usePointStyle: true,
        pointStyle: "circle"
      }
    }
  }
}

export default function MeuDesempenho() {
  return (
    <Container>
      <Box sx={{ height: "300px", width: "300px" }}>
        <Doughnut data={data} options={options} />
      </Box>
    </Container>
  );
};