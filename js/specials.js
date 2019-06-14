/*
 * Chart on the ages of the participants special 
 */

let leeftijdenSpecialConfig = {
    options: options.ten.options,
    data: data.barCharts.leeftijden.data,
    type: options.bar
}

leeftijdenSpecialConfig.options.title.text = data.barCharts.leeftijden.title

var leeftijdenSpecialCanvas = document.getElementById("leeftijden_special")

var leeftijdenSpecialChart = new Chart(leeftijdenSpecialCanvas, leeftijdenSpecialConfig);

/*
 * Chart on the reading of the Gids special
 */

var gidsSpecialConfig = data.pieCharts.gids.config

var gidsSpecialCanvas = document.getElementById("gids_special")

var gidsSpecialChart = new Chart(gidsSpecialCanvas, gidsSpecialConfig)

/*
 * Chart on the view of the future of the YouthCouncil by the youth
 */

let toekomstJeugdraadSpecialConfig = {
    options: options.five.options,
    data: data.barCharts.tjr.data,
    type: options.bar
}

toekomstJeugdraadSpecialConfig.options.title.text = data.barCharts.tjr.title

var toekomstJeugdraadSpecialCanvas = document.getElementById("toekomst_jeugdraad_special")

var toekomstJeugdraadSpecialChart = new Chart(toekomstJeugdraadSpecialCanvas, toekomstJeugdraadSpecialConfig)

/*
 * Chart on the amount of Youth Services
 */

var jeugddienstenSpecialConfig = data.pieCharts.gjd.config

var jeugddienstenSpecialCanvas = document.getElementById("jeugddiensten_special")

var jeugddienstenSpecialChart = new Chart(jeugddienstenSpecialCanvas, jeugddienstenSpecialConfig)
