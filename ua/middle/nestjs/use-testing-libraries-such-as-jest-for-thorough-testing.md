#### * Use testing libraries such as Jest for coverage

Для тестування застосунків, які побудовані на основі Nest.js, однією з найпопулярніших бібліотек є Jest. Вона відома своєю простотою у використанні та можливістю створювати тести з високим покриттям коду. Ось кілька ключових моментів про використання Jest у проекті з Nest.js:

### Встановлення та налаштування Jest

По-перше, слід встановити Jest і супутні пакети:

```bash
npm install --save-dev jest @types/jest ts-jest
```

Конфігурація Jest може бути здійснена доданням файлу `jest.config.js` у корені проекту:

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts

| Back | Forward |
|---|---|
| [Write and execute integration tests](/ua/middle/nestjs/write-integration-tests.md)  | [Understand WebSocket implementation in Nest.js](/ua/middle/nestjs/understand-websocket-implementation-in-nestjs.md) |,
  transform: {
    '^.+\\.(t|j)s

| Back | Forward |
|---|---|
| {{PREV_TOPIC}}  | {{NEXT_TOPIC}} |: 'ts-jest',
  },
  collectCoverageFrom: [
    '**/*.(t|j)s',
  ],
  coverageDirectory: '../coverage',
  testTimeout: 30000,
};
```

### Створення тестів

Файли тестів у Nest.js зазвичай мають розширення `.spec.ts` і розміщуються поруч із тестованими модулями або в окремій директорії.

Приклад тесту для сервісу:

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return users list', async () => {
    const users = await service.findAll();
    expect(Array.isArray(users)).toBeTruthy();
  });
});
```

### Перевірка покриття коду

Jest дозволяє легко аналізувати покриття коду за допомогою команди:

```bash
npm run test -- --coverage
```

Це згенерує звіт, який показує, скільки відсотків коду покрито тестами, та надасть детальну інформацію про непокриті ділянки.

### Висновок

Jest у поєднанні з Nest.js надає потужний інструментарій для тестування застосунків. Він допомагає контролювати якість коду та забезпечувати високу надійність за рахунок детального тестування.

| Back | Forward |
|---|---|
| {{PREV_TOPIC}}  | {{NEXT_TOPIC}} |