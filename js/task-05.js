const inputName = document.querySelector("#name-input");
console.log(inputName)

const output = document.querySelector("#name-output");
console.log(output)

inputName.addEventListener('input', (event) => {
    // console.log(event);
    
    if (inputName.value) { 
    return output.textContent = event.currentTarget.value;
        
    } return output.textContent = "Anonimus"

})