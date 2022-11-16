import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryRefs = document.querySelector('.gallery')

galleryRefs.innerHTML = makeNewRender(galleryItems)

function makeNewRender(galery) {
    return galery.map(i =>  
    `<a class="gallery__item" 
    href="${i.original}">
    <img class="gallery__image" 
    src="${i.preview}" 
    alt="${i.description}" />
    </a>`).join('')
}

galleryRefs.addEventListener('click', openModal())

function openModal() {
    var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
}