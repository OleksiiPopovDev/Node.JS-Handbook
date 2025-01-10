#### * Understand CQRS (Command Query Responsibility Segregation) with Nest.js

CQRS (Command Query Responsibility Segregation) — це архітектурний патерн, який розділяє операції читання та запису для даних. Основна ідея полягає у відокремленні команд (які зміщують стан системи) від запитів (які отримують дані).

Ось як можна зрозуміти CQRS в контексті використання з Nest.js:

### Основні концепції CQRS

1. **Команди**: Використовуються для здійснення змін у стані системи. Це може бути створення нових даних, оновлення або видалення існуючих.

2. **Запити**: Використовуються для отримання даних без зміни стану системи. Запити мають бути ідeмпотентними, тобто виконання запиту декілька разів повинно давати один і той самий результат без побічних ефектів.

3. **Command Handlers**: Обробники команд відповідають за виконання конкретних команд.

4. **Query Handlers**: Обробники запитів відповідають за обробку запитів та повернення потрібних даних.

### Використання CQRS у Nest.js

Nest.js із своєю модульною архітектурою ідеально підходить для реалізації CQRS:

1. **Встановлення пакету**:
   Почнемо з встановлення необхідного пакету для роботи з CQRS:
   ```bash
   npm install @nestjs/cqrs
   ```

2. **Створення Команд і Обробників**:
   - **Команда**: є простим класом, який описує дані, необхідні для виконання операції.
     
     ```typescript
     export class CreateUserCommand {
       constructor(
         public readonly username: string,
         public readonly password: string
       ) {}
     }
     ```

   - **Обробник команд**: Клас, який реалізує метод для обробки команди.
     
     ```typescript
     import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
     import { CreateUserCommand } from './create-user.command';

     @CommandHandler(CreateUserCommand)
     export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
       async execute(command: CreateUserCommand) {
         const { username, password } = command;
         // логіка для створення користувача
       }
     }
     ```

3. **Створення Запитів і Обробників**:
   - **Запит**: Зазвичай це клас з параметрами для отримання даних.
     
     ```typescript
     export class GetUserQuery {
       constructor(public readonly userId: string) {}
     }
     ```

   - **Обробник запитів**: Клас, який реалізує метод для обробки запиту.
     
     ```typescript
     import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
     import { GetUserQuery } from './get-user.query';

     @QueryHandler(GetUserQuery)
     export class GetUserHandler implements IQueryHandler<GetUserQuery> {
       async execute(query: GetUserQuery) {
         const { userId } = query;
         // логіка для отримання даних користувача
       }
     }
     ```

4. **Організація модулів**:
   Створіть модуль у Nest.js, де ви імпортуєте `CqrsModule` та додаєте всі обробники команд та запитів:

   ```typescript
   import { Module } from '@nestjs/common';
   import { CqrsModule } from '@nestjs/cqrs';
   import { CreateUserHandler } from './commands/handlers/create-user.handler';
   import { GetUserHandler } from './queries/handlers/get-user.handler';

   @Module({
     imports: [CqrsModule],
     providers: [CreateUserHandler, GetUserHandler],
   })
   export class UsersModule {}
   ```

### Переваги CQRS

- **Розділення відповідальностей**: Знаючи, яка частина коду відповідає за зміну стану, а яка — за отримання даних, легше підтримувати систему.
- **Масштабованість**: Завдяки розділенню читання та запису, ці операції можуть масштабуватися незалежно.
- **Оптимізація запитів**: Операції читання можуть бути оптимізовані для швидкості отримання даних.

### Обмеження

- **Складність**: Збільшується складність системи, адже додатково потрібна реалізація обробників для команд і запитів.
- **Синхронізація даних**: Якщо дані зберігаються в різних репозиторіях, може виникнути проблема з їхньою синхронізацією.

CQRS у Nest.js — це потужний інструмент, що дозволяє будувати добре структуровані, масштабовані застосунки. Але використовуйте цей патерн обмірковано, враховуючи специфіку вашого проєкту.

| Back | Forward |
|---|---|
| [Integrate third-party libraries into the framework](/ua/senior/nestjs/integrate-external-libraries-into-the-system.md)  | [Implement event-driven architectures using EventEmitter](/ua/senior/nestjs/implement-eventdriven-architectures-using-eventemitter.md) |