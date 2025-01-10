#### * Write simple unit tests for services and controllers

Розглянемо прості приклади тестування сервісів та контролерів за допомогою Jest у Node.js. Існує безліч тестових фреймворків, але Jest є одним з найпопулярніших завдяки простоті використання.

### Приклад: Сервис для управління користувачами

```javascript
// userService.js

class UserService {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  getUserById(id) {
    return this.users.find(user => user.id === id);
  }

  getAllUsers() {
    return this.users;
  }
}

module.exports = UserService;
```

### Тести для сервісу `UserService`

```javascript
// userService.test.js

const UserService = require('./userService');

describe('UserService', () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
  });

  test('додає нового користувача', () => {
    const user = { id: 1, name: 'Іван' };
    userService.addUser(user);
    expect(userService.getAllUsers()).toContainEqual(user);
  });

  test('повертає користувача за ідентифікатором', () => {
    const user = { id: 1, name: 'Іван' };
    userService.addUser(user);
    const result = userService.getUserById(1);
    expect(result).toEqual(user);
  });

  test('повертає undefined, якщо користувач з таким id не знайдений', () => {
    const result = userService.getUserById(999);
    expect(result).toBeUndefined();
  });
});
```

### Приклад: Контролер для управління запитами

```javascript
// userController.js

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  getUser(req, res) {
    const user = this.userService.getUserById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Користувач не знайдений' });
    }
  }
}

module.exports = UserController;
```

### Тести для контролера `UserController`

```javascript
// userController.test.js

const UserController = require('./userController');
const UserService = require('./userService');

describe('UserController', () => {
  let userService;
  let userController;
  let req;
  let res;

  beforeEach(() => {
    userService = new UserService();
    userController = new UserController(userService);

    req = { params: { id: 1 } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  });

  test('повертає 200 і користувача, якщо користувач знайдений', () => {
    const user = { id: 1, name: 'Іван' };
    userService.addUser(user);

    userController.getUser(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(user);
  });

  test('повертає 404, якщо користувача не знайдено', () => {
    userController.getUser(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Користувач не знайдений' });
  });
});
```

Ці приклади демонструють, як можна створювати юніт-тести для перевірки правильної роботи сервісів і контролерів у Node.js. Використання Jest дозволяє легко перевіряти функціональність, викликати й перевіряти статуси та відповідь у контролерах.

| Back | Forward |
|---|---|
| [Understand basic usage of controllers](/ua/junior/nestjs/understand-controller-basics.md)  | [Create RESTful APIs using controllers](/ua/junior/nestjs/create-restful-apis-using-controllers.md) |