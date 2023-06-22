const formEl = document.querySelector(".login-form"); // достукались до форми
console.log(formEl);


formEl.addEventListener("submit", (event) => {
    event.preventDefault() // скинули перезавантаження сторінки
    const { elements: { email, password } } = event.currentTarget; //масив переданних значень
    // console.log({ elements: { email, password } }) // 

    if (email.value === "" || password.value === "") { //перевірка чи всі поля заповненні
        alert("Всі поля мають бути заповненними!")// попередження
    }

    console.log(`Email: ${email.value}, Password: ${password.value}`); // записали отриманф данні
    event.currentTarget.reset(); // очистили форму
})