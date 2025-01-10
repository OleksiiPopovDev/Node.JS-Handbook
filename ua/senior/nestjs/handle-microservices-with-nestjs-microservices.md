#### * Handle microservices with @nestjs/microservices

NestJS надає потужні інструменти для роботи з мікросервісами через модуль `@nestjs/microservices`. Він дозволяє легко створювати і управляти мікросервісною архітектурою, використовуючи різноманітні транспортні механізми, такі як TCP, Redis, MQTT, NATS тощо.

Ось приклад, як розгорнути простий мікросервіс за допомогою NestJS:

### Встановлення

Спочатку слід встановити необхідні пакети:

```bash
npm install @nestjs/microservices
```

### Створення Мікросервісу

1. **Створіть новий NestJS модуль для вашого мікросервісу.**

   ```typescript
   import { Module } from '@nestjs/common';
   import { AppController } from './app.controller';

   @Module({
     controllers: [AppController],
   })
   export class AppModule {}
   ```

2. **Створіть контролер, який буде обробляти запити.**

   ```typescript
   import { Controller } from '@nestjs/common';
   import { MessagePattern } from '@nestjs/microservices';

   @Controller()
   export class AppController {
     @MessagePattern({ cmd: 'sum' })
     accumulate(data: number[]): number {
       return (data || []).reduce((a, b) => a + b);
     }
   }
   ```

3. **Налаштуйте транспортний механізм для мікросервісу.**

   ```typescript
   import { NestFactory } from '@nestjs/core';
   import { AppModule } from './app.module';
   import { MicroserviceOptions, Transport } from '@nestjs/microservices';

   async function bootstrap() {
     const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
       transport: Transport.TCP,
     });
     app.listen(() => console.log('Microservice is listening'));
   }

   bootstrap();
   ```

### Використання TCP для зв'язку

У прикладі вище ми налаштували транспортний механізм на `TCP`. NestJS підтримує різноманітні протоколи, тож ви можете легко змінити протокол на інший, наприклад, Redis чи MQTT, змінивши налаштування у файлі `main.ts`.

### Запуск 

Запустіть ваш мікросервіс командою:

```bash
npm run start
```

### Виклик мікросервісу з клієнтського додатку

Для тестування мікросервісу вам знадобиться клієнт, який буде надсилати запити. Ви можете створити стандартний NestJS додаток і використати `ClientProxy` для цього:

```typescript
import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
    });
  }

  public async accumulate(data: number[]) {
    return this.client.send<number>({ cmd: 'sum' }, data).toPromise();
  }
}
```

Ось ви і налаштували простий додаток на базі мікросервісної архітектури за допомогою NestJS.

| Back | Forward |
|---|---|
| [Implement event-driven architectures using EventEmitter](/ua/senior/nestjs/implement-eventdriven-architectures-using-eventemitter.md)  | [Integrate Nest.js with cloud services like AWS or Google Cloud](/ua/senior/nestjs/integrate-nestjs-with-cloud-services.md) |