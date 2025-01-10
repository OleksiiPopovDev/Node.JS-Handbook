#### * Write and execute integration tests

На жаль, я не можу виконати код безпосередньо. Однак, можу допомогти написати приклад інтеграційного тесту. Далі наведено приклад інтеграційного тесту для веб-додатка з використанням Node.js, Express, Mocha, та Chai.

### Вимоги:

- **Node.js**: серверна платформа.
- **Express**: веб-фреймворк для Node.js.
- **Mocha**: фреймворк для тестування.
- **Chai**: бібліотека тверджень для Node.js.

### Приклад інтеграційного тесту для API:

#### Крок 1: Налаштування проекту

1. Ініціалізуйте новий проект Node.js:

    ```bash
    mkdir my-integration-test
    cd my-integration-test
    npm init -y
    ```

2. Встановіть потрібні залежності:

    ```bash
    npm install express
    npm install --save-dev mocha chai chai-http
    ```

#### Крок 2: Створіть простий сервер Express

Створіть файл `app.js`:

```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/items', (req, res) => {
    res.json([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
});

module.exports = app;
```

#### Крок 3: Напишіть інтеграційний тест

Створіть папку `test` і файл `test/integration.js`:

```javascript
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /api/items', () => {
    it('should return all items', (done) => {
        chai.request(app)
            .get('/api/items')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                expect(res.body.length).to.equal(2);
                done();
            });
    });
});
```

#### Крок 4: Додайте скрипт тестування в `package.json`

Ваша секція `scripts` у `package.json` має виглядати так:

```json
"scripts": {
    "test": "mocha"
}
```

#### Крок 5: Запустіть тест

Підтвердьте, що ваш сервер працює так, як очікується, виконавши:

```bash
npm test
```

### Пояснення:

- Ми створили простий сервер Express, який повертає список елементів за запитом GET.
- Ми написали інтеграційний тест, який перевіряє, що сервер відповідає масивом елементів та HTTP статусом 200.
- Ми використовували `chai-http` для здійснення HTTP-запиту до нашого додатка.

Тепер ви можете перетворити цю основу в щось більш складне, поступово розширюючи сервер та додаючи нові тести!

| Back | Forward |
|---|---|
| [Implement custom guards](/ua/middle/nestjs/implement-custom-guards.md)  | [Use testing libraries such as Jest for coverage](/ua/middle/nestjs/use-testing-libraries-like-jest-for-coverage.md) |