const textInputEl = document.querySelector('#validation-input');
const dataLength = Number(textInputEl.getAttribute('data-length'));



textInputEl.addEventListener('blur', (event) => { 
     if (dataLength === event.currentTarget.value.length) { //порівнюємо кількість симовлів в інпуті
         if (!textInputEl.classList.contains('invalid')) {// якщо не містить класс инволид
            textInputEl.classList.add('valid');//вішаємо клас волид
        } else { 
             textInputEl.classList.replace('invalid', 'valid') //якщо 
        }
    }
    else { 
        if (!textInputEl.classList.contains('valid')) { //якщо не містить класс волид
            textInputEl.classList.add('invalid') //вішаємо класс инволид
            
        } else { 
            textInputEl.classList.replace('valid', 'invalid')
        }
    }

})

