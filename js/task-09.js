function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color"); //достукались до кнопки
console.log(btnEl)
const bodyEl = document.querySelector('body') // достукались до боди
console.dir(bodyEl)

const spanText = document.querySelector(".color") //достукались до спана

btnEl.addEventListener('click', () => { //повішали слухача подіїї на кнопку
  bodyEl.style.backgroundColor = getRandomHexColor(); // присвоїли значення бєкрануда боди(викликали функцію)
  spanText.textContent = bodyEl.style.backgroundColor;// записали значення кольору у спан
 
})



