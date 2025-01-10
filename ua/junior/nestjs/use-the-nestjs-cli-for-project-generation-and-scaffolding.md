#### 84. Use Nest.js CLI for project generation and scaffolding

Для генерації проекту і створення його структури за допомогою Nest.js CLI слід виконати такі кроки:

1. **Встановлення Nest.js CLI:** 

   Спочатку встановіть Nest.js CLI, якщо воно ще не встановлено. Для цього виконайте в командному рядку:

   ```bash
   npm install -g @nestjs/cli
   ```

2. **Створення нового проекту:**

   Після встановлення CLI можна створити новий проект:

   ```bash
   nest new project-name
   ```

   Тут `project-name` — це назва вашого нового проекту.

3. **Навігація по проекту:**

   Після створення проекту, перейдіть в директорію проекту:

   ```bash
   cd project-name
   ```

4. **Створення модулів, контролерів та сервісів:**

   Використовуйте CLI для створення модулів, контролерів та сервісів. Наприклад, для створення нового модуля:

   ```bash
   nest generate module cats
   ```

   Для створення контролера:

   ```bash
   nest generate controller cats
   ```

   Для створення сервісу:

   ```bash
   nest generate service cats
   ```

5. **Запуск проекту:**

   Щоб запустити проект, використовуйте команду:

   ```bash
   npm run start
   ```

Ці прості команди допоможуть швидко згенерувати та налаштувати базову структуру проекту, що дозволяє зосередитися на розробці логіки застосунку.

| Back | Forward |
|---|---|
| [Create RESTful APIs using controllers](/ua/junior/nestjs/create-restful-apis-using-controllers.md)  | [Basic usage of decorators like @Controller, @Get, @Post](/ua/junior/nestjs/basic-usage-of-decorators-like-controller-and-others.md) |