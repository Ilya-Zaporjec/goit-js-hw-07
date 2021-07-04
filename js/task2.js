const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

let list = document.querySelector("#ingredients");
list.append(
  ...ingredients.map((ingredient) => {
    const items = document.createElement("li");
    items.textContent = ingredient;
    return items;
  })
);
