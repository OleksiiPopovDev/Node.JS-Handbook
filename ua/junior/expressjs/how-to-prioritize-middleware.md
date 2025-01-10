#### 19. Як пріоритизувати middleware?

У Node.js та Express.js middleware може бути пріоритизований за допомогою порядку, в якому вони оголошені у вашому коді. Ось кілька кроків, які допоможуть вам пріоритизувати middleware:

1. **Порядок визначення**: Middleware виконується в тому порядку, в якому вони визначені. Щоб встановити пріоритет, впевніться, що спочатку ви підключаєте ті middleware, які повинні спрацьовувати першими.

    ```javascript
    const express = require('express');
    const app = express();

    // Middleware 1
    app.use((req, res, next) => {
        console.log('Перше middleware');
        next();
    });

    // Middleware 2
    app.use((req, res, next) => {
        console.log('Друге middleware');
        next();
    });

    // Обробка маршруту
    app.get('/', (req, res) => {
        res.send('Привіт, світ!');
    });

    app.listen(3000);
    ```

2. **Специфічність маршрутів**: Пріоритизуйте middleware, підключаючи їх до специфічних маршрутів, якщо потрібно, щоб вони застосовувалися лише до певних запитів.

    ```javascript
    // Middleware для специфічного маршруту
    app.use('/admin', (req, res, next) => {
        console.log('Admin middleware');
        next();
    });

    app.get('/admin', (req, res) => {
        res.send('Адмін сторінка');
    });
    ```

3. **Функції середовища та умови**: Визначте пріоритет використанням функцій або умов, щоб контролювати виконання певного middleware.

    ```javascript
    // Middleware з умовою
    app.use((req, res, next) => {
        if (req.user.isAdmin) {
            console.log('Виконано тільки для адмінів');
        }
        next();
    });
    ```

4. **Використання пакетів**: Розгляньте використання пакетів або бібліотек, які можуть надавати додаткові інструменти для управління та пріоритизації middleware.

Слід зазначити, що порядок виконання middleware визначає логіку обробки вашого додатку, тому важливо ретельно планувати їхній порядок.

| Back | Forward |
|---|---|
| [Як переходити з однієї middleware в іншу?](/ua/junior/expressjs/how-to-pass-between-middleware.md)  | [Як організувати error handler?](/ua/junior/expressjs/how-to-organize-error-handlers.md) |