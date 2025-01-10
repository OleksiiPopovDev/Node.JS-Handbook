#### * Use Express.js for SSR (Server-Side Rendering)

Використання Express.js для серверного рендерінгу (SSR) може значно покращити швидкість завантаження ваших веб-сторінок і SEO. Об'єднуючи Express.js з бібліотекою чи фреймворком для рендерінгу на стороні сервера, ви можете передавати готові HTML-сторінки на клієнт. Давайте розглянемо простий приклад використання Handlebars як шаблонізатора з Express.js.

### 1. Налаштування проекту

Спочатку створіть нову папку для вашого проекту і встановіть необхідні залежності:

```bash
mkdir express-ssr-app
cd express-ssr-app
npm init -y
npm install express express-handlebars
```

### 2. Створіть структуру проекту

Створіть базову структуру директорій:

```
express-ssr-app/
│
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   └── home.handlebars
└── server.js
```

### 3. Налаштування Express.js і Handlebars

Відредагуйте файл `server.js`, щоб налаштувати сервер Express.js з підтримкою Handlebars:

```javascript
const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

// Налаштування Handlebars як двигуна рендерінгу
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Налаштування маршруту
app.get('/', (req, res) => {
    res.render('home', { title: 'Головна сторінка', message: 'Ласкаво просимо до Express.js з SSR!' });
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущено на: http://localhost:${PORT}`);
});
```

### 4. Створіть шаблони Handlebars

В `views/layouts/main.handlebars` додайте базовий HTML-шаблон:

```handlebars
<!DOCTYPE html>
<html>
<head>
    <title>{{title}}</title>
</head>
<body>
    {{{body}}}
</body>
</html>
```

В `views/home.handlebars` додайте контент для головної сторінки:

```handlebars
<h1>{{message}}</h1>
<p>Це приклад рендерінгу на сервері за допомогою Express.js і Handlebars.</p>
```

### 5. Запуск сервера

Тепер запустіть сервер командою:

```bash
node server.js
```

Відкрийте веб-браузер і перейдіть за адресою `http://localhost:3000`. Ви повинні побачити вашу серверно-рендерену HTML-сторінку.

Цей приклад описує базове налаштування Express.js для серверного рендерінгу. Залежно від вимог вашого проекту, ви можете інтегрувати інші шаблонізатори або навіть фреймворки на зразок React, Vue чи Angular для SSR.

| Back | Forward |
|---|---|
| [Integrate authentication mechanisms](/ua/senior/expressjs/integrate-authentication-mechanisms.md)  | [Implement multi-tenancy in Express applications](/ua/senior/expressjs/implement-multitenancy-in-express-applications.md) |