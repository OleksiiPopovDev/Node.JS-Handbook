#### * Implement multi-tenancy in Express applications

Реалізація багатокористувацької архітектури (multi-tenancy) в Express додатках може бути досягнута за допомогою різних підходів. Ось простий приклад на основі шаблонізації по піддоменах, де кожен піддомен представляє окремого користувача.

**Кроки для реалізації:**

1. **Створіть middleware для визначення tenant (орендаря):**

   Спочатку ви повинні визначити, хто є поточним клієнтом (tenant). Це може бути зроблено за допомогою middleware, яке аналізує піддомен або певний параметр у запиті.

   ```javascript
   function tenantResolver(req, res, next) {
     const host = req.headers.host;
     const tenant = host.split('.')[0]; // Отримуйте піддомен як ім'я орендаря

     req.tenant = tenant; // Зберігаємо ідентифікатор орендаря в запиті
     next();
   }
   ```

2. **Налаштуйте підключення до бази даних для кожного tenant:**

   Наступним кроком є налаштування або вибір правильного підключення до бази даних на основі поточного орендаря.

   ```javascript
   const dbConnections = {};

   function getDbConnection(tenant) {
     if (!dbConnections[tenant]) {
       // Створіть нове підключення до БД для орендаря
       dbConnections[tenant] = createConnection({
         host: 'localhost',
         user: 'user',
         password: 'password',
         database: `${tenant}_db` // Наприклад, ім'я бази даних містить ім'я орендаря
       });
     }

     return dbConnections[tenant];
   }
   ```

3. **Використовуйте tenant-based дані у ваших маршрутах:**

   Тепер, коли ви визначили орендаря і налаштували підключення до БД, можете створювати маршрути, які використовують ці дані.

   ```javascript
   const express = require('express');
   const app = express();

   app.use(tenantResolver);

   app.get('/data', (req, res) => {
     const db = getDbConnection(req.tenant);

     db.query('SELECT * FROM some_table', (err, results) => {
       if (err) {
         return res.status(500).send('Database error');
       }
       res.json(results);
     });
   });

   app.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
   ```

Це базова модель багатокористувацької архітектури. У більш складних випадках ви можете використовувати інші підходи, такі як ізоляція даних на рівні таблиць або навіть середовище з мікросервісами для кожного tenant. Обране рішення залежить від потреб вашої програми та вимог до масштабованості.

| Back | Forward |
|---|---|
| [Use Express.js for SSR (Server-Side Rendering)](/ua/senior/expressjs/use-expressjs-for-serverside-rendering.md)  | [Build middleware systems optimized for performance](/ua/senior/expressjs/build-highperformance-middleware-systems.md) |