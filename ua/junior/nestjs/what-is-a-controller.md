#### 81. Understand basic usage of controllers

У Nest.js контролери є основними компонентами, що обробляють вхідні запити від клієнта, виконують бізнес-логіку за необхідності та повертають відповідь. Основна мета контролерів - відокремити обробку запитів від інших завдань, таких як управління даними або бізнес-логікою.

### Основні аспекти використання контролерів в Nest.js:

1. **Декоратор @Controller()**:
   Це базовий декоратор, що використовується для визначення класу як контролера. Він може приймати шлях, який буде префіксом для всіх маршрутів у цьому контролері.

   ```typescript
   import { Controller, Get } from '@nestjs/common';

   @Controller('users')
   export class UsersController {
     @Get()
     findAll(): string {
       return 'This action returns all users';
     }
   }
   ```

2. **Маршрутизація методів**:
   Для обробки різних HTTP-запитів використовуються відповідні декоратори (@Get, @Post, @Put, @Delete, тощо). Вони визначають, який метод класу слід викликати для конкретного HTTP-запиту і шляху.

   ```typescript
   @Get(':id')
   findOne(@Param('id') id: string): string {
     return `This action returns a user with id ${id}`;
   }
   ```

3. **Отримання параметрів запиту**:
   Використовуючи різноманітні декоратори, такі як @Param() для параметрів шляху, @Query() для параметрів запиту, @Body() для тіла запиту, та інші, можна отримувати дані з HTTP-запиту.

   ```typescript
   import { Query } from '@nestjs/common';

   @Get()
   findAll(@Query('limit') limit: number) {
     return `This action returns all users with a limit of ${limit}`;
   }
   ```

4. **Впровадження сервісів**:
   Зазвичай контролери використовуються для взаємодії із сервісами, які містять бізнес-логіку і роботу з даними. Сервіси можна впроваджувати через конструктор ін'єкцій.

   ```typescript
   import { UsersService } from './users.service';

   constructor(private readonly usersService: UsersService) {}

   @Get()
   async findAll(): Promise<User[]> {
     return await this.usersService.findAll();
   }
   ```

5. **Обробка помилок та валідація**:
   Кейси обробки помилок та валідації зазвичай керуються через пайпи, які можна застосовувати на рівні контролера або методу.

Використання контролерів у Nest.js дозволяє краще організувати ваш код, розділяючи обробку HTTP-запитів від ведення бізнес-логіки, що сприяє більшій підтримуваності та тестованіості додатка.

| Back | Forward |
|---|---|
| [Understand interceptors](/ua/junior/nestjs/understand-interceptors.md)  | [Write simple unit tests for services and controllers](/ua/junior/nestjs/what-are-some-simple-unit-tests-for-services-and-controllers.md) |