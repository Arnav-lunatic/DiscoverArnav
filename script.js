const body = document.querySelector('body')
const menuButton = document.querySelector('.menu')
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const dropDownOption = document.querySelectorAll('#drop-down-option')
const devLetter = document.querySelectorAll('#letter')
const frontend = document.querySelector('.frontend')
const loaderText = document.querySelectorAll('#loader-text')


// navbar Menu button for mobile screen
let menuClicked = 0
menuButton.addEventListener('click', ()=>{
    if (menuClicked === 0) {
        line1.style.transform = 'rotate(45deg) translateX(42%)'
        line3.style.transform = 'rotate(-45deg) translateX(42%)'
        line1.style.background = '#6A009B'
        line3.style.background = '#6A009B'
        line2.style.opacity = '0'
        dropDownOption.forEach(element=>{
            element.style.right = '0'
        })
        menuClicked = 1
    }else {
        line1.style.transform = ''
        line3.style.transform = ''
        line1.style.background = 'white'
        line3.style.background = 'white'
        line2.style.opacity = '1'
        dropDownOption.forEach(element=>{
            element.style.right = '-140px'
        })
        menuClicked = 0
    }
})

//first effects
devLetter.forEach(letter => {
    letter.addEventListener('mouseover', () => {
        letter.style.opacity = '1'
        letter.style.color = '#fff'
        letter.style.textShadow = '2px 2px 10px #A3A3A3'
        setTimeout(()=>{
            letter.style.color = '#A3A3A3'
            letter.style.opacity = '.5'
            letter.style.textShadow = ''
        },1000)
    })
});

function frontendTxtLoad() {
    setTimeout(() => {
        frontend.textContent = 'Frontend'
    }, 0);
    setTimeout(() => {
        frontend.textContent = 'Creative'
    }, 4000);
    setTimeout(() => {
        frontend.textContent = 'Visionary'
    }, 8000);
}
setInterval(frontendTxtLoad, 12000)
frontendTxtLoad()

//loader
j = 400
for (let i = 0; i < 10; i++){
    setInterval(() => {
        loaderText[i].style.opacity = '1'
        loaderText[i].style.color = '#fff'
        loaderText[i].style.textShadow = '2px 2px 10px #A3A3A3'
    }, j);
    j += 400
}

window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none'
})