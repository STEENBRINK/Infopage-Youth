var dataList = {
    leeftijden: {
        name: "leeftijden",
        title: "Leeftijden",
        five: false,
        isBar: true,
        last: true,
        subject: "Betrokkenheid en geloofsopbouw in de gemeente",
        data: {
            labels: ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
            datasets: [{
                label: "Personen per leeftijd",
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
        }
    },
    bbdg: {
        name: "bbdg",
        title: "Ik voel me betrokken bij de gemeente",
        five: false,
        isBar: true,
        last: false,
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
        }
    },
    omp: {
        name: "omp",
        title: "Ik voel me op mijn plaats als ik zondag in de kerk ben",
        five: false,
        isBar: true,
        last: false,
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [{
                label: "Personen",
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
        }
    },
    vmg: {
        name: "vmg",
        title: "Ik voel me gezien als ik zondag in de kerk ben",
        five: false,
        isBar: true,
        last: false,
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
        }
    },
    zdb: {
        name: "zdb",
        title: "Als ik op zondag in de kerk ben, draagt dat bij aan mijn geloof",
        five: false,
        isBar: true,
        last: false,
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
        }
    },
    kdb: {
        name: "kdb",
        title: "De kerk draagt buiten de diensten om bij aan mijn geloof",
        five: false,
        isBar: true,
        last: true,
        subject: "Communicatie",
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
        }
    },
    gids: {
        name: "gids",
        title: "Ik lees de 'Gids'",
        isBar: false,
        last: false,
        data: {
            labels: ["Nee", "Ja", "Soms", "Alleen Losse stukjes"],
            datasets: [{
                label: "Ik lees de gids (personen)",
                backgroundColor: [
                    "rgba(255, 0, 0, 0.5)",
                    "rgba(0, 255, 0, 0.5)",
                    "rgba(255, 125, 0, 0.5)",
                    "rgba(0, 0, 255, 0.5)",
                ],
                borderColor: [
                    "rgba(255, 0, 0, 1)",
                    "rgba(0, 255, 0, 1)",
                    "rgba(255, 125, 0, 1)",
                    "rgba(0, 0, 255, 1)",
                ],
                borderWidth: 1,
                data: [11,6,5,6]
            }]
        }
    },
    ioeg: {
        name: "ioeg",
        title: "Ik ontvang een eigen 'Gids' (personen)",
        isBar: false,
        last: false,
        data: {
            labels: ["Nee", "Ja (Op papier)", "Ja (Digitaal)"],
            datasets: [{
                label: "Ik ontvang een eigen Gids (personen)",
                backgroundColor: [
                    "rgba(255, 0, 0, 0.5)",
                    "rgba(0, 255, 0, 0.5)",
                    "rgba(255, 125, 0, 0.5)",
                    "rgba(0, 0, 255, 0.5)",
                ],
                borderColor: [
                    "rgba(255, 0, 0, 1)",
                    "rgba(0, 255, 0, 1)",
                    "rgba(255, 125, 0, 1)",
                    "rgba(0, 0, 255, 1)",
                ],
                borderWidth: 1,
                data: [23,4,1]
            }]
        }
    },
    gin: {
        name: "gin",
        isBar: false,
        last: true,
        subject: "Regels en Gebruiken",
        title: "De 'Gids' is nuttig",
        data: {
            labels: ["Ja", "Nee", "Niet voor mij", "GA"],
            datasets: [{
                label: "De 'Gids' is nuttig",
                backgroundColor: [
                    "rgba(0, 255, 0, 0.5)",
                    "rgba(255, 0, 0, 0.5)",
                    "rgba(255, 125, 0, 0.5)",
                    "rgba(125, 125, 125, 0.5)",
                ],
                borderColor: [
                    "rgba(0, 255, 0, 1)",
                    "rgba(255, 0, 0, 1)",
                    "rgba(255, 125, 0, 1)",
                    "rgba(125, 125, 125, 1)",
                ],
                borderWidth: 1,
                data: [11,2,13,2]
            }]
        }
    },
    kow: {
        name: "kow",
        title: "Onze kerk is ouderwets",
        five: false,
        isBar: true,
        last: false,
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [{
                label: "Personen per Score",
                data: [3, 1, 9, 5, 5, 1, 2, 2, 0, 0],
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
        }
    },
    bmrg: {
        name: "bmrg",
        title: "Ik houd me bezig met de regels en gebruiken in de kerk",
        five: false,
        isBar: true,
        last: false,
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [{
                label: "Personen per Score",
                data: [0, 0, 2, 3, 5, 7, 4, 6, 1, 0],
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
        }
    },
    emrg: {
        name: "emrg",
        title: "Ik ben het eens met de regels en gebruiken in de kerk",
        five: false,
        isBar: true,
        last: false,
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "GA"],
            datasets: [{
                label: "Personen per Score",
                data: [0, 0, 0, 2, 4, 6, 7, 5, 3, 0, 1],
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
                    "rgba(125, 125, 125, 0.5)"
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
                    "rgba(125, 125, 125, 1)"
                ],
                borderWidth: 1
            }]
        }
    },
    kaa: {
        name: "kaa",
        title: "Ik begrijp waarom we in de kerk geen kinderen aan het avondmaal hebben",
        five: false,
        isBar: true,
        last: false,
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [{
                label: "Personen per Score",
                data: [1, 0, 2, 0, 4, 0, 5, 7, 5, 4],
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
        }
    },
    kdd: {
        name: "kdd",
        title: "Ik begrijp waarom we in onze kerk aan kinderdoop doen",
        five: false,
        isBar: true,
        last: false,
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "GA"],
            datasets: [{
                label: "Personen per Score",
                data: [1, 0, 0, 0, 2, 0, 4, 6, 8, 6, 1],
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
                    "rgba(125, 125, 125, 0.5)"
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
                    "rgba(125, 125, 125, 1)"
                ],
                borderWidth: 1
            }]
        }
    },
    gjd: {
        name: "gjd",
        isBar: false,
        last: false,
        title: "Er zijn genoeg jeugddiensten in onze kerk",
        data: {
            labels: ["Ja", "Nee", "Maakt me niet uit"],
            datasets: [{
                label: "Er zijn genoeg jeugddiensten in onze kerk",
                backgroundColor: [
                    "rgba(0, 255, 0, 0.5)",
                    "rgba(255, 0, 0, 0.5)",
                    "rgba(255, 125, 0, 0.5)",
                    "rgba(125, 125, 125, 0.5)",
                ],
                borderColor: [
                    "rgba(0, 255, 0, 1)",
                    "rgba(255, 0, 0, 1)",
                    "rgba(255, 125, 0, 1)",
                    "rgba(125, 125, 125, 1)",
                ],
                borderWidth: 1,
                data: [3,21,3]
            }]
        }
    },
    wwtk: {
        name: "wwtk",
        isBar: false,
        last: true,
        subject: "Kerkenraad",
        title: "Als ik het niet eens ben met regels en/of gebruiken in onze kerk, weet ik waar ik met mijn mening terecht kan",
        data: {
            labels: ["Ja", "Ja, maar dat ga ik nooit doen", "Nee, maar dat maakt ook niet uit", "Nee, maar dat zou ik wel willen weten"],
            datasets: [{
                label: "Als ik het niet eens ben met regels en/of gebruiken in onze kerk, weet ik waar ik met mijn mening terecht kan",
                backgroundColor: [
                    "rgba(0, 255, 0, 0.5)",
                    "rgba(255, 125, 0, 0.5)",
                    "rgba(255, 0, 0, 0.5)",
                    "rgba(255, 255, 0, 0.5)",
                ],
                borderColor: [
                    "rgba(0, 255, 0, 1)",
                    "rgba(255, 125, 0, 1)",
                    "rgba(255, 0, 0, 1)",
                    "rgba(255, 255, 0, 1)",
                ],
                borderWidth: 1,
                data: [10,4,8,6]
            }]
        }
    },
    wwoi: {
        name: "wwoi",
        isBar: false,
        last: false,
        title: "Ik weet wie mijn ouderling is",
        data: {
            labels: ["Ja", "Nee"],
            datasets: [{
                label: "Ik weet wie mijn ouderling is",
                backgroundColor: [
                    "rgba(0, 255, 0, 0.5)",
                    "rgba(255, 0, 0, 0.5)",
                ],
                borderColor: [
                    "rgba(0, 255, 0, 1)",
                    "rgba(255, 0, 0, 1)",
                ],
                borderWidth: 1,
                data: [17, 11]
            }]
        }
    },
    wwod: {
        name: "wwod",
        title: "Ik weet wat een ouderling doet",
        five: false,
        isBar: true,
        last: false,
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [{
                label: "Personen per Score",
                data: [2, 0, 0, 3, 4, 5, 8, 5, 0, 1],
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
        }
    },
    kbm: {
        name: "kbm",
        title: "De kerkenraad betrekt mij bij beslissingen over het jeugdwerk",
        five: true,
        isBar: true,
        last: false,
        data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [{
                label: "Personen per Score",
                data: [13, 12, 2, 1, 0],
                backgroundColor: [
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
                    "rgba(54, 162, 235, 1)"
                ],
                borderWidth: 1
            }]
        }
    },
    kzmb: {
        name: "kzmb",
        title: "De kerkenraad zou de jeugd meer moeten betrekken bij het maken van beslissingen over het jeugdwerk",
        five: true,
        isBar: true,
        last: false,
        data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [{
                label: "Personen per Score",
                data: [0, 1, 5, 8, 14],
                backgroundColor: [
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
                    "rgba(54, 162, 235, 1)"
                ],
                borderWidth: 1
            }]
        }
    },
    zmb: {
        name: "zmb",
        title: "Ik zou zelf meer betrokken willen zijn bij de beslissingen van de kerkenraad",
        five: true,
        isBar: true,
        last: false,
        data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [{
                label: "Personen per Score",
                data: [3, 6, 3, 8, 8],
                backgroundColor: [
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
                    "rgba(54, 162, 235, 1)"
                ],
                borderWidth: 1
            }]
        }
    },
    kmu: {
        name: "kmu",
        isBar: false,
        last: false,
        title: "De kerkenraad zou meer mouten uitleggen over hun beslissingen",
        data: {
            labels: ["Ja", "Nee", "Maakt me niet uit"],
            datasets: [{
                label: "De kerkenraad zou meer moeten uitleggen over hun beslissingen",
                backgroundColor: [
                    "rgba(0, 255, 0, 0.5)",
                    "rgba(255, 0, 0, 0.5)",
                    "rgba(255, 125, 0, 0.5)",
                    "rgba(125, 125, 125, 0.5)",
                ],
                borderColor: [
                    "rgba(0, 255, 0, 1)",
                    "rgba(255, 0, 0, 1)",
                    "rgba(255, 125, 0, 1)",
                    "rgba(125, 125, 125, 1)",
                ],
                borderWidth: 1,
                data: [20,3,5]
            }]
        }
    },
    snk: {
        name: "snk",
        title: "De stap om naar de kerkenraad/een ouderling te gaan is voor mij groot",
        five: false,
        isBar: true,
        last: false,
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [{
                label: "Personen per Score",
                data: [1, 0, 3, 2, 6, 1, 5, 8, 0, 2],
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
        }
    },
    bpg: {
        name: "bpg",
        title: "Ik heb behoefte aaan een (pastoraal) gesprek met iemand uit de kerk",
        five: true,
        isBar: true,
        last: true,
        subject: "Jeugdcommissie en Jeugdwerk",
        data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [{
                label: "Personen per Score",
                data: [13, 8, 3, 3, 1],
                backgroundColor: [
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
                    "rgba(54, 162, 235, 1)"
                ],
                borderWidth: 1
            }]
        }
    },
    wwjz: {
        name: "wwjz",
        isBar: false,
        last: false,
        title: "Ik weet wie in de huidige jeugdcommissie zitten",
        data: {
            labels: ["Ja", "Nee", "Ik weet het van één persoon", "Wat is de jeugdcommisie?"],
            datasets: [{
                label: "Ik weet wie in de huidige jeugdcommissie zitten",
                backgroundColor: [
                    "rgba(0, 255, 0, 0.5)",
                    "rgba(255, 0, 0, 0.5)",
                    "rgba(255, 255, 0, 0.5)",
                    "rgba(255, 125, 0, 0.5)",
                ],
                borderColor: [
                    "rgba(0, 255, 0, 1)",
                    "rgba(255, 0, 0, 1)",
                    "rgba(255, 255, 0, 1)",
                    "rgba(125, 125, 0, 1)",
                ],
                borderWidth: 1,
                data: [3,9,11,5]
            }]
        }
    },
    wwjd: {
        name: "wwjd",
        title: "Ik weet wat de huidige jeugdcommissie doet",
        five: true,
        isBar: true,
        last: false,
        data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [{
                label: "Personen per Score",
                data: [10, 9, 6, 2, 1],
                backgroundColor: [
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
                    "rgba(54, 162, 235, 1)"
                ],
                borderWidth: 1
            }]
        }
    },
    bmj: {
        name: "bmj",
        title: "Ik ben blij met hoe het jeugdwerk in de kerk geregeld is (catechisatie, vereniging, jeugddiensten, acties, kamp, etc.)",
        five: false,
        isBar: true,
        last: false,
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [{
                label: "Personen per Score",
                data: [0, 0, 2, 2, 0, 5, 9, 7, 1, 2],
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
        }
    },
    dioj: {
        name: "dioj",
        title: "Ik heb duidelijke ideeën over hoe het jeugdwerk verbeterd kan worden",
        five: false,
        isBar: true,
        last: true,
        subject: "Jeugdraad",
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [{
                label: "Personen per Score",
                data: [3, 1, 1, 3, 9, 2, 6, 2, 0, 1],
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
        }
    },
    tjr: {
        name: "tjr",
        title: "Ik zie toekomst in een nieuwe jeugdraad, voor de jeugd, door de jeugd",
        five: true,
        isBar: true,
        last: false,
        data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [{
                label: "Personen per Score",
                data: [0, 2, 7, 9, 9],
                backgroundColor: [
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
                    "rgba(54, 162, 235, 1)"
                ],
                borderWidth: 1
            }]
        }
    }
}