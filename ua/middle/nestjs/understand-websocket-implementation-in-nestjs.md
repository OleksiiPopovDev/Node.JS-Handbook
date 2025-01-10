#### * Understand WebSocket implementation in Nest.js

## Реалізація WebSocket у Nest.js

У Nest.js WebSocket реалізується за допомогою спеціального пакету `@nestjs/websockets`, який надає потужні засоби для роботи з WebSocket-з’єднаннями. Ось основні кроки та концепції реалізації WebSocket у Nest.js:

### Встановлення необхідних пакетів

Для того, щоб розпочати роботу з WebSocket у Nest.js, потрібно встановити відповідні пакети:

```bash
npm install @nestjs/websockets @nestjs/platform-socket.io
```

### Основні концепції

- **Gateway (Шлюз):** Це основний елемент для обробки WebSocket-запитів у Nest.js. Шлюз обробляє підключення від клієнтів, взаємодії із сервером та відповіді.

- **Decorators (Декоратори):** Використовуються для визначення обробників подій. Основні декоратори включають `@WebSocketGateway()`, `@SubscribeMessage()`, `@WebSocketServer()`.

### Створення WebSocket Gateway

1. **Створення шлюза:**

   Перш за все, створимо шлюз, використовуючи відповідний декоратор:

   ```typescript
   import {
     WebSocketGateway,
     WebSocketServer,
     SubscribeMessage,
     MessageBody,
     ConnectedSocket,
   } from '@nestjs/websockets';
   import { Server, Socket } from 'socket.io';

   @WebSocketGateway()
   export class ChatGateway {
     @WebSocketServer()
     server: Server;

     @SubscribeMessage('message')
     handleMessage(@MessageBody() message: string, @ConnectedSocket() client: Socket): void {
       // Логіка для обробки отриманого повідомлення
       console.log(`Message received: ${message}`);
       
       // Надсилання повідомлення всім підключеним клієнтам
       this.server.emit('message', message);
     }
   }
   ```

2. **Реєстрація шлюзу:**

   Шлюз має бути доданий у відповідний модуль, щоб Nest міг його розпізнати та ініціалізувати:

   ```typescript
   import { Module } from '@nestjs/common';
   import { ChatGateway } from './chat.gateway';

   @Module({
     providers: [ChatGateway],
   })
   export class ChatModule {}
   ```

### Настроювання WebSocketGateway

`@WebSocketGateway()` декоратор дозволяє налаштовувати різні параметри WebSocket-з’єднання, такі як порт, CORS, та інші:

```typescript
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  // ...
}
```

### Переваги використання WebSocket у Nest.js

- **Легкість у використанні:** Декоратори значно спрощують визначення обробників подій та конфігурацію.
- **Інтеграція:** Гарна інтеграція з іншими частинами фреймворку Nest.js.
- **Гнучкість:** Підтримка різноманітних бібліотек для WebSocket, таких як Socket.io.

Це базова схема роботи з WebSocket у Nest.js. Вона забезпечує простий і зрозумілий спосіб реалізації реального часу взаємодії в додатках.

| Back | Forward |
|---|---|
| [Use testing libraries such as Jest for coverage](/ua/middle/nestjs/use-testing-libraries-such-as-jest-for-thorough-testing.md)  | [Handle file uploads with Nest.js](/ua/middle/nestjs/handle-file-uploads-with-nestjs.md) |