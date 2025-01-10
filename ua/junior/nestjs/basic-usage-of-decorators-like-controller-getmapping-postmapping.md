#### * Basic usage of decorators like @Controller, @Get, @Post

В JavaScript фреймворках, таких як NestJS, декоратори є потужним інструментом для роботи з контролерами і маршрутизацією. Ось основи використання декораторів, таких як `@Controller`, `@Get`, `@Post`:

### `@Controller`

Декоратор `@Controller` використовується для визначення класу, що буде діяти як контролер у додатку. Він може приймати необов'язковий параметр, що задає базовий шлях для маршрутів, визначених у цьому контролері.

```typescript
import { Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // ...
}
```

У наведеному прикладі всі маршрути в цьому контролері будуть починатися з `/users`.

### `@Get`

Декоратор `@Get` використовується для визначення обробника GET-запиту. Він також може приймати параметр, що вказує шлях для цього обробника.

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {

  @Get()
  findAll() {
    // Код обробника, що повертає список користувачів
    return 'Це поверне список усіх користувачів';
  }

  @Get(':id')
  findOne() {
    // Код обробника, що повертає конкретного користувача за ID
    return 'Це поверне одного користувача за ID';
  }
}
```

У цьому прикладі:
- `@Get()` без параметрів відповідає на запити `/users`.
- `@Get(':id')` відповідає на запити `/users/{id}`.

### `@Post`

Декоратор `@Post` використовується для визначення обробника POST-запиту. Як і `@Get`, він може приймати шлях як параметр.

```typescript
import { Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

  @Post()
  create() {
    // Код обробника, що створює нового користувача
    return 'Це створить нового користувача';
  }
}
```

Цей приклад показує створення нового користувача через POST-запит на `/users`.

### Підсумок

Використання декораторів у NestJS дозволяє легше налаштувати обробку HTTP-запитів і організовувати код. Вони допомагають визначати маршрути і пов'язувати їх з відповідними бізнес-логіками всередині контролерів, роблячи код читабельним і структурованим.

| Back | Forward |
|---|---|
| [Use Nest.js CLI for project generation and scaffolding](/ua/junior/nestjs/use-the-nestjs-cli-for-project-creation.md)  | [Назвіть переваги Node.js, якщо порівнювати з іншими технологіями для розробки серверних застосунків.](/ua/middle/nodejs/what-are-the-advantages-of-nodejs-compared-to-other-technologies-for-serverside-application-development.md) |