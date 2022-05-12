const API_key = '4979156c03834f6709683c4ac91609da'
const COORDS = 'coords'
const weather = document.querySelector('.js-weather')


function getWeather (lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}`
  )
  .then (function(response) {
    return response.json();
  })
  .then(function(json){
    const temperature = json.main.temp;
    console.log(temperature)
    const place = json.name;
    console.log(place)
    weather.innerText = `${temperature} @ ${place}`
});
}


function saveCoords (coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj))

} 



function handlegeoSuccess(position) {
  
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  }
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handlegeoError() {
  console.log('X')

}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handlegeoSuccess, handlegeoError);
}

function loadCoords () {
  const loadCords = localStorage.getItem(COORDS);
  if(loadCords === null) {
    askForCoords();
  }else {
    const parseCoords = JSON.parse(loadCords);
    getWeather(parseCoords.latitude, parseCoords.longitude)

  }
}

function init() {
  loadCoords();
}
init();