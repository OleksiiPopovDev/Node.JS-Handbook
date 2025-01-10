#### 32. Handle errors with Express.js middleware

У Express.js обробка помилок за допомогою middleware є важливою частиною розробки додатків, оскільки вона дозволяє централізовано керувати помилками і забезпечувати кращий досвід користувача та зрозуміліший код. Ось, як можна реалізувати обробку помилок у Express.js:

1. **Створіть middleware для обробки помилок:**

   Middleware для обробки помилок є особливим типом middleware в Express.js. Його відмінність полягає в тому, що він має чотири параметри: `err`, `req`, `res`, і `next`. Наприклад:

   ```javascript
   function errorHandler(err, req, res, next) {
     console.error(err.stack);
     res.status(500).json({ message: 'Внутрішня помилка сервера!' });
   }
   ```

2. **Зареєструйте middleware для обробки помилок після інших обробок маршрутів:**

   Middleware для обробки помилок потрібно реєструвати після всіх маршрутів та інших middleware:

   ```javascript
   const express = require('express');
   const app = express();

   // Ваші маршрути або інше middleware

   // Middleware для обробки помилок
   app.use(errorHandler);

   app.listen(3000, () => {
     console.log('Сервер працює на порті 3000');
   });
   ```

3. **Генеруйте помилки в коді:**

   Ви можете створювати помилки вручну, використовуючи `next`, коли сигналізуєте про помилку. Це може бути корисним для асинхронних операцій або перевірки умов:

   ```javascript
   app.get('/some-route', (req, res, next) => {
     const error = new Error('Щось пішло не так!');
     error.status = 400;
     next(error);
   });
   ```

4. **Обробка помилок у асинхронних функціях:**

   Для асинхронних операцій варто переконатися, що всі помилки передаються до обробника помилок за допомогою `next`:

   ```javascript
   app.get('/async-route', async (req, res, next) => {
     try {
       // виконується асинхронна операція
       let result = await someAsyncFunction();
       res.send(result);
     } catch (error) {
       next(error); // передаємо помилку обробнику помилок
     }
   });
   ```

5. **Обробляйте різні типи помилок:**

   Обробник помилок може бути вдосконалений для роботи з різними типами помилок:

   ```javascript
   function errorHandler(err, req, res, next) {
     if (res.headersSent) {
       return next(err);
     }
     const status = err.status || 500;
     res.status(status).json({
       message: err.message || 'Внутрішня помилка сервера!',
       // додатково: можна надавати деталі помилки в режимі розробки
       ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
     });
   }
   ```

Централізована обробка помилок робить ваш додаток надійнішим та полегшує підтримку і масштабування.

| Back | Forward |
|---|---|
| [Basic routing with Express.js](/ua/junior/expressjs/basic-routing-with-expressjs.md)  | [Що таке асинхронність і асинхронний код?](/ua/junior/javascript/what-is-asynchronous-programming-and-asynchronous-code.md) |