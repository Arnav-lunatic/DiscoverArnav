const body = document.querySelector('body')
const menuButton = document.querySelector('.menu')
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const dropDownMenu = document.querySelector('.drop-down-menu')
const devLetter = document.querySelectorAll('#letter')
const frontend = document.querySelector('.frontend')
const loaderText = document.querySelectorAll('#loader-text')
const projectGrid = document.querySelector('.grid')
const projectDescriptionPopup = document.querySelector('.projectDiscription')
const cursor = document.querySelector('.cursor')

// Cursor

document.addEventListener('mousemove', e => {
    cursor.style.top = `${e.pageY-32}px`
    cursor.style.left = `${e.pageX-32}px`
})



// navbar Menu button for mobile screen
let menuClicked = 0
function navMenuClose() {
    line1.style.transform = ''
    line3.style.transform = ''
    dropDownMenu.style.top = '-100px'
    line2.style.opacity = '1'
    dropDownMenu.style.opacity = '0'
    dropDownMenu.style.pointerEvents = 'none'
    menuClicked = 0
}
menuButton.addEventListener('click', ()=>{
    if (menuClicked === 0) {
        line1.style.transform = 'rotate(45deg) translateX(42%) scale(1.1)'
        line3.style.transform = 'rotate(-45deg) translateX(42%) scale(1.1)'
        line2.style.opacity = '0'
        dropDownMenu.style.top = '50px'
        dropDownMenu.style.opacity = '1'
        dropDownMenu.style.pointerEvents = 'auto'

        menuClicked = 1
        closePopUp()
    }else {
        navMenuClose()
    }
})

//first effects
devLetter.forEach(letter => {
    letter.addEventListener('mouseover', () => {
        letter.style.webkitTextFillColor = 'transparent'
        letter.style.textShadow = '2px 2px 50px #7C00F9'
        letter.style.setProperty('--letterShadow', '1')
        
        setTimeout(() => {
            letter.style.webkitTextFillColor = '#A3A3A3'
            letter.style.textShadow = ''
            letter.style.setProperty('--letterShadow', '0')
        },2000)
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

//Second Page
const projectsList = [
    { name: 'LunaInsight', iconPath: 'assests/icons/news.png', id: 'lunaInsight' },
    { name: 'Luna Forecast', iconPath: 'assests/icons/weather-app.png', id: 'lunaForecast' },
    {name: 'Tasks Tales', iconPath: 'assests/icons/icon.png', id: 'tasksTales'},
    {name: 'Simple Music Player', iconPath: 'assests/icons/music.png', id: 'simpleMusicPlayer'},
    {name: 'Simple Calculator', iconPath: 'assests/icons/calculator.png', id: 'calculator'},
]

const projectDescription = [{
    lunaInsight: `It's a responsive News website made using HTML, CSS, and JavaScript using "New York Times API".`,
    lunaForecast: `It's a Weather WebApp made using HTML, CSS, and JavaScript using "OpenWeatherMap API"`,
    tasksTales: `It's a Todo WebApp made using HTML, CSS, and Javascript and it stores data in "Browser's Local Storage"`,
    simpleMusicPlayer: `It's a Music Player made using HTML, CSS, and JavaScript`,
    calculator: `It's a Simple Calculator made using HTML, CSS, and JavaScript without 'Eval Function'`,
},
    {
        lunaInsight: `https://arnav-lunatic.github.io/LunaInsight/`,
        lunaForecast: `https://arnav-lunatic.github.io/LunaForecast/`,
        tasksTales: `https://arnav-lunatic.github.io/TasksTales/`,
        simpleMusicPlayer: `https://arnav-lunatic.github.io/Simple-Music-Player/`,
        calculator: `https://arnav-lunatic.github.io/Calculator/`,
}]

//all the project showcase is injected by js in html
projectsList.forEach(project => {
    projectGrid.innerHTML += `
            <div class="project" id=${project.id}>
                <img class="projectIcon" src="${project.iconPath}">
                <div class="projectName">${project.name}</div>
            </div>`
});

// Project Description PopUp
function closePopUp() {
    projectDescriptionPopup.style.opacity = '0'
    projectDescriptionPopup.style.pointerEvents = 'none'
}

document.querySelectorAll('.project').forEach((element) => {
    element.addEventListener('click', () => {
        // if navMenu is opened, then it will close it
        navMenuClose()

        projectDescriptionPopup.innerHTML = ''
        projectDescriptionPopup.style.opacity = '1'
        projectDescriptionPopup.style.pointerEvents = 'auto'
    
        projectDescriptionPopup.innerHTML = `
        <img class="popupClose" src="assests/close.png" alt="x">
        <h1>Luna Insight</h1>
        <div class="projectImg">
            <img src="assests/ProjectScreenshots/desktop/${element.id}.png" class="desktopS">
            <img src="assests/ProjectScreenshots/phone/${element.id}.jpg" class="phoneS">
        </div>
        <p>${projectDescription[0][element.id]}</p>

        <a href=${projectDescription[1][element.id]} target='_blank'>
            <button class="checkoutProject">Check Out</button>
        </a>`

        document.querySelector('.popupClose').addEventListener('click', () => {
            closePopUp()
        })
    })
})

window.addEventListener('keydown', (e) => {
    if(e.key === "Escape") {
        closePopUp()
    }
})




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

//preload image
function preload_image(im_url) {
    let img = new Image();
    img.src = im_url;
}
preload_image('assests/ProjectScreenshots/desktop/calculator.png')
preload_image('assests/ProjectScreenshots/desktop/lunaForecast.png')
preload_image('assests/ProjectScreenshots/desktop/lunaInsight.png')
preload_image('assests/ProjectScreenshots/desktop/simpleMusicPlayer.png')
preload_image('assests/ProjectScreenshots/desktop/tasksTales.png')

preload_image('assests/ProjectScreenshots/phone/calculator.png')
preload_image('assests/ProjectScreenshots/phone/lunaForecast.png')
preload_image('assests/ProjectScreenshots/phone/lunaInsight.png')
preload_image('assests/ProjectScreenshots/phone/simpleMusicPlayer.png')
preload_image('assests/ProjectScreenshots/phone/tasksTales.png')
