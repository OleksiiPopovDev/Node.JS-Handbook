#### * Handle microservices with @nestjs/microservices

Для роботи з мікросервісами в Nest.js ви можете скористатися пакетом `@nestjs/microservices`, який надає потужні інструменти для створення розподілених систем. Ось приклад, як ви можете налаштувати мікросервіс з Nest.js:

### Налаштування Мікросервісу

1. **Встановлення пакету**: Спочатку потрібно встановити пакет `@nestjs/microservices`.

    ```bash
    npm install @nestjs/microservices
    ```

2. **Налаштування додатку**: У файлі `main.ts` налаштуйте додаток для прослуховування мікросервісів. Ось приклад для налаштування мікросервісу за допомогою транспортного механізму TCP:

    ```typescript
    import { NestFactory } from '@nestjs/core';
    import { AppModule } from './app.module';
    import { MicroserviceOptions, Transport } from '@nestjs/microservices';

    async function bootstrap() {
      const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3001,
        },
      });
      await app.listen();
    }
    bootstrap();
    ```

3. **Декоратори для контролерів**: Використовуйте спеціальні декоратори для мікросервісів. Наприклад, `@MessagePattern` для обробки повідомлень:

    ```typescript
    import { Controller } from '@nestjs/common';
    import { MessagePattern } from '@nestjs/microservices';

    @Controller()
    export class AppController {
      @MessagePattern('sum')
      accumulate(data: number[]): number {
        return (data || []).reduce((a, b) => a + b);
      }
    }
    ```

4. **Клієнт мікросервісу**: Для взаємодії з мікросервісом, наприклад, з HTTP додатку, скористайтеся `ClientProxy`:

    ```typescript
    import { Injectable } from '@nestjs/common';
    import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

    @Injectable()
    export class AppService {
      private client: ClientProxy;

      constructor() {
        this.client = ClientProxyFactory.create({
          transport: Transport.TCP,
          options: { host: '127.0.0.1', port: 3001 },
        });
      }

      accumulate(numbers: number[]) {
        return this.client.send<number>('sum', numbers);
      }
    }
    ```

5. **Взаємодія з клієнтом**: Тепер у вашому контролері ви можете викликати методи сервісу для асинхронної взаємодії з мікросервісами.

    ```typescript
    import { Controller, Get } from '@nestjs/common';
    import { AppService } from './app.service';

    @Controller()
    export class AppController {
      constructor(private readonly appService: AppService) {}

      @Get()
      async getSum(): Promise<number> {
        const numbers = [1, 2, 3, 4, 5];
        return await this.appService.accumulate(numbers).toPromise();
      }
    }
    ```

Цей приклад описує основну архітектуру для налаштування та взаємодії з мікросервісами в Nest.js через TCP транспорт, але Nest.js також підтримує й інші транспортні механізми, такі як Redis, NATS, Kafka тощо.

| Back | Forward |
|---|---|
| [Implement event-driven architectures using EventEmitter](/ua/senior/nestjs/implement-eventdriven-architectures-using-eventemitter.md)  | [Integrate Nest.js with cloud services like AWS or Google Cloud](/ua/senior/nestjs/integrating-with-cloud-services.md) |