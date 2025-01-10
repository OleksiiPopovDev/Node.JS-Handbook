#### 98. Як реалізувати свій декоратор валідації?

Щоб реалізувати свій декоратор валідації в Nest.js, ви можете скористатися власною декораторною функцією, яка перевіряє дані методу або параметри. Ось загальний підхід до створення такого декоратора:

1. **Створення кастомного декоратора:**
   
   Ви можете використовувати функцію `createParamDecorator` з пакету `@nestjs/common`. Цей метод дозволяє створювати декоратор, який можна використовувати для валідації даних.

   ```typescript
   import { createParamDecorator, ExecutionContext } from '@nestjs/common';

   export const ValidateCustom = createParamDecorator(
     (data: unknown, ctx: ExecutionContext) => {
       const request = ctx.switchToHttp().getRequest();
       const value = request.body[data as string];

       // Ваші кастомні валідаційні правила
       if (!value || typeof value !== 'string') {
         throw new Error('Validation failed');
       }

       return value;
     },
   );
   ```

2. **Використання декоратора в контролері:**

   Декоратор можна застосувати до параметрів методу у вашому контролері:

   ```typescript
   import { Controller, Post, Body } from '@nestjs/common';
   import { ValidateCustom } from './validate-custom.decorator';

   @Controller('users')
   export class UsersController {
     @Post()
     createUser(@ValidateCustom('username') username: string) {
       // username вже пройшов валідацію декоратором і є валідним
       return { username };
     }
   }
   ```

3. **Обробка винятків:**

   У випадку невдалої валідації ви можете кинути певний вид помилки або винятку, який потім може бути оброблений глобальним фільтром винятків або middleware.

Цей підхід дозволяє вам легко створити свій власний декоратор валідації, який можна використовувати для різних параметрів у контролерах. Цей метод дає гнучкість у визначенні власних правил валідації залежно від потреб вашого додатку.

| Back | Forward |
|---|---|
| [Як описати приєднання до бази даних?](/ua/middle/nestjs/how-to-describe-joining-a-database.md)  | [Implement DI in services](/ua/middle/nestjs/implement-dependency-injection-in-services.md) |