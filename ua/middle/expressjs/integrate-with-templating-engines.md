#### * Integrate with templating engines (e.g., EJS, Handlebars)

Щоб інтегрувати Express.js з шаблонними рушіями, такими як EJS або Handlebars, треба виконати кілька простих кроків:

### Використання EJS

1. **Встановіть EJS:**

   Виконайте команду в консоль:

   ```bash
   npm install ejs
   ```

2. **Задайте EJS як шаблонний рушій в Express:**

   Вкажіть у вашому файлі `app.js` або `server.js`:

   ```javascript
   const express = require('express');
   const app = express();

   app.set('view engine', 'ejs');
   ```

3. **Створіть папку для ваших шаблонів:**

   За замовчуванням, Express буде шукати ваші шаблони у папці `views`. Створіть цю папку у кореневій директорії вашого проекту.

4. **Створіть та рендерте шаблон:**

   Створіть файл шаблону, наприклад `index.ejs`, у папці `views`:

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title><%= title %></title>
     </head>
     <body>
       <h1>Hello, <%= name %>!</h1>
     </body>
   </html>
   ```

   Вказуйте рендеринг цього шаблона у вашому маршруті:

   ```javascript
   app.get('/', (req, res) => {
     res.render('index', { title: 'Home', name: 'World' });
   });
   ```

### Використання Handlebars

1. **Встановіть Handlebars:**

   Вам потрібно буде встановити пакет `express-handlebars`:

   ```bash
   npm install express-handlebars
   ```

2. **Задайте Handlebars як шаблонний рушій:**

   Вкажіть у вашому файлі `app.js` або `server.js`:

   ```javascript
   const express = require('express');
   const exphbs  = require('express-handlebars');
   const app = express();

   app.engine('handlebars', exphbs());
   app.set('view engine', 'handlebars');
   ```

3. **Створіть папку для ваших шаблонів:**

   Створіть папку `views`.

4. **Створіть та рендерте шаблон:**

   Створіть файл шаблону, наприклад `home.handlebars`, у папці `views`:

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>{{title}}</title>
     </head>
     <body>
       <h1>Hello, {{name}}!</h1>
     </body>
   </html>
   ```

   Вказуйте рендеринг цього шаблону у вашому маршруті:

   ```javascript
   app.get('/', (req, res) => {
     res.render('home', { title: 'Home', name: 'World' });
   });
   ```

Таким чином, ви можете інтегрувати шаблонні рушії у свій проект на Express.js для динамічного рендерингу контенту.

| Back | Forward |
|---|---|
| [Create modular routing systems](/ua/middle/expressjs/create-modular-routing-systems.md)  | [Optimize transactional workflows](/ua/middle/expressjs/optimizing-transactional-workflows.md) |