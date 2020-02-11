const photos = document.querySelectorAll('.upload-preview__photo img');

if (photos) {
  photos.forEach(photo =>
    photo.addEventListener('click', event => {
      const photoDiv = event.target.parentNode;
      const removedFiles = document.querySelector('input[name=removed_files]');

      removedFiles.value += `${photoDiv.id}, `;

      return photoDiv.remove();
    })
  );
}
