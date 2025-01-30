

//Exercise 1 - mainContentSection & color red
const mainContentSection = document.querySelector('h2')
mainContentSection.style.color = 'red'

//Exercise 2 - Method 1 - Underline 'Fork this project on Github'
const link = document.querySelector('footer a')
link.style.textDecoration = 'underline'

//Exercise 2 - Method 2 - Using the ID method - Add ID in the footer
//const link = document.querySelector('#fork')
//link.style.textDecoration = 'underline'


//const aboutA = document.querySelector('#about')
//aboutA.style.color = 'orange'


//Grab SECTION element first, then break it down & grab the 
// rest of the element within the section
//const section = document.querySelector('section')

//const active = section.querySelector('.active')
//active.style.color = 'blue'

//const p = section.querySelector('p')

//const span = section.querySelector('span')


//Grab first element & grab h2 tag
//const activeElements = document.querySelectorAll('.active')

//add border
//activeElements.forEach(el => el.style.border = '1px solid red')

//ANOTHER WAY TO WRITE IT - FOR LOOP
//for (let i = 0; i < activeElements.length; i++) 
//{
    //activeElements[i].style.border = '1px solid red'
//}


//Only selecting the body!!!
//document.body.style.background = 'pink'
//document.title = "Kristy's website"
