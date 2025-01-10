#### * Implement DI in services

У Nest.js впровадження залежностей (Dependency Injection - DI) є базовою функцією, яка значно полегшує управління залежностями між класами. Ось кроки для реалізації DI всередині сервісів:

### 1. Створіть Сервіс

Спершу потрібно створити сервіс. Використовуйте CLI команду для генерації файлу сервісу, але тут просто покажемо приклад:

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  getHello(): string {
    return 'Hello World!';
  }
}
```

### 2. Реєстрація Сервісу в Модулі

Кожен сервіс повинен бути оголошений в модулі, щоб Nest.js міг управляти його інстанціацією та ін'єкцією.

```typescript
import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';

@Module({
  providers: [ExampleService],
  exports: [ExampleService] // якщо сервіс потрібно використовувати ще й в інших модулях
})
export class ExampleModule {}
```

### 3. Використання Сервісу через DI

Щоб ін'єктувати `ExampleService` в інший клас, наприклад, в контролер, просто додайте його до конструктора контролера:

```typescript
import { Controller, Get } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller()
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  getHello(): string {
    return this.exampleService.getHello();
  }
}
```

### Пояснення

- **`@Injectable()`**: Декоратор, який робить клас кандидатом для впровадження залежностей.
- **Конструктор з `private readonly exampleService: ExampleService`**: Це дозволяє Nest.js автоматично ін’іектувати `ExampleService` в `ExampleController`.
- **`@Module` декоратор**: Декоратор, що визначає модуль. В ньому вказуємо, які сервіси модуль надає і може експортувати.

Завдяки цим крокам, ви можете без проблем використовувати DI для сервісів у вашому проекті Nest.js.

| Back | Forward |
|---|---|
| [Як реалізувати свій декоратор валідації?](/ua/middle/nestjs/how-to-implement-my-validation-decorator.md)  | [Create and import modules](/ua/middle/nestjs/create-modules.md) |