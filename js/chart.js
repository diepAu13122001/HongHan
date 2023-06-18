// import ApexCharts from 'apexcharts';
var options1 = {
    chart: {
        height: 350,
        type: "line",
        stacked: false
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#FF1654", "#247BA0"],
    series: [
        {
            name: "Series A",
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        },
        {
            name: "Series B",
            data: [20, 29, 37, 36, 44, 45, 50, 58]
        }
    ],
    stroke: {
        width: [4, 4],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            columnWidth: "20%"
        }
    },
    xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
    },
    yaxis: [
        {
            axisTicks: {
                show: true
            },
            axisBorder: {
                show: true,
                color: "#FF1654"
            },
            labels: {
                style: {
                    colors: "#FF1654"
                }
            },
            title: {
                text: "Series A",
                style: {
                    color: "#FF1654"
                }
            }
        },
        {
            opposite: true,
            axisTicks: {
                show: true
            },
            axisBorder: {
                show: true,
                color: "#247BA0"
            },
            labels: {
                style: {
                    colors: "#247BA0"
                }
            },
            title: {
                text: "Series B",
                style: {
                    color: "#247BA0"
                }
            }
        }
    ],
    tooltip: {
        shared: false,
        intersect: true,
        x: {
            show: false
        }
    },
    legend: {
        horizontalAlign: "left",
        offsetX: 40
    }
};

var options2 = {
    series: [
        {
            name: 'Outcome',
            data: [
                {
                    x: '2011',
                    y: 12,
                    goals: [
                        {
                            name: 'Income',
                            value: 52,
                            strokeWidth: 10,
                            strokeHeight: 0,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2012',
                    y: 44,
                    goals: [
                        {
                            name: 'Income',
                            value: 52,
                            strokeWidth: 10,
                            strokeHeight: 0,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2013',
                    y: 54,
                    goals: [
                        {
                            name: 'Income',
                            value: 52,
                            strokeWidth: 10,
                            strokeHeight: 0,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2014',
                    y: 66,
                    goals: [
                        {
                            name: 'Income',
                            value: 52,
                            strokeWidth: 10,
                            strokeHeight: 0,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2015',
                    y: 81,
                    goals: [
                        {
                            name: 'Income',
                            value: 100,
                            strokeWidth: 5,
                            strokeHeight: 10,
                            strokeColor: '#775DD0'
                        }
                    ]
                },
                {
                    x: '2016',
                    y: 67,
                    goals: [
                        {
                            name: 'Income',
                            value: 70,
                            strokeWidth: 5,
                            strokeHeight: 10,
                            strokeColor: '#775DD0'
                        }
                    ]
                }
            ]
        }
    ],
    chart: {
        height: 350,
        type: 'bar'
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    colors: ['#00E396'],
    dataLabels: {
        formatter: function (val, opt) {
            const goals =
                opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                    .goals

            if (goals && goals.length) {
                return `${val} / ${goals[0].value}`
            }
            return val
        }
    },
    legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
            fillColors: ['#00E396', '#775DD0']
        }
    }
};

var options3 = {
    series: [44, 55, 13, 43, 22],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
// var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);

chart1.render();
// chart2.render();
chart3.render();