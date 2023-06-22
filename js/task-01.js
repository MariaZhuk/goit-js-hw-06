const categories = document.querySelector('#categories');

const arrOfCategories = categories.children;

const array = [...arrOfCategories]

let numbers;
let categorie;
let elements;


// console.log("Number of categories: ", list.children.length)

array.forEach(function (element) {
    return numbers = array.length;
   
});
console.log(`Number of categories: ${numbers}`)

array.forEach(function (element) { 
    elements = element.lastElementChild.children.length;
    categorie = element.firstElementChild.textContent;
    console.log(`Category: ${categorie}`);
    console.log(`Elements: ${elements}`)
    
}
)












