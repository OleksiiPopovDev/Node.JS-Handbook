#### * Handle real-time communication using WebSocket or Socket.io

Для організації реального часу комунікації у веб-застосунках часто використовують WebSocket або Socket.io. Ось як це можна зробити з використанням обох технологій:

### Використання WebSocket

**Клієнтська частина (JavaScript у браузері):**

```javascript
// Ініціалізація з'єднання
const socket = new WebSocket('ws://yourserver.com/socket');

socket.onopen = function(event) {
    console.log('WebSocket is open now.');
};

socket.onmessage = function(event) {
    console.log('Message received: ', event.data);
};

socket.onclose = function(event) {
    console.log('WebSocket is closed now.');
};

socket.onerror = function(error) {
    console.error('WebSocket error observed:', error);
};

// Відправка повідомлення на сервер
socket.send('Hello Server!');
```

**Серверна частина (Node.js, наприклад, з використанням бібліотеки `ws`):**

```javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        ws.send('Hello Client!');
    });

    ws.send('Welcome new client!');
});
```

### Використання Socket.io

**Клієнтська частина (JavaScript у браузері):**

```html
<script src="/socket.io/socket.io.js"></script>
<script>
    var socket = io();

    socket.on('connect', function() {
        console.log('Connected to server');
    });

    socket.on('message', function(data) {
        console.log('Message from server: ', data);
    });

    // Відправка повідомлення на сервер
    socket.emit('message', 'Hello Server!');
</script>
```

**Серверна частина (Node.js):**

```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (msg) => {
        console.log('message: ' + msg);
        socket.send('Hello Client!');
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
```

### Порівняння WebSocket та Socket.io

- **WebSocket** — це нативний протокол для двостороннього зв'язку через TCP. Він легкий, але потребує ручної реалізації обробки багатьох низькорівневих речей, таких як перепідключення або кодування повідомлень.
  
- **Socket.io** — це бібліотека, що спрощує використання WebSocket та забезпечує додаткові функції, такі як автоматичне перепідключення, обробка падінь, підтримка більше транспортних засобів для сумісності з старими браузерами. 

Обидва підходи мають свої переваги та недоліки, тому вибір залежить від вимог конкретного проекту.

| Back | Forward |
|---|---|
| [Use child_process and worker_threads for parallel processing](/ua/middle/nodejs/utilize-childprocess-and-workerthreads-for-concurrent-execution.md)  | [Manage environment variables securely](/ua/middle/nodejs/manage-environment-variables-securely.md) |