#### * Integrate third-party libraries into the framework

Щоб інтегрувати сторонні бібліотеки у Nest.js, ви можете слідувати цим крокам:

1. **Встановлення бібліотеки**: 
   Спочатку вам потрібно встановити саму бібліотеку через npm або yarn. Наприклад:

   ```bash
   npm install axios
   ```

2. **Створення модуля**:
   Створіть новий модуль, якщо це потрібно для вашої бібліотеки:

   ```bash
   nest generate module external
   ```

3. **Імпорт та налаштування**:
   Відкрийте відповідний модуль та імпортуйте бібліотеку. Ви можете створити сервіс для роботи зі сторонньою бібліотекою.

   ```typescript
   import { Module } from '@nestjs/common';
   import { HttpService } from '@nestjs/axios';
   import { ExternalService } from './external.service';

   @Module({
     providers: [ExternalService, HttpService],
     exports: [ExternalService],
   })
   export class ExternalModule {}
   ```

4. **Створення сервісу (якщо потрібно)**:
   Створіть сервіс для інтеграції логіки використання бібліотеки:

   ```typescript
   import { Injectable } from '@nestjs/common';
   import { HttpService } from '@nestjs/axios';

   @Injectable()
   export class ExternalService {
     constructor(private readonly httpService: HttpService) {}

     async fetchData() {
       const response = await this.httpService.get('https://api.example.com/data').toPromise();
       return response.data;
     }
   }
   ```

5. **Інжектування сервісу**:
   Інжектуйте свій сервіс у компоненти, де ви плануєте використовувати функціональність бібліотеки.

   ```typescript
   import { Controller, Get } from '@nestjs/common';
   import { ExternalService } from './external.service';

   @Controller('external')
   export class ExternalController {
     constructor(private readonly externalService: ExternalService) {}

     @Get()
     async getExternalData() {
       return await this.externalService.fetchData();
     }
   }
   ```

6. **Використання модуля**:
   Не забудьте додати новий модуль до `imports` в потрібному місці, наприклад, у `AppModule`.

   ```typescript
   import { Module } from '@nestjs/common';
   import { ExternalModule } from './external/external.module';

   @Module({
     imports: [ExternalModule],
   })
   export class AppModule {}
   ```

Цей процес дозволить вам легко інтегрувати сторонні бібліотеки в проект Nest.js з використанням модульного підходу для збереження високого рівня організації коду.

| Back | Forward |
|---|---|
| [Use advanced decorators and custom modules](/ua/senior/nestjs/use-complex-decorators-and-specialized-functions.md)  | [Understand CQRS (Command Query Responsibility Segregation) with Nest.js](/ua/senior/nestjs/understanding-cqrs-in-nestjs.md) |