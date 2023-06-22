const inputEl = document.querySelector("#font-size-control");
console.log(inputEl)


const spanEl = document.querySelector("#text")
console.log(spanEl)


inputEl.addEventListener("input", (event) => { 
    const currentFontSize = event.currentTarget.value;
    spanEl.style.fontSize = `${currentFontSize}px`
})