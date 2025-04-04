function loadData() {
  return fetch("./data.json").then((response) => response.json());
}

loadData().then((res) => {
  let data = res;

  // add buttons
  const button_list = document.querySelector(".buttons");

  Object.entries(data).forEach(([key, value], index) => {
    let newLi = document.createElement("li");
    newLi.id = key;
    newLi.innerHTML = `(${index + 1}) ${key}`;

    if (index == 0) {
      newLi.classList.add("clicked");
    }

    button_list.appendChild(newLi);
  });

  // add items
  const item_list = document.querySelector(".item-list");

  for (let item of data[Object.keys(data)[0]]) {
    let newLi = document.createElement("li");
    newLi.textContent = item;
    item_list.appendChild(newLi);
  }

  // handle item click
  itemOnClick();

  const buttons = document.querySelectorAll(".buttons li");

  // add list title
  const listTitle = document.querySelector(".title");
  listTitle.innerHTML = `List (${data[Object.keys(data)[0]].length})`;

  // handle button click event
  for (let button of buttons) {
    button.addEventListener("click", () => {
      let buttonClicked = document.querySelector(".buttons li.clicked");

      // if click another button
      if (buttonClicked.id !== button.id) {
        buttonClicked.classList.remove("clicked");
        button.classList.add("clicked");
        item_list.replaceChildren();

        // add item to item list
        for (let item of data[button.id]) {
          let newLi = document.createElement("li");

          newLi.textContent = item;
          item_list.appendChild(newLi);
        }

        // handle item click
        itemOnClick();

        listTitle.innerHTML = `List (${data[button.id].length})`;
      }
    });
  }

  function itemOnClick() {
    let items = document.querySelectorAll(".item-list li");

    for (let item of items) {
      item.addEventListener("click", () => {
        itemOnClickHandler(item);
      });
    }
  }

  function itemOnClickHandler(item) {
    let item_clicked = document.querySelector(".item-list li.clicked");
    if (item_clicked) {
      item_clicked.classList.remove("clicked");
    }
    item.classList.add("clicked");
  }
});
