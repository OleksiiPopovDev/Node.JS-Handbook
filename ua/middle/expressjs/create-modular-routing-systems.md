#### * Create modular routing systems

Створення модульних систем маршрутизації є важливим аспектом розробки програмних додатків, особливо веб-додатків. Це дозволяє значно спростити підтримку, розширення та організацію коду. Ось загальні кроки, які допоможуть у побудові такої системи:

### 1. **Вибір фреймворка або бібліотеки**

Перш за все, оберіть фреймворк або бібліотеку, яка підтримує модульну маршрутизацію. Наприклад:
- **Node.js з Express** для серверних додатків на JavaScript/TypeScript.
- **React Router** для клієнтських додатків на React.
- **Angular Router** для додатків на Angular.

### 2. **Організація проекту**

Організуйте свій проект так, щоб маршрути були розташовані в окремих модулях. Це може виглядати наступним чином:

```
/routes
  /users.js
  /posts.js
  /comments.js
/app.js
```

### 3. **Визначення маршрутового модуля**

Для кожного модуля створіть власний файл маршрутизації. Наприклад, для модуля `users` у `users.js`:

```javascript
// users.js
const express = require('express');
const router = express.Router();

// Визначте маршрути для користувачів
router.get('/', function(req, res) {
  res.send('Отримати всіх користувачів');
});

router.post('/', function(req, res) {
  res.send('Додати користувача');
});

module.exports = router;
```

### 4. **Імпорт і використання маршрутів у головному файлі**

У вашому головному файлі додатку імпортуйте та використовуйте ці модулі маршрутизації:

```javascript
// app.js
const express = require('express');
const app = express();
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

// Використання модульних маршрутів
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(3000, () => {
  console.log('Сервер працює на порту 3000');
});
```

### 5. **Переваги модульної маршрутизації**

- **Читабельність коду:** Код організовано в невеликих, керованих частинах.
- **Перевикористання коду:** Одні й ті ж маршрути можна легко використовувати в різних проектах.
- **Легкість у підтримці та розширенні:** Легше знаходити та виправляти помилки або додавати нові функції без ризику зламати існуючі.

Загалом, створення модульних систем маршрутизації робить розробку додатка більш керованою і стійкою.

| Back | Forward |
|---|---|
| [Prioritize middleware execution](/ua/middle/expressjs/execute-middleware-first.md)  | [Integrate with templating engines (e.g., EJS, Handlebars)](/ua/middle/expressjs/integrate-with-templating-engines-like-ejs-or-handlebars.md) |