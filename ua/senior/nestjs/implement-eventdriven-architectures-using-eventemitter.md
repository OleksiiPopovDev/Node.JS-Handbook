#### * Implement event-driven architectures using EventEmitter

У Nest.js, `EventEmitter` можна використовувати для реалізації архітектури, заснованої на подіях. `EventEmitter` дозволяє різним частинам програми спілкуватися між собою, відправляючи та слухаючи події. Ось як можна реалізувати це:

1. **Встановлення пакету**: Спочатку потрібно встановити `@nestjs/event-emitter` пакет:
   ```bash
   npm install @nestjs/event-emitter
   ```

2. **Імпорт модуля**: Додайте `EventEmitterModule` у ваш додаток.
   ```typescript
   import { Module } from '@nestjs/common';
   import { EventEmitterModule } from '@nestjs/event-emitter';

   @Module({
     imports: [
       EventEmitterModule.forRoot(), // імпортуйте модуль сюда
     ],
   })
   export class AppModule {}
   ```

3. **Відправлення подій**: Використовуйте `EventEmitter2` для відправлення подій з одного з ваших сервісів або контролерів.
   ```typescript
   import { Injectable } from '@nestjs/common';
   import { EventEmitter2 } from '@nestjs/event-emitter';

   @Injectable()
   export class UserService {
     constructor(private eventEmitter: EventEmitter2) {}

     createUser(user: any) {
       // логіка створення користувача
       
       // відправлення події після створення користувача
       this.eventEmitter.emit('user.created', user);
     }
   }
   ```

4. **Підписка на події**: Використовуйте декоратор `@OnEvent` для прослуховування подій у вашому сервісі.
   ```typescript
   import { Injectable } from '@nestjs/common';
   import { OnEvent } from '@nestjs/event-emitter';

   @Injectable()
   export class NotificationService {
     @OnEvent('user.created')
     handleUserCreatedEvent(user: any) {
       // обробка події, наприклад, відправлення email
       console.log('Новий користувач створений:', user);
     }
   }
   ```

Таким чином, ви можете легко реалізувати архітектуру, засновану на подіях, в Nest.js, використовуючи `EventEmitter`. Цей підхід дає змогу відокремити бізнес-логіку від логіки обробки подій, що робить код чистішим і легшим для підтримки.

| Back | Forward |
|---|---|
| [Understand CQRS (Command Query Responsibility Segregation) with Nest.js](/ua/senior/nestjs/understanding-cqrs-in-nestjs.md)  | [Handle microservices with @nestjs/microservices](/ua/senior/nestjs/handle-microservices-with-nestjsmicroservices.md) |