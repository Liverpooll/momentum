'use strict'

const wrapper = document.querySelector('.wrapper');
const clock_js = document.querySelector('.clock-js');


const getTime =  () => {
  const date = new Date();
  const Hours = date.getHours();
  const Minutes = date.getMinutes();
  const Seconds = date.getSeconds();
  clock_js.innerHTML = `${Hours < 10 ? `0${Hours}` : Hours}:${Minutes < 10 ? `0${Minutes}` : Minutes}:${Seconds < 10 ? `0${Seconds}` : Seconds}`
}



function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();