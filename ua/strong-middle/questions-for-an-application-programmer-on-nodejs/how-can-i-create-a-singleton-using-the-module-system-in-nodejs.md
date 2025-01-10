#### 195. Як можна створити singleton за допомогою системи модульності у Node.js?

У Node.js модулі мають кеш, що сприяє легкому створенню singleton об'єктів. Кожен раз, коли модуль імпортується за допомогою `require`, Node.js повертає кешовану версію цього модуля. Це означає, що будь-які зміни, здійснені в експортованих об'єктах, будуть зберігатися для всіх модулів, які імпортують його. Це можна використати для реалізації патерну singleton.

Ось приклад використання singleton через модуль:

**singleton.js**
```javascript
let instance;

class Singleton {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance of Singleton!");
    }
    instance = this;
    this.timestamp = new Date();
  }

  getTimestamp() {
    return this.timestamp;
  }
}

module.exports = new Singleton();
```

**app.js**
```javascript
const singletonA = require('./singleton.js');
const singletonB = require('./singleton.js');

console.log(singletonA === singletonB); // true
console.log(singletonA.getTimestamp()); // Дата створення
console.log(singletonB.getTimestamp()); // Та ж сама дата
```

У цьому прикладі, кожна спроба створити новий екземпляр класу `Singleton` буде кидати помилку. Таким чином ми забезпечуємо єдиний екземпляр класу. При імпорті `singleton.js` в `app.js`, кожна змінна (`singletonA` та `singletonB`) посилається на один і той самий об'єкт.

| Back | Forward |
|---|---|
| [Наведіть приклади протікання абстракцій у типових системах на базі Node.js.](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/what-are-examples-of-abstraction-in-typical-nodejs-systems.md)  | [Наведіть приклад патерну adapter з вбудованих бібліотек.](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/provide-example-of-adapter-pattern-from-builtin-libraries.md) |