const form = document.querySelector('.form-js');
const input = document.querySelector('.input-js');
const greeting = document.querySelector('.js-greeting')

const User = 'currentUser'
const Showing = 'showing'

function saveName (text) {
  localStorage.setItem(User, text);
}

function EventHandler (event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue); 
  saveName(currentValue);
}

function askForName () {
  form.classList.add(Showing);
  form.addEventListener('submit', EventHandler);

};

function paintGreeting(text) {

  form.classList.remove(Showing)
  greeting.classList.add(Showing)
  greeting.innerText = `Hello ${text}`
}

function loadName () {
  const currentUser = localStorage.getItem(User);
  
  if (currentUser === null) {
    askForName();

  } else {
    paintGreeting(currentUser);
  }
}

function init () {
  loadName();
}

init();

