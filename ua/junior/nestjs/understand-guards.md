#### 79. Understand guards

## Guards у Nest.js

### Що таке Guards?

Guards у Nest.js – це конструкції, які дозволяють визначити, чи може обробник маршруту обробити поточний запит. Вони є частиною процесу роутингу, де ви можете виконати попередню авторизацію та аутентифікацію, перш ніж взаємодіяти з бізнес-логікою вашого додатка.

### Як працюють Guards?

Guards реалізують інтерфейс `CanActivate`, який містить метод `canActivate()`. Цей метод повертає значення `true` або `false`, або ж проміс, що резолвиться до `true` або `false`. Якщо повертається `true`, Nest.js дозволяє проходження запиту до відповідного обробника маршруту. Якщо `false`, запит блокується, і може повертатись відповідний HTTP код помилки, як 403 (Forbidden).

### Приклад створення Guard

Ось простий приклад створення Guard:

```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  validateRequest(request: any): boolean {
    // Використовуйте свою логіку аутентифікації
    return !!request.headers.authorization;
  }
}
```

### Використання Guards

Guards можуть застосовуватись на рівні контролера або окремого маршруту. Ось як ви можете застосувати Guard до всього контролера:

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Controller('cats')
@UseGuards(AuthGuard)
export class CatsController {
  @Get()
  findAll() {
    return 'This action returns all cats';
  }
}
```

Або ж до окремого маршруту:

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Controller('cats')
export class CatsController {
  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return 'This action returns all cats';
  }
}
```

### Коли використовувати Guards?

Guards є потужним інструментом, коли вам потрібно виконати попередню перевірку або авторизацію на рівні обробника маршруту. Вони особливо корисні для реалізації обмеження доступу на базі ролей, перевірки токенів та інших завдань, які вимагають рішення щодо доступу до ресурсу.

### Висновки

Guards у Nest.js є важливим механізмом, який дозволяє захистити ваші маршрути шляхом перевірки запитів перед передачею їх в обробник. Це ефективний спосіб застосування загальних правил авторизації та аутентифікації по всьому додатку.

| Back | Forward |
|---|---|
| [Understand pipes](/ua/junior/nestjs/understand-pipes.md)  | [Understand interceptors](/ua/junior/nestjs/understand-interceptors.md) |