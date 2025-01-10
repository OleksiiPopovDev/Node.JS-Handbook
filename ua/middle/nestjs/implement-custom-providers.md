#### * Implement custom providers

У Nest.js, кастомні провайдери можна створити для забезпечення налаштовуваної логіки ін'єкції залежностей. Це може бути корисно, коли потрібно змінити поведінку стандартних провайдерів або ввести складніші механізми, такі як фабрики або класи.

Ось приклад, як можна реалізувати кастомний провайдер:

### Крок 1: Створення кастомного провайдера

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomService {
  private readonly message: string;

  constructor(message: string) {
    this.message = message;
  }

  getMessage(): string {
    return this.message;
  }
}
```

### Крок 2: Реєстрація кастомного провайдера

В цьому прикладі ми створюємо провайдера, який повертає інстанцію `CustomService` з переданим параметром `message`.

```typescript
import { Module } from '@nestjs/common';

const CustomProvider = {
  provide: 'CUSTOM_SERVICE',
  useFactory: () => {
    return new CustomService('Hello, custom provider!');
  },
};

@Module({
  providers: [CustomProvider],
  exports: [CustomProvider],
})
export class CustomModule {}
```

### Крок 3: Використання кастомного провайдера

Важливо зазначити, що кастомні провайдери можна інжектувати через механізм dependency injection:

```typescript
import { Controller, Get, Inject } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(@Inject('CUSTOM_SERVICE') private readonly customService: CustomService) {}

  @Get()
  getCustomMessage(): string {
    return this.customService.getMessage();
  }
}
```

### Пояснення

1. **CustomService**: Це клас нашого сервісу, який ми маємо намір використовувати як провайдер.

2. **CustomProvider**: Створюється об'єкт провайдера з полем `provide`, що визначає ключ для інжекцій, та `useFactory`, що повертає інстанцію сервісу.

3. **Module**: Провайдер зареєстрований у модулі за допомогою providers. За потреби, його можна експортувати для доступу в інших модулях.

4. **AppController**: Наприклад, тут можна побачити, як наш кастомний провайдер інжектується за допомогою конструктора і використовується у методі контролера.

За допомогою цього підходу ви можете створювати налаштовувані провайдери у Nest.js, базуючись на специфічних вимогах вашого проекту.

| Back | Forward |
|---|---|
| [Create and import modules](/ua/middle/nestjs/create-modules.md)  | [Create custom pipes](/ua/middle/nestjs/create-custom-pipelines.md) |