const chefs = document.querySelectorAll('.chef-redirect');

if (chefs) {
  chefs.forEach(chef =>
    chef.addEventListener('click', () => {
      const id = chef.getAttribute('id');

      location.href = `/chefs/${id}`;
    })
  );
}
