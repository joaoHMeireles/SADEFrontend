export const dataLine1 = {
    labels: ["", "", "", "", "", "", "", "", "", ""],
    datasets: [{
        data: [4, 9, 2, 3, 6, 6, 1, 8, 4, 4],
        backgroundColor: "transparent",
        borderColor: "#595959",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.2
    }]
};

export const optionsLine1 = {
    plugins: {
        legend: {
            display: false
        }
    },

    scales: {
        x: {
            display: false,
            grid: {
                display: false
            }
        },

        y: {
            display: false,
            grid: {
                display: false
            }
        }
    }
};

export const dataLine2 = {
    labels: ["", "", "", "", "", "", "", "", "", ""],
    datasets: [{
        data: [8, 1, 9, 1, 9, 3, 10, 2, 5, 3],
        backgroundColor: "transparent",
        borderColor: "#595959",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.2
    }]
};

export const optionsLine2 = {
    plugins: {
        legend: {
            display: false
        }
    },

    scales: {
        x: {
            display: false,
            grid: {
                display: false
            }
        },

        y: {
            display: false,
            grid: {
                display: false
            }
        }
    }
};

export const dataLine3 = {
    labels: ["", "", "", "", "", "", "", "", "", ""],
    datasets: [{
        data: [9, 4, 7, 1, 10, 3, 8, 8, 9, 2],
        backgroundColor: "transparent",
        borderColor: "#595959",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.2
    }]
};

export const optionsLine3 = {
    plugins: {
        legend: {
            display: false
        }
    },

    scales: {
        x: {
            display: false,
            grid: {
                display: false
            }
        },

        y: {
            display: false,
            grid: {
                display: false
            }
        }
    }
};

export const dataLine4 = {
    labels: ["", "", "", "", "", "", "", "", "", ""],
    datasets: [{
        data: [9, 5, 4, 2, 5, 9, 5, 8, 5, 1],
        backgroundColor: "transparent",
        borderColor: "#595959",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.2
    }]
};

export const optionsLine4 = {
    plugins: {
        legend: {
            display: false
        }
    },

    scales: {
        x: {
            display: false,
            grid: {
                display: false
            }
        },

        y: {
            display: false,
            grid: {
                display: false
            }
        }
    }
};

export const dataDoughnut = {
    datasets: [{
        data: [1, 2, 4, 1],
        backgroundColor: ["#FFF", "#95B9D5", "#5B93BF", "#00579D"],
        borderWidth: 0
    }]
};

let total: number = 0;

// for (let numero of dataDoughnut.datasets[0].data) {
//     total += Number.parseInt(numero);
// };

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

const labels = [""];

export const dataHorizontalBar = {
    labels,
    datasets: [
        {
            // barThickness: 50,
            barPercentage: 0.5,
            data: labels.map(() => 1),
            backgroundColor: '#95B9D5',
        },
        {
            // barThickness: 50,
            barPercentage: 0.5,
            data: labels.map(() => 4),
            backgroundColor: '#5B93BF',
        },
        {
            // barThickness: 50,
            barPercentage: 0.5,
            data: labels.map(() => 3),
            backgroundColor: '#00579D',
        }
    ]
};

export const optionsHorizontalBar = {
    indexAxis: 'y' as const,
    elements: {
        bar: {
            borderWidth: 0,
            borderRadius: 20
        },
    },
    responsive: true,
    plugins: {
        legend: false
    },
    scales: {
        x: {
            display: false,
            grid: {
                display: false,
            }
        },

        y: {
            display: false,
            grid: {
                display: false,
            }
        }
    }
};