const grid = document.querySelector ('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');
const backgroudMusic = document.getElementById("background-music");

function playBackgroudMusic(){
    backgroudMusic.play();
}

function pauseBakgroundMusic(){
    backgroudMusic.pause();
}


const figuras = [
    'giraia',
    'kakashi',
    'madara',
    'minato',
    'naruto',
    'sakura',
    'sasuke',
    'tobi',
    'tsunade',
    'orochimaru',

]

const createElement = (tag, className) => {     
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard='';
let secondCard='';

const checkEndGame = ()=>{
    const disabledCards = document.querySelectorAll('.disabled-card');
    if (disabledCards.length == 20){
        clearInterval(this.loop);
        backgroudMusic.pause();
        alert(`Parabéns, ${spanPlayer.innerHTML}!Seu tempo foi: ${timer.innerHTML}`);
       
    }
}

const checkCards = ()=>{
    const firstFigura = firstCard.getAttribute('data-figura');
    const secondFigura = secondCard.getAttribute('data-figura');

    if (firstFigura == secondFigura){

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '' ;
        secondCard = '';




        checkEndGame();
      


    }  
    
    else{
        setTimeout(() =>{
        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');

        firstCard = '';
        secondCard ='';

        },500);
        
    }

}

const revealCard = ({target}) =>{

    if(target.parentNode.className.includes('reveal-card') ){
        return;
    }

    if (firstCard == ''){
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    }  else if (secondCard == ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
       
    }


}

const createCard = (figura) => {
   const card = createElement('div','card');
   const front = createElement('div','face front');
   const back = createElement('div','face back');

   front.style.backgroundImage = `url('../imagen/${figura}.png')`;

   front.className = 'face front';
   back.className ='face back';

   card.appendChild(front);
   card.appendChild(back);

   card.addEventListener('click',revealCard);
   card.setAttribute('data-figura',figura);

   return card;

}

const loadGame = ()  => {

    const dupicateFiguras=[...figuras,...figuras ]; 

    const shuffledArrey = dupicateFiguras.sort(() => Math.random() - 0.5);
    

    shuffledArrey.forEach((figura) =>{
    
        const card = createCard(figura);
        grid.appendChild(card);


    });


}

const startTimer = () =>{
    this.loop = setInterval(() =>{
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime+1;
    }, 1000);
}

window.onload = () =>{

    spanPlayer.innerHTML = localStorage.getItem('player');
    
    startTimer();

loadGame(); 


}








