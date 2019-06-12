var configs = {
    leeftijden: {
        type: "bar",
        data: {
            labels: ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
            datasets: [{
                label: "Personen per Leeftijd",
                data: [2, 3, 6, 3, 0, 3, 2, 4, 3, 0, 2],
                backgroundColor: [
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)"
                ],
                borderColor: [
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)"
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 8
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Personen"
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Leeftijd"
                    }
                }]
            }
        }
    },
    bbdg: {
        type: "bar",
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [{
                label: "Personen per Score",
                data: [0, 0, 0, 1, 2, 5, 8, 11, 1, 0],
                backgroundColor: [
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)"
                ],
                borderColor: [
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)"
                ],
                borderWidth: 1
            }]
        },
        options: {
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
                    }
                }]
            }
        }
    },
    omp: {
        type: "bar",
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [{
                label: "Personen per Score",
                data: [0, 1, 0, 1, 2, 3, 7, 11, 3, 0],
                backgroundColor: [
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)"
                ],
                borderColor: [
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)"
                ],
                borderWidth: 1
            }]
        },
        options: {
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
                    }
                }]
            }
        }
    },
    vmg: {
        type: "bar",
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [{
                label: "Personen per Score",
                data: [0, 1, 1, 0, 4, 3, 9, 7, 3, 0],
                backgroundColor: [
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)"
                ],
                borderColor: [
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)"
                ],
                borderWidth: 1
            }]
        },
        options: {
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
                    }
                }]
            }
        }
    },
    zdb: {
        type: "bar",
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [{
                label: "Personen per Score",
                data: [0, 1, 0, 1, 2, 3, 7, 11, 3, 0],
                backgroundColor: [
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)"
                ],
                borderColor: [
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)"
                ],
                borderWidth: 1
            }]
        },
        options: {
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
                    }
                }]
            }
        }
    },
    kdb: {
        type: "bar",
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [{
                label: "Personen per Score",
                data: [0, 0, 0, 3, 0, 3, 9, 9, 3, 1],
                backgroundColor: [
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)"
                ],
                borderColor: [
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)"
                ],
                borderWidth: 1
            }]
        },
        options: {
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
                    }
                }]
            }
        }
    },
    bbdg: {
        type: "bar",
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [{
                label: "Personen per Score",
                data: [0, 0, 0, 1, 2, 5, 8, 11, 1, 0],
                backgroundColor: [
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)"
                ],
                borderColor: [
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)"
                ],
                borderWidth: 1
            }]
        },
        options: {
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
                    }
                }]
            }
        }
    },
    bbdg: {
        type: "bar",
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [{
                label: "Personen per Score",
                data: [0, 0, 0, 1, 2, 5, 8, 11, 1, 0],
                backgroundColor: [
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(54, 162, 235, 0.5)"
                ],
                borderColor: [
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(54, 162, 235, 1)"
                ],
                borderWidth: 1
            }]
        },
        options: {
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
                    }
                }]
            }
        }
    }
}