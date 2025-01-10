#### 202. Як працювати із вбудованими Node.js функціями, реалізованими через callback інтерфейс в async/await стилі?

У Node.js багато вбудованих функцій використовують старий підхід з callback функціями для обробки асинхронності. Часом буває зручніше використовувати новішу синтаксичну конструкцію `async/await`, щоб код був читабельнішим і зручнішим у відладці. Для цього можна використовувати модуль `util` з Node.js, який надає функцію `promisify`.

### Приклад використання `util.promisify`

`util.promisify` перетворює функції, що працюють з callback, на функції, які повертають проміси. Це дозволяє зручно використовувати їх з async/await.

#### Кроки перетворення:

1. **Імпортувати** модуль `util`:
   ```javascript
   const util = require('util');
   ```

2. **Перетворити** callback-функцію у функцію, яка повертає проміс, використовуючи `util.promisify`:
   ```javascript
   const fs = require('fs');
   const readFileAsync = util.promisify(fs.readFile);
   ```

3. **Використовувати** з async/await:
   ```javascript
   async function main() {
     try {
       const data = await readFileAsync('example.txt', 'utf8');
       console.log(data);
     } catch (error) {
       console.error('Error reading file:', error);
     }
   }

   main();
   ```

### Пояснення:

- `fs.readFile` зазвичай приймає callback як останній аргумент. `util.promisify` перетворює цю функцію так, що вона замість цього повертає проміс.
- Таким чином, ви можете використовувати `await` для очікування завершення асинхронної операції та обробляти результат або помилку в стилі try/catch.

Цей підхід допомагає зробити код чистішим і більш зрозумілим, особливо якщо потрібно обробляти кілька асинхронних операцій послідовно.

| Back | Forward |
|---|---|
| [Чи є різниця у виконанні microtasks/macrotasks залежно від версій Node.js?](/ua/senior/nodejs/do-task-types-vary-in-execution-between-nodejs-versions.md)  | [У чому полягає різниця між require/module.exports і ES6-модулями?](/ua/senior/nodejs/what-is-the-difference-between-requiremoduleexports-and-es6-modules.md) |