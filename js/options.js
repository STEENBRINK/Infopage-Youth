var options = {
    leeftijden: {
        options: {
            title: {
                display: true
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 12
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Personen"
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Score"
                    },
                    gridLines: {
                        display: false
                    }
                }]
            }
        }
    },
    ten: {
        options: {
            title: {
                display: true
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 12
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Personen"
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Score"
                    },
                    gridLines: {
                        display: false
                    }
                }]
            }
        }
    },
    five: {
        options: {
            title: {
                display: true
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 15,
                        stepSize: 5
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Personen"
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Score"
                    },
                    gridLines: {
                        display: false
                    }
                }]
            }
        }

    },
    round: {
        options: {
            title: {
                display: true,
            },
            aspectRatio: 1
        }
    },
    bar: "bar",
    horizontalBar: "horizontalBar",
    doughnut: "doughnut"
}