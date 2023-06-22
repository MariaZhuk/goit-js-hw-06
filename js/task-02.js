const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')
const liEl = ingredients.map(ingredient => { 
  // console.log(ingredient)
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingredient;
  return item;
})

list.append(...liEl);
console.log(list);










