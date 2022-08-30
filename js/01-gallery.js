import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
const newImg = galleryItems
  .map(
    (image) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
        data-source="${image.original}"                      
      alt="${image.description}"
    />
  </a>
</div>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", newImg);
list.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.tagName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img
      class="gallery__image"
      src="${e.target.dataset.source}"
    />
`);

  instance.show();
});
console.log(galleryItems);
