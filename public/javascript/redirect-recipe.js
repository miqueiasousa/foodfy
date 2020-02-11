const recipes = document.querySelectorAll('.recipe-redirect');

if (recipes) {
  recipes.forEach(recipe =>
    recipe.addEventListener('click', () => {
      const id = recipe.getAttribute('id');

      location.href = `/recipes/${id}`;
    })
  );
}
