let container = document.querySelector('#container')
container.style.display = 'flex'
container.style.flexDirection = 'column'

function createRow(){
    let row = document.createElement('div')
    row.style.display = 'flex'
    row.style.flexDirection = 'row'
    container.appendChild(row)

    for(let i=0; i<16; i++){
        let cell = document.createElement('div')
        row.appendChild(cell)
        cell.style.width = '25px'
        cell.style.height = '25px'
        cell.style.border = '1px solid white'      
    }
}

function createGrid(){
    for(let x=0; x<16; x++){
        createRow()
    }
}

createGrid()

container.addEventListener('mouseover', (cell) => {
    cell.target.style.backgroundColor = "red"
})

