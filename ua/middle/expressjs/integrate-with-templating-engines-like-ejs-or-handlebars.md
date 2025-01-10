#### * Integrate with templating engines (e.g., EJS, Handlebars)

Щоб інтегрувати Node.js з шаблонізаторами, такими як EJS або Handlebars, ви можете скористатися популярним веб-фреймворком, таким як Express.js. Ось як це зробити:

### Інтеграція з EJS

1. **Встановлення залежностей:**

   Спочатку, переконайтеся, що у вас встановлений Node.js, а потім створіть новий проект і встановіть необхідні пакети:

   ```bash
   npm init -y
   npm install express ejs
   ```

2. **Налаштування Express з EJS:**

   Створіть файл `app.js` і налаштуйте додаток для використання EJS як шаблонізатора:

   ```javascript
   const express = require('express');
   const app = express();

   // Встановлюємо EJS як шаблонізатор
   app.set('view engine', 'ejs');

   // Створюємо маршрути
   app.get('/', (req, res) => {
       res.render('index', { title: 'Головна сторінка', message: 'Ласкаво просимо до EJS!' });
   });

   // Запуск сервера
   app.listen(3000, () => {
       console.log('Сервер запущено на http://localhost:3000');
   });
   ```

3. **Створення EJS шаблона:**

   Створіть директорію `views` і в ній файл `index.ejs` з наступним вмістом:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title><%= title %></title>
   </head>
   <body>
       <h1><%= message %></h1>
   </body>
   </html>
   ```

4. **Запустіть додаток:**

   Виконайте команду:

   ```bash
   node app.js
   ```

   Тепер ваш додаток працює з EJS як шаблонізатором!

### Інтеграція з Handlebars

1. **Встановлення залежностей:**

   Виконайте команду для встановлення Express та Handlebars:

   ```bash
   npm init -y
   npm install express express-handlebars
   ```

2. **Налаштування Express з Handlebars:**

   Створіть файл `app.js` і налаштуйте додаток для використання Handlebars:

   ```javascript
   const express = require('express');
   const exphbs = require('express-handlebars');
   const app = express();

   // Встановлюємо Handlebars як шаблонізатор
   app.engine('handlebars', exphbs());
   app.set('view engine', 'handlebars');

   // Створюємо маршрути
   app.get('/', (req, res) => {
       res.render('index', { title: 'Головна сторінка', message: 'Ласкаво просимо до Handlebars!' });
   });

   // Запуск сервера
   app.listen(3000, () => {
       console.log('Сервер запущено на http://localhost:3000');
   });
   ```

3. **Створення Handlebars шаблона:**

   Створіть директорію `views` і в ній файл `index.handlebars` з наступним вмістом:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>{{title}}</title>
   </head>
   <body>
       <h1>{{message}}</h1>
   </body>
   </html>
   ```

4. **Запустіть додаток:**

   Запустіть сервер:

   ```bash
   node app.js
   ```

   Тепер ваш додаток працює з Handlebars як шаблонізатором!

Ці приклади демонструють базову інтеграцію Express з EJS та Handlebars, дозволяючи вам швидко розпочати роботу з шаблонами у вашому веб-додатку.

| Back | Forward |
|---|---|
| [Create modular routing systems](/ua/middle/expressjs/create-modular-routing-systems.md)  | [Optimize transactional workflows](/ua/middle/expressjs/optimizing-transactional-workflows.md) |