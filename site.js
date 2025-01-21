
const firstP = document.querySelector('p')
console.log(firstP)
//firstP.textContent = 'Hello'


const nav = document.querySelector('nav')
nav.style.textDecoration = 'overline'

const contactA = nav.querySelector('#contact')
contactA.style.backgroundColor = '#3388ff'

// grab all of an element...
// const active = document.querySelectorAll('.active')
// console.log(active)
// active.style.textDecoration = 'underline'

//document.body.style.backgroundColor = 'red'
document.title = 'Ryan\'s webpage'

document.addEventListener('click', (e) => {
    //e.target.parentElement.style.border = '2px solid red'
    const section = e.target.closest('section')
    section.style.border = '2px solid red'
})

