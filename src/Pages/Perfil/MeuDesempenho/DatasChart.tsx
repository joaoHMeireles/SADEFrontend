import { drawPoint } from "chart.js/dist/types/helpers/helpers.canvas";

export const dataLine1 = {
    labels: ["", "", "", "", "", "", "", "", "", ""],
    datasets: [{
        data: [(10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed()],
        backgroundColor: "transparent",
        borderColor: "#595959",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.2
    }]
};

export const optionsLine1 = {
    plugins: {
        legend: false
    },

    scales: {
        x: {
            grid: {
                display: false
            }
        },

        y: {
            min: 0,
            max: 10,
            grid: {
                display: false
            }
        }
    }
};

export const dataLine2 = {
    labels: ["", "", "", "", "", "", "", "", "", ""],
    datasets: [{
        data: [(10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed()],
        backgroundColor: "transparent",
        borderColor: "#595959",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.2
    }]
};

export const optionsLine2 = {
    plugins: {
        legend: false
    },

    scales: {
        x: {
            grid: {
                display: false
            }
        },

        y: {
            min: 0,
            max: 10,
            grid: {
                display: false
            }
        }
    }
};

export const dataLine3 = {
    labels: ["", "", "", "", "", "", "", "", "", ""],
    datasets: [{
        data: [(10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed()],
        backgroundColor: "transparent",
        borderColor: "#595959",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.2
    }]
};

export const optionsLine3 = {
    plugins: {
        legend: false
    },

    scales: {
        x: {
            grid: {
                display: false
            }
        },

        y: {
            min: 0,
            max: 10,
            grid: {
                display: false
            }
        }
    }
};

export const dataLine4 = {
    labels: ["", "", "", "", "", "", "", "", "", ""],
    datasets: [{
        data: [(10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed()],
        backgroundColor: "transparent",
        borderColor: "#595959",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.2
    }]
};

export const optionsLine4 = {
    plugins: {
        legend: false
    },

    scales: {
        x: {
            grid: {
                display: false
            }
        },

        y: {
            min: 0,
            max: 10,
            grid: {
                display: false
            }
        }
    }
};

export const dataDoughnut = {
    datasets: [{
        data: [(10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed(), (10 * Math.random()).toFixed()],
        backgroundColor: ["#00579D", "#5B93BF", "#95B9D5", "#FFF"],
        borderWidth: 0
    }]
};

let total: number = 0;

for (let numero of dataDoughnut.datasets[0].data) {
    total += Number.parseInt(numero);
};

export const pluginsDoughnut = {
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

export const optionsHorizontalBar = {
    indexAxis: 'y' as const,
    elements: {
        bar: {
            borderWidth: 1,
        },
    },
    responsive: true,
    plugins: {
        legend: false
    },
    scales: {
        x: {
            grid: {
                display: false,
                drawBorder: false
            }
        },

        y: {
            grid: {
                display: false,
                drawPoint: true
            }
        }
    }
};

const labels = [""];

export const dataHorizontalBar = {
    labels,
    datasets: [
        {
            // label: 'Atrasadas',
            data: labels.map(() => (10 * Math.random()).toFixed()),
            backgroundColor: '#95B9D5',
        },
        {
            // label: 'No prazo',
            data: labels.map(() => (10 * Math.random()).toFixed()),
            backgroundColor: '#5B93BF',
        },
        {
            // label: 'Concluídas',
            data: labels.map(() => (10 * Math.random()).toFixed()),
            backgroundColor: '#00579D',
        }
    ],
};
