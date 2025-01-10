#### 203. У чому полягає різниця між require/module.exports і ES6-модулями?

Різниця між `require/module.exports` та ES6-модулями полягає в синтаксисі та способі завантаження модулів в JavaScript. Розглянемо основні відмінності:

### `require/module.exports`

1. **Синтаксис і стандарт**: 
   - `require` та `module.exports` є частинами старішої системи модулів CommonJS, яка широко використовується в Node.js.
   - Використовує синхронне завантаження модулів, тобто модулі завантажуються під час виконання коду.

2. **Імпорт та експорт**:
   - Модулі завантажуються за допомогою `require`:
     ```javascript
     const myModule = require('./myModule');
     ```
   - З модулів експортуються елементи через `module.exports`:
     ```javascript
     module.exports = {
       myFunction,
       myVariable,
     };
     ```

3. **Використання в браузерах**:
   - CommonJS модулі не підтримуються нативно в браузерах без додаткових інструментів.

### ES6-модулями (ECMAScript 2015)

1. **Синтаксис і стандарт**:
   - Введені в стандарті ECMAScript 2015 (ES6).
   - Використовують статичне завантаження модулів, що дозволяє інструментам покращити оптимізацію і мінімізувати кінцевий код.

2. **Імпорт та експорт**:
   - Імпорт за допомогою `import`:
     ```javascript
     import { myFunction, myVariable } from './myModule';
     ```
   - Експорт за допомогою `export`:
     ```javascript
     export const myVariable = 'value';
     export function myFunction() {
       // implementation
     }
     ```
   - Можливість експорту за замовчуванням:
     ```javascript
     export default function myDefaultFunction() {
       // implementation
     }
     import myDefaultFunction from './myModule';
     ```

3. **Використання в браузерах**:
   - ES6-модулі підтримуються в сучасних браузерах без необхідності додаткових інструментів.

### Висновок

Обидві системи мають свої переваги та недоліки. CommonJS є стандартом де-факто для Node.js проектів, тоді як ES6-модулями стають більш переважаючими завдяки підтримці в браузерах та сучасному синтаксису. Використання ES6-модулів часто рекомендовано для нових проектів через їхню гнучкість та інтеграцію з іншими функціями ECMAScript.

| Back | Forward |
|---|---|
| [Як працювати із вбудованими Node.js функціями, реалізованими через callback інтерфейс в async/await стилі?](/ua/senior/nodejs/how-to-work-with-builtin-nodejs-functions-implemented-through-the-callback-interface-in-an-asyncawait-style.md)  | [З яких стадій складається цикл event loop в libuv?](/ua/senior/nodejs/which-stages-make-up-the-event-loop-cycle-in-libuv.md) |