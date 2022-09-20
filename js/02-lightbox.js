import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const galleryItMarkup = createGalerryItMarkup(galleryItems);

galleryEl.innerHTML = galleryItMarkup;

function createGalerryItMarkup(galleryIt) {
    return galleryIt.map(({ preview, original, description }) => {
        return `
    <li>
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
    `;
    })
        .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

