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
    borderColor: ["#EEE"],
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
    <Container sx={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ backgroundColor: "#EEE", borderRadius: "1rem", boxShadow: "5px 5px 10px 0 #00000050", height: "auto", padding: "1rem", width: "auto" }}>
        <Box sx={{ height: "auto", width: "20vw" }}>
          <Doughnut data={data1} options={options1} plugins={[textCenter]} />
        </Box>
      </Box>
    </Container>
  );
};