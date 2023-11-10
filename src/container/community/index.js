import {
  createElement, //подключаем из script/layout.js
  createHeader, //подключаем из script/layout.js
} from '../../script/community'

const page = document.querySelector('.page')

const header = createHeader() //вызываем createHeader
page.append(header) // header добавляем в page

const title = createElement('h1', 'title', 'КомЬюніті')
page.append(title)
// создаю карточку
const pageDiv = document.createElement('div')
pageDiv.classList.add('page')

const listDiv = document.createElement('div')
listDiv.classList.add('list')

const navTabsDiv = document.createElement('div')
navTabsDiv.classList.add('nav-tabs')

const navItem1 = createNavItem('База знань', 'disabled')
const navItem2 = createNavItem('Інформація', 'active')

const mainDiv = document.createElement('main')
mainDiv.classList.add('card')

const cardTopImg = document.createElement('img')
cardTopImg.src = 'img/card__top.png'

const cardBodyDiv = document.createElement('div')
cardBodyDiv.classList.add('card-body')

const cardTitleH2 = document.createElement('h2')
cardTitleH2.classList.add('card__title')
cardTitleH2.textContent = 'Що таке база знань?'

const postInfoP = document.createElement('p')
postInfoP.classList.add('post__info')
postInfoP.textContent =
  'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.'

const cardButton = document.createElement('button')
cardButton.classList.add('card__button')

const telegramTextP = document.createElement('p')
telegramTextP.textContent =
  'Перейти до комьюніті в Телеграм'

// Добавляем элементы в DOM
document.body.appendChild(pageDiv)
pageDiv.appendChild(listDiv)
listDiv.appendChild(navTabsDiv)
navTabsDiv.appendChild(navItem1)
navTabsDiv.appendChild(navItem2)
listDiv.appendChild(mainDiv)
mainDiv.appendChild(cardTopImg)
mainDiv.appendChild(cardBodyDiv)
cardBodyDiv.appendChild(cardTitleH2)
cardBodyDiv.appendChild(postInfoP)
mainDiv.appendChild(cardButton)
cardButton.appendChild(telegramTextP)

// Вспомогательная функция для создания пункта навигации
function createNavItem(text, className) {
  const navItem = document.createElement('div')
  navItem.classList.add('nav__item')

  const navLink = document.createElement('a')
  navLink.href = '#'
  navLink.classList.add('nav-link', className)
  navLink.textContent = text

  navItem.appendChild(navLink)

  return navItem
}
