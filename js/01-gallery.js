import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryM = createGalleryM(galleryM);


function createGalerryM(gallery) {
    return gallery
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link"
                href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                data-source="${original}"
                />
        </a>
        </div>`;
        })
        .join('');
}

galleryEl.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const imageUrl = event.target.dataset.source;

    instanceLightBox = basicLightbox.create(`<img src="${imageUrl}"/>`, {
        onShow: () => (event.target.src = imageUrl),
    });

    instanceLightBox.show();

    window.addEventListener('keydown', onEscapeKeydown);
}

function onEscapeKeydown(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscadeCode = event.code === ESC_KEY_CODE;

    if (instanceLightBox.visible() && isEscapeCode) {
        instanceLightBox.close(() => window.removeEventListener('keydown', onEscapeKeydown));
    }
}