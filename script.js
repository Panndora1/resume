const activeItems = document.querySelectorAll('.skills__progress');

if(activeItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll() {
        for(let i = 0; i < activeItems.length; i++) {
            const activeItem = activeItems[i];
            const activeItemHeight = activeItem.offsetHeight; // получаем высоту объекта
            const activeItemOffset = offset(activeItem).top;
            const aciveStart = 4;

            let activeItemPoint = window.innerHeight - activeItemHeight / aciveStart;

            if (activeItemHeight > window.innerHeight) {
                activeItemPoint = window.innerHeight - window.innerHeight / aciveStart
            }

            if ((pageYOffset > activeItemOffset - activeItemPoint) && pageYOffset < (activeItemOffset + activeItemHeight)) {
                activeItem.classList.add('active')
            } else {
                activeItem.classList.remove('active') 
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft } 
    }
}

//smooth scroll

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// slider info

const sliderInfo = [
    {
        imgSrc: "./assets/p1.jpg",
        header: "Виртуальная клавиатура",
        desc: `Реализован функционал набора текста с помощью виртуальной и физической клавиатуры, 
        смена раскладки языка, горячие клавиши. Функционал виртуальной клавиатуры повторяет
        функционал физической. HTML код полностью генерируется с помощью JavaScript. В работе
        использованы классы, как шаблон для генерации клавиш.`,
        href: `https://panndora1.github.io/virtual-keyboard/`
    },
    {
        imgSrc: "./assets/p2.jpg",
        header: "Многостраничный сайт",
        desc: `Реализован многостраничный сайт согласно макету. Адаптивная верстка. Реализована 
        бесконченая карусель. Выполнены popup-карточки для каждого элемента карусели. 
        Используемые технологии при работе: HTML5, CSS3, JS ES6.`,
        href: `https://rolling-scopes-school.github.io/panndora1-JSFE2022Q1/shelter/pages/pets/index.html`
    },
    {
        imgSrc: "./assets/p3.jpg",
        header: "Аудио плеер",
        desc: `Опыт работы с медиа и создания кастомного вида панели управления. Реализовано
        проигрывание песен, постановка на паузу, смена обложек, перемотка трека, переключение треков.
        Для данной работы использовались следующие технологии: HTML5, CSS3, JS ES6.`,
        href: `https://rolling-scopes-school.github.io/panndora1-JSFEPRESCHOOL/audio-player/`
    },
    {
        imgSrc: "./assets/p4.jpg",
        header: "Игра Flappy Bird",
        desc: `Реализована небольшая игра по типу Flappy Bird. Птичка управляется с помощью клавиатуры.
        Реализован подсчет очков в игре, перезапуск игры при поражении. Дополнительно реализована возможность
        смены внешнего вида птички и фона. Для данной игры были использованы тезнологии: HTML5 + Canvas, CSS3, JS ES6.`,
        href: `https://rolling-scopes-school.github.io/panndora1-JSFEPRESCHOOL/randome-game/`
    }
]

// slider

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

const slider = document.querySelector('.slider');
let cards = document.querySelectorAll('.slider__item');

let sliderImg = document.querySelectorAll('.slider__img');
let header = document.querySelectorAll('.slider__header');
let desc = document.querySelectorAll('.slider__desc');
let link = document.querySelectorAll('.slider__link');

function changeRight() {

    if (header[header.length-1].textContent == sliderInfo[sliderInfo.length-1].header) {
        
        for(let i = 0; i < sliderInfo.length; i++) {
            sliderImg[i].src = sliderInfo[i].imgSrc;
            header[i].textContent = sliderInfo[i].header;
            desc[i].textContent = sliderInfo[i].desc;
            link[i].href = sliderInfo[i].href;
        }
    } else {
        for(let i = 0; i < sliderInfo.length; i++) {
            sliderImg[i].src = sliderInfo[i+2].imgSrc;
            header[i].textContent = sliderInfo[i+2].header;
            desc[i].textContent = sliderInfo[i+2].desc;
            link[i].href = sliderInfo[i+2].href;
        }
    }
}

//повернуть цикл функции в обратную сторону

function changeLeft() {

    if (header[header.length-1].textContent == sliderInfo[sliderInfo.length-1].header) {
        
        for(let i = 0; i < sliderInfo.length; i++) {
            sliderImg[i].src = sliderInfo[i].imgSrc;
            header[i].textContent = sliderInfo[i].header;
            desc[i].textContent = sliderInfo[i].desc;
            link[i].href = sliderInfo[i].href;
        }
    } else {
        for(let i = 0; i < sliderInfo.length; i++) {
            sliderImg[i].src = sliderInfo[i+2].imgSrc;
            header[i].textContent = sliderInfo[i+2].header;
            desc[i].textContent = sliderInfo[i+2].desc;
            link[i].href = sliderInfo[i+2].href;
        }
    }
}

rightBtn.addEventListener('click', changeRight)
leftBtn.addEventListener('click', changeLeft)

// burger menu

const burger = document.querySelector('.menu-burger');
const menu = document.querySelector('.menu').cloneNode(true);
const menuLinks = document.querySelector('.menu-burger__links');
const body = document.querySelector('.body');
const area = document.querySelector('.menu-burger__area');


function toggleMenu() {
    burger.classList.toggle('open');
    menuLinks.classList.toggle('open');
    body.classList.toggle('open');
    area.classList.toggle('open');
    menu.classList.toggle('open');
    menu.firstElementChild.classList.toggle('open');
}

burger.addEventListener('click', () => {
    toggleMenu();
    menuLinks.appendChild(menu);
});

area.addEventListener('click', toggleMenu);

menu.firstElementChild.addEventListener('click', toggleMenu);

// mobile slider

const dot = document.querySelectorAll('.slider__dot');
const dotControl = document.querySelector('.slider__mobile-control');

dotControl.addEventListener('click', () => {
    dot.forEach(el => {
        el.classList.remove('active');
    })

    event.target.classList.add('active')

    if(event.target.classList.contains('dot1')) {
            sliderImg[1].src = sliderInfo[0].imgSrc;
            header[1].textContent = sliderInfo[0].header;
            desc[1].textContent = sliderInfo[0].desc;
            link[1].href = sliderInfo[0].href;
    } else if (event.target.classList.contains('dot2')) {
            sliderImg[1].src = sliderInfo[1].imgSrc;
            header[1].textContent = sliderInfo[1].header;
            desc[1].textContent = sliderInfo[1].desc;
            link[1].href = sliderInfo[1].href;
    } else if (event.target.classList.contains('dot3')) {
        sliderImg[1].src = sliderInfo[2].imgSrc;
            header[1].textContent = sliderInfo[2].header;
            desc[1].textContent = sliderInfo[2].desc;
            link[1].href = sliderInfo[2].href;
    } else if (event.target.classList.contains('dot4')) {
        sliderImg[1].src = sliderInfo[3].imgSrc;
            header[1].textContent = sliderInfo[3].header;
            desc[1].textContent = sliderInfo[3].desc;
            link[1].href = sliderInfo[3].href;
    }
})