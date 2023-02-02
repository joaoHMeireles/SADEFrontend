import './MeuDesempenho.scss';
import { dataLine1, optionsLine1, dataLine2, optionsLine2, dataLine3, optionsLine3, dataLine4, optionsLine4, dataDoughnut, pluginsDoughnut, dataHorizontalBar, optionsHorizontalBar } from "./DatasChart";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, PluginChartOptions, LineElement, CategoryScale, LinearScale, PointElement, BarElement, Title } from 'chart.js';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, BarElement, Title);

export default function MeuDesempenho() {
  return (
    <Container sx={{ alignItems: "center", display: "flex", flexDirection: "column", height: "75vh", justifyContent: "space-around", width: "100%" }}>
      <Box sx={{ alignItems: "center", display: "flex", justifyContent: "space-around" }}>
        <Box sx={{ backgroundColor: "#EEE", boxShadow: "5px 5px 10px 0 #00000050", borderRadius: "1rem", height: "auto", margin: "1rem 2rem", padding: "2rem 1rem", width: "auto" }}>
          <Box sx={{ height: "auto", width: "15vw" }}>
            <Line data={dataLine1} options={optionsLine1}></Line>
          </Box>
        </Box>

        <Box sx={{ backgroundColor: "#EEE", boxShadow: "5px 5px 10px 0 #00000050", borderRadius: "1rem", height: "auto", margin: "1rem 2rem", padding: "2rem 1rem", width: "auto" }}>
          <Box sx={{ height: "auto", width: "15vw" }}>
            <Line data={dataLine2} options={optionsLine2}></Line>
          </Box>
        </Box>

        <Box sx={{ backgroundColor: "#EEE", boxShadow: "5px 5px 10px 0 #00000050", borderRadius: "1rem", height: "auto", margin: "1rem 2rem", padding: "2rem 1rem", width: "auto" }}>
          <Box sx={{ height: "auto", width: "15vw" }}>
            <Line data={dataLine3} options={optionsLine3}></Line>
          </Box>
        </Box>

        <Box sx={{ backgroundColor: "#EEE", boxShadow: "5px 5px 10px 0 #00000050", borderRadius: "1rem", height: "auto", margin: "1rem 2rem", padding: "2rem 1rem", width: "auto" }}>
          <Box sx={{ height: "auto", width: "15vw" }}>
            <Line data={dataLine4} options={optionsLine4}></Line>
          </Box>
        </Box>
      </Box>

      <Box sx={{ alignItems: "center", display: "flex", height: "auto", justifyContent: "space-around", width: "100%" }}>
        <Box sx={{ alignItems: "center", backgroundColor: "#EEE", borderRadius: "1rem", boxShadow: "5px 5px 10px 0 #00000050", display: "flex", height: "auto", justifyContent: "space-between", padding: "1rem", width: "auto" }}>
          <Box sx={{ marginRight: "2rem" }}>
            <Box sx={{ alignItems: "center", display: "flex" }}>
              <Box sx={{ backgroundColor: "#00579D", borderRadius: "100%", boxShadow: "5px 5px 10px 0 #00000050", height: "30px", margin: "0.5rem 1rem 0.5rem 0", width: "30px" }}></Box>

              <p>Concluídas</p>
            </Box>

            <Box sx={{ alignItems: "center", display: "flex" }}>
              <Box sx={{ backgroundColor: "#5B93BF", borderRadius: "100%", boxShadow: "5px 5px 10px 0 #00000050", height: "30px", margin: "0.5rem 1rem 0.5rem 0", width: "30px" }}></Box>

              <p>Em andamento</p>
            </Box>

            <Box sx={{ alignItems: "center", display: "flex" }}>
              <Box sx={{ backgroundColor: "#95B9D5", borderRadius: "100%", boxShadow: "5px 5px 10px 0 #00000050", height: "30px", margin: "0.5rem 1rem 0.5rem 0", width: "30px" }}></Box>

              <p>Aprovadas</p>
            </Box>

            <Box sx={{ alignItems: "center", display: "flex" }}>
              <Box sx={{ backgroundColor: "#FFF", borderRadius: "100%", boxShadow: "5px 5px 10px 0 #00000050", height: "30px", margin: "0.5rem 1rem 0.5rem 0", width: "30px" }}></Box>

              <p>Reprovadas</p>
            </Box>
          </Box>

          <Box sx={{ alignItems: "center", diplay: "flex", height: "10vw", justifyContent: "flex-end", width: "10vw" }}>
            <Doughnut data={dataDoughnut} plugins={[pluginsDoughnut]} />
          </Box>
        </Box>

        <Box sx={{ alignItems: "center", backgroundColor: "#EEE", borderRadius: "1rem", boxShadow: "5px 5px 10px 0 #00000050", display: "flex", height: "auto", justifyContent: "space-between", padding: "1rem", width: "auto" }}>
          <Box>
            <p>Atrasadas</p>
            <p>No prazo</p>
            <p>Adiantadas</p>
          </Box>

          <Box sx={{ alignItems: "center", diplay: "flex", height: "auto", justifyContent: "flex-end", width: "20vw" }}>
            <Bar data={dataHorizontalBar} options={optionsHorizontalBar} />
          </Box>
        </Box>
      </Box>
    </Container >
  );
};