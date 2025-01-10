#### 30. Як організувати error handler?

Щоб організувати error handler в Express.js, слід створити спеціальну middleware-функцію, яка оброблятиме всі помилки, що виникають у вашому застосунку. Ось простий приклад, як це можна реалізувати:

1. **Створіть middleware-функцію для обробки помилок**:

```javascript
function errorHandler(err, req, res, next) {
  // Визначте статус-код відповіді, зазвичай 500 для загальних помилок сервера
  const statusCode = err.status || 500;
  
  // Відправляйте деталі помилки лише в режимі розробки, щоб уникнути витоку інформації в продакшн
  res.status(statusCode).json({
    message: err.message,
    // Ви можете використовувати NODE_ENV для перевірки середовища
    stack: process.env.NODE_ENV === 'development' ? err.stack : {}
  });
}
```

2. **Зареєструйте error handler в кінці ланцюга middleware**:

```javascript
const express = require('express');
const app = express();

// Інші middleware та маршрути

// Реєстрація error handler має бути після усіх маршрутів
app.use(errorHandler);

// Запуск сервера
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

3. **Використовуйте `next` для передачі помилки**:

У всіх middleware чи маршрутах, коли виникає помилка, ви можете передати її в error handler, викликавши `next(err)`. Наприклад:

```javascript
app.get('/', (req, res, next) => {
  const error = new Error('Something went wrong!');
  error.status = 400; // Інформація про статус, якщо необхідно
  next(error); // Передача помилки в error handler
});
```

Обробник помилок є важливою частиною застосунку, оскільки він допомагає централізовано і безпечно обробляти помилки, надаючи корисну інформацію для розробників та забезпечуючи безпеку у продакшн-середовищі.

| Back | Forward |
|---|---|
| [Як пріоритизувати middleware?](/ua/junior/expressjs/how-to-prioritize-middleware.md)  | [Basic routing with Express.js](/ua/junior/expressjs/basic-routing-with-expressjs.md) |