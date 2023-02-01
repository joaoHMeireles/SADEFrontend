import faker from 'faker';

export const dataLine1 = {
    labels: ["", "", "", "", "", "", "", "", "", ""],
    datasets: [{
        data: [1, 3, 2, 10, 8, 9, 4, 6, 5, 7],
        backgroundColor: "transparent",
        borderColor: "#595959",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
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
        data: [7, 5, 6, 4, 9, 8, 10, 2, 3, 1],
        backgroundColor: "transparent",
        borderColor: "#595959",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
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
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        backgroundColor: "transparent",
        borderColor: "#595959",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
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
        data: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        backgroundColor: "transparent",
        borderColor: "#595959",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
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

// const labels = ["", "", "", "", "", "", ""];

// export const dataHorizontalBar = {
//   labels: labels,
//   datasets: [{
//     data: [1, 4, 2],
//     backgroundColor: ["#00579D", "#5B93BF", "#95B9D5"],
//   }],
//   type: 'bar',
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   },
// };

// export const configHorizontalBar = {
//   type: 'bar',
//   data: dataHorizontalBar,
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   },
// };

export const optionsHorizontalBar = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const dataHorizontalBar = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  