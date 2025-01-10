#### 202. Як працювати із вбудованими Node.js функціями, реалізованими через callback інтерфейс в async/await стилі?

Для роботи з вбудованими Node.js функціями, які використовують callback інтерфейс, в async/await стилі, можна скористатися пакетом `util` з Node.js, який надає функцію `promisify`. Ця функція дозволяє перетворити callback-функції на ті, які повертають Promise, що потім можна використовувати з `async/await`.

Ось як це можна зробити:

1. **Імпортувати модуль `util`:**

   ```javascript
   const util = require('util');
   ```

2. **Перетворити callback-функцію на Promise за допомогою `promisify`:**

   Наприклад, якщо ви працюєте з вбудованою функцією `fs.readFile`, яка зазвичай використовує callback:

   ```javascript
   const fs = require('fs');
   const readFileAsync = util.promisify(fs.readFile);
   ```

3. **Використовувати перетворену функцію з async/await:**

   Після цього можна використовувати `readFileAsync` в async-функціях:

   ```javascript
   async function read() {
     try {
       const data = await readFileAsync('example.txt', 'utf8');
       console.log(data);
     } catch (err) {
       console.error(err);
     }
   }

   read();
   ```

Таким чином, за допомогою `util.promisify`, вбудовані функції Node.js, які підтримують callback інтерфейс, можна зручно використовувати разом з `async/await`, що покращує читабельність коду та полегшує обробку асинхронних операцій.

| Back | Forward |
|---|---|
| [Чи є різниця у виконанні microtasks/macrotasks залежно від версій Node.js?](/ua/senior/nodejs/is-there-a-difference-in-microtaskmacro-task-execution-between-nodejs-versions.md)  | [У чому полягає різниця між require/module.exports і ES6-модулями?](/ua/senior/nodejs/what-is-the-difference-between-requiremoduleexports-and-es6-modules.md) |