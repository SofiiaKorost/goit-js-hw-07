import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryM = createGalleryM(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryM);


function createGalleryM(gallery) {
    return gallery.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
        </a>
        </div>
    `;
    })
        .join('');
}

galleryEl.addEventListener('click', onImgClick);
let instanceLightBox;

function onImgClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const imgUrl = event.target.dataset.source;

    instanceLightBox = basicLightbox.create(`<img src="${imgUrl}"/>`, {
        onShow: () => (event.target.src = imgUrl),
    });

    instanceLightBox.show();

}

galleryEl.addEventListener('keydown', onEscKeydown);

function onEscKeydown(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscCode = event.code === ESC_KEY_CODE;

    if (instanceLightBox.visible() && isEscCode) {
        instanceLightBox.close(() => window.removeEventListener('keydown', onEscKeydown));
    }
}