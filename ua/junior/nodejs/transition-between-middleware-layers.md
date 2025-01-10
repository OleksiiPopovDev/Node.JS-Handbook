#### 23. Transition between middleware layers

У Node.js, зокрема в Express.js, перехід між рівнями проміжного програмного забезпечення (middleware) виконується за допомогою функції `next()`. Це дозволяє передавати контроль виконання з одного middleware-функції до наступної в ланцюжку. Ось основні моменти цього процесу:

1. **Оголошення Middleware**: Middleware - це функція, яка має доступ до об'єктів запиту, відповіді та до наступної функції middleware в життєвому циклі запит/відповідь. Функція має підпис: 

   ```javascript
   function (req, res, next) {
       // Ваш код тут
       next();
   }
   ```

2. **Виклик `next()`**: Кожна middleware-функція може завершити свою роботу і передати контроль до наступної функції за допомогою виклику `next()`. Якщо `next()` не викликати, тоді потік запитів завершиться на цій middleware, і подальші функції або кінцевий обробник так і не будуть викликані.

3. **Обробка помилок**: Якщо в `next()` передати аргумент, вважається, що сталася помилка, і потік управління буде передано до найближчої функції обробки помилок. 

   ```javascript
   function (err, req, res, next) {
       // Обробка помилки тут
   }
   ```

4. **Порядок Важливий**: Порядок оголошення middleware в коді важливий, оскільки вони виконуються послідовно у тому порядку, в якому їх було підключено.

5. **Приклад Middleware Ланцюжка**:

   ```javascript
   const express = require('express');
   const app = express();

   app.use((req, res, next) => {
      console.log('Перше middleware');
      next();
   });

   app.use((req, res, next) => {
      console.log('Друге middleware');
      next();
   });

   app.get('/', (req, res) => {
      res.send('Hello World!');
   });

   app.listen(3000, () => {
      console.log('Сервер запущено на порті 3000');
   });
   ```

У цьому прикладі при кожному запиті на сервер повідомлення з обох middleware буде виведено в консоль, перш ніж сервіс відповість зі вмістом "Hello World!". Це здійснюється за рахунок послідовного виклику `next()`.

| Back | Forward |
|---|---|
| [Understand middleware purpose](/ua/junior/nodejs/understand-middleware-purpose.md)  | [Read and process large files](/ua/junior/nodejs/read-massive-data-sets.md) |