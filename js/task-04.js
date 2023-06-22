const counterValue = document.querySelector('#value');

const decrementBtnEl = document.querySelector(`[data-action="decrement"]`);
console.log(decrementBtnEl)


decrementBtnEl.addEventListener("click", () => { 
    counterValue.textContent = Number(counterValue.textContent) - 1;
   
})

const incrementBtnEl = document.querySelector(`[data-action="increment"]`);
console.log(incrementBtnEl)

incrementBtnEl.addEventListener("click", () => { 
    counterValue.textContent = Number(counterValue.textContent) + 1;
})