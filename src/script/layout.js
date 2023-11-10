export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }
  return elem
}

const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: '/svg/header__back.svg',
  },
  {
    width: 24,
    height: 24,
    src: '/img/header__avatar.png',
  },
]

export const createHeader = () => {
  //создаём тэг header с классом header
  const header = createElement('header', 'header')
  //перебираем массив для каждого эл-та по функции один раз
  //т.е. проходим по кнопкам(см выше)

  //в функцию приходит аргумент params, это: width, height, scr
  HEADER_BUTTON_LIST.forEach((params) => {
    //создаём кнопку
    const button = createElement('button', 'button')
    //создаём картинку
    const img = createElement('img')
    //создаём массив со списком массивов с key и value
    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })
    //добавляем картинку в кнопку
    button.append(img)
    //добавляем кнопку в header
    header.append(button)
  })
  return header
}
