window.onload = function(){

    var color = ""
    var colorArray = new Array()
    var guessColor
    var difficulty = 9
    var won = false
    var output = document.querySelector("#output")
    var row_3 = document.querySelector("#row_3")
    var header = document.querySelector("#header")
    var easy = document.querySelector("#easy")
    var hard = document.querySelector("#hard")

    function randomNumber(x){
        return Math.floor(Math.random() * x)
    }

    function createColor (){
        for(let x = 0; x < 3; x++){
            if(x < 2){
                color += `${randomNumber(256)}, `
            } else {
                color += randomNumber(256)
            }
        }
        return color
    }

    function fillColorArray(difficulty){
        for(let x = 0; x < difficulty; x++){
            colorArray.push(createColor())
            color = ""
        }
    }

    function setColors(){
        let cell
        for(let x = 0; x < colorArray.length; x++){
            let i = x+1
            cell = document.querySelector(`#cell_${i}`)
            if(won === false){
                cell.style.backgroundColor = `rgb(${colorArray[x]})`
            }else{
                cell.style.backgroundColor = `${guessColor}`
                cell.style.boxShadow = '10px 10px 5px 0px rgba(0,0,0,0.75)'
            }
        }
    }

    function setColorSquares(){
        for(let x = 0; x < colorArray.length; x++){
            let i = x+1
            document.querySelector(`#cell_${i}`).onclick = function(){
                if(this.style.backgroundColor === guessColor){
                    won = true
                    output.textContent = "Correct!"
                    setColors()
                    header.style.backgroundColor = guessColor
                } else {
                    output.textContent = "Wrong!"
                    this.style.backgroundColor = "#d0dbf2"
                    this.style.boxShadow = 'none';
                }
            }
        }
    }

    function setNewColorsButton(){
        document.querySelector("#newColors").onclick = function (){
            won = false
            reset(difficulty)
            output.textContent = ""
            header.style.backgroundColor = "#051b38"
        }
    }

    function setDifficultyButtons(){
        document.querySelector("#easy").onclick = function (){
            won = false
            difficulty = 6
            reset(difficulty)
            row_3.classList.add("hidden")
            output.textContent = ""
            header.style.backgroundColor = "#051b38"
            easy.style.backgroundColor = "#051b38"
            hard.style.backgroundColor = "#4C688B"
        }
        document.querySelector("#hard").onclick = function (){
            won = false
            difficulty = 9
            reset(difficulty)
            row_3.classList.remove("hidden")
            output.textContent = ""
            header.style.backgroundColor = "#051b38"
            hard.style.backgroundColor = "#051b38"
            easy.style.backgroundColor = "#4C688B"
        }
    }

    function setOnClick(){
        setColorSquares()
    }

    function reset(difficulty){
        color = ""
        colorArray = new Array()
        fillColorArray(difficulty)
        guessColor = `rgb(${colorArray[randomNumber(difficulty)]})`
        document.querySelector("#quessColor").textContent = `${guessColor.substr(0, 3).toUpperCase()} ${guessColor.substr(3)}`
        setColors()
        setOnClick()
    }

    hard.style.backgroundColor = "#051b38"
    setNewColorsButton()
    setDifficultyButtons()
    reset(difficulty)
    
}