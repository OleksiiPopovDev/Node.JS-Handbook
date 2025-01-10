#### 76. Understand Dependency Injection (DI) basics

У Nest.js, як і в багатьох інших сучасних фреймворках, використовуємо концепцію Впровадження Залежностей (Dependency Injection, DI). Це патерн дизайну, який дозволяє класам заявляти про свої залежності, а не створювати їх самостійно. Замість того, щоб клас був відповідальним за ініціалізацію своїх залежностей, він просто оголошує їх, а фреймворк автоматично надає ці залежності під час створення цього класу.

### Основи DI в Nest.js:

1. **Provider**: Це базова одиниця в DI. Проставники (Providers) зазвичай це класи з доданою анотацією `@Injectable()`, що робить їх доступними для впровадження в інші класи.

   ```typescript
   import { Injectable } from '@nestjs/common';

   @Injectable()
   export class MyService {
     sayHello() {
       return 'Hello!';
     }
   }
   ```

2. **Injection Token**: Це ключ, під яким зареєстрований провайдер. Як правило, це клас, але може бути й символ або стрічка.

3. **Module**: Це організаційна одиниця, що групує взаємопов'язані провайдери. Використовуючи декоратор `@Module()`, ми визначаємо провайдери, які має зареєструвати Nest в DI контейнері.

   ```typescript
   import { Module } from '@nestjs/common';
   import { MyService } from './my.service';

   @Module({
     providers: [MyService],
   })
   export class MyModule {}
   ```

4. **Injecting Dependencies**: Щоб впровадити залежність в клас (наприклад, в контролер або інший сервіс), просто вкажіть її в конструкторі.

   ```typescript
   import { Controller, Get } from '@nestjs/common';
   import { MyService } from './my.service';

   @Controller()
   export class MyController {
     constructor(private readonly myService: MyService) {}

     @Get()
     sayHello() {
       return this.myService.sayHello();
     }
   }
   ```

5. **Scope of Providers**: За замовчуванням, провайдери мають "singleton" скоп. Це означає, що один екземпляр провайдера буде спільним для всього додатка. Можна змінити скоп до "request" (новий екземпляр на кожен запит) або "transient" (новий екземпляр кожного разу, коли він впроваджується), щоб змінити поведінку відповідно.

Dependency Injection спрощує тестування, дозволяє легше управляти взаємозалежностями і робить код більш модульним та зрозумілим. Це особливо важливо в складних додатках, де залежностей багато.

| Back | Forward |
|---|---|
| [Use tools like Postman to test APIs](/ua/junior/web/what-are-some-common-api-testing-tools.md)  | [Define providers](/ua/junior/nestjs/define-providers.md) |