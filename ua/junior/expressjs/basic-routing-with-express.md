#### * Basic routing with Express.js

Express.js — це популярний веб-фреймворк для Node.js, який спрощує роботу з маршрутами та HTTP-запитами. Ось базовий приклад налаштування маршрутизації в Express.js:

1. **Встановлення Express:**

   Спершу потрібно встановити Express через npm. Виконайте:

   ```bash
   npm init -y   # ініціалізуємо новий проект
   npm install express   # встановлюємо express
   ```

2. **Створення простого серверу з базовими маршрутами:**

   Створіть файл `app.js` і додайте наступний код:

   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000; // встановлюємо порт

   // Основний маршрут
   app.get('/', (req, res) => {
     res.send('Привіт, світе!');
   });

   // Інший маршрут
   app.get('/about', (req, res) => {
     res.send('Це сторінка про нас');
   });

   // Ще один маршрут
   app.get('/users/:id', (req, res) => {
     res.send(`Користувач з ID: ${req.params.id}`);
   });

   // Запуск сервера
   app.listen(port, () => {
     console.log(`Сервер запущено на http://localhost:${port}`);
   });
   ```

3. **Запуск серверу:**

   Запускаємо сервер командою:

   ```bash
   node app.js
   ```

Тепер ви можете перейти в браузер і відвідати `http://localhost:3000/`, `http://localhost:3000/about` та `http://localhost:3000/users/1`, щоб побачити відповідь маршруту.

### Пояснення:

- **app.get(path, callback):** Цей метод визначає маршрут для обробки GET-запитів. Параметр `path` вказує, для якого шляху буде діяти цей маршрут, а `callback` — це функція, яка виконується, коли маршрут викликається.

- **req, res:** `req` об'єкт містить інформацію про HTTP-запит, а `res` об'єкт використовується для відправлення відповіді на запит.

- **req.params:** Використовується для захоплення параметрів маршруту, які передаються через URL.

Цей приклад демонструє основи маршрутизації за допомогою Express.js. Звісно, Express дозволяє створювати більш складні маршрути та налаштування, включаючи POST-запити, Middleware, динамічні параметри та інше.

| Back | Forward |
|---|---|
| [Як організувати error handler?](/ua/junior/expressjs/how-to-organize-error-handlers.md)  | [Handle errors with Express.js middleware](/ua/junior/expressjs/how-to-handle-errors-in-expressjs.md) |