const images = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp',
];

// Selezione l'immagine attiva

let activeImage = 0;

const imagesElement = document.querySelector (`.slider > .images`);

for (let i = 0; i < images.length; i++){
    const imgArrayEl= images[i];
    const imgElement = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="${imgArrayEl}" alt="">`
    

    //Inserisco all'interno della DOM
    imagesElement.innerHTML += imgElement
}

// Seleziono tutte le immagini
const allImages = document.querySelectorAll ('.slider > .images > img');

// Seleziono il bottone next
const btnNext = document.querySelector ('.next');

// Al click

btnNext.addEventListener('click', function(){
    console.log('click');

    // Seleziono l'immagine attiva
    const imagesActive = allImages[activeImage];

    // Rimuovo l'active
    imagesActive.classList.remove('active');

    //Incremento
    activeImage ++

    //Loop per le immagini
    if (activeImage >= images.length) {
        activeImage = 0;
    }

    //Selezione l'immagine successiva
    const nextImg = allImages[activeImage];

    nextImg.classList.add('active');  
   
})
 
// Seleziono il bottone prev
const btnPrev = document.querySelector ('.prev');

// Al click

btnPrev.addEventListener('click', function(){
    console.log('click');

    // Seleziono l'immagine attiva
    const imagesActive = allImages[activeImage];

    // Rimuovo l'active
    imagesActive.classList.remove('active');
    
    //Decremento
    activeImage --

    //Loop per le immagini
    if (activeImage < 0 ) {
        activeImage = 4;
    }

    //Selezione l'immagine successiva
    const nextImg = allImages[activeImage];

    nextImg.classList.add('active');  
   
})