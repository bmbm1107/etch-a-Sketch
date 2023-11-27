const container = document.querySelector('.container')
const btnNewGrid = document.querySelector('button')
btnNewGrid.addEventListener('click', newGrid)

const toRGBObject = rgbStr => {
    const [red, green, blue] = rgbStr.match(/\d+/g).map(Number);
    return { red, green, blue };
  };




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

        element.style.width = `${boxWidth}px`;
        element.style.height = `${boxWidth}px`;
    


        element.addEventListener('mouseover', (event) => {
           let color = event.target.style.backgroundColor
            
            if (color === '') {
            let red =  Math.floor(Math.random() * 256)
            let green =  Math.floor(Math.random() * 256)
            let blue =  Math.floor(Math.random() * 256)
            event.target.style.backgroundColor = `rgb(${red} ${green} ${blue})`

        } else {
            color = toRGBObject(color) 
            newRed = Math.floor(Math.random() * (color.red - 0.5))
            newGreen = Math.floor(Math.random() * (color.green - 0.5))
            newBlue = Math.floor(Math.random() * (color.blue - 0.5))
            event.target.style.backgroundColor = `rgb(${newRed} ${newGreen} ${newBlue})`

        }
      
    
    })
    }


}

