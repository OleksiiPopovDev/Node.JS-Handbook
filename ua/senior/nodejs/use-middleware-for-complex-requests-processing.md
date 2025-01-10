#### * Use middleware for advanced request handling

Використання middleware (проміжного програмного забезпечення) в веб-розробці дозволяє покращити обробку запитів шляхом додавання додаткових шарів операцій між клієнтом та сервером. Ось як можна використовувати middleware для обробки запитів:

### Що таке Middleware?

Middleware — це функції, які виконуються під час обробки запиту перед тим, як запит досягне кінцевої точки обробника (наприклад, контролера в MVC архітектурі). Такі функції можуть модифікувати запит, перевіряти аутентифікацію, вести журнали, обробляти помилки тощо.

### Приклад Використання Middleware

Нижче наведено приклад створення та використання middleware у веб-додатку на Node.js із використанням фреймворку Express.

```javascript
const express = require('express');
const app = express();

// Простий приклад middleware, який логує кожен запит.
const loggerMiddleware = (req, res, next) => {
  console.log(`Запит: ${req.method} ${req.url}`);
  next(); // Переходимо до наступного middleware/обробника
};

// Використання middleware
app.use(loggerMiddleware);

// Інше middleware для аутентифікації (псевдокод)
const authMiddleware = (req, res, next) => {
  if (req.headers.authorization) {
    // Перевірка аутентифікації
    next(); // Авторизовано, переходимо далі
  } else {
    res.status(401).send('Необхідна авторизація');
  }
};

app.use(authMiddleware);

// Оголошення маршруту
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Сервер запущено на порту 3000');
});
```

### Ключові Положення

- **Modularity**: Middleware полегшує модульну розробку, дозволяючи розбити функції на менші, керовані частини.
- **Порядок виконання**: Порядок оголошення `app.use()` має значення, оскільки обробка починається згори вниз.
- **Композиційність**: Ви можете поєднувати декілька middleware для створення гнучкої обробки запитів.
- **Обробка помилок**: Спеціальні middleware для обробки помилок можуть обробляти виключення та повертати відповідні відповіді без зупинки сервера.

Використання middleware дозволяє розширювати функціональність додатків і робити їх більш гнучкими до змін у майбутньому.

| Back | Forward |
|---|---|
| [Як би ви використали стрими для покращення продуктивності вебзастосунку?](/ua/senior/nodejs/how-would-you-use-streams-to-improve-the-performance-of-a-web-application.md)  | [Implement custom logging systems (e.g., Winston, Pino)](/ua/senior/nodejs/implement-a-custom-logging-system-such-as-winston-or-pino.md) |