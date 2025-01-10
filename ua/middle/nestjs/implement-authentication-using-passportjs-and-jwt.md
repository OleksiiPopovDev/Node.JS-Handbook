#### * Implement authentication using Passport.js and JWT

Для реалізації автентифікації за допомогою Passport.js і JWT в Node.js можна скористатися такими кроками:

### Вимоги
Перед тим, як почати, переконайтеся, що у вас є встановлені `Node.js`, `npm` та створений проект на `Express`.

### Встановлення необхідних пакетів

```bash
npm install express passport passport-jwt jsonwebtoken bcryptjs
```

### Налаштування проекту

#### 1. Створіть файл `config.js`, де зберігатиметься секретний ключ:

```javascript
module.exports = {
  secretOrKey: 'your_secret_key',
};
```

#### 2. Створіть файл `passport.js` для налаштування стратегії JWT:

```javascript
const { Strategy, ExtractJwt } = require('passport-jwt');
const config = require('./config');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secretOrKey,
};

module.exports = passport => {
  passport.use(
    new Strategy(opts, (jwtPayload, done) => {
      // Тут ви можете знайти користувача в базі даних за id з jwtPayload
      const user = getUserFromDb(jwtPayload.id);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
  );
};

// Імітація функції для отримання користувача з бази даних
function getUserFromDb(id) {
  // Інтеграція з вашою базою даних
  return { id, name: 'John Doe' }; // Тимчасовий приклад даних
}
```

#### 3. Створіть файл `server.js` з базовим налаштуванням сервера:

```javascript
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('./config');

// Підключення passport
require('./passport')(passport);

const app = express();
app.use(express.json());

// Роут для реєстрації (зберігає користувача в базу даних)
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Імітація процесу хешування паролю та збереження його в базу даних
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: Date.now().toString(), username, password: hashedPassword };

  // Повернення нового користувача
  res.status(201).json(user);
});

// Роут для входу та генерації JWT токену
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Імітація отримання користувача з бази даних
  const user = getUserFromDbByUsername(username);
  if (!user) {
    return res.status(401).json({ message: 'Користувача не знайдено' });
  }

  // Перевірка пароля
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Неправильний пароль' });
  }

  // Генерація JWT токену
  const payload = { id: user.id }; // Payload може містити інші дані
  const token = jwt.sign(payload, config.secretOrKey, { expiresIn: '1h' });

  res.json({ token: `Bearer ${token}` });
});

// Захищений роут доступний лише з валідним JWT токеном
app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: 'Це захищений ресурс', user: req.user });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});

// Імітація функції для отримання користувача з бази даних
function getUserFromDbByUsername(username) {
  // Інтеграція з вашою базою даних
  if (username === 'John') {
    return { id: '1', username: 'John', password: '$2y$10$somethinghashed' }; // Тимчасовий приклад даних
  }
  return null;
}
```

### Пояснення

- **Passport.js** використовується для лаконічної реалізації автентифікації в Node.js через різноманітні стратегії, включаючи JWT.
- **jsonwebtoken** дозволяє генерувати та перевіряти JWT токени.
- **bcryptjs** використовується для хешування та валідації паролів.

Цей приклад є базовим і можливе його розширення, наприклад, шляхом додавання інтеграції з реальною базою даних та налаштуванням авторизацій для різних типів дій.

| Back | Forward |
|---|---|
| [Create GraphQL APIs using @nestjs/graphql](/ua/middle/nestjs/create-graphql-apis-using-nestjsgraphql.md)  | [Prioritize middleware execution](/ua/middle/expressjs/execute-middleware-first.md) |