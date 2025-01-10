#### * Implement advanced module hierarchies

В Nest.js модулі є ключовим аспектом організації та структурування вашого додатку. Для створення складних ієрархій модулів, можна використовувати різні підходи, такі як імпорт модулів, передача провайдерів і використання динамічних модулів. Ось декілька прикладів, як ви можете побудувати розширену ієрархію модулів.

### 1. Базові модулі

Почнімо з створення декількох базових модулів:

```typescript
// user.module.ts
import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
```

```typescript
// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  providers: [AuthService],
})
export class AuthModule {}
```

### 2. Вкладення модулів

Імпортуйте необхідні модулі в інші модулі для зручної організації.

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule],
})
export class AppModule {}
```

### 3. Динамічні модулі

Динамічні модулі в Nest.js дозволяють передавати конфігурацію або свої провайдери під час імпорту.

```typescript
// config.module.ts
import { Module, DynamicModule } from '@nestjs/common';

@Module({})
export class ConfigModule {
  static forRoot(environment: string): DynamicModule {
    const providers = environment === 'production' ? ProductionConfig : DevConfig;

    return {
      module: ConfigModule,
      providers: [...providers],
      exports: [...providers],
    };
  }
}
```

### 4. Розширені ієрархії

Ви можете створювати модулі, які імпортують інші модулі та передають конфігурацію через динамічні модулі.

```typescript
// core.module.ts
import { Module, Global } from '@nestjs/common';
import { ConfigModule } from './config/config.module';

@Global()
@Module({
  imports: [ConfigModule.forRoot(process.env.NODE_ENV)],
  exports: [ConfigModule],
})
export class CoreModule {}
```

### Загальні поради

- **Імпортуйте лише те, що необхідно.** Імпортуйте інші модулі лише там, де це дійсно потрібно для оптимізації структури додатку.
- **Експортуйте провайдери.** Експортуйте лише ті провайдери, які будуть використовуватися в інших модулях.
- **Враховуйте модульність.** Створюйте модулі так, щоб кожен виконував свою окрему задачу, це покращить тестованість і зрозумілість кода.

Ці підходи допоможуть створити зрозумілу та підтримувану архітектуру вашого додатку на Nest.js.

| Back | Forward |
|---|---|
| [Debug and enhance DI performance](/ua/senior/nestjs/improve-dependency-injection.md)  | [Design complex provider patterns](/ua/senior/nestjs/design-sophisticated-service-architectures.md) |