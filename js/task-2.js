class Storage {
  #items; // приватна властивість для зберігання товарів

  constructor(initialItems) {
    this.#items = initialItems;
  }

  // Отримання масиву товарів
  getItems() {
    return this.#items;
  }

  // Додавання нового товару
  addItem(newItem) {
    this.#items.push(newItem);
  }

  // Видалення товару за назвою
  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]