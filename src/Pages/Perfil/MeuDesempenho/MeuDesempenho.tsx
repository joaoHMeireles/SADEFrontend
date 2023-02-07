import './MeuDesempenho.scss';
import { dataLine1, optionsLine1, dataLine2, optionsLine2, dataLine3, optionsLine3, dataLine4, optionsLine4, dataDoughnut, pluginsDoughnut, dataHorizontalBar, optionsHorizontalBar } from "./DatasChart";
import { LineChart, BoxLine, ContainerLines, DoughnutChart, ColorStatus, StatusDoughnut, BoxStatusDoughnut, BoxDoughnut, BarChart, BoxStatusBar, BoxBar, ContainerCharts, Page } from './MeuDesempenho.styles';

import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, BarElement, Title } from 'chart.js';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, BarElement, Title);

export default function MeuDesempenho() {
  return (
    <Page>
      <ContainerLines>
        <BoxLine>
          <p style={{ fontSize: "20px", fontWeight: "700" }}>3</p>

          <p>No último mês</p>

          <LineChart>
            <Line data={dataLine1} options={optionsLine1}></Line>
          </LineChart>
        </BoxLine>

        <BoxLine>
          <p style={{ fontSize: "20px", fontWeight: "700" }}>9</p>

          <p>No último mês</p>

          <LineChart>
            <Line data={dataLine2} options={optionsLine2}></Line>
          </LineChart>
        </BoxLine>

        <BoxLine>
          <p style={{ fontSize: "20px", fontWeight: "700" }}>3</p>

          <p>No último mês</p>

          <LineChart>
            <Line data={dataLine3} options={optionsLine3}></Line>
          </LineChart>
        </BoxLine>

        <BoxLine>
          <p style={{ fontSize: "20px", fontWeight: "700" }}>6</p>

          <p>No último mês</p>

          <LineChart>
            <Line data={dataLine4} options={optionsLine4}></Line>
          </LineChart>
        </BoxLine>
      </ContainerLines>

      <ContainerCharts>
        <BoxDoughnut>
          <BoxStatusDoughnut>
            <StatusDoughnut>
              <ColorStatus sx={{ backgroundColor: "#00579D" }} />

              <p>Concluídas</p>
            </StatusDoughnut>

            <StatusDoughnut>
              <ColorStatus sx={{ backgroundColor: "#5B93BF" }} />

              <p>Em andamento</p>
            </StatusDoughnut>

            <StatusDoughnut>
              <ColorStatus sx={{ backgroundColor: "#95B9D5" }} />

              <p>Aprovadas</p>
            </StatusDoughnut>

            <StatusDoughnut>
              <ColorStatus sx={{ backgroundColor: "#FFF" }} />

              <p>Reprovadas</p>
            </StatusDoughnut>
          </BoxStatusDoughnut>

          <DoughnutChart>
            <Doughnut data={dataDoughnut} plugins={[pluginsDoughnut]} />
          </DoughnutChart>
        </BoxDoughnut>

        <BoxBar>
          <BoxStatusBar>
            <p>Atrasadas</p>
            <p>No prazo</p>
            <p>Adiantadas</p>
          </BoxStatusBar>

          <BarChart>
            <Bar data={dataHorizontalBar} options={optionsHorizontalBar} />
          </BarChart>
        </BoxBar>
      </ContainerCharts>
    </Page >
  );
};