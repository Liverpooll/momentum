const body = document.querySelector('body');

const IMG_Number = 5;

function paintimage (IMGNUMBER) {
  const image = new Image ();
  image.src = `background/${IMGNUMBER + 1}.jpg`
  image.classList.add('bgImage')
  body.appendChild(image)

}

function genRandom () {
  const number = Math.floor(Math.random() * IMG_Number);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintimage(randomNumber);
}

init();