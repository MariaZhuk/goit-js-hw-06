const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector(".gallery");// доступ до списку(ul)



const imgEl = images.map(({url, alt }) =>  //перебираємо масив об"єктів images, робимо деструктурізацію параметрів
  `<li class = "js-item"><img src="${url}" alt ="${alt}" width="100"></img></li>` ).join('')
  // створюємо розмітку яку будемо додавати до списку



galleryEl.insertAdjacentHTML('afterbegin', imgEl) // додаємо до списку після початку списку

galleryEl.style.display = "flex";
galleryEl.style.flexDirection = "column"
galleryEl.style.listStyle = "none";
galleryEl.style.padding = 0; 
galleryEl.style.margin = 0;

console.log(galleryEl) // виводимо в коносль

  