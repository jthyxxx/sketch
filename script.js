const sketchBox = document.querySelector('#sketchBox')
let grid = document.querySelector('#gridNumber')
let number = document.querySelector('.gridValue')
let color = document.querySelector('.color')

let gridNumber = grid.value
let newColor = color.value

let numBox = gridNumber*gridNumber
let length = Math.sqrt(600*600/numBox)

number.innerText = gridNumber

sketchBox.style.display = 'flex'
sketchBox.style.flexWrap = 'wrap'

for(let i = 0; i < numBox; i++){
    let box = document.createElement('div')
    box.classList.add('boxes')
    box.style.height = length + 'px'
    box.style.width = length + 'px'
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
        sketchBox.appendChild(box)
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let b = document.querySelectorAll('.boxes')

let newb = Array.from(b)

sketchBox.addEventListener('click', () => {
    newb.forEach((bx)=> {
        bx.addEventListener('onmouseover', () => {
            bx.style.backgroundColor = 'red'
        })
    })
})