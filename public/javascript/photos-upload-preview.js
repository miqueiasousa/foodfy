class PhotosUploadPreview {
  constructor(limitFiles) {
    this.inputFile = document.querySelector('input[name=files]');
    this.files = [];
    this.limitFiles = limitFiles;
    this.hasLimit = this.hasLimit.bind(this);
    this.getAllFiles = this.getAllFiles.bind(this);
    this.createContainerImg = this.createContainerImg.bind(this);
    this.preview = this.preview.bind(this);
  }

  hasLimit(files) {
    if (files.length > this.limitFiles) {
      alert(`Envie no máximo ${this.limitFiles} fotos!`);

      return true;
    }

    return false;
  }

  getAllFiles() {
    const dataTransfer = new DataTransfer();

    this.files.forEach(file => dataTransfer.items.add(file));

    return dataTransfer.files;
  }

  createContainerImg(src) {
    const previewContainer = document.querySelector('.upload-preview');
    const container = document.createElement('div');
    const img = document.createElement('img');

    img.src = src;

    container.classList.add('upload-preview__photo');
    container.appendChild(img);
    container.addEventListener('click', event => {
      const { target } = event;
      const photo = target.parentNode;
      const photos = Array.from(
        document.querySelectorAll('.upload-preview__photo')
      );
      const index = photos.indexOf(photo);

      photo.remove();

      this.files.splice(index, 1);

      this.inputFile.files = this.getAllFiles();

      return this.inputFile.files;
    });

    previewContainer.appendChild(container);

    return container;
  }

  preview(event) {
    const { target } = event;

    if (this.hasLimit(target.files)) {
      target.value = '';

      return true;
    }

    Array.from(target.files).forEach(file => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => this.createContainerImg(reader.result);

      return this.files.push(file);
    });
  }
}

const photosUploadPreview = new PhotosUploadPreview(5);
const { inputFile, preview } = photosUploadPreview;

if (inputFile) {
  inputFile.addEventListener('change', event => preview(event));
}
