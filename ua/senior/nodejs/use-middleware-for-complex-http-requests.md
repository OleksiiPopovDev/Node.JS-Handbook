#### * Use middleware for advanced request handling

У Node.js, middleware - це функції, які виконуються під час обробки запитів на маршрути. Вони можуть виконувати різноманітні завдання, такі як перевірка автентифікації, обробка помилок або модифікація запитів та відповідей. Використання middleware дозволяє структурувати код у вигляді менших, керованих шматків, що покращує читабельність і підтримуваність.

### Використання Middleware в Express.js

Express.js, популярний фреймворк для Node.js, має потужну систему middleware. Ось приклад використання middleware у Express.js:

```javascript
const express = require('express');
const app = express();

// Приклад простого middleware
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); // Передає запит наступному middleware або маршруту
}

app.use(logger); // Додає middleware до всієї програми

// Інше middleware для перевірки автентифікації
function checkAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
}

// Застосування middleware для конкретного маршруту
app.get('/dashboard', checkAuth, (req, res) => {
  res.send('Welcome to the dashboard!');
});

// Стандартне оброблення помилок middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### Типи Middleware

1. **Глобальні Middleware (Application-level):** Встановлюються за допомогою `app.use()` і застосовуються до всього додатку.

2. **Маршрутні Middleware (Route-level):** Застосовуються до певного маршруту або групи маршрутів.

3. **Помилкові Middleware (Error-handling):** Призначені для обробки помилок. Відрізняються тим, що в них використовується 4 параметри: `err`, `req`, `res`, `next`.

4. **Вбудовані Middleware:** Express.js постачається з рядом вбудованих middleware, таких як `express.json()` та `express.static()`.

5. **Третіх сторін Middleware:** Можна встановити і використовувати платформи, такі як `body-parser`, `cors` чи `morgan`.

Middleware функціонує за принципом 'ланцюжок відповідальності', що дозволяє створювати безліч кроків для обробки HTTP-запитів, які можна легко керувати і розширювати.

| Back | Forward |
|---|---|
| [Як би ви використали стрими для покращення продуктивності вебзастосунку?](/ua/senior/nodejs/210-how-would-you-use-streams-to-improve-the-productivity-of-a-web-application.md)  | [Implement custom logging systems (e.g., Winston, Pino)](/ua/senior/nodejs/implement-custom-logging-systems-eg-winston-pino.md) |