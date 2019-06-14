var size = 16

var options = {
    leeftijden: {
        options: {
            title: {
                display: true,
                fontSize: size
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 12,
                        fontSize: size
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Personen",
                        fontSize: size
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Leeftijd",
                        fontSize: size
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        fontSize: size
                    }
                }]
            },
            legend: {
                labels: {
                    fontSize: size
                }
            }
        }
    },
    ten: {
        options: {
            title: {
                display: true,
                fontSize: size
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 12,
                        fontSize: size
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Personen",
                        fontSize: size
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Score",
                        fontSize: size
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        fontSize: size
                    }
                }]
            },
            legend: {
                labels: {
                    fontSize: size
                }
            }
        }
    },
    five: {
        options: {
            title: {
                display: true,
                fontSize: size
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 15,
                        stepSize: 5,
                        fontSize: size
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Personen",
                        fontSize: size
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Score",
                        fontSize: size
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        fontSize: size
                    }
                }]
            },
            legend: {
                labels: {
                    fontSize: size
                }
            }
        }

    },
    round: {
        options: {
            title: {
                display: true,
                fontSize: size
            },
            legend: {
                labels: {
                    fontSize: size
                }
            },
            tooltips: {
                titleFontSize: size,
                bodyFontSize: size
            },
            aspectRatio: 1
        }
    },
    bar: "bar",
    horizontalBar: "horizontalBar",
    doughnut: "doughnut"
}