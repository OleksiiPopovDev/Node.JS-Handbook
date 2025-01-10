#### * Build complex middleware systems

Створення складних middleware систем в Express.js передбачає розробку функцій, які взаємодіють з об'єктами запиту (`req`), відповіді (`res`) і сигналом про завершення обробки запиту (`next`). Ось кроки, як побудувати таку систему:

1. ### Створення Middleware
   Middleware - це функції, які можуть змінювати `req` та `res` об'єкти, завершувати запити або передавати їх далі в ланцюжку обробки за допомогою виклику `next()`.

   ```javascript
   function myMiddleware(req, res, next) {
       // Ваш код для обробки тут
       console.log('Запит отримано на:', req.url);
       next(); // передаємо далі
   }
   ```

2. ### Реєстрація Middleware
   Ви можете зареєструвати middleware на рівні додатку, маршруту або групи маршрутів.

   ```javascript
   const express = require('express');
   const app = express();

   app.use(myMiddleware); // Це застосовує middleware до всіх запитів

   app.get('/', (req, res) => {
       res.send('Головна сторінка');
   });

   app.listen(3000, () => console.log('Сервер слухає на порту 3000'));
   ```

3. ### Передача параметрів у Middleware
   Іноді може бути корисно створювати функції, які повертають middleware з переданими параметрами.

   ```javascript
   function logger(options) {
       return function (req, res, next) {
           if (options.log) {
               console.log(options.message, req.url);
           }
           next();
       };
   }

   app.use(logger({ log: true, message: 'Logging request for:' }));
   ```

4. ### Error Handling Middleware
   Для обробки помилок в Express.js створюються спеціальні middleware з 4 параметрами: `err`, `req`, `res`, `next`.

   ```javascript
   function errorHandler(err, req, res, next) {
       console.error(err.stack);
       res.status(500).send('Щось пішло не так!');
   }

   app.use(errorHandler);
   ```

5. ### Організація та Комбінація Middleware
   Можна створювати групи middleware для зручності управління більш складними системами.

   ```javascript
   const userMiddleware = [
       authenticateUser,
       checkUserPermissions,
       logUserAction,
   ];

   app.use('/user', userMiddleware, userRoutes);
   ```

Ці кроки допоможуть вам з організацією складних middleware систем в додатках на базі Express.js, забезпечуючи гнучкість і масштабованість.

| Back | Forward |
|---|---|
| [Design complex guard strategies](/ua/senior/nestjs/develop-intricate-security-protocols.md)  | [Integrate authentication mechanisms](/ua/senior/expressjs/integrate-security-protocols.md) |