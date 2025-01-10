#### * Implement advanced GraphQL features (e.g., subscriptions, resolvers)

Щоб реалізувати розширені можливості GraphQL, такі як підписки (`subscriptions`) та вирішувачі (`resolvers`) в Nest.js, потрібно виконати наступні кроки:

### Підписки (Subscriptions)

Підписки використовуються для отримання реального часу оновлень через WebSockets. Nest.js підтримує підписки через пакет `@nestjs/graphql` і `graphql-subscriptions`.

#### Встановлення:

Спочатку, встановіть необхідні залежності:

```bash
npm install @nestjs/graphql graphql graphql-subscriptions apollo-server-express
```

#### Налаштування:

1. **GraphQL Модуль:**

   Налаштуйте `GraphQLModule`, щоб підтримувати підписки:

   ```typescript
   import { Module } from '@nestjs/common';
   import { GraphQLModule } from '@nestjs/graphql';
   import { PubSub } from 'graphql-subscriptions';

   const pubSub = new PubSub();

   @Module({
     imports: [
       GraphQLModule.forRoot({
         autoSchemaFile: 'schema.gql',
         installSubscriptionHandlers: true,
       }),
     ],
     providers: [
       // ваші провайдери
       { provide: 'PUB_SUB', useValue: pubSub },
     ],
   })
   export class AppModule {}
   ```

2. **Визначення Схеми:**

   Створіть визначення для вашої підписки в GraphQL схемі:

   ```graphql
   type Subscription {
     itemAdded: Item
   }

   type Item {
     id: ID!
     name: String!
   }
   ```

3. **Реалізація Підписки:**

   Додайте реалізацію для підписки в резолвер:

   ```typescript
   import { Resolver, Subscription } from '@nestjs/graphql';
   import { Inject } from '@nestjs/common';
   import { PubSub } from 'graphql-subscriptions';

   @Resolver(() => Item)
   export class ItemResolver {
     constructor(@Inject('PUB_SUB') private readonly pubSub: PubSub) {}

     @Subscription(() => Item)
     itemAdded() {
       return this.pubSub.asyncIterator('itemAdded');
     }
   }
   ```

4. **Тригери Підписок:**

   Використовуйте `pubSub.publish` для відправки оновлень:

   ```typescript
   async addItem(item: Item): Promise<void> {
     // логіка додавання item
     this.pubSub.publish('itemAdded', { itemAdded: item });
   }
   ```

### Вирішувачі (Resolvers)

Вирішувачі є основою для реалізації логіки обробки запитів у GraphQL.

#### Приклад Реалізації:

1. **Визначення Схеми:**

   Визначте типи та запити у вашій GraphQL схемі:

   ```graphql
   type Query {
     item(id: ID!): Item
     items: [Item]
   }

   type Item {
     id: ID!
     name: String!
   }
   ```

2. **Створіть Резолвер:**

   Створіть відповідні методи для обробки запитів та мутацій:

   ```typescript
   import { Resolver, Query, Args } from '@nestjs/graphql';

   @Resolver(() => Item)
   export class ItemResolver {
     private items: Item[] = []; // це лише приклад, дані можуть бути з бази

     @Query(() => Item)
     item(@Args('id') id: string): Item {
       return this.items.find(item => item.id === id);
     }

     @Query(() => [Item])
     items(): Item[] {
       return this.items;
     }
   }
   ```

3. **Додавання до Модуля:**

   Переконайтеся, що резолвер включено до модуля:

   ```typescript
   import { Module } from '@nestjs/common';
   import { ItemResolver } from './item.resolver';

   @Module({
     providers: [ItemResolver],
   })
   export class ItemModule {}
   ```

Ці приклади демонструють, як можна реалізувати розширені можливості GraphQL, такі як підписки та резолвери в Nest.js. Це врівень основи, на яких можна розвивати повноцінні додатки з підтримкою GraphQL.

| Back | Forward |
|---|---|
| [Design and implement dynamic modules](/ua/senior/nestjs/design-and-implement-dynamic-modules.md)  | [Scale applications with Kubernetes and Docker in Nest.js projects](/ua/senior/nestjs/scaling-applications-with-kubernetes-and-docker-in-nestjs-projects.md) |