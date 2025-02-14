#### * Manage environment variables securely

Управління змінними середовища є важливою частиною безпеки додатків. Ось кілька рекомендацій для безпечного управління змінними середовища в Node.js:

1. **Файл `.env`:**
   - Зберігайте змінні середовища в файлі `.env`, але не додавайте цей файл в систему контролю версій (Git). Замість цього додайте його в `.gitignore`.
   
2. **Бібліотека dotenv:**
   - Використовуйте бібліотеку `dotenv` для завантаження змінних середовища з файлу `.env` до процесу `Node.js`. Це робиться простою командою:
     ```javascript
     require('dotenv').config();
     ```

3. **Відокремлення середовищ:**
   - Майте різні файли конфігурації для різних середовищ, таких як `.env.development`, `.env.production` тощо. Завантажуйте відповідний файл відповідно до середовища за допомогою бібліотек типу `cross-env`.

4. **Доступ до змінних:**
   - Використовуйте `process.env` для доступу до змінних середовища всередині вашого коду. Наприклад:
     ```javascript
     const dbPassword = process.env.DB_PASSWORD;
     ```

5. **Зберігання у хмарі:**
   - Розгляньте використання служб керування конфігурацією хмарних провайдерів, таких як AWS Secrets Manager, Azure Key Vault або Google Cloud Secret Manager.

6. **Шифрування змінних:**
   - Якщо ви зберігаєте дуже чутливу інформацію, подумайте про шифрування цих значень.

7. **Перевірка під час запуску:**
   - Валідуйте наявність обов'язкових змінних середовища під час запуску програми. Це можна зробити через бібліотеки, наприклад `joi`.

8. **Обмежити доступ:**
   - Змінні середовища повинні бути доступні тільки для тих частин програми, які цього потребують. Не надавайте доступ до них через інтерфейси чи журнали.

Слід пам’ятати, що управління змінними середовища — це частина загальної стратегії безпеки додатка, яка має бути комплементована іншими заходами безпеки.


| Back | Forward |
|---|---|
| [Handle real-time communication using WebSocket or Socket.io](/ua/middle/nodejs/handle-realtime-communication-using-websocket-or-socketio.md)  | [Understand and handle backpressure in streams](/ua/middle/nodejs/understand-and-handle-backpressure-in-streams.md) |