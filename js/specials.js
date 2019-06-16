/*
 * Chart on the view of the future of the YouthCouncil by the youth
 */

let toekomstCloneOptions = JSON.parse(JSON.stringify(options.specials.options))
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

/*
 * Chart on the percieved outdatedness of our church
 */

let ouderwetsClonedOptions = JSON.parse(JSON.stringify(options.specials.options))
ouderwetsClonedOptions.title.text = dataList.kow.title

let oudetwetsSpecialConfig = {
    options: ouderwetsClonedOptions,
    data: dataList.kow.data,
    type: options.bar
}

var toekomstSpecialCanvas = document.getElementById("ouderwets_special")

var toekomstSpecialChart = new Chart(toekomstSpecialCanvas, oudetwetsSpecialConfig)

/*
 * Chart on the inclusion of the youth by the council
 */

let betrekkenClonedOptions = JSON.parse(JSON.stringify(options.specials.options))
betrekkenClonedOptions.title.text = dataList.kzmb.title
betrekkenClonedOptions.scales.yAxes[0].ticks.stepSize = 5
betrekkenClonedOptions.scales.yAxes[0].ticks.max = 15

let betrekkenSpecialConfig = {
    options: betrekkenClonedOptions,
    data: dataList.kzmb.data,
    type: options.bar
}

var betrekkenSpecialCanvas = document.getElementById("betrekken_special")

var betrekkenSpecialChart = new Chart(betrekkenSpecialCanvas, betrekkenSpecialConfig)
