// ¡Buena suerte!

/* Solució del Marcos:

const generateBtn = document.querySelector('.card__dice');
const adviceSection = document.querySelector('.card__quote');
const cardNum = document.querySelector(".card__number");

generateBtn.addEventListener('click', () => {
    
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const advice = data.slip.advice;
      adviceSection.textContent= advice;
      const number = data.slip.id;
      cardNum.textContent= "advice #" + number;
      
    })
    
}); */


/* Solució Daniel:

// Selecciona los datos con los que se van a realizar las interecciones 
const dice = document.querySelector(".card__dice");
const id = document.querySelector(".card__number");
const advice = document.querySelector(".card__quote");


// Luego se realiza el llamado a la api con fetch

function loadQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
        //se recibe la espuesta en formato json()
      return response.json();
    })
    //se asigna la respues a cada elemento html asignandole la pripiedad a la que correspone cada uno 
    .then((response) => {
      id.innerHTML = `Advice #${response.slip.id}`;
      advice.innerHTML = `&#8220${response.slip.advice}&#8221`;
    });
}
// se crea  un addEventListener para ejecutar la función de la llamada a la API (loadQuote) cuando de haga click en el (".card__dice").
dice.addEventListener("click", loadQuote); */