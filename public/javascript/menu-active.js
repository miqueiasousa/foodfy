const currentPage = location.pathname;
const menuItems = document.querySelectorAll('.menu__item');

for (const item of menuItems) {
  const itemLink = item.querySelector('a');

  if (currentPage.includes(itemLink.getAttribute('href'))) {
    item.classList.add('menu__item--active');
  }
}
