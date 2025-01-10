#### * Secure Node.js applications (e.g., helmet.js, sanitization libraries)

Для забезпечення безпеки в Node.js додатках існує ряд практик та інструментів, які можуть допомогти захистити ваш проект від типових вразливостей. Ось деякі з них:

1. **Helmet.js**:
   - Helmet.js — це middleware для Express, яке допомагає захищати ваші додатки встановленням різних HTTP-заголовків. Це включає захист від атак, таких як XSS (Cross-Site Scripting), клієнтська ін'єкція коду, маніпуляція заголовками та інші.
   - Проста інтеграція Helmet.js дозволяє швидко додати декілька рекомендованих заголовків безпеки.

   ```javascript
   const helmet = require('helmet');
   app.use(helmet());
   ```

2. **Санітизація та валідація вхідних даних**:
   - Важливо перевіряти та санітизувати всі вхідні дані, щоб запобігти атакам типу SQL ін'єкцій, XSS та іншим.
   - Для цього можна використовувати бібліотеки, такі як `express-validator` або `validator.js`.

   ```javascript
   const { body, validationResult } = require('express-validator');

   app.post('/user', 
     body('username').isAlphanumeric(),
     (req, res) => {
       const errors = validationResult(req);
       if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
       }
       res.send('User is valid');
   });
   ```

3. **Захист від CSRF (Cross-Site Request Forgery)**:
   - Використання middleware, такого як `csurf`, для захисту від міжсайтових запитів фальсифікації.
   - Це допоможе убезпечити ваші форми, забезпечивши, що запити справді є від користувача.

4. **Керування сесіями та аутентифікація**:
   - Використовуйте безпечні методи аутентифікації, такі як OAuth, JWT (JSON Web Tokens), або сервіс Passport.js для керування вхідними даними та сесіями.
   - Обов'язково застосовуйте HTTPS для шифрування даних між клієнтом та сервером.

5. **Регулярно оновлюйте залежності**:
   - Використовуйте `npm audit` для перевірки ваших залежностей на відомі вразливості.
   - Зберігайте оновлені пакети для вчасного отримання виправлень безпеки.

6. **Логування та моніторинг**:
   - Інструменти для логування, як-от Winston або Morgan, можуть допомогти в моніторингу активності та виявленні підозрілої поведінки.
   - Це важливе доповнення до вчасного реагування на потенційні загрози безпеки.

Використання цих практик та інструментів допоможе значно підвищити безпеку вашого Node.js додатку. Завжди пам'ятайте про безпеку додатків і регулярно переглядайте нові загрози та захисні методи.

| Back | Forward |
|---|---|
| [Use performance monitoring tools (e.g., Prometheus, New Relic)](/ua/senior/nodejs/use-performance-monitoring-tools-eg-prometheus-new-relic.md)  | [Analyze event loop behavior](/ua/senior/nodejs/analyze-event-loop-behavior.md) |