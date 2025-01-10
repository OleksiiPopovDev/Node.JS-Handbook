#### * Implement multi-tenancy in Express applications

Для реалізації багатокористувацької архітектури (multi-tenancy) в Express-додатках є декілька підходів. Нижче наведено простий приклад реалізації цього через піддоменну стратегію. У цьому підході кожен клієнт (tenant) отримує свій піддомен.

### Попередні вимоги

1. Використання Node.js та Express.
2. Наявність бази даних з можливістю багатокористувацької підтримки (наприклад, MongoDB, PostgreSQL).

### Кроки для реалізації

1. **Налаштування Express-додатку:**

   Встановіть необхідні залежності:

   ```sh
   npm install express mongoose
   ```

2. **Створення серверу Express:**

   ```javascript
   const express = require('express');
   const app = express();
   const mongoose = require('mongoose');

   // Підключення до бази даних
   const connectDb = (tenant) => {
     const uri = `mongodb://localhost:27017/${tenant}`;
     return mongoose.createConnection(uri, { useNewUrlParser: true, useUnifiedTopology: true });
   };

   const getTenantFromSubdomain = (req) => {
     const host = req.headers.host; // наприклад, tenant1.example.com
     return host.split('.')[0]; // отримати 'tenant1'
   };

   // Middleware для визначення tenant
   app.use((req, res, next) => {
     const tenant = getTenantFromSubdomain(req);
     req.dbConnection = connectDb(tenant); // Отримання з'єднання з відповідною БД
     next();
   });

   app.get('/', (req, res) => {
     res.send(`Привіт з бази ${req.dbConnection.name}`);
   });

   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
     console.log(`Сервер запущено на порту ${PORT}`);
   });
   ```

3. **Структура бази даних:**

   Кожен клієнт може мати свою окрему базу даних або схему, якщо використовуєте PostgreSQL. У випадку MongoDB це може бути окрема колекція в одній базі даних або окрема база даних для кожного клієнта.

4. **Обробка запитів:**

   У цьому прикладі ми використовуємо піддомен для визначення поточного клієнта і підключаємося до відповідної бази даних на основі цього.

### Рекомендації

- **Безпека:** Забезпечте відповідний рівень автентифікації та авторизації для кожного клієнта.
- **Оптимізація:** Якщо у вас багато клієнтів, розгляньте можливість використання пулу з'єднань до бази даних.
- **Моніторинг:** За допомогою логів відслідковуйте діяльність кожного клієнта для запобігання перевищення ресурсів.

Це базова концепція, яка може бути розширена додатковими вимогами залежно від специфіки вашого додатка.

| Back | Forward |
|---|---|
| [Use Express.js for SSR (Server-Side Rendering)](/ua/senior/expressjs/use-expressjs-for-serverside-rendering.md)  | [Build middleware systems optimized for performance](/ua/senior/expressjs/build-highperformance-middleware-systems.md) |