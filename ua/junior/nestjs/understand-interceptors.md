#### * Understand interceptors

Інтерсептори (interceptors) — це концепція в програмуванні, яка дозволяє перехоплювати і обробляти запити або відповіді під час їх передачі між клієнтом і сервером. Вони часто використовуються в веб-розробці в контексті роботи з HTTP запитами.

### Основні цілі інтерсепторів:

1. **Обробка запитів та відповідей**: Інтерсептори можуть модифікувати або доповнювати запити перед їх надсиланням, а також обробляти відповіді перед їх поверненням клієнту.

2. **Аутентифікація та авторизація**: Вони можуть використовуватися для додавання токенів аутентифікації до HTTP заголовків або перевірки прав доступу.

3. **Логування та налагодження**: Полегшення процесу логування запитів і відповідей. Це може бути корисним для моніторингу або налагодження додатків.

4. **Робота з помилками**: Інтерсептори можуть обробляти глобальні помилки і робити відповідні дії (наприклад, перезапит у разі помилки мережі).

### Приклад у Angular:

В Angular інтерсептори використовуються для обробки всіх HTTP запитів, які проходять через `HttpClient`. Нижче наведено приклад простого інтерсептора, що додає токен до кожного запиту:

```typescript
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = 'your-auth-token-here';
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${authToken}` }
    });
    return next.handle(authReq);
  }
}
```

### Підключення інтерсептора:

Для використання інтерсептора в Angular, потрібно додати його до провайдерів у `app.module.ts`:

```typescript
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class AppModule {}
```

Таким чином, інтерсептори дозволяють розширювати та налаштовувати обробку HTTP запитів без впливу на код, що генерує ці запити або обробляє відповіді.

| Back | Forward |
|---|---|
| [Understand guards](/ua/junior/nestjs/understand-guards.md)  | [Understand basic usage of controllers](/ua/junior/nestjs/understand-controller-basics.md) |