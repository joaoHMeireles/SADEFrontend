import './MeuDesempenho.scss';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, PluginChartOptions } from 'chart.js';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data1 = {
  datasets: [{
    label: "Demandas",
    data: [1, 3, 2, 1],
    backgroundColor: ["#00579D", "#5B93BF", "#95B9D5", "#FFF"],
    borderWidth: 0
  }]
};

const options1: _DeepPartialObject<PluginChartOptions<"doughnut">> = {
};

let total = 0;

for (let numero of data1.datasets[0].data) {
  total += numero;
};

const textCenter = {
  id: "textCenter",
  beforeDatasetDraw(chart: any, args: any, pluginOptions: any) {
    const { ctx, data } = chart;

    ctx.save();
    ctx.font = "12px Helvetica"
    ctx.fillStyle = "#595959"
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Total", chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y - 10);
    ctx.font = "16px Helvetica";
    ctx.fillText(`${total}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y + 10);
  }
};

export default function MeuDesempenho() {
  return (
    <Container sx={{ alignItems: "center", display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", width: "100%" }}>
      <Box sx={{ alignItems: "center", display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
        <Box sx={{ backgroundColor: "#EEE", boxShadow: "5px 5px 10px 0 #00000050", borderRadius: "1rem", height: "20vh", width: "10vw", margin: "1rem 4rem" }}></Box>
        
        <Box sx={{ backgroundColor: "#EEE", boxShadow: "5px 5px 10px 0 #00000050", borderRadius: "1rem", height: "20vh", width: "10vw", margin: "1rem 4rem" }}></Box>
        
        <Box sx={{ backgroundColor: "#EEE", boxShadow: "5px 5px 10px 0 #00000050", borderRadius: "1rem", height: "20vh", width: "10vw", margin: "1rem 4rem" }}></Box>
       
        <Box sx={{ backgroundColor: "#EEE", boxShadow: "5px 5px 10px 0 #00000050", borderRadius: "1rem", height: "20vh", width: "10vw", margin: "1rem 4rem" }}></Box>
      </Box>

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

        <Box sx={{ alignItems: "center", diplay: "flex", height: "200px", justifyContent: "center", width: "200px" }}>
          <Doughnut data={data1} options={options1} plugins={[textCenter]} />
        </Box>
      </Box>
    </Container >
  );
};