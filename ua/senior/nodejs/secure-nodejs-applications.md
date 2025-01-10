#### * Secure Node.js applications (e.g., helmet.js, sanitization libraries)

Для забезпечення безпеки Node.js додатків можна скористатися декількома методами та бібліотеками:

### 1. Використання Helmet.js
Helmet.js — це middleware для Express, що допомагає налаштувати HTTP заголовки для підвищення безпеки додатку.

- **Встановлення:**
  ```bash
  npm install helmet
  ```

- **Використання:**
  ```javascript
  const express = require('express');
  const helmet = require('helmet');

  const app = express();

  // Підключення Helmet
  app.use(helmet());

  // Інші налаштування вашого додатку
  ```

### 2. Санітизація вхідних даних
Санітизація допомагає запобігти ін'єкціям та іншим атакам через недовірені вхідні дані. Бібліотеки для санітизації допомагають очищати ці дані.

- **sanitize-html:**
  ```bash
  npm install sanitize-html
  ```

  ```javascript
  const sanitizeHtml = require('sanitize-html');

  const clean = sanitizeHtml(dirtyHtml, {
    allowedTags: [],
    allowedAttributes: {}
  });

  ```

- **express-validator:**
  Цей модуль допомагає валідувати та санітизувати вхідні дані у запитах.

  ```bash
  npm install express-validator
  ```

  ```javascript
  const { body, validationResult } = require('express-validator');

  app.post('/user', [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 5 }).escape()
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Обробка даних користувача
  });
  ```

### 3. Захист від CSRF
Cross-Site Request Forgery (CSRF) атаки можна пом'якшити за допомогою використання токенів.

- **csurf:**
  ```bash
  npm install csurf
  ```

  ```javascript
  const csurf = require('csurf');

  // Налаштування CSRF захисту
  const csrfProtection = csurf({ cookie: true });

  app.use(cookieParser());
  app.use(csrfProtection);

  app.get('/form', (req, res) => {
    // Видаємо CSRF токен у форму
    res.render('send', { csrfToken: req.csrfToken() });
  });
  ```

### 4. Лімітування запитів
Лімітування запитів допомагає захистити додаток від DDoS атак та надлишкового використання ресурсу.

- **express-rate-limit:**
  ```bash
  npm install express-rate-limit
  ```

  ```javascript
  const rateLimit = require('express-rate-limit');

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 хвилин
    max: 100 // Обмеження до 100 запитів з одного IP
  });

  // Застосування до всіх запитів
  app.use(limiter);
  ```

Застосування цих методів та бібліотек допоможе забезпечити базовий рівень безпеки Node.js додатків. Не забувайте регулярно оновлювати свої залежності та стежити за останніми практиками безпеки.

| Back | Forward |
|---|---|
| [Use performance monitoring tools (e.g., Prometheus, New Relic)](/ua/senior/nodejs/use-performance-monitoring-tools-like-prometheus-and-new-relic.md)  | [Analyze event loop behavior](/ua/senior/nodejs/analyze-event-loop-behavior.md) |