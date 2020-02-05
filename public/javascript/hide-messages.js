const messages = document.querySelectorAll('.messages__box');

setTimeout(() => {
  messages.forEach(message => message.remove());
}, 3000);
