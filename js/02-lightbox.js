import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
const newImg = galleryItems
  .map(
    (image) =>
      `<a class="gallery__item" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
        data-source="${image.original}"                      
      alt="${image.description}"
    />
  </a>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", newImg);

const lightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionDelay: 250,
  captionsData: "alt",
});
lightbox.next();

/* list.addEventListener("click", (e) => {
  e.preventDefault(); */
