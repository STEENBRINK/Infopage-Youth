/*
 * Chart on the ages of the participants special 
 */
 
let leeftijdenClonedOptions = JSON.parse(JSON.stringify(options.leeftijden.options))
leeftijdenClonedOptions.title.text = dataList.leeftijden.title

let leeftijdenSpecialConfig = {
    options: leeftijdenClonedOptions,
    data: dataList.leeftijden.data,
    type: options.bar
}

var leeftijdenSpecialCanvas = document.getElementById("leeftijden_special")

var leeftijdenSpecialChart = new Chart(leeftijdenSpecialCanvas, leeftijdenSpecialConfig);

/*
 * Chart on the reading of the Gids special
 */

let gidsClonedOptions = JSON.parse(JSON.stringify(options.round.options))
gidsClonedOptions.title.text = dataList.gids.title

let gidsSpecialConfig = {
    options: gidsClonedOptions,
    data: dataList.gids.data,
    type: options.doughnut
}

var gidsSpecialCanvas = document.getElementById("gids_special")

var gidsSpecialChart = new Chart(gidsSpecialCanvas, gidsSpecialConfig)

/*
 * Chart on the view of the future of the YouthCouncil by the youth
 */

let toekomstCloneOptions = JSON.parse(JSON.stringify(options.five.options))
toekomstCloneOptions.title.text = dataList.tjr.title

let toekomstJeugdraadSpecialConfig = {
    options: toekomstCloneOptions,
    data: dataList.tjr.data,
    type: options.bar
}

var toekomstJeugdraadSpecialCanvas = document.getElementById("toekomst_jeugdraad_special")

var toekomstJeugdraadSpecialChart = new Chart(toekomstJeugdraadSpecialCanvas, toekomstJeugdraadSpecialConfig)

/*
 * Chart on the amount of Youth Services
 */

let jeugddienstenClonedOptions = JSON.parse(JSON.stringify(options.round.options))
jeugddienstenClonedOptions.title.text = dataList.gjd.title

let jeugddienstenSpecialConfig = {
    options: jeugddienstenClonedOptions,
    data: dataList.gjd.data,
    type: options.doughnut
}

var jeugddienstenSpecialCanvas = document.getElementById("jeugddiensten_special")

var jeugddienstenSpecialChart = new Chart(jeugddienstenSpecialCanvas, jeugddienstenSpecialConfig)
