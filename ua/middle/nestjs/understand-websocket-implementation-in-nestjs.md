#### * Understand WebSocket implementation in Nest.js

В Nest.js реалізація WebSocket доволі проста і зручна завдяки вбудованій підтримці цієї технології. Nest.js використовує бібліотеку `socket.io` для роботи з WebSocket за умовчанням, але ви також можете використати `ws` та інші адаптери. Нижче наведено базову реалізацію WebSocket сервера та клієнта у Nest.js.

### 1. Встановлення необхідних пакетів

По-перше, переконайтеся, що ви встановили `@nestjs/websockets` та `@nestjs/platform-socket.io`:

```bash
npm install --save @nestjs/websockets @nestjs/platform-socket.io socket.io
```

### 2. Створення Gateways

`Gateway` - це специфічний клас у Nest.js для роботи з WebSocket, що обробляє двонаправлені зв'язки.

#### Створення WebSocket Gateway

Створіть новий gateway за допомогою CLI або вручну:

```bash
nest generate gateway chat
```

Ця команда створить файл `chat.gateway.ts`, що виглядатиме приблизно так:

```typescript
import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    console.log('Message received:', message);
    this.server.emit('message', message);
  }
}
```

### 3. Реєстрація Gateway у модулі

Додайте `ChatGateway` до будь-якого модуля, зазвичай це буде `AppModule`.

```typescript
import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';

@Module({
  providers: [ChatGateway],
})
export class AppModule {}
```

### 4. Клієнтська реалізація

На клієнтській стороні ви можете використовувати `socket.io-client` для з'єднання з вашим сервером.

#### Встановлення socket.io-client

```bash
npm install socket.io-client
```

#### Підключення клієнта

```javascript
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('message', (message) => {
  console.log('New message from server:', message);
});

socket.emit('message', 'Hello from client');
```

### Висновок

Це базова конфігурація для роботи з WebSocket у Nest.js. Ви можете розширювати можливості, додаючи більше обробників подій або працюючи з різними просторами імен та кімнатами для обробки більш складних сценаріїв.

| Back | Forward |
|---|---|
| [Use testing libraries such as Jest for coverage](/ua/middle/nestjs/use-testing-libraries-like-jest-for-coverage.md)  | [Handle file uploads with Nest.js](/ua/middle/nestjs/handle-file-uploads-with-nestjs.md) |