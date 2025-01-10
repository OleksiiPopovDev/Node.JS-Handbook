#### * Implement custom guards

Для реалізації власних гвардіїв (guards) у Nest.js, ви повинні імплементувати інтерфейс `CanActivate`, який містить один метод `canActivate`. Цей метод використовують для визначення, чи має доступ користувач до певного ендпоїнту.

Ось приклад створення простого гварда, який перевіряє чи присутній користувач у запиті:

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
    // Логіка перевірки користувача
    return request.user !== undefined;
  }
}
```

### Пояснення:
- **CanActivate** - це інтерфейс, який вимагає метод `canActivate`. Цей метод повертає `boolean`, `Promise<boolean>` або `Observable<boolean>`, що вказує, чи має доступ користувач.
- **ExecutionContext** - забезпечує доступ до деталей виконання поточного процесу, таких як запит, відповідь тощо.
- В прикладі, гвард перевіряє, чи існує користувач у запиті (`request.user`). Якщо так, то доступ дозволений.

### Використання гварда:
Щоб застосувати створений гвард до контролера або окремого маршруту, скористайтеся декоратором `@UseGuards()`:

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Controller('protected')
@UseGuards(AuthGuard)
export class ProtectedController {
  @Get()
  getProtectedResource() {
    return "Доступ дозволено!";
  }
}
```

За допомогою такого підходу ви зможете контролювати доступ до різних частин вашого додатку з використанням кастомних правил і логіки.

| Back | Forward |
|---|---|
| [Create custom pipes](/ua/middle/nestjs/create-custom-pipelines.md)  | [Write and execute integration tests](/ua/middle/nestjs/write-integration-tests.md) |