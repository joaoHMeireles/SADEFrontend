export const dataLine1 = {
    labels: ["", "", "", "", "", "", "", "", "", ""],
    datasets: [{
        data: [1, 9, 2, 8, 3, 5, 8, 6, 5, 6],
        backgroundColor: "transparent",
        borderColor: "#595959",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5
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
        data: [6, 5, 6, 8, 5, 3, 8, 2, 9, 1],
        backgroundColor: "transparent",
        borderColor: "#595959",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5
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
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        backgroundColor: "transparent",
        borderColor: "#595959",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5
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
        data: [1, 2, 9, 8, 3, 4, 7, 6, 5, 6],
        backgroundColor: "transparent",
        borderColor: "#595959",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5
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
        label: "Demandas",
        data: [1, 3, 2, 1],
        backgroundColor: ["#00579D", "#5B93BF", "#95B9D5", "#FFF"],
        borderWidth: 0
    }]
};

let total = 0;

for (let numero of dataDoughnut.datasets[0].data) {
    total += numero;
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