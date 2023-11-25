const container = document.querySelector('.container')
const btnNewGrid = document.querySelector('button')

btnNewGrid.addEventListener('click', newGrid)

for (let i = 0; i < 16; i++){
const column = document.createElement('div')
column.classList.add('horizontal')
container.appendChild(column)


for (let i = 0; i < 16; i++){
const square = document.createElement('div')
square.classList.add('block')
column.appendChild(square)
}
}

function newGrid () {

   const allAxes = Array.from(document.querySelectorAll('.container *'))

    for (element of allAxes) {
        element.remove()
    }

    let int = prompt('add a number')

    for (let i = 0; i < int; i++){
        const column = document.createElement('div')
        column.classList.add('horizontal')
        container.appendChild(column)
        
        
        for (let i = 0; i < int; i++){
        const square = document.createElement('div')
        square.classList.add('block')
        column.appendChild(square)
        }
        }

    let boxWidth = 640 / int
    const allBoxes = Array.from(document.querySelectorAll('.block'))

    for (element of allBoxes) {
        console.log(element)

        element.style.width = `${boxWidth}px`;
        element.style.height = `${boxWidth}px`;

    }


}