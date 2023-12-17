const photoContainer = document.getElementById("photo-container");

function renderPhotos() {

  const width = window.innerWidth;

  let content = '<div class="column">';

  for (let i = 0; i < 50; i++) {

    if (width < 768) {
      if (i !== 0 && i % 25 === 0) {
        content += `</div><div class="column">${getPhotoElement(i + 1)}`;
      } else {
        content += getPhotoElement(i + 1);
      }

    } else if (width >= 768 && width < 991) {
      if (i !== 0 && i % 17 === 0) {
        content += `</div><div class="column">${getPhotoElement(i + 1)}`;
      } else {
        content += getPhotoElement(i + 1);
      }

    } else if (width >= 992 && width < 1200) {
      if (i !== 0 && i % 13 === 0) {
        content += `</div><div class="column">${getPhotoElement(i + 1)}`;
      } else {
        content += getPhotoElement(i + 1);
      }

    } else if (width >= 1200) {
      if (i !== 0 && i % 10 === 0) {
        content += `</div><div class="column">${getPhotoElement(i + 1)}`;
      } else {
        content += getPhotoElement(i + 1);
      }
    }

  }

  content += '</div>';

  photoContainer.innerHTML = content;

}

function getPhotoElement(photoId) {
  return `
    <a href="#" class="photo">
      <img loading="lazy" alt="Photo ${photoId}" src="img/photo_${photoId}.jpeg">
    </a>
  `;
}

renderPhotos();

window.addEventListener('resize', renderPhotos);


