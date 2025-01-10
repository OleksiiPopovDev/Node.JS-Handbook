#### * Build and manage microservice patterns in Nest.js

Створення та керування мікросервісами в Nest.js можна здійснювати шляхом використання вбудованих можливостей фреймворка для розподілених систем. Ось кілька кроків та порад щодо роботи з мікросервісами в Nest.js:

### 1. Встановлення Nest.js
Спочатку створіть новий проект Nest.js, якщо його ще не існує.

```bash
npm i -g @nestjs/cli
nest new project-name
```

### 2. Налаштування мікросервісів
Продовжте налаштування вашого мікросервісу, використовуючи специфічний транспортний механізм (наприклад, TCP, RabbitMQ, NATS, MQTT тощо).

**TCP-приклад:**

```typescript
// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8877,
    },
  });

  await app.listen();
}
bootstrap();
```

### 3. Створення контролерів та сервісів
Використовуйте decorators `@Controller()` та `@MessagePattern()` для опису поведінки мікросервісу.

```typescript
// src/app.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): number {
    return this.appService.accumulate(data);
  }
}
```

### 4. Реалізація бізнес-логіки
Наступний крок полягає в реалізації необхідної бізнес-логіки всередині сервісу.

```typescript
// src/app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  accumulate(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }
}
```

### 5. Використання клієнтської програми
У вашій клієнтській програмі підключіться до мікросервісів так само, як ви це робили для сервера, з використанням Nest.js MikroservicesClient.

```typescript
// src/client.ts
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const client: ClientProxy = ClientProxyFactory.create({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8877,
    },
  });

  const response = await client.send({ cmd: 'sum' }, [1, 2, 3]).toPromise();
  console.log(response); // 6
}
bootstrap();
```

### 6. Тестування та відлагодження
Не забувайте писати тести для кожного з ваших мікросервісів, використовуючи Jest або інші бібліотеки для тестування, щоб переконатись, що вони працюють належним чином.

### 7. Винайдення та оптимізація
Керуйте мікросервісами, оцінюйте та оптимізуйте їхнє виконання, додаючи логування, метрики та розгортання в контейнеризованих середовищах для кращої масштабованості.

Цей базовий план допоможе вам розпочати роботу з мікросервісами в Nest.js. Більш детальну документацію та приклади можна знайти в офіційній документації [Nest.js Мікросервіси](https://docs.nestjs.com/microservices/basics).

| Back | Forward |
|---|---|
| [Integrate Nest.js with cloud services like AWS or Google Cloud](/ua/senior/nestjs/integrate-nestjs-with-cloud-services.md)  | [Design and implement dynamic modules](/ua/senior/nestjs/design-and-implement-dynamic-modules.md) |