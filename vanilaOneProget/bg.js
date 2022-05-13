const body = document.querySelector('body')
const IMAGE_NUMBER = 3

function showImage(number) {
  const img = new Image()
  img.src = `img/${number + 1}.jpg`
  img.classList.add('bgImages')
  body.prepend(img)
}

function getRandom() {
  const number = Math.floor(Math.random() * IMAGE_NUMBER)
  return number

}

function init() {
  const randNumber = getRandom()
  showImage(randNumber)
}

init()