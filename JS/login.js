const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const validateInput = ({target}) => {
    if (target.value.length > 2){
        button.removeAttribute('disabled');
        return;
    }
        button.setAttribute('disabled', '');
        
}

const handlesubmit = (event) =>{
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html'; // redireciona a pessoa para página do jogo.


}


    

input.addEventListener('input',validateInput);
form.addEventListener('submit',handlesubmit);