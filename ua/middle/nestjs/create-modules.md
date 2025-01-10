#### * Create and import modules

У Nest.js модулі є основними будівельними блоками, які дозволяють організувати код у додатку. Модуль в Nest.js — це просто TypeScript-клас, позначений декоратором `@Module()`. Давайте розглянемо, як створити та імпортувати модулі.

### Створення модуля

1. **Створіть файл модуля**, наприклад `cats.module.ts`.

2. **Визначте клас модуля** та позначте його декоратором `@Module`.

```typescript
// cats.module.ts
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
```

У даному прикладі ми створили модуль `CatsModule`, який імпортує контролер `CatsController` та сервіс `CatsService`.

### Імпортування модуля

Для використання модуля в іншій частині вашого додатку, його необхідно імпортувати в інший модуль. Ось як це зробити:

1. Відкрийте файл іншого модуля, наприклад `app.module.ts`.

2. Імпортуйте модуль, використовуючи властивість `imports` в декораторі `@Module`.

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule {}
```

У цьому прикладі ми імпортуємо `CatsModule` в кореневий модуль додатка `AppModule`. Це дозволяє Nest.js дізнатися, що `CatsModule` є частиною додатку, і зробить доступними його провайдери та контролери усьому додатку.

### Поради

- Зазвичай кожен модуль знаходиться у своїй власній директорії разом із файлами, які стосуються цього модуля.
- Використовуйте модулі для розділення логіки вашої програми на зрозумілі частини.

Це основи роботи з модулями в Nest.js. Завдяки такій архітектурі ваш додаток стає більш структурованим і зручним для підтримки та масштабування.

| Back | Forward |
|---|---|
| [Implement DI in services](/ua/middle/nestjs/implement-dependency-injection-in-services.md)  | [Implement custom providers](/ua/middle/nestjs/implement-custom-providers.md) |