const characters = document.querySelector('.characters')
const child = characters.querySelector('.humans')
const childTwo = child.querySelectorAll('li')
// console.log(childTwo)

const hobbitsList = characters.querySelector('.hobbits')
const hobbits = hobbitsList.children
const merry = hobbits[2]
// console.log(hobbits)
console.log(merry.innerText)

const elves = merry.parentElement.nextElementSibling.nextElementSibling
console.log(elves.children)

const glorFindel = elves.children[1]
console.log(glorFindel)
const elrond = glorFindel.nextElementSibling
console.log(elrond)
const legolas = glorFindel.previousElementSibling
console.log(legolas)

const nazgul = characters.querySelector('.enemies').children[1]
const closest = nazgul.closest('.characters')
console.log(closest)