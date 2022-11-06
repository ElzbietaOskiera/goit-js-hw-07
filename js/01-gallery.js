import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const createGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", createGallery);

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  const onClick = event.target.dataset.source;
  if (!onClick) return;

  const instance = basicLightbox.create(`
<img src="${onClick}" width="800" height="600"></img>
 `);
  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && instance.visible()) instance.close();
  });
});

console.log(galleryItems);
