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
var buttonSection = document.getElementById("buttonlist")
makeElements()
drawCharts()

function drawChart(chartElement, config, chartName){
    drawn_charts[chartName] = new Chart(chartElement, config);
}

function deleteChart(chartElement, isBar){

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
    if(!isBar){
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

function drawCharts() {
    button_register_number = 0
    for (let element in dataList){
        
        
        let config
    
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            if(!dataList[element].isBar){
                let clonedOptions = JSON.parse(JSON.stringify(options.round.options))
                clonedOptions.title.text = dataList[element].title

                config = {
                    data: dataList[element].data,
                    type: options.doughnut,
                    options: clonedOptions
                }
            }else if(dataList[element].five) {

                let clonedOptions = JSON.parse(JSON.stringify(options.five.options))
                clonedOptions.title.text = dataList[element].title

                config = {
                    data: dataList[element].data,
                    type: options.horizontalBar,
                    options: clonedOptions
                }

            }else{

                let clonedOptions = JSON.parse(JSON.stringify(options.ten.options))
                clonedOptions.title.text = dataList[element].title

                config = {
                    data: dataList[element].data,
                    type: options.horizontalBar,
                    options: clonedOptions
                }
            }

            buttons[button_register_number].addEventListener("click", (e) => checkChart(e, dataList[element].name + "_chart", config, dataList[element].name, dataList[element].isBar))
        }else{  
            if(!dataList[element].isBar){
                let clonedOptions = JSON.parse(JSON.stringify(options.round.options))
                clonedOptions.title.text = dataList[element].title

                config = {
                    data: dataList[element].data,
                    type: options.doughnut,
                    options: clonedOptions
                }
            
            }else if(dataList[element].five) {

                let clonedOptions = JSON.parse(JSON.stringify(options.five.options))
                clonedOptions.title.text = dataList[element].title

                config = {
                    data: dataList[element].data,
                    type: options.bar,
                    options: clonedOptions
                }

            }else{

                let clonedOptions = JSON.parse(JSON.stringify(options.ten.options))
                clonedOptions.title.text = dataList[element].title

                config = {
                    data: dataList[element].data,
                    type: options.bar,
                    options: clonedOptions
                }
            }

            config.options.title.text = dataList[element].title

            buttons[button_register_number].addEventListener("click", (e) => checkChart(e, dataList[element].name + "_chart", config, dataList[element].name, false))
        }

        button_register_number++
    }

}

function makeElements() {
    
    for (let element in dataList){
        let newButton= document.createElement('button')
        newButton.setAttribute("class", "collapsible")
        newButton.setAttribute("id", dataList[element].name + "_button")
        newButton.innerHTML = dataList[element].title

        let newDiv = document.createElement('div')
        newDiv.setAttribute("class", "content")
        newDiv.setAttribute("id", dataList[element].name + "_content")

        let newCanvas = document.createElement('canvas')
        newCanvas.setAttribute("id", dataList[element].name + "_chart")
        if(!dataList[element].isBar){
            newCanvas.setAttribute("class", "doughnut")
        }

        buttonSection.appendChild(newButton)
        buttonSection.appendChild(newDiv)
        newDiv.appendChild(newCanvas)

        buttons[button_register_number] = newButton
        button_register_number++
    }
}



