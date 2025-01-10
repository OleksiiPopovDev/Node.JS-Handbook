#### * Integrate authentication mechanisms

Щоб інтегрувати механізми автентифікації в Express.js, можна використовувати кілька підходів та бібліотек, наприклад Passport.js. Ось кроки, як це зробити:

1. **Встановлення необхідних пакетів:**

   Для початку потрібно встановити необхідні пакети. Найпопулярнішим рішенням для автентифікації є Passport.js. Установіть його разом із модулями стратегії, які ви бажаєте використовувати (наприклад, `passport-local` для локальної автентифікації).

   ```bash
   npm install passport passport-local express-session
   ```

2. **Налаштування Express.js:**

   Спочатку налаштуйте сесію для зберігання стану користувача:

   ```javascript
   const express = require('express');
   const session = require('express-session');
   const passport = require('passport');
   const LocalStrategy = require('passport-local').Strategy;

   const app = express();

   // Налаштування сесії
   app.use(session({
     secret: 'your_secret_key',
     resave: false,
     saveUninitialized: false
   }));

   app.use(passport.initialize());
   app.use(passport.session());
   ```

3. **Налаштування стратегії Passport:**

   Залежно від обраної стратегії, автентифікацію можна налаштувати, наприклад, для `LocalStrategy`:

   ```javascript
   passport.use(new LocalStrategy(
     function(username, password, done) {
       // Приклад простого пошуку користувача
       User.findOne({ username: username }, function (err, user) {
         if (err) { return done(err); }
         if (!user) { return done(null, false, { message: 'Incorrect username.' }); }
         if (!user.validPassword(password)) { return done(null, false, { message: 'Incorrect password.' }); }
         return done(null, user);
       });
     }
   ));
   ```

4. **Серіалізація та десеріалізація користувача:**

   Необхідно визначити, як користувач буде серіалізуватись та десеріалізуватись для зберігання в сесії.

   ```javascript
   passport.serializeUser(function(user, done) {
     done(null, user.id);
   });

   passport.deserializeUser(function(id, done) {
     User.findById(id, function (err, user) {
       done(err, user);
     });
   });
   ```

5. **Створення маршрутів для логіну:**

   Тепер можна створити маршрути для автентифікації користувачів.

   ```javascript
   app.post('/login',
     passport.authenticate('local', {
       successRedirect: '/dashboard',
       failureRedirect: '/login'
     })
   );
   ```

Цей загальний процес охоплює інтеграцію базової автентифікації в Express.js за допомогою Passport.js. Можна додати додаткові стратегії або розширити налаштування з іншими методами перевірки, такими як JWT для токенної автентифікації, OAuth для сторонніх логінів тощо.

| Back | Forward |
|---|---|
| [Build complex middleware systems](/ua/senior/expressjs/build-complex-middleware-systems.md)  | [Use Express.js for SSR (Server-Side Rendering)](/ua/senior/expressjs/use-expressjs-for-serverside-rendering.md) |