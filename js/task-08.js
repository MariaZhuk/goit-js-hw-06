const formEl = document.querySelector(".login-form"); // достукались до форми



formEl.addEventListener("submit", (event) => {
    event.preventDefault() // скинули перезавантаження сторінки
    const { elements: { email, password } } = event.currentTarget; //масив переданних значень

    if (email.value.trim() === "" || password.value.trim() === "") { //перевірка чи всі поля заповненні
        return alert("Всі поля мають бути заповненними!")// попередження
    }
   
    const dataArray = { //записали данні ввода у інпут у об'єкт
        email: email.value,
        password: password.value,
    }
    console.log(dataArray);

    // записали отримані данні
    event.currentTarget.reset(); // очистили форму
})

