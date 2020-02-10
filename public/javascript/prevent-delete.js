const formDelete = document.querySelector('.form-delete');

if (formDelete) {
  formDelete.addEventListener('submit', e => {
    const confirmation = confirm('Você realmente deseja deletar?');

    if (!confirmation) return e.preventDefault();
  });
}
