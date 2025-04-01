const data = {
  Vegeatables: ["Carrot", "Cucumber"],
  Fruits: [
    "Apple",
    "Banana",
    "Pear",
    "Watermelon",
    "Grape",
    "Strawberry",
    "Mango",
    "Blackberry",
  ],
  Spices: ["Salt", "Pepper", "Chilli", "Herbs", "Curry"],
};

// add buttons
const button_list = document.querySelector(".buttons");

Object.entries(data).forEach(([key, value], index) => {
  let newLi = document.createElement("li");
  newLi.innerHTML = `(${index + 1}) ${key}`;

  if (key == "Vegeatables") {
    newLi.classList.add("clicked");
  }

  button_list.appendChild(newLi);
});

// add items
const item_list = document.querySelector(".item-list");

for (let item of data["Vegeatables"]) {
  let new_li = document.createElement("li");
  new_li.textContent = item;
  item_list.appendChild(new_li);
}

// handle item click
itemOnClick();

const buttons = document.querySelectorAll(".buttons li");
var current_button = "Vegeatables";
const list_title = document.querySelector(".title");
list_title.innerHTML = `List (${data[current_button].length})`;

// handle button click event
for (let button of buttons) {
  button.addEventListener("click", () => {
    let button_clicked = button.innerHTML.split(" ")[1];

    // if click another button
    if (current_button != button_clicked) {
      current_button = button_clicked;
      document.querySelector(".buttons li.clicked").classList.remove("clicked");
      button.classList.add("clicked");
      item_list.replaceChildren();

      // add item to item list
      for (let item of data[current_button]) {
        let new_li = document.createElement("li");

        new_li.textContent = item;
        item_list.appendChild(new_li);
      }

      // handle item click
      itemOnClick();

      list_title.innerHTML = `List (${data[current_button].length})`;
    }
  });
}

function itemOnClick() {
  let items = document.querySelectorAll(".item-list li");

  for (let item of items) {
    item.addEventListener("click", () => {
      let item_clicked = document.querySelector(".item-list li.clicked");
      if (item_clicked) {
        item_clicked.classList.remove("clicked");
      }
      item.classList.add("clicked");
    });
  }
}
