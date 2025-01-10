#### * Implement advanced GraphQL features (e.g., subscriptions, resolvers)

## Впровадження розширених можливостей GraphQL: підписки та резолвери

GraphQL - це потужний інструмент для побудови гнучких API. Однією з його сильних сторін є можливість реалізації розширених можливостей, таких як підписки та резолвери. Розглянемо, як вони працюють та як їх можна впровадити.

### Резолвери

Резолвери є функціями, які відповідають за отримання даних для окремих полів у запитах. Вони дозволяють вам контролювати де і як отримуються дані.

#### Приклад:

```js
const { ApolloServer, gql } = require('apollo-server');

// Схема типов
const typeDefs = gql`
  type Query {
    hello: String
    user(id: ID!): User
  }

  type User {
    id: ID!
    name: String
  }
`;

// Постачальники резолвера
const resolvers = {
  Query: {
    hello: () => 'Вітаємо у GraphQL!',
    user: (_parent, args, context) => {
      // Приклад простого отримання користувача за ідентифікатором
      return context.dataSources.userAPI.getUserById(args.id);
    }
  }
};

// Ініціалізація сервера
const server = new ApolloServer({ typeDefs, resolvers });
// Запуск сервера
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
```

### Підписки

Підписки дозволяють клієнтам отримувати оновлену інформацію в режимі реального часу за допомогою веб-сокетів. Це корисно для таких сценаріїв, як оновлення чату, оповіщення або відстеження стану.

#### Приклад:

1. **Оновіть схему**

```js
const typeDefs = gql`
  type Query {
    message: String
  }

  type Subscription {
    messageReceived: String
  }
`;
```

2. **Налаштування резолвера для підписки**

```js
const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();
const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';

const resolvers = {
  Query: {
    message: () => 'Останнє повідомлення'
  },
  Subscription: {
    messageReceived: {
      subscribe: () => pubsub.asyncIterator([MESSAGE_RECEIVED])
    }
  }
};

// Приклад публікації події (наприклад, може бути викликано, коли нове повідомлення отримано)
pubsub.publish(MESSAGE_RECEIVED, { messageReceived: 'Нове повідомлення!' });
```

3. **Запуск сервера з підписками**

```js
const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Запуск сервера
server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`🚀 Server ready at ${url}`);
  console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
});
```

### Висновок

Використання резолверів і підписок дозволяє вам створювати додатки, що реагують в режимі реального часу, полегшуючи обробку складних запитів і поточних даних. Використовуючи такі сервери, як Apollo Server, ви можете з легкістю інтегрувати ці можливості в ваш проект.

| Back | Forward |
|---|---|
| [Design and implement dynamic modules](/ua/senior/nestjs/design-and-implement-dynamic-modules.md)  | [Scale applications with Kubernetes and Docker in Nest.js projects](/ua/senior/nestjs/scale-applications-with-kubernetes-and-docker-in-nestjs-projects.md) |