class StringBuilder {
  #value; // приватна властивість для зберігання рядка

  constructor(initialValue) {
    this.#value = initialValue;
  }

  // Повертає поточне значення рядка
  getValue() {
    return this.#value;
  }

  // Додає рядок в кінець
  padEnd(str) {
    this.#value += str;
  }

  // Додає рядок на початок
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Додає рядок і на початок, і в кінець
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
