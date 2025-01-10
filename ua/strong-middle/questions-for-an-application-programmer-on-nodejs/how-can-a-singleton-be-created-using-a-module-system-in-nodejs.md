#### 195. Як можна створити singleton за допомогою системи модульності у Node.js?

У Node.js модулі реалізуються за допомогою `CommonJS`, що дозволяє легко створити singleton. При використанні `require()` модуль кешується після першого завантаження, тому посилання на об'єкт, що експортується, залишається однаковим при будь-якому послідовному виклику `require()` для цього модуля. Щоб створити singleton, можна скористатися цією особливістю.

Ось приклад реалізації singleton у Node.js:

1. Створіть модуль `singleton.js`:

```javascript
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      this.data = Math.random();
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  getData() {
    return this.data;
  }
}

module.exports = Singleton;
```

2. Використовуйте модуль в іншому файлі:

```javascript
const Singleton = require('./singleton');

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1.getData());  // Наприклад, 0.123456789
console.log(instance2.getData());  // Такий ж самий, як у instance1 (0.123456789)
console.log(instance1 === instance2);  // true
```

У цьому прикладі клас `Singleton` перевіряє, чи вже існує створений екземпляр. Якщо так, він повертає вже існуючий екземпляр. Таким чином, незалежно від кількості викликів конструктора нового екземпляра, буде використовуватись один і той же екземпляр.

| Back | Forward |
|---|---|
| [Наведіть приклади протікання абстракцій у типових системах на базі Node.js.](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/give-examples-of-abstraction-leaks-in-typical-systems-based-on-nodejs.md)  | [Наведіть приклад патерну adapter з вбудованих бібліотек.](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/whats-an-example-of-the-adapter-pattern-from-a-builtin-library.md) |