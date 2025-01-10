#### * Prioritize middleware execution

У Express.js порядок виконання middleware визначається їхнім розташуванням у коді. Це означає, що middleware, які визначені раніше, будуть виконані перед тими, що розташовані нижче. Виконання middleware проходить зліва направо зверху вниз. Ось кілька порад, як керувати порядком виконання middleware:

1. **Розміщення в коді**: Розташуйте загальні middleware вище у коді, щоб вони спрацювали насамперед. Наприклад, якщо у вас є логування запитів і автентифікація, логування слід розташувати вище, щоб кожен запит записувався в журнал.

2. **Використання `app.use()`**: Ви можете використовувати `app.use()` для підключення middleware. Більш загальні middleware (наприклад, парсери JSON або Cookie) варто підключити на початку, перед специфічними обробниками маршрутів.

3. **Порядок маршрутів**: Специфічні маршрути слід оголошувати перед загальними. Це забезпечить їх пріоритетне виконання. Наприклад, маршрут для `/users/:id` слід оголосити перед загальнішим маршрутом на зразок `/users`.

4. **Фінальні обробники помилок**: Послідовність middleware повинна завершуватися обробниками помилок, які визначаються як функції з чотирма параметрами `(err, req, res, next)`. Їх слід розташовувати в кінці після всіх middleware і маршрутів.

Зразок коду:

```javascript
const express = require('express');
const app = express();

// Глобальні middleware
app.use(express.json()); // Парсер JSON
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Специфічні маршрути
app.get('/users/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// Загальний маршрут
app.get('/users', (req, res) => {
    res.send('List of users');
});

// Середовище обробки помилок
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000);
```

Грамотно структурований порядок дозволяє ефективніше керувати запитами і відповідами, підвищуючи якість вашого додатку.

| Back | Forward |
|---|---|
| [Implement authentication using Passport.js and JWT](/ua/middle/nestjs/implement-authentication-using-passportjs-and-jwt.md)  | [Create modular routing systems](/ua/middle/expressjs/create-modular-routing-systems.md) |