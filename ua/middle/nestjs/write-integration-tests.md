#### * Write and execute integration tests

Для написання та виконання інтеграційних тестів у Nest.js, можна використовувати інструментарій, що надається разом з фреймворком, та популярні бібліотеки для тестування, як-от Jest і Supertest.

### Кроки для написання та виконання інтеграційних тестів:

1. **Встановлення необхідних бібліотек:**

Переконайтеся, що у вашому проекті встановлені Jest та Supertest, якщо ще не встановлені, додайте їх:

```bash
npm install --save-dev jest @types/jest supertest
```

2. **Налаштування тестового середовища:**

Майте файл конфігурації `jest-e2e.json` для запуску інтеграційних тестів:

```json
{
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": "src",
  "testRegex": ".e2e-spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "coverageDirectory": "../coverage",
  "testEnvironment": "node"
}
```

3. **Створення інтеграційного тесту:**

Наприклад, створімо інтеграційний тест для контролера, який обробляє запити до API.

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET hello', () => {
    return request(app.getHttpServer())
      .get('/hello')
      .expect(200)
      .expect('Hello World!');
  });

  afterAll(async () => {
    await app.close();
  });
});
```

4. **Запуск тестів:**

Запустіть ваші інтеграційні тести через jest, використовуючи команду:

```bash
npm run test:e2e
```

Для цього, у вашому `package.json` можливо вже є скрипт:

```json
"scripts": {
  "test:e2e": "jest --config ./test/jest-e2e.json"
}
```

### Пояснення коду:

- **Jest** використовується як тестова бібліотека для JavaScript.
- **Supertest** допомагає у відправленні HTTP-запитів до застосунку для тестування ендпоінтів.
- Функція `beforeAll` створює Nest-застосунок перед виконанням всіх тестів.
- Використовується `request(app.getHttpServer())` для надсилання HTTP-запиту.
- Очікуємо отримати HTTP 200 разом з `Hello World!` у відповідь на GET-запит до `/hello`.
- Використовуйте `afterAll` для закриття застосунку після завершення всіх тестів.

Цей підхід забезпечує перевірку того, що всі потрібні частини вашої програми взаємодіють належним чином в реальному середовищі.

| Back | Forward |
|---|---|
| [Implement custom guards](/ua/middle/nestjs/implement-custom-guards.md)  | [Use testing libraries such as Jest for coverage](/ua/middle/nestjs/use-testing-libraries-such-as-jest-for-thorough-testing.md) |