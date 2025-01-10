#### 85. Basic usage of decorators like @Controller, @Get, @Post

У Nest.js декоратори використовуються для зручності визначення маршрутизації та обробки запитів. Ось короткий огляд базового використання декораторів, таких як `@Controller`, `@Get`, та `@Post`.

### @Controller

Декоратор `@Controller` визначає клас як контролер, який обробляє вхідні HTTP-запити. Контролер може мати кілька маршрутів, що відповідають різним HTTP-методам.

```typescript
import { Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // Визначаємо контролер, який буде обробляти всі запити на '/users'
}
```

### @Get

Декоратор `@Get` визначає маршрут для обробки HTTP GET-запитів. Це зазвичай використовується для отримання даних з сервера.

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'This action returns all users';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a user with id: ${id}`;
  }
}
```

### @Post

Декоратор `@Post` визначає маршрут для обробки HTTP POST-запитів. Це зазвичай використовується для відправки даних на сервер або створення нових ресурсів.

```typescript
import { Controller, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() createUserDto: CreateUserDto): string {
    return `This action adds a new user with name: ${createUserDto.name}`;
  }
}
```

### Підсумок

- `@Controller` дозволяє визначити клас як контролер обробки запитів.
- `@Get` використовується для маршрутизації запитів з HTTP-методом GET.
- `@Post` використовується для маршрутизації запитів з HTTP-методом POST.

Використання цих декораторів допомагає зробити код контролера у Nest.js зрозумілішим та структурованішим.

| Back | Forward |
|---|---|
| [Use Nest.js CLI for project generation and scaffolding](/ua/junior/nestjs/use-the-nestjs-cli-for-project-generation-and-scaffolding.md)  | [Назвіть переваги Node.js, якщо порівнювати з іншими технологіями для розробки серверних застосунків.](/ua/middle/nodejs/what-are-the-advantages-of-nodejs-compared-to-other-serverside-development-technologies.md) |