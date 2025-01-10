#### 18. Як переходити з однієї middleware в іншу?

У середовищах розробки на основі Node.js, таких як Express.js, middleware-функції виконуються послідовно, тому перехід від однієї middleware-функції до іншої здійснюється за допомогою виклику `next()`. Ось базовий приклад:

```javascript
const express = require('express');
const app = express();

// Перший middleware
app.use((req, res, next) => {
  console.log('Перша middleware');
  next(); // передаємо виконання наступній middleware
});

// Другий middleware
app.use((req, res, next) => {
  console.log('Друга middleware');
  next(); // передаємо виконання наступній middleware або завершення обробки
});

// Маршрут
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Сервер працює на порту 3000');
});
```

У цьому прикладі, коли запит надходить на сервер, спочатку буде виконано першу middleware-функцію, потім другу, і тільки після цього обробиться маршрут для відповіді. Виклик `next()` є ключовим, щоб сервер знав, що потрібно переходити до наступної middleware у ланцюжку.

| Back | Forward |
|---|---|
| [Для чого використовують middleware?](/ua/junior/expressjs/what-is-the-purpose-of-middleware.md)  | [Як пріоритизувати middleware?](/ua/junior/expressjs/how-to-prioritize-middleware.md) |