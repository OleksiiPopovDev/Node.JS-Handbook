#### 29. Як пріоритизувати middleware?

У Express.js middleware обробляються в тому порядку, в якому вони оголошені в коді. Ось кілька порад щодо того, як правильно пріоритизувати middleware:

1. **Порядок виклику**: Організуйте middleware у файлі в тому порядку, в якому вони повинні виконуватись. Express.js обробляє їх зверху вниз.

   ```javascript
   const express = require('express');
   const app = express();

   // Перший middleware
   app.use(middlewareOne);

   // Другий middleware
   app.use(middlewareTwo);
   ```

2. **Специфічні перед загальними**: Розміщуйте більш специфічні middleware перед загальними. Наприклад, перевірка авторизації може бути специфічнішою, ніж логування запитів.

   ```javascript
   app.use(authMiddleware);  // Специфічний middleware
   app.use(loggingMiddleware); // Загальний middleware
   ```

3. **Шляхові середовища**: Якщо ваш middleware пов'язаний з конкретними маршрутами, використовуйте путівільні (path-based) middleware перед загальними.

   ```javascript
   app.use('/api', apiMiddleware);  // Middleware для певного шляху
   app.use(generalMiddleware);      // Загальне middleware для всіх шляхів
   ```

4. **Етапи обробки запиту**: Враховуйте етапи обробки запиту - авторизація, валідність даних, обробка, відповіді. Починайте з тих middleware, які обробляють основні завдання (авторизація, валідність запиту) і переходьте до менш важливих (логування, обробка помилок).

5. **Підключення перед маршрутами**: Не забувайте підключати загальні middleware (наприклад, для обробки JSON або файлів cookie) перед визначенням маршрутів, інакше маршрути можуть не працювати належним чином.

   ```javascript
   app.use(express.json());  // Підключаємо middleware для роботи з JSON
   app.use(express.urlencoded({ extended: true }));
   
   app.use('/route', routeHandler);
   ```

Пріоритизація middleware — це важлива частина проектування додатків в Express.js, оскільки від правильного порядку викликів може залежати поведінка всього додатку.

| Back | Forward |
|---|---|
| [Як переходити з однієї middleware в іншу?](/ua/junior/expressjs/how-to-transition-between-middleware.md)  | [Як організувати error handler?](/ua/junior/expressjs/how-to-organize-error-handler.md) |