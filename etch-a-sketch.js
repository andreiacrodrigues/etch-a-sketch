let container = document.querySelector('#container')
container.style.display = 'flex'
container.style.flexDirection = 'column'

let containerButtons = document.querySelector('#container-buttons')
let pixelButton = document.querySelector('#pixel')
let clearButton = document.querySelector('#clear')
let containerColors = document.querySelector('#container-colors')

let answer = 16
let selectedColor

function createRow(answer){
    let row = document.createElement('div')
    row.style.display = 'flex'
    row.style.flexDirection = 'row'
    container.appendChild(row)

    for(let i=0; i<answer; i++){
        cell = document.createElement('div')
        row.appendChild(cell)
        let cellSize = 400/ answer
        cell.style.width = `${cellSize}px`
        cell.style.height = `${cellSize}px`
        cell.style.boxSizing = 'border-box'
        cell.style.border = '1px solid white' 
        
        cell.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = randomRGB()
        })
    }
}

function createGrid(answer){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for(let x=0; x<answer; x++){
        createRow(answer)
    }
}

createGrid(answer)

function randomRGB(){
    let red = Math.floor(Math.random()* 256)
    let green = Math.floor(Math.random()* 256)
    let blue = Math.floor(Math.random()* 256)
   return "rgb("+ red + ',' + green + ',' + blue + ")"
}

pixelButton.addEventListener('click', () => {
    answer = Number(prompt('Pixel (1-64):'))
    if(answer >= 1 && answer <= 64) {
        createGrid(answer)
    } else{
        alert('Sorry! You need to choose between 1 - 64')
    }
})

clearButton.addEventListener('click', () => {
    let cells = container.querySelectorAll('div')

    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'white'
        })
    })
})

/* FALTA CONSEGUIR GUARDAR A COR QUE SELECIONEI NO BOTAO E FAZER A ULTIMA EXTRA TRASK


/*
let colorRed = document.querySelector('#colorRed')
let colorGreen = document.querySelector('#colorGreen')
let colorYellow = document.querySelector('#colorYellow')
let colorBlue = document.querySelector('#colorBlue')
let colorPink = document.querySelector('#colorPink')
let colorBlack = document.querySelector('#colorBlack')
*/
