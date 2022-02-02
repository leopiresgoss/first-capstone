const speakers = [
  {
    name: "Amanda Oliveira",
    about: 'Professor of Elderly Care at University of Sao Paulo',
    moreInfo: 'Amanda, author of the best-seller: "Learning from the aged ones", is a reference to using storytelling to improve the relationship with the elderly.',
    img: 'images/speakers/avatar-amanda.jpg',
    altImg: ''
  }
]

// create elements and add them class
function elementGenerator(type, classes) {
  const elem = document.createElement(type)
  
  const classArr = classes.split(" ")
  classArr.forEach(cl => {
    elem.classList.add(cl)
  })

  return elem
}

console.log(elementGenerator('div', 'test test'))
