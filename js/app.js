'use strict';

//global vars
var isDrawn = {
    leeftijden: false,
    bbdg: false,
    omp: false,
    vmg: false,
    zdb: false,
    kdb: false,
    gids: false,
    ioeg: false
}

var drawn_charts = []
var button_register_number = 0
var buttons = []

//register buttons and eventlisteners
registerBarCharts()
registerPieCharts()

function drawChart(chartElement, config, chartName){
    drawn_charts[chartName] = new Chart(chartElement, config);
}

function deleteChart(chartElement, isDoughnut){

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
    if(isDoughnut){
        newElement.setAttribute("class", "doughnut")
    }
    
    div.removeChild(chartElement);
    div.removeChild(element)
    div.appendChild(newElement);
}

function checkChart(e, chart, config, drawn, isDoughnut){
    let chartElement = document.getElementById(chart)
    if(isDrawn[drawn]){
        deleteChart(chartElement, isDoughnut)
        isDrawn[drawn] = false
    }else{
        chartElement.getContext('2d')
        drawChart(chartElement, config, chart)
        isDrawn[drawn] = true
    }
}

function registerBarCharts() {
    for (let chart_data in data.barCharts){
    
        buttons[button_register_number] = document.getElementById(data.barCharts[chart_data].name + "_button")
        
        let config
    
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            if(data.barCharts[chart_data].five) {
                config = {
                    data: data.barCharts[chart_data].data,
                    type: options.horizontalBar,
                    options: options.five.options
                }
            }else{
                config = {
                    data: data.barCharts[chart_data].data,
                    type: options.horizontalBar,
                    options: options.ten.options
                }
            }

            config.options.title.text = data.barCharts[chart_data].title

            buttons[button_register_number].addEventListener("click", (e) => checkChart(e, data.barCharts[chart_data].name + "_chart", config, data.barCharts[chart_data].name, false))
        }else{  
            if(data.barCharts[chart_data].five) {
                config = {
                    data: data.barCharts[chart_data].data,
                    type: options.bar,
                    options: options.five.options
                }
            }else{
                config = {
                    data: data.barCharts[chart_data].data,
                    type: options.bar,
                    options: options.ten.options
                }
            }

            config.options.title.text = data.barCharts[chart_data].title
            console.log(data.barCharts[chart_data].title)

            buttons[button_register_number].addEventListener("click", (e) => checkChart(e, data.barCharts[chart_data].name + "_chart", config, data.barCharts[chart_data].name, false))
        }

        button_register_number++

    }
}

function registerPieCharts() {
    for (let chart_data in data.pieCharts) {

        buttons[button_register_number] = document.getElementById(data.pieCharts[chart_data].name + "_button")

        buttons[button_register_number].addEventListener("click", (e) => checkChart(e, data.pieCharts[chart_data].name + "_chart", data.pieCharts[chart_data].config, data.pieCharts[chart_data].name, true))

    }
}



