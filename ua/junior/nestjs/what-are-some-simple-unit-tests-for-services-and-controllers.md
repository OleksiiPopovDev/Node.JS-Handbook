#### 82. Write simple unit tests for services and controllers

```markdown
### Простий приклад юніт-тестів для сервісу та контролера в Nest.js

Для написання юніт-тестів у Nest.js зазвичай використовують `Jest`. Давайте розглянемо приклад того, як створити прості тести для сервісу та контролера.

#### Кроки для створення тестів:

1. **Інсталяція Jest**:
   
   Спершу переконайтесь, що у вашому проєкті встановлений Jest разом із `@nestjs/testing`.
   ```bash
   npm install --save-dev jest @nestjs/testing @types/jest ts-jest
   ```

2. **Приклад сервісу** (`example.service.ts`):
   ```typescript
   import { Injectable } from '@nestjs/common';

   @Injectable()
   export class ExampleService {
     getHello(): string {
       return 'Hello World!';
     }

     getNumber(): number {
       return 42;
     }
   }
   ```

3. **Приклад юніт-тестів для сервісу** (`example.service.spec.ts`):
   ```typescript
   import { Test, TestingModule } from '@nestjs/testing';
   import { ExampleService } from './example.service';

   describe('ExampleService', () => {
     let service: ExampleService;

     beforeEach(async () => {
       const module: TestingModule = await Test.createTestingModule({
         providers: [ExampleService],
       }).compile();

       service = module.get<ExampleService>(ExampleService);
     });

     it('should be defined', () => {
       expect(service).toBeDefined();
     });

     it('should return "Hello World!"', () => {
       expect(service.getHello()).toBe('Hello World!');
     });

     it('should return number 42', () => {
       expect(service.getNumber()).toBe(42);
     });
   });
   ```

4. **Приклад контролера** (`example.controller.ts`):
   ```typescript
   import { Controller, Get } from '@nestjs/common';
   import { ExampleService } from './example.service';

   @Controller('example')
   export class ExampleController {
     constructor(private readonly exampleService: ExampleService) {}

     @Get()
     getHello(): string {
       return this.exampleService.getHello();
     }
   }
   ```

5. **Приклад юніт-тестів для контролера** (`example.controller.spec.ts`):
   ```typescript
   import { Test, TestingModule } from '@nestjs/testing';
   import { ExampleController } from './example.controller';
   import { ExampleService } from './example.service';

   describe('ExampleController', () => {
     let controller: ExampleController;
     let service: ExampleService;

     beforeEach(async () => {
       const module: TestingModule = await Test.createTestingModule({
         controllers: [ExampleController],
         providers: [ExampleService],
       }).compile();

       controller = module.get<ExampleController>(ExampleController);
       service = module.get<ExampleService>(ExampleService);
     });

     it('should be defined', () => {
       expect(controller).toBeDefined();
     });

     it('should return "Hello World!" from the service', () => {
       const result = 'Hello World!';
       jest.spyOn(service, 'getHello').mockImplementation(() => result);

       expect(controller.getHello()).toBe(result);
     });
   });
   ```

#### Пояснення:

1. **Створення тестового модуля**:
   - Використовується `TestingModule` для ініціалізації тестового середовища, яке імітує звичну поведінку Nest.js.
   - Це дозволяє легко тестувати області відповідальності кожного класу.

2. **Тести сервісу**:
   - Ми перевіряємо, що сервіс коректно повертає дані, які ми очікуємо від його методів.

3. **Тести контролера**:
   - Ми створюємо мок для `ExampleService` за допомогою `jest.spyOn`, щоб перевірити, чи контролер взаємодіє з сервісом належним чином.

4. **Запуск тестів**:
   - Для запуску тестів, просто виконайте команду:
     ```bash
     npm run test
     ```
     
Цей процес дозволяє впевнитись у правильній роботі як окремих сервісів, так і взаємодії контролерів з цими сервісами в Nest.js додатках.
```

| Back | Forward |
|---|---|
| [Understand basic usage of controllers](/ua/junior/nestjs/what-is-a-controller.md)  | [Create RESTful APIs using controllers](/ua/junior/nestjs/create-restful-apis-using-controllers.md) |