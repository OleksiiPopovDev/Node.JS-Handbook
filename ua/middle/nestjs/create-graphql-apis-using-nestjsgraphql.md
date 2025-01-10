#### * Create GraphQL APIs using @nestjs/graphql

Створення GraphQL API з використанням пакету `@nestjs/graphql` вимагає декількох ключових кроків. Нижче наведено основні етапи створення GraphQL API в Nest.js:

### 1. Встановлення необхідних пакетів

Спочатку необхідно встановити пакети `@nestjs/graphql`, `graphql` та, за бажанням, `apollo-server-express` для роботи з Apollo Server:

```bash
npm install @nestjs/graphql graphql apollo-server-express
```

### 2. Налаштування модуля GraphQL

Після встановлення пакетів, потрібно налаштувати модуль GraphQL в вашому додатку. Зазвичай це робиться в `AppModule`.

```typescript
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // автоматично генерує файл схеми
      sortSchema: true, // для впорядкування полів схеми,
      playground: true, // включення GraphQL Playground
    }),
  ],
})
export class AppModule {}
```

### 3. Створення об'єктів (Type Definitions)

Створіть клас об’єкта (Type) та додайте декоратори для визначення полів. Наприклад, створення типу для об'єкта `User`:

```typescript
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(type => Int)
  id: number;

  @Field()
  username: string;

  @Field()
  email: string;
}
```

### 4. Створення GraphQL Resolver

Тепер створіть `Resolver`, який буде обробляти запити до вашого GraphQL API. Це вирішувач для запитів `User`:

```typescript
import { Resolver, Query } from '@nestjs/graphql';
import { User } from './user.model';

@Resolver(of => User)
export class UserResolver {
  @Query(returns => [User])
  getUsers(): User[] {
    // Тут реалізуйте отримання даних з бази даних або іншого джерела
    return [];
  }
}
```

### 5. Підключення Resolver до модуля

Додайте `Resolver` до `imports` масиву в модулі Nest.js:

```typescript
import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';

@Module({
  providers: [UserResolver],
})
export class UserModule {}
```

### 6. Використання GraphQL Playground

Якщо ввімкнено параметр `playground`, ви можете перейти до `/graphql` в вашому браузері і тестувати створені резолвери.

### Висновок

Після виконання цих кроків, ви матимете базовий GraphQL API, який можна розширювати шляхом додавання нових типів, запитів та мутацій згідно з вашими бізнес-вимогами.

| Back | Forward |
|---|---|
| [Handle file uploads with Nest.js](/ua/middle/nestjs/handle-file-uploads-with-nestjs.md)  | [Implement authentication using Passport.js and JWT](/ua/middle/nestjs/implement-authentication-using-passportjs-and-jwt.md) |