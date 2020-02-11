const images = document.querySelectorAll('.photos-section__preview-img img');

if (images) {
  images.forEach(img =>
    img.addEventListener('click', event => {
      const highlight = document.querySelector(
        '.photos-section__highlight img'
      );

      highlight.src = img.getAttribute('src');
    })
  );
}
