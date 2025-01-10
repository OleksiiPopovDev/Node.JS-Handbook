#### * Design complex guard strategies

У Nest.js, розробка складних стратегії Guards є важливим аспектом забезпечення безпеки додатку та контролю за доступом до ресурсів. Guards працюють ще до того, як потрапляють на будь-які обробники маршрутів, надаючи можливість виконувати блокування на основі бізнес-логіки. Ось кілька кроків та рекомендацій щодо розробки складних стратегій Guards:

### 1. Визначте цілі Guard
- Визначте, які рівні доступу потрібні.
- Зрозумійте, які дані потрібно захистити.

### 2. Використовуйте різнорівневий підхід
- **Token Guards**: Використовуйте для перевірки валідності та автентичності токенів.
- **Role-based Guards**: Дозволяють або забороняють доступ на основі ролей користувача.
- **Permission Guards**: Створюють більш тонкий рівень доступу, базуючись на дозволах.

### 3. Composite Guards
- Створіть комбінацію декількох Guards, щоб посилити безпеку.
- Наприклад, поєднання перевірки валідності JWT токена та перевірки ролі користувача.

### 4. Використовуйте декоратори
- Використовуйте кастомні декоратори для більш організованого контролю над Guards.
- Це покращує читабельність коду та його підтримку.

### 5. Логіка в Guards
- Виконуйте складні перевірки, наприклад, чи має користувач право доступу до специфічного ресурсу.
- Використовуйте сервіси для доступу до бази даних, якщо це необхідно.

### 6. Тестування та аудит
- Тестуйте Guards за допомогою юніт-тестів.
- Будьте впевнені, що Guard працює відповідно до задуманої логіки.

### 7. Logging і monitoring
- Додавайте логування у випадку відмови доступу.
- Використовуйте системи моніторингу для стеження за поведінкою Guards у продакшн-середовищі.

### Приклад
Ось приклад простої реалізації Guard, заснованої на ролях:

```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => user.roles?.includes(role));
  }
}
```

Цей приклад перевіряє, чи має користувач одну з необхідних ролей для доступу до конкретного обробника маршруту.

В результаті, добре продумані стратегії Guards не тільки покращують безпеку вашого додатку, але і роблять його гнучким і масштабованим.

| Back | Forward |
|---|---|
| [Debug pipe execution](/ua/senior/nestjs/execute-debug-pipe.md)  | [Build complex middleware systems](/ua/senior/expressjs/build-complex-middleware-systems.md) |