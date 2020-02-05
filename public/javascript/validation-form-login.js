const fields = document.querySelectorAll('.session-form__field input');
const form = document.querySelector('#login');

form.addEventListener('submit', e => {
  const inputs = [...e.target.elements];

  for (const { value } of inputs) {
    if (value === '') {
      e.preventDefault();

      const err = document.createElement('div');
      const message = 'Por favor, preencha todos os campos';

      err.classList.add('messages__box');
      err.classList.add('messages--err');
      err.innerHTML = message;

      fields.forEach(field => field.classList.add('is-invalid'));

      document.querySelector('.messages').appendChild(err);

      return;
    }
  }
});

for (const field of fields) {
  field.addEventListener('invalid', e => {
    e.preventDefault();

    if (!e.target.validity.valid) {
      if (e.target.name === 'email') {
        const err = document.createElement('div');
        const message = 'Email inválido';

        err.classList.add('messages__box');
        err.classList.add('messages--err');
        err.innerHTML = message;

        document.querySelector('.messages').appendChild(err);
      }

      if (e.target.name === 'password') {
        const err = document.createElement('div');
        const message =
          'A senha deve conter no mínimo 1 letra minúscula, 1 letra maiúscula, 1 número e 6 caracteres';

        err.classList.add('messages__box');
        err.classList.add('messages--err');
        err.innerHTML = message;

        document.querySelector('.messages').appendChild(err);
      }
    }
  });
}
