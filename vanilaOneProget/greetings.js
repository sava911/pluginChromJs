const form = document.querySelector('.js-form'),
  input = form.querySelector('input'),
  greetings = document.querySelector('.js-greetings');
const SHOWING_CN = 'showing',
  USER_LS = 'currentUsername';

function saveUsername(text) {
  localStorage.setItem(USER_LS, text)
}

function submitHandler(event) {
  event.preventDefault()
  const inputValue = input.value;
  showGreetings(inputValue)
  saveUsername(inputValue)
}

function showGreetings(text) {
  greetings.innerText = `Привет, ${text}`
  greetings.classList.add(SHOWING_CN)
  form.classList.remove(SHOWING_CN)
}


function askForUsername() {
  form.classList.add(SHOWING_CN)
  form.addEventListener('submit', submitHandler)
}

function loadUsername() {
  const currentUsername = localStorage.getItem(USER_LS);
  if (currentUsername === null) {
    askForUsername()
  } else {
    showGreetings(currentUsername)
  }
}

function init() {
  loadUsername()
}

init()