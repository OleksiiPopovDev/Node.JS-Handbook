#### * Handle distributed systems communication in Node.js

При роботі з розподіленими системами в Node.js важливе значення має вибір відповідного підходу для комунікації між різними компонентами системи. Нижче наведено кілька популярних методів, які можна використовувати для реалізації зв’язку в розподілених системах на Node.js:

### 1. HTTP/HTTPS API
- **Express.js**: Використовується для створення RESTful API, дозволяє сервісам взаємодіяти через HTTP-запити.
- **Fastify**: Альтернатива з фокусом на швидкість та продуктивність.

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, distributed systems!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### 2. Веб-сокети
- **Socket.io**: Використовується для двонаправленої комунікації в режимі реального часу.
- **ws**: Легка бібліотека для нативної підтримки WebSocket.

```javascript
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`);
  });
  ws.send('Hello! Message From Server!!');
});
```

### 3. gRPC
- Використовує HTTP/2 для швидкої двонаправленої комунікації. Підходить для зв'язку microservices.

```javascript
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('service.proto', {});
const proto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(proto.MyService.service, { 
  myMethod: (call, callback) => {
    callback(null, { message: 'Hello gRPC!' });
  }
});

server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
});
```

### 4. MQTT
- Протокол обміну повідомленнями на основі публікації/підписки, легкий та ефективний для IoT.

```javascript
const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', () => {
  client.subscribe('presence', err => {
    if (!err) {
      client.publish('presence', 'Hello MQTT');
    }
  });
});

client.on('message', (topic, message) => {
  console.log(message.toString());
});
```

### 5. Message Brokers
- **AMQP/RabbitMQ**: Використовується для обробки асинхронних задач та черг повідомлень.
- **Apache Kafka**: Підходить для обробки потоків даних у реальному часі.

```javascript
const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }

    const queue = 'hello';
    const msg = 'Hello RabbitMQ!';

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  });
});
```

### Поради
- Вибір відповідного методу залежить від специфіки вашої системи: затримок, об’єму даних, потреби у реальному часі та пропускної здатності.
- Забезпечте безпечну передачу даних, використовуйте TLS/SSL і автентифікацію там, де це можливо.
- Плануйте модульність та масштабованість системи заздалегідь, щоб спростити її розширення в майбутньому.

| Back | Forward |
|---|---|
| [Debug task execution issues](/ua/senior/nodejs/debugging-task-execution-problems.md)  | [Use clustering for high-availability Node.js applications](/ua/senior/nodejs/use-clustering-for-highavailability-nodejs-applications.md) |