#### 194. Наведіть приклади протікання абстракцій у типових системах на базі Node.js.

У Node.js, як і в багатьох інших платформах для розробки, абстракції допомагають розробникам ізолювати складнощі і спростити роботу з кодом. Деякі приклади абстракцій у Node.js:

1. **Модулі та пакети**:
   - **Модульний підхід**: Node.js підтримує модулі, які дозволяють розбивати код на менші, незалежні файли. Наприклад, використання `require` для імпорту бібліотек створює абстракцію, яка дозволяє не замислюватися про реалізацію, а працювати лише з API модуля.
   ```js
   const express = require('express');
   const app = express();
   ```
   - **npm пакети**: Величезна екосистема модулів і пакетів npm дозволяє розробнику користуватися готовими рішеннями без занурення в їх внутрішню реалізацію.

2. **Middleware в Express.js**:
   - **Middleware**: Це проміжні функції, які мають доступ до об'єкта запиту (req), відповіді (res) і до функції `next` в циклі запиту-відповіді додатку. Вони дозволяють будувати абстракції для спільних функцій, таких як обробка помилок, логування та аутентифікація.
   ```js
   app.use((req, res, next) => {
     console.log('Time:', Date.now());
     next();
   });
   ```

3. **Проміси та async/await**:
   - **Проміси**: Використання обіцянок (Promise) для асинхронних операцій дозволяє працювати з потоками обчислень та обробляти результат, не переймаючись деталями виконання цих операцій.
   ```js
   const fetchData = () => {
     return new Promise((resolve, reject) => {
       // Асинхронна операція...
       resolve('Data received');
     });
   };

   fetchData().then(data => console.log(data));
   ```
   - **async/await**: Це надбудова над промісами, яка спрощує написання асинхронного коду, роблячи його більш схожим на синхронний.
   ```js
   async function getData() {
     const data = await fetchData();
     console.log(data);
   }
   ```

4. **Streams**:
   - **Потоки**: Node.js має потужну систему потоків, яка абстрагує роботу з даними, що приходять по частинах. Ви можете працювати з потоками даних так само, як з масивами, без потреби зберігати всі дані в пам'яті.
   ```js
   const fs = require('fs');
   const readStream = fs.createReadStream('largeFile.txt');
   readStream.on('data', chunk => {
     console.log(`Received ${chunk.length} bytes of data.`);
   });
   ```

Кожна з цих абстракцій дозволяє розробникам писати більш організований, зрозумілий і підтримуваний код.

| Back | Forward |
|---|---|
| [У чому полягає проблема товстих контролерів?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/whats-the-problem-with-fat-controllers.md)  | [Як можна створити singleton за допомогою системи модульності у Node.js?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/how-can-i-create-a-singleton-using-the-module-system-in-nodejs.md) |