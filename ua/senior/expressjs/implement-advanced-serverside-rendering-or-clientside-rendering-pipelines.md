#### * Implement advanced SSR or CSR pipelines

Щоб реалізувати складні пайплайни Server-Side Rendering (SSR) або Client-Side Rendering (CSR) у Node.js з використанням Express.js, необхідно враховувати низку аспектів. Нижче наведений приклад підходу для кожного з цих варіантів.

### SSR (Server-Side Rendering) з Express.js

1. **Налаштування середовища**:
   - Переконайтеся, що у вас є Express.js, Node.js та інші необхідні пакети встановлені, наприклад, `react`, `react-dom/server`, `babel`.
   
2. **Створення сервера**: 
   ```javascript
   const express = require('express');
   const React = require('react');
   const ReactDOMServer = require('react-dom/server');
   const App = require('./App').default; // ваш React компонент

   const app = express();

   app.get('*', (req, res) => {
     const appString = ReactDOMServer.renderToString(React.createElement(App));

     // Простий HTML-шаблон
     const html = `
       <!DOCTYPE html>
       <html>
         <head>
           <title>SSR Example</title>
         </head>
         <body>
           <div id="root">${appString}</div>
           <script src="/bundle.js"></script> <!-- ваш JS bundle -->
         </body>
       </html>
     `;

     res.send(html);
   });

   app.listen(3000, () => {
     console.log('Сервер запущений на порту 3000');
   });
   ```

3. **Налаштування транспіляції**:
   - Для транспіляції JSX використовуйте Babel з відповідними налаштуваннями, щоб сервер зміг обробляти React компоненти.

4. **Бандлінг та статичні файли**:
   - Впевнитися, що файли (наприклад, `bundle.js`) доступні для запиту. Використовуйте `express.static` для обслуговування статичних ресурсів.

### CSR (Client-Side Rendering) з Express.js

1. **Налаштування середовища**:
   - Ті ж інструменти розробки, як і для SSR, але в даному випадку React компоненти рендерять виключно на клієнтській стороні.

2. **Створення сервера**:
   ```javascript
   const express = require('express');
   const path = require('path');

   const app = express();

   app.use(express.static(path.join(__dirname, 'build'))); // напр. директория з бандлом

   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'build', 'index.html'));
   });

   app.listen(3000, () => {
     console.log('Сервер запущений на порту 3000');
   });
   ```

3. **Процес бандлінгу**:
   - Використовуйте інструменти, як Webpack або Parcel, для створення `bundle.js` файлів, які зберігаються у директорії `build`.

4. **Деплой та обслуговування**:
   - Розгорніть додаток на хостингу, який підтримує Node.js, та налаштуйте проксі для обслуговування SPA (Single Page Application).

### Додаткові налаштування:

- **Оптимізації**:
  - Використовуйте кешування для покращення продуктивності, а також мініфікацію JavaScript для зменшення розміру файлів.
  
- **Управління станом**:
  - Можливе використання Redux або Context API для управління станом додатка.

- **Роутинг**:
  - Для SSR маршрути можуть оброблятись на сервері, а для CSR може використовуватися React Router.

Реалізація складних SSR чи CSR пайплайнів вимагає уважного планування архітектури та врахування специфіки проєкту. Вибір підходу залежить від вимог до SEO, продуктивності та складності додатку.

| Back | Forward |
|---|---|
| [Build middleware systems optimized for performance](/ua/senior/expressjs/build-highperformance-middleware-systems.md)  | [Які є способи масштабувати Node.js сервер?](/ua/senior/architecture/what-are-ways-to-scale-a-nodejs-server.md) |