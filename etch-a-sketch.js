let container = document.querySelector('#container')
container.style.display = 'flex'
container.style.flexDirection = 'column'

let containerButtons = document.querySelector('#container-buttons')
let pixelButton = document.querySelector('#pixel')
let eraseButton = document.querySelector('#erase')
let clearButton = document.querySelector('#clear')
let darkerButton = document.querySelector('#darker')
let rainbowButton = document.querySelector('#rainbow')
let colorRGB = document.getElementById('colorPicker')

let answer = 16
let cells = []

function createRow(answer){
    let row = document.createElement('div')
    row.style.display = 'flex'
    row.style.flexDirection = 'row'
    container.appendChild(row)

    for(let i=0; i<answer; i++){
        let cell = document.createElement('div')
        row.appendChild(cell)
        let cellSize = 400/ answer
        cell.style.width = `${cellSize}px`
        cell.style.height = `${cellSize}px`
        cell.style.boxSizing = 'border-box'
        cell.style.border = '1px solid white' 
        
        cell.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'grey'
        })

        cells.push(cell) // add cell to array cells
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

pixelButton.addEventListener('click', () => {
    answer = Number(prompt('Pixel (1-64):'))
    if(answer >= 1 && answer <= 64) {
        createGrid(answer)
    } else{
        alert('Sorry! You need to choose between 1 - 64')
    }
})

eraseButton.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'white'
        })
    })
})

clearButton.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white'
    })
})

darkerButton.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.style.transition = 'opacity 0.5s ease'

        cell.addEventListener('mouseenter', () => {
            let currentOpacity = parseFloat(cell.style.opacity) || 0
            cell.style.opacity = Math.min(currentOpacity + 0.3, 1).toString()
        })
    })
})

function randomRGB(){
    let red = Math.floor(Math.random()* 256)
    let green = Math.floor(Math.random()* 256)
    let blue = Math.floor(Math.random()* 256)
    return "rgb("+ red + ',' + green + ',' + blue + ")"
}

rainbowButton.addEventListener('click', () =>{
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = randomRGB()
        })
    })
})

colorRGB.addEventListener('input', () => {
    let colorSelected = colorRGB.value

    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = colorSelected
        })
    })
})
