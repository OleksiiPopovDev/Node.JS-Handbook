#### * Create RESTful APIs using controllers

Створення RESTful API за допомогою контролерів зазвичай передбачає використання фреймворків, таких як ASP.NET, Django, Spring, Express.js тощо. Нижче наведено приклад, як створити простий RESTful API з використанням Express.js в Node.js.

### Кроки для створення RESTful API з контролерами в Express.js

1. **Встановлення та ініціалізація проекту**

   Спочатку переконайтеся, що у вас встановлений Node.js і npm. Створіть нову папку для проекту і виконайте ініціалізацію npm:

   ```bash
   mkdir my-restful-api
   cd my-restful-api
   npm init -y
   ```

2. **Встановлення Express**

   Встановіть Express.js:

   ```bash
   npm install express
   ```

3. **Створення базової структури**

   Створіть такі файли та папки для структури:

   ```
   my-restful-api/
   ├── controllers/
   │   └── userController.js
   ├── routes/
   │   └── userRoutes.js
   ├── app.js
   └── package.json
   ```

4. **Написання контролера**

   У `controllers/userController.js` створіть контролер для управління діями:

   ```javascript
   // controllers/userController.js

   exports.getAllUsers = (req, res) => {
     res.status(200).json({ message: "Retrieving all users" });
   };

   exports.getUserById = (req, res) => {
     const userId = req.params.id;
     res.status(200).json({ message: `Retrieving user with ID: ${userId}` });
   };

   exports.createUser = (req, res) => {
     const newUser = req.body;
     res.status(201).json({ message: "User created", user: newUser });
   };

   exports.updateUser = (req, res) => {
     const userId = req.params.id;
     res.status(200).json({ message: `User with ID: ${userId} updated` });
   };

   exports.deleteUser = (req, res) => {
     const userId = req.params.id;
     res.status(200).json({ message: `User with ID: ${userId} deleted` });
   };
   ```

5. **Визначення маршрутів**

   У `routes/userRoutes.js` налаштуйте маршрути:

   ```javascript
   // routes/userRoutes.js

   const express = require('express');
   const router = express.Router();
   const userController = require('../controllers/userController');

   router.get('/users', userController.getAllUsers);
   router.get('/users/:id', userController.getUserById);
   router.post('/users', userController.createUser);
   router.put('/users/:id', userController.updateUser);
   router.delete('/users/:id', userController.deleteUser);

   module.exports = router;
   ```

6. **Налаштування сервера**

   У `app.js` налаштуйте сервіс Express:

   ```javascript
   // app.js

   const express = require('express');
   const app = express();
   const userRoutes = require('./routes/userRoutes');

   // Middleware для парсінгу JSON
   app.use(express.json());

   // Використання маршрутів
   app.use('/api', userRoutes);

   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });
   ```

7. **Запуск сервера**

   Запустіть сервер, використовуючи команду:

   ```bash
   node app.js
   ```

Тепер ви маєте простий RESTful API з основними CRUD операціями для користувачів. Ви можете розвивати його далі, додаючи більше логіки обробки, перевірки даних, аутентифікацію тощо.

| Back | Forward |
|---|---|
| [Write simple unit tests for services and controllers](/ua/junior/nestjs/write-simple-unit-tests-for-services-and-controllers.md)  | [Use Nest.js CLI for project generation and scaffolding](/ua/junior/nestjs/use-the-nestjs-cli-for-project-creation.md) |