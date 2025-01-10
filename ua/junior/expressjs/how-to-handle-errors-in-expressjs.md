#### * Handle errors with Express.js middleware

У Express.js, обробка помилок може бути реалізована за допомогою спеціальних middleware-функцій. Помилка у Express.js-функції передається шляхом передачі об'єкта `Error` або рядка з повідомленням про помилку як перший аргумент у `next()`.

### Приклад обробки помилок за допомогою middleware у Express.js:

```javascript
const express = require('express');
const app = express();

// Звичайний маршрут
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Маршрут, що призводить до помилки
app.get('/error', (req, res, next) => {
  // Створюємо нову помилку і передаємо її далі
  const err = new Error('Щось пішло не так!');
  err.status = 500;
  next(err);
});

// Middleware для обробки помилок
app.use((err, req, res, next) => {
  // Встановлюємо статус помилки (якщо визначено) або 500 за замовчуванням
  res.status(err.status || 500);
  // Відправляємо користувачу повідомлення з описом помилки
  res.json({
    error: {
      message: err.message
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});
```

### Пояснення коду:

1. **Маршрути**: 
   - Маршрут `/` відправляє звичне привітання.
   - Маршрут `/error` навмисно створює помилку.

2. **Middleware для обробки помилок**: 
   - Після визначення всіх маршрутів додаємо middleware для обробки помилок.
   - Middleware отримує чотири параметри: `err`, `req`, `res`, `next`.
   - Встановлюється статус коду помилки. Якщо статус у помилки не заданий, використовуємо 500 (внутрішня помилка сервера).
   - Повертається JSON з інформацією про помилку.

Важливо зауважити, що middleware для обробки помилок потрібно розміщувати після всіх інших `app.use()` та маршрутів, щоб воно могло обробляти помилки, які можуть виникнути в цих функціях.

| Back | Forward |
|---|---|
| [Basic routing with Express.js](/ua/junior/expressjs/basic-routing-with-express.md)  | [Що таке асинхронність і асинхронний код?](/ua/junior/javascript/what-is-asynchronous-programming-and-asynchronous-code.md) |