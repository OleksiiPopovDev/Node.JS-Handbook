#### * Use Express.js for SSR (Server-Side Rendering)

### Використання Express.js для SSR (рендеринг на стороні сервера)

Server-Side Rendering (SSR) — це техніка, яка дозволяє генерувати HTML-код на сервері та відправляти його на клієнт. Це завантаження HTML з сервера може покращити час першого завантаження сторінки та оптимізувати SEO, порівняно з клієнтським рендерингом.

Для використання Express.js з SSR, виконайте наступні кроки:

1. **Ініціалізуйте проект:**

   ```bash
   mkdir my-app
   cd my-app
   npm init -y
   npm install express
   ```

2. **Створіть сервер з Express:**

   Створіть файл `server.js`:

   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000;

   app.get('/', (req, res) => {
     res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>SSR with Express</title></head><body><h1>Привіт, світ!</h1></body></html>');
   });

   app.listen(port, () => {
     console.log(`Сервер працює на http://localhost:${port}`);
   });
   ```

3. **Запустіть сервер:**

   Виконайте команду:

   ```bash
   node server.js
   ```

   Відкрийте в браузері [http://localhost:3000](http://localhost:3000), і ви побачите статичний HTML, згенерований сервером.

4. **Інтегруйте шаблони:**

   Щоб рендерити динамічний вміст, ми можемо використовувати шаблонізатори, такі як Pug або EJS. Ось приклад з використанням Pug.

   Встановіть Pug:

   ```bash
   npm install pug
   ```

   Змініть `server.js`:

   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000;

   app.set('view engine', 'pug');

   app.get('/', (req, res) => {
     res.render('index', { title: 'SSR with Express', message: 'Привіт, світ!' });
   });

   app.listen(port, () => {
     console.log(`Сервер працює на http://localhost:${port}`);
   });
   ```

   Створіть папку `views` і файл `views/index.pug`:

   ```pug
   doctype html
   html(lang="en")
     head
       meta(charset="UTF-8")
       title= title
     body
       h1= message
   ```

5. **Перезапустіть сервер** і оновіть сторінку в браузері, щоб побачити динамічно згенеровану сторінку.

### Висновок

Express.js є потужним фреймворком, що дозволяє легко реалізувати серверний рендеринг. З інтеграцією шаблонізаторів ви можете генерувати динамічні веб-сторінки з покращеними SEO характеристиками і швидкістю завантаження.

| Back | Forward |
|---|---|
| [Integrate authentication mechanisms](/ua/senior/expressjs/integrate-security-protocols.md)  | [Implement multi-tenancy in Express applications](/ua/senior/expressjs/implement-multitenancy-in-express-applications.md) |