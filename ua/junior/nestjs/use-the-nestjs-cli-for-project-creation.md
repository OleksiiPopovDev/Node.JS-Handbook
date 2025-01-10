#### * Use Nest.js CLI for project generation and scaffolding

Для генерації та структурування проекту за допомогою Nest.js CLI виконайте наступні кроки:

1. **Встановлення Nest.js CLI**: Перед початком роботи необхідно мати встановлений Node.js. Потім ви можете встановити Nest.js CLI глобально за допомогою npm:

   ```bash
   npm install -g @nestjs/cli
   ```

2. **Створення нового проекту**: Використайте команду `nest new`, щоб створити новий проект. Наприклад:

   ```bash
   nest new my-nest-project
   ```

   Під час генерації вам буде запропоновано вибрати пакетний менеджер (наприклад, npm або yarn). Оберіть бажаний пакетний менеджер для інсталяції залежностей.

3. **Запуск сервера**: Перейдіть до каталогу проекту та запустіть сервер розробки:

   ```bash
   cd my-nest-project
   npm run start
   ```

4. **Створення модуля**: Використовуйте CLI для генерації нового модуля, якщо вам це потрібно:

   ```bash
   nest generate module module-name
   ```

5. **Створення контролера**: Згенеруйте новий контролер:

   ```bash
   nest generate controller controller-name
   ```

6. **Створення сервісу**: Згенеруйте новий сервіс:

   ```bash
   nest generate service service-name
   ```

CLI також підтримує генерацію інших артефактів, таких як шлюзи, перехоплювачі, фільтри та інші. Для отримання списку усіх доступних команд:

```bash
nest --help
```

Ці команди та механізми дозволяють швидко створювати і розвивати додатки, дотримуючись архітектурних принципів Nest.js.

| Back | Forward |
|---|---|
| [Create RESTful APIs using controllers](/ua/junior/nestjs/create-restful-apis-using-controllers.md)  | [Basic usage of decorators like @Controller, @Get, @Post](/ua/junior/nestjs/basic-usage-of-decorators-like-controller-getmapping-postmapping.md) |