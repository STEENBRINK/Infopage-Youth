var options = {
    leeftijden: {
        options: {
            title: {
                display: true,
                fontSize: 20
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 8,
                        stepSize: 3,
                        fontSize: 20
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Personen",
                        fontSize: 20
                    },
                    gridLines: {
                        display: true
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Leeftijd",
                        fontSize: 20
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        fontSize: 20
                    }
                }]
            },
            legend: {
                labels: {
                    fontSize: 20
                },
                display: false
            },
            tooltips: {
                display: true
            }
        }
    },
    ten: {
        options: {
            title: {
                display: true,
                fontSize: 20
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 12,
                        stepSize: 3,
                        fontSize: 20
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Personen",
                        fontSize: 20
                    },
                    gridLines: {
                        display: true
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Score",
                        fontSize: 20
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        fontSize: 20
                    }
                }]
            },
            legend: {
                labels: {
                    fontSize: 20
                },
                display: false
            },
            tooltips: {
                display: true
            },
            responsive: true
        }
    },
    five: {
        options: {
            title: {
                display: true,
                fontSize: 20
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 15,
                        stepSize: 5,
                        fontSize: 20
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Personen",
                        fontSize: 20
                    },
                    gridLines: {
                        display: true
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Score",
                        fontSize: 20
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        fontSize: 20
                    }
                }]
            },
            legend: {
                labels: {
                    fontSize: 20
                },
                display: false
            },
            tooltips: {
                display: true
            }
        }

    },
    round: {
        options: {
            title: {
                display: true,
                fontSize: 20
            },
            legend: {
                labels: {
                    fontSize: 20
                },
                display: true
            },
            tooltips: {
                titleFontSize: 20,
                bodyFontSize: 20
            },
            aspectRatio: 1
        }
    },
    specials: {
        options: {
            title: {
                display: true,
                fontSize: 20
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 12,
                        stepSize: 3,
                        fontSize: 20
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Personen",
                        fontSize: 20
                    },
                    gridLines: {
                        display: true
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Score",
                        fontSize: 20
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        fontSize: 20
                    }
                }]
            },
            legend: {
                labels: {
                    fontSize: 20
                },
                display: false
            },
            tooltips: {
                display: true
            },
            responsive: true,
            aspectRatio: 1
        }
    },
    bar: "bar",
    horizontalBar: "horizontalBar",
    doughnut: "doughnut"
}