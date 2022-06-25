const sketchBox = document.querySelector('#sketchBox')
let grid = document.querySelector('#gridNumber')
let number = document.querySelector('.gridValue')
let color = document.querySelector('.color')
let gridNumber = grid.value
let newColor = color.value

let numBox = gridNumber*gridNumber
let length = Math.sqrt(600*600/numBox)

number.innerText = gridNumber

for(let i = 0; i < numBox; i++){
    let box = document.createElement('div')
    box.classList.add('boxes')
    box.style.height = length + 'px'
    box.style.width = length + 'px'
    box.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = newColor
    })
    sketchBox.appendChild(box)
}

color.addEventListener('change', () => {
    newColor = color.value
})

grid.addEventListener('change', ()=>{
    number.innerText = grid.value
    numBox = grid.value
    removeAllChildNodes(sketchBox)
    changeGrid(numBox)

})

let changeGrid = (number) => {
    let newNumber = number*number
    let newLength = Math.sqrt(600*600/newNumber)
    for(let i = 0; i < newNumber; i++){
        let box = document.createElement('div')
        box.classList.add('boxes')
        box.style.height = newLength + 'px'
        box.style.width = newLength + 'px'
        box.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = newColor
        })
        sketchBox.appendChild(box)
    }
}

let removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let erase = () => {
    newColor = 'white'
}

let clearAll = () => {
    removeAllChildNodes(sketchBox)
    changeGrid(grid.value)
    newColor = color.value
}
