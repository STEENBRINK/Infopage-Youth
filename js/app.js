'use strict';

//todo: css (what where)
//todo: inhoud website -> general explenation, important statistics
//todo: download button



//global vars
var isDrawn = {}

var drawn_charts = []
var button_register_number = 0
var buttons = []

//register buttons and eventlisteners
var buttonSection = document.getElementById("buttonlist")
makeElements()
addCollapsible()
drawCharts()

function drawChart(chartElement, config, chartName){
    drawn_charts[chartName] = new Chart(chartElement, config);
}

function deleteChart(chartElement, isBar){

    let div = chartElement.parentNode
    let oldElement

    for(let i = 0; i < div.childNodes.length; i++){
        if(div.childNodes[i].className == "chartjs-size-monitor"){
            oldElement = div.childNodes[i]
            break;
        }
    }

    let newElement = document.createElement('canvas')
    newElement.setAttribute("id", chartElement.id)
    if(!isBar){
        newElement.setAttribute("class", "doughnut")
    }
    
    div.removeChild(chartElement);
    div.removeChild(oldElement)
    div.appendChild(newElement);
}

function checkChart(e, chart, config, drawn, isBar){
    let chartElement = document.getElementById(chart)
    if(isDrawn[drawn]){
        deleteChart(chartElement, isBar)
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
                clonedOptions.scales.yAxes[0].ticks.fontSize = 10;
                clonedOptions.scales.xAxes[0].ticks.fontSize = 10;
                clonedOptions.scales.yAxes[0].scaleLabel.fontSize = 10
                clonedOptions.scales.xAxes[0].scaleLabel.fontSize = 10
                clonedOptions.tooltips.display = false

                config = {
                    data: dataList[element].data,
                    type: options.bar,
                    options: clonedOptions
                }

            }else{
                let clonedOptions
                if(dataList[element].name == "leeftijden"){
                    clonedOptions = JSON.parse(JSON.stringify(options.leeftijden.options))
                }else{
                    clonedOptions = JSON.parse(JSON.stringify(options.ten.options))
                }
                clonedOptions.title.text = dataList[element].title
                clonedOptions.scales.yAxes[0].ticks.fontSize = 10;
                clonedOptions.scales.xAxes[0].ticks.fontSize = 10;
                clonedOptions.scales.yAxes[0].scaleLabel.fontSize = 10
                clonedOptions.scales.xAxes[0].scaleLabel.fontSize = 10
                clonedOptions.tooltips.display = false

                config = {
                    data: dataList[element].data,
                    type: options.bar,
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


                console.log(clonedOptions)

                config = {
                    data: dataList[element].data,
                    type: options.bar,
                    options: clonedOptions
                }

            }else{
                let clonedOptions
                if(dataList[element].name == "leeftijden"){
                    clonedOptions = JSON.parse(JSON.stringify(options.leeftijden.options))
                }else{
                    clonedOptions = JSON.parse(JSON.stringify(options.ten.options))
                }
                clonedOptions.title.text = dataList[element].title

                console.log(clonedOptions)

                config = {
                    data: dataList[element].data,
                    type: options.bar,
                    options: clonedOptions
                }
            }

            config.options.title.text = dataList[element].title

            buttons[button_register_number].addEventListener("click", (e) => checkChart(e, dataList[element].name + "_chart", config, dataList[element].name, dataList[element].isBar))
        }

        button_register_number++
    }

}

function makeElements() {
    let newTitle = [3]
    
    for (let element in dataList){
        let newButton= document.createElement('button')
        if(dataList[element].last){
            newButton.setAttribute("class", "collapsible last")
        }else{
            newButton.setAttribute("class", "collapsible")
        }
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

        if(dataList[element].last){
            newTitle[0] = document.createElement('br')
            newTitle[1] = document.createElement('i')
            newTitle[2] = document.createElement('h4')
            newTitle[2].innerHTML = dataList[element].subject

            buttonSection.appendChild(newTitle[0])
            buttonSection.appendChild(newTitle[1])
            newTitle[1].appendChild(newTitle[2])
        }
    }
}

function addCollapsible() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
        });
    }
                
}



