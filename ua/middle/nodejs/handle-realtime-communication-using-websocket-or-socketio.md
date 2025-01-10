#### * Handle real-time communication using WebSocket or Socket.io

У Node.js для обробки реального часу спілкування зазвичай використовують WebSocket або бібліотеку Socket.io. Ось короткий огляд як їх застосовувати:

### WebSocket

WebSocket - це протокол, що забезпечує двосторонній зв’язок між клієнтом і сервером з малою затримкою. Він ефективний для забезпечення реального часу спілкування в додатках, таких як чати, ігри та системи оповіщення.

#### Приклад використання:

1. **Встановлення пакету**:

   ```bash
   npm install ws
   ```

2. **Серверний код** (використовуючи `ws` пакет):

   ```javascript
   const WebSocket = require('ws');

   const server = new WebSocket.Server({ port: 8080 });

   server.on('connection', (socket) => {
     console.log('Новий зʼєднаний клієнт');

     socket.on('message', (message) => {
       console.log(`Отримане повідомлення: ${message}`);
       socket.send(`Відповідь на: ${message}`);
     });

     socket.on('close', () => {
       console.log('Клієнт відʼєднався');
     });
   });

   console.log('WebSocket сервер запущено на порту 8080');
   ```

3. **Клієнтський код**:

   ```javascript
   const socket = new WebSocket('ws://localhost:8080');

   socket.onopen = () => {
     console.log('Зʼєднання встановлено');
     socket.send('Привіт, сервер!');
   };

   socket.onmessage = (event) => {
     console.log(`Отримано дані: ${event.data}`);
   };

   socket.onclose = () => {
     console.log('Зʼєднання закрито');
   };
   ```

### Socket.io

Socket.io - це бібліотека, що абстрагує над WebSocket і підтримує інші транспортні шари, забезпечуючи надійніший досвід роботи з реальним часом. Вона автоматично перемикається на WebSocket, якщо це можливо, і на інші методи зв'язку, якщо ні.

#### Причини для вибору Socket.io:

- **Автоматичне відновлення зв'язку**: легкість обробки розривів зв'язку.
- **Простий API**: зручні функції для роботи з кімнатами, канальним зв'язком тощо.
- **Більш надійний**: вбудований механізм поліпшення з'єднання.

#### Приклад використання:

1. **Встановлення бібліотеки**:

   ```bash
   npm install socket.io
   ```

2. **Серверний код**:

   ```javascript
   const express = require('express');
   const http = require('http');
   const socketIo = require('socket.io');

   const app = express();
   const server = http.createServer(app);
   const io = socketIo(server);

   io.on('connection', (socket) => {
     console.log('Новий зʼєднаний клієнт');

     socket.on('message', (message) => {
       console.log(`Отримано повідомлення: ${message}`);
       socket.emit('message', `Відповідь на: ${message}`);
     });

     socket.on('disconnect', () => {
       console.log('Клієнт відʼєднався');
     });
   });

   server.listen(3000, () => {
     console.log('Socket.io сервер запущено на порту 3000');
   });
   ```

3. **Клієнтський код**:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Socket.io Client</title>
     <script src="/socket.io/socket.io.js"></script>
   </head>
   <body>
     <script>
       const socket = io('http://localhost:3000');

       socket.on('connect', () => {
         console.log('Зʼєднання встановлено');
         socket.send('Привіт, сервер!');
       });

       socket.on('message', (data) => {
         console.log(`Отримані дані: ${data}`);
       });

       socket.on('disconnect', () => {
         console.log('Зʼєднання закрито');
       });
     </script>
   </body>
   </html>
   ```

Ось так можна реалізувати реальне часове спілкування з використанням WebSocket або Socket.io у Node.js. Обидва підходи мають свої переваги, і вибір між них залежить від вимог вашого проекту.

| Back | Forward |
|---|---|
| [Use child_process and worker_threads for parallel processing](/ua/middle/nodejs/utilize-childprocess-and-workerthreads-for-concurrent-execution.md)  | [Manage environment variables securely](/ua/middle/nodejs/manage-environment-variables-securely.md) |