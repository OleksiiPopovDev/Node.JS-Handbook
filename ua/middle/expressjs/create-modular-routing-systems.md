#### * Create modular routing systems

У Express.js створення модульної системи маршрутизації є важливим підходом до управління кодом, особливо коли мова йде про великі проекти. Це дозволяє організувати маршрути в окремі файли або модулі, полегшуючи їх підтримку та рефакторинг. Ось базовий приклад, як ви можете створити модульну систему маршрутизації:

### Кроки для створення модульної маршрутизації

1. **Створіть папку для маршрутів**

   Створіть нову папку у вашому проекті, наприклад, `routes`, де зберігатимуться всі ваші файли маршрутів.

2. **Створіть окремий файл для кожного маршруту**

   Наприклад, якщо у вас є маршрути для користувачів, створіть файл `userRoutes.js`:

   ```javascript
   // routes/userRoutes.js
   const express = require('express');
   const router = express.Router();

   // Опишіть маршрути
   router.get('/', (req, res) => {
     res.send('Список користувачів');
   });

   router.post('/', (req, res) => {
     res.send('Створити нового користувача');
   });

   module.exports = router;
   ```

3. **Імпортуйте маршрути у вашому додатку**

   У головному файлі вашого сервіса, наприклад, `app.js`, ви можете імпортувати та використовувати ці маршрути:

   ```javascript
   const express = require('express');
   const app = express();

   // Імпорт маршруту
   const userRoutes = require('./routes/userRoutes');

   // Використання маршруту
   app.use('/users', userRoutes);

   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
     console.log(`Сервер запущено на порті ${PORT}`);
   });
   ```

4. **Додайте додаткові маршрути аналогічним способом**

   Ви можете створювати інші файли для різних частин вашого додатку, наприклад, `productRoutes.js`, і імпортувати їх подібним чином.

Цей підхід дозволяє вам розгорнути структуру проекту, яка легше масштабується та спрощує організацію маршрутизації, забезпечуючи зрозумілість і легкість внесення змін у майбутньому.

| Back | Forward |
|---|---|
| [Prioritize middleware execution](/ua/middle/expressjs/execute-middleware-first.md)  | [Integrate with templating engines (e.g., EJS, Handlebars)](/ua/middle/expressjs/integrate-with-templating-engines.md) |