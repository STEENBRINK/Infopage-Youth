'use strict';

//global vars
var isDrawn = {
    leeftijden: false,
    bbdg: false
}

var charts = []

//button elements
var leeftijden_button = document.getElementById("leeftijden_button");
var bbdg_button = document.getElementById("bbdg_button")

//event listeners
leeftijden_button.addEventListener("click", (e) => checkChart(e, 'leeftijden_chart', configs.leeftijden, "leeftijden"))
bbdg_button.addEventListener("click", (e) => checkChart(e, 'bbdg_chart', configs.bbdg, "bbdg"))

function drawChart(chartElement, config, chartName){
    charts[chartName] = new Chart(chartElement, config);
}

function deleteChart(chartElement){

    let div = chartElement.parentNode
    let element

    for(let i = 0; i < div.childNodes.length; i++){
        if(div.childNodes[i].className == "chartjs-size-monitor"){
            element = div.childNodes[i]
            break;
        }
    }

    let newElement = document.createElement('canvas')
    newElement.setAttribute("id", chartElement.id)
    
    div.removeChild(chartElement);
    div.removeChild(element)
    div.appendChild(newElement);
}

function checkChart(e, chart, config, drawn){
    let chartElement = document.getElementById(chart)
    if(isDrawn[drawn]){
        deleteChart(chartElement)
        isDrawn[drawn] = false
    }else{
        chartElement.getContext('2d')
        drawChart(chartElement, config, chart)
        isDrawn[drawn] = true
    }
}