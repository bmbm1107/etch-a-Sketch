const container = document.querySelector('.container')


for (let i = 0; i <= 16; i++){
const column = document.createElement('div')
column.classList.add('horizontal')
container.appendChild(column)


for (let i = 0; i <= 16; i++){
const square = document.createElement('div')
square.classList.add('block')
column.appendChild(square)
}
}