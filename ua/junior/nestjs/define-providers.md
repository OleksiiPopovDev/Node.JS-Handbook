#### 77. Define providers

У Nest.js провайдери є фундаментальним поняттям, яке дозволяє впроваджувати залежності та управляти інверсією управління (IoC). Провайдери можуть здійснювати різні функції, такі як:

1. **Сервіси**: Виконують бізнес-логіку додатка.
2. **Репозиторії**: Працюють із базою даних.
3. **Фабрики**: Створюють складні об'єкти або конфігурації.
4. **Декоратори**: Додають метадані до різних частин застосунку.

Провайдер — це клас, позначений декоратором `@Injectable()`, який дозволяє Nest.js впроваджувати його як залежність в інші частини додатка. Коли модуль імпортує даний провайдер, він може бути використаний іншими компонентами цього модуля. Щоб створити провайдер, необхідно:

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class MyService {
  getData(): string {
    return 'Hello from MyService!';
  }
}
```

Після створення провайдера, його потрібно додати до списку `providers` у модулі:

```typescript
import { Module } from '@nestjs/common';
import { MyService } from './my.service';

@Module({
  providers: [MyService],
  exports: [MyService],  // Якщо потрібно використовувати в інших модулях
})
export class MyModule {}
```

Після чого, цей провайдер можна інжектувати в інші класи за допомогою конструктора:

```typescript
import { Controller, Get } from '@nestjs/common';
import { MyService } from './my.service';

@Controller()
export class MyController {
  constructor(private readonly myService: MyService) {}

  @Get()
  getData(): string {
    return this.myService.getData();
  }
}
```

Завдяки системі провайдерів Nest.js, ви можете легко будувати модульну архітектуру, що заохочує повторне використання коду та тестування.

| Back | Forward |
|---|---|
| [Understand Dependency Injection (DI) basics](/ua/junior/nestjs/understand-dependency-injection-basics.md)  | [Understand pipes](/ua/junior/nestjs/understand-pipes.md) |