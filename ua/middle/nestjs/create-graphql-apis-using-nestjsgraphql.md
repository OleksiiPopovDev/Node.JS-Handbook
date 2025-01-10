#### * Create GraphQL APIs using @nestjs/graphql

Створення GraphQL API за допомогою `@nestjs/graphql` у NestJS є досить зручним завдяки вбудованим механізмам платформи. Ось покрокова інструкція, як це зробити:

### Кроки створення GraphQL API

1. **Інсталяція необхідних пакетів:**

   Спочатку вам необхідно встановити основні пакети, які потрібні для роботи з GraphQL у NestJS. Виконайте наступну команду:

   ```bash
   npm install @nestjs/graphql graphql-tools graphql apollo-server-express
   ```

2. **Налаштування модуля GraphQL:**

   Додайте GraphQL модуль до вашої програми. Відкрийте файл `app.module.ts` та додайте наступний код:

   ```typescript
   import { Module } from '@nestjs/common';
   import { GraphQLModule } from '@nestjs/graphql';
   import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
   import { join } from 'path';
   import { YourModule } from './your/your.module';

   @Module({
     imports: [
       GraphQLModule.forRoot<ApolloDriverConfig>({
         driver: ApolloDriver,
         autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
       }),
       YourModule,
     ],
   })
   export class AppModule {}
   ```

   У цьому прикладі параметр `autoSchemaFile` вказує шлях, за яким автоматично генерується GraphQL схема.

3. **Створення GraphQL типів:**

   Створіть файл, де будуть знаходитись ваші GraphQL типи. Наприклад, `user.type.ts`.

   ```typescript
   import { ObjectType, Field, Int } from '@nestjs/graphql';

   @ObjectType()
   export class User {
     @Field(() => Int)
     id: number;

     @Field()
     name: string;

     @Field()
     email: string;
   }
   ```

4. **Створення резолверів:**

   Резолвери обробляють запити та повертають дані. Створіть файл резолвера, наприклад `user.resolver.ts`.

   ```typescript
   import { Resolver, Query, Args } from '@nestjs/graphql';
   import { User } from './user.type';

   @Resolver(() => User)
   export class UserResolver {
     @Query(() => [User])
     async users(): Promise<User[]> {
       // У реальному випадку тут може бути доступ до БД
       return [
         { id: 1, name: 'John Doe', email: 'john@example.com' },
         { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
       ];
     }

     @Query(() => User, { nullable: true })
     async user(@Args('id', { type: () => Int }) id: number): Promise<User> {
       // У реальному випадку тут може бути доступ до БД
       const users = [
         { id: 1, name: 'John Doe', email: 'john@example.com' },
         { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
       ];
       return users.find(user => user.id === id);
     }
   }
   ```

5. **Імпорт резолвера до модуля:**

   Додайте резолвер у ваш модуль, наприклад, у `your.module.ts`.

   ```typescript
   import { Module } from '@nestjs/common';
   import { UserResolver } from './user.resolver';

   @Module({
     providers: [UserResolver],
   })
   export class YourModule {}
   ```

### Запуск та тестування

Після налаштування ви можете запустити вашу програму, виконуючи команду:

```bash
npm run start
```

GraphQL Playground буде доступний за адресою `http://localhost:3000/graphql`, де ви зможете тестувати ваші запити.

| Back | Forward |
|---|---|
| [Handle file uploads with Nest.js](/ua/middle/nestjs/handle-file-uploads-with-nestjs.md)  | [Implement authentication using Passport.js and JWT](/ua/middle/nestjs/implement-authentication-using-passportjs-and-jwt.md) |