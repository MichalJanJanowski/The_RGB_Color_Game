window.onload = function(){

    var cell_1 = document.querySelector("#cell_1")
    var color = ""
    var colorArray = new Array()

    function randomNumber(){
        return Math.floor(Math.random() * 256)
    }

    function createColor (){
        for(let x = 0; x < 3; x++){
            if(x < 2){
                color += `${randomNumber()}, `
            } else {
                color += randomNumber()
            }
        }
        return color
    }

    function fillColorArray(){
        for(let x = 0; x < 9; x++){
            colorArray.push(createColor())
            color = ""
        }
    }

    function setColors(){
        for(let x = 0; x < colorArray.length; x++){
            let i = x+1
            document.querySelector(`#cell_${i}`).style.backgroundColor = `rgb(${colorArray[x]})`
        }
    }

    fillColorArray()
    setColors()

}
    
    