const getElement = document.querySelectorAll(".item");
console.log(`В списке ${getElement.length} категории.`);

const categoriesListElement = [...getElement]
  .map(
    (category) => `Категории: ${category.children[0].textContent},
Количество элементов:${category.children[1].children.length}`
  )
  .join("\n ");

console.log(categoriesListElement);
