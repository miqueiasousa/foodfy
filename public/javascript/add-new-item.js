const buttonAdd = document.querySelectorAll('.button-add');

if (buttonAdd) {
  buttonAdd.forEach(btn =>
    btn.addEventListener('click', event => {
      const field = event.target.parentNode;
      const fieldContainer = field.querySelector('.field__container');
      const fieldItems = field.querySelectorAll('.field__input');
      const newFieldItem = fieldItems[fieldItems.length - 1].cloneNode(true);

      if (newFieldItem.value === '') return false;

      newFieldItem.value = '';

      return fieldContainer.appendChild(newFieldItem);
    })
  );
}
