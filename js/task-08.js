// 1) получим нашу форму в переменную
const formEl = document.querySelector('.login-form')

// 2) настроим прослушивание формы на событие отправки
formEl.addEventListener('submit', onBtnSabmit);
    
// 3) напишем функцию которая выполнится при отправке формы на сервер
function onBtnSabmit(event){
    event.preventDefault(); // предотвратим перезагрузку страницы

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail,
        password,
    };

    if(mail === '') {
            alert("Ошибка! Email не может быть пустой строкой!");
        } else if(password === ''){
            alert("Ошибка! Password не может быть пустой строкой!");
        } else { console.log(formData);
            formEl.reset();
        }
}


 
