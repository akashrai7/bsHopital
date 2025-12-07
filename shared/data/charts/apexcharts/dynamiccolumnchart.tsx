
const colors = ['#8b7eff', '#e354d4', '#ff8e6f', '#0ca3e7', '#fe5454', '#0cd7b1', '#7b76fe'];

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
const arrayData = [{
    y: 400,
    quarters: [{
        x: "Q1",
        y: 120
    }, {
        x: "Q2",
        y: 90
    }, {
        x: "Q3",
        y: 100
    }, {
        x: "Q4",
        y: 90
    }]
}, {
    y: 430,
    quarters: [{
        x: "Q1",
        y: 120
    }, {
        x: "Q2",
        y: 110
    }, {
        x: "Q3",
        y: 90
    }, {
        x: "Q4",
        y: 110
    }]
}, {
    y: 448,
    quarters: [{
        x: "Q1",
        y: 70
    }, {
        x: "Q2",
        y: 100
    }, {
        x: "Q3",
        y: 140
    }, {
        x: "Q4",
        y: 138
    }]
}, {
    y: 470,
    quarters: [{
        x: "Q1",
        y: 150
    }, {
        x: "Q2",
        y: 60
    }, {
        x: "Q3",
        y: 190
    }, {
        x: "Q4",
        y: 70
    }]
}, {
    y: 540,
    quarters: [{
        x: "Q1",
        y: 120
    }, {
        x: "Q2",
        y: 120
    }, {
        x: "Q3",
        y: 130
    }, {
        x: "Q4",
        y: 170
    }]
}, {
    y: 580,
    quarters: [{
        x: "Q1",
        y: 170
    }, {
        x: "Q2",
        y: 130
    }, {
        x: "Q3",
        y: 120
    }, {
        x: "Q4",
        y: 160
    }]
}];
function makeData() {
    const dataSet = shuffleArray(arrayData);
    const dataYearSeries = [{
        x: "2011",
        y: dataSet[0].y,
        color: colors[0],
        quarters: dataSet[0].quarters
    }, {
        x: "2012",
        y: dataSet[1].y,
        color: colors[1],
        quarters: dataSet[1].quarters
    }, {
        x: "2013",
        y: dataSet[2].y,
        color: colors[2],
        quarters: dataSet[2].quarters
    }, {
        x: "2014",
        y: dataSet[3].y,
        color: colors[3],
        quarters: dataSet[3].quarters
    }, {
        x: "2015",
        y: dataSet[4].y,
        color: colors[4],
        quarters: dataSet[4].quarters
    }, {
        x: "2016",
        y: dataSet[5].y,
        color: colors[5],
        quarters: dataSet[5].quarters
    }];

    return dataYearSeries;
}
function updateQuarterChart(sourceChart: { w: { globals: { selectedDataPoints: any[]; }; config: { series: any[]; }; }; }, destChartIDToUpdate: string) {
    let series: any[] = [];
    const seriesIndex = 0;
    const colors: any[] = [];
    if (sourceChart.w.globals.selectedDataPoints[0]) {
        const selectedPoints = sourceChart.w.globals.selectedDataPoints;
        for (let i = 0; i < selectedPoints[seriesIndex].length; i++) {
            const selectedIndex = selectedPoints[seriesIndex][i];
            const yearSeries = sourceChart.w.config.series[seriesIndex];
            series.push({
                name: yearSeries.data[selectedIndex].x,
                data: yearSeries.data[selectedIndex].quarters
            });
            colors.push(yearSeries.data[selectedIndex].color);
        }

        if (series.length === 0) series = [{
            data: []
        }];
        return ApexCharts.exec(destChartIDToUpdate, "updateOptions", {
            series: series,
            colors: colors,
            fill: {
                colors: colors
            }
        });
    }
}
const chart = null;

export const Columndynamixseries = [{
    data: makeData()
}]

const slideArrow = (selector: any) => document.querySelector(selector)

export const Columndynamixoptions = {
    chart: {
        id: "barYear",
        height: 400,
        width: "100%",
        type: "bar",
        events: {
            dataPointSelection: function (e: any, chart: { w: { globals: { selectedDataPoints: any[]; }; config: { series: any[]; }; }; }, opts: { selectedDataPoints: (string | any[])[]; }) {
                const quarterChartEl: any = slideArrow("#chart-quarter");
                const yearChartEl: any = slideArrow("#chart-year");

                if (opts.selectedDataPoints[0].length === 1) {
                    if (quarterChartEl.classList.contains("active")) {
                        updateQuarterChart(chart, "barQuarter");
                    } else {
                        yearChartEl.classList.add("chart-quarter-activated");
                        quarterChartEl.classList.add("active");
                        updateQuarterChart(chart, "barQuarter");
                    }
                } else {
                    updateQuarterChart(chart, "barQuarter");
                }

                if (opts.selectedDataPoints[0].length === 0) {
                    yearChartEl.classList.remove("chart-quarter-activated");
                    quarterChartEl.classList.remove("active");
                }

            },
            updated: function (chart: { w: { globals: { selectedDataPoints: any[]; }; config: { series: any[]; }; }; }) {
                updateQuarterChart(chart, "barQuarter");
            }
        }
    },
    plotOptions: {
        bar: {
            distributed: true,
            horizontal: true,
            barHeight: "75%",
            dataLabels: {
                position: "bottom"
            }
        }
    },
    dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
            colors: ["#fff"]
        },
        formatter: function (_val: any, opt: { w: { globals: { labels: { [x: string]: any; }; }; }; dataPointIndex: string | number; }) {
            return opt.w.globals.labels[opt.dataPointIndex];
        },
        offsetX: 0,
        dropShadow: {
            enabled: true
        }
    },

    colors: colors,

    states: {
        normal: {
            filter: {
                type: "desaturate"
            }
        },
        active: {
            allowMultipleDataPointsSelection: true,
            filter: {
                type: "darken",
                value: 1
            }
        }
    },
    tooltip: {
        x: {
            show: false
        },
    },
    title: {
        text: "Yearly Results",
        offsetX: 15
    },
    subtitle: {
        text: "(Click on bar to see details)",
        offsetX: 15
    },
    yaxis: {
        labels: {
            show: false
        }
    }
}

export const seriesQuarter = [{
    data: []
}]
export const optionsQuarter: any = {
    chart: {
        id: "barQuarter",
        height: 400,
        width: "100%",
        type: "bar",
        stacked: true,
        events: {
            mounted: (chart: { windowResizeHandler: () => void; }) => {
                chart.windowResizeHandler();
            }
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "50%",
            horizontal: false
        }
    },
    legend: {
        show: false
    },
    grid: {
        yaxis: {
            lines: {
                show: false,
            }
        },
        xaxis: {
            lines: {
                show: true,
            }
        }
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    title: {
        text: "Quarterly Results",
        offsetX: 10
    },
    tooltip: {
        x: {
            formatter: function (_val: any, opts: { w: { globals: { seriesNames: { [x: string]: any; }; }; }; seriesIndex: string | number; }) {
                return opts.w.globals.seriesNames[opts.seriesIndex];
            }
        },
    }
}