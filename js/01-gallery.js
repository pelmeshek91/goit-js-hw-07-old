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
const newGalaryItem = document.querySelector(".gallery__item");
newGalaryItem.addEventListener("click", (e) => {
  e.preventDefault();

  const instance = basicLightbox.create(`
    <img src="${image.original}" width="800" height="600">  
`);

  instance.show();
});
console.dir(newGalaryItem);
console.log(galleryItems);
