import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryRefs = document.querySelector('.gallery')

galleryRefs.innerHTML = makeNewRender(galleryItems)

galleryRefs.addEventListener('click', openModal)

function makeNewRender(gallery) {
    return gallery.map(i => 
 `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${i.preview}"
      data-source="${i.original}"
      alt="${i.description}"
    />
  </a>
</div>`).join('')
}
makeNewRender(galleryItems)

function openModal(e) {
    e.preventDefault()
    console.log(e.target.dataset.source);
    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" alt="" ></img>`, {
      onShow: (instance) => {
        document.addEventListener("keydown", eventOnModal)
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", eventOnModal)
      }
    })
  
  instance.show()
  function eventOnModal(e) {
    if (e.code === 'Escape') {
             instance.close()
           }
} 
}