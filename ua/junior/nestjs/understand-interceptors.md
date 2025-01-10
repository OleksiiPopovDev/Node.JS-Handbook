#### 80. Understand interceptors

### Інтерцептори в Nest.js

Інтерцептори в Nest.js є одним з важливих механізмів, що дозволяє перехоплювати процеси обробки запитів або відповідей в додатку. Вони працюють подібно до проміжних прошарків (middleware), але призначені для роботи на специфічному етапі обробки.

#### Основні функції інтерцепторів:

1. **Трансформація даних**:
   - Інтерцептори дозволяють змінювати вхідні запити або вихідні відповіді. Наприклад, ви можете використовувати інтерцептори для форматування відповідей перед тим, як вони будуть відправлені клієнту.

2. **Ведення логування**:
   - Інтерцептори можуть бути використані для логування метаданих запиту, часу обробки, простеження та інших важливих аспектів.

3. **Кешування**:
   - Можуть застосовуватися для кешування результатів запитів, економлячи ресурси сервера й зменшуючи навантаження на API.

4. **Помилкові операції**:
   - Інтерцептори здатні обробляти помилки, що виникають під час виконання будь-якої операції у відповідь на запит.

#### Створення інтерцептора:

Для створення інтерцептора в Nest.js, вам потрібно створити клас, що імплементує інтерфейс `NestInterceptor`:

```typescript
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`After... ${Date.now() - now}ms`)),
      );
  }
}
```

#### Додавання інтерцептора до контролера або методу:

Ви можете додати інтерцептор як до всього контролера, так і до окремого методу за допомогою декораторів `@UseInterceptors`:

```typescript
import { Controller, Get, UseInterceptors } from '@nestjs/common';

@Controller('cats')
@UseInterceptors(LoggingInterceptor) // Додаємо інтерцептор до всього контролера
export class CatsController {
  @Get()
  @UseInterceptors(LoggingInterceptor) // Або можна додати лише до методу
  findAll() {
    return [];
  }
}
```

#### Висновок:

Інтерцептори є потужним інструментом у Nest.js, які забезпечують додатковий рівень контролю як над обробкою вхідних запитів, так і над відповідями. Вони дозволяють дотримуватися принципів DRY (Don't Repeat Yourself) та записувати логіку, яка може бути повторно використана через різні частини додатку.

| Back | Forward |
|---|---|
| [Understand guards](/ua/junior/nestjs/understand-guards.md)  | [Understand basic usage of controllers](/ua/junior/nestjs/what-is-a-controller.md) |