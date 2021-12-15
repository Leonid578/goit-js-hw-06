const input = document.querySelector('#validation-input');

input.addEventListener('blur', onValidBlur )


const number = 6;

function onValidBlur (){
    if (input.value.length == number ){
        input.classList.add('valid')
        input.classList.remove('invalid')
    } else if (input.value.length === 0){
        input.classList.remove('valid')
        input.classList.remove('invalid')
    } else {
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
}
