#### 97. Як описати приєднання до бази даних?

Щоб описати приєднання до бази даних у Nest.js, можна використовувати пакет `@nestjs/typeorm`, що робить інтеграцію з TypeORM зручнішою. Ось приклад базових кроків для налаштування приєднання до бази даних:

1. **Встановіть необхідні пакети:**

   ```
   npm install @nestjs/typeorm typeorm mysql2
   ```

   Переконайтеся, що ви встановили адаптер для вашої СУБД, наприклад, `mysql2` для MySQL.

2. **Налаштуйте модуль TypeOrm:**

   У вашому модулі (наприклад, `AppModule`) імпортуйте та налаштуйте `TypeOrmModule`:

   ```typescript
   import { Module } from '@nestjs/common';
   import { TypeOrmModule } from '@nestjs/typeorm';

   @Module({
     imports: [
       TypeOrmModule.forRoot({
         type: 'mysql',  // тип бази даних
         host: 'localhost',
         port: 3306,
         username: 'your-username',
         password: 'your-password',
         database: 'your-database-name',
         entities: [__dirname + '/../**/*.entity{.ts,.js}'],
         synchronize: true, // Не використовуйте в продакшні, може видалити дані
       }),
     ],
   })
   export class AppModule {}
   ```

3. **Створіть сутності (Entities):**

   Ви повинні створити класи для ваших сутностей, які відповідають таблицям у базі даних. Наприклад:

   ```typescript
   import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

   @Entity()
   export class User {
     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     name: string;

     @Column()
     email: string;
   }
   ```

4. **Імпортуйте сутності в модулі:**

   Підключіть сутності до вашого модуля:

   ```typescript
   @Module({
     imports: [
       TypeOrmModule.forFeature([User]),
     ],
   })
   export class UsersModule {}
   ```

5. **Використовуйте репозиторії:**

   У вашому сервісі можна використовувати ін'єкцію залежності для доступу до репозиторіїв:

   ```typescript
   import { Injectable } from '@nestjs/common';
   import { InjectRepository } from '@nestjs/typeorm';
   import { Repository } from 'typeorm';
   import { User } from './user.entity';

   @Injectable()
   export class UsersService {
     constructor(
       @InjectRepository(User)
       private readonly userRepository: Repository<User>,
     ) {}

     // Методи для роботи з репозиторієм
   }
   ```

Це базовий приклад приєднання до бази даних у Nest.js з використанням TypeORM. Реальний код може відрізнятися залежно від використовуваної бази даних та бізнес-логіки.

| Back | Forward |
|---|---|
| [Implement caching strategies (Redis, MemoryCache)](/ua/middle/nodejs/implement-caching-strategies-redis-inmemory-cache.md)  | [Як реалізувати свій декоратор валідації?](/ua/middle/nestjs/how-to-implement-my-validation-decorator.md) |