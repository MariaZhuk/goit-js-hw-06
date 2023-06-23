const textInputEl = document.querySelector('#validation-input');
const dataLength = Number(textInputEl.getAttribute('data-length'));



textInputEl.addEventListener('blur', (event) => { 
    textInputEl.classList.remove('invalid', 'valid') // видаляємо можливі класи
     if (dataLength === event.currentTarget.value.length) { //порівнюємо кількість симовлів в інпуті
         
         textInputEl.classList.add('valid');//вішаємо клас волид, якщо кількість символів співпадає
    }
    else { 
    
         textInputEl.classList.add('invalid') //вішаємо класс инволид, якщо кількість сиволів не співпадає
    }

})

