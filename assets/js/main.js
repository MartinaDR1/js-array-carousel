let img = document.createElement("img"); 
  
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

for (let i = 0; i<images.length; i++){
    const imgArrayEl= images[i];
    const imgElement = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="${imgArrayEl}" alt="">`
    console.log(imgElement);

    //Inserisco all'interno della DOM
    imagesElement.innerHTML += imgElement
}