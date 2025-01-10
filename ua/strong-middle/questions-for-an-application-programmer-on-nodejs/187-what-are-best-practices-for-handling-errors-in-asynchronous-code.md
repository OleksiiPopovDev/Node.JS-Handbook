#### 187. Наведіть найкращі практики для обробки помилок в асинхронному коді.

При роботі з асинхронним кодом у Node.js слід дотримуватися наступних найкращих практик для обробки помилок:

1. **Обгортання у try-catch (для async/await):** 
   - Використовуйте блоки `try-catch` для обробки помилок в асинхронних функціях з `async/await`. Це дозволяє ловити виключення, які можуть виникнути в коді із запитом `await`.

   ```javascript
   async function fetchData() {
       try {
           const data = await fetchDataFromUrl();
           // Обробка даних
       } catch (error) {
           console.error('Помилка при завантаженні даних:', error);
       }
   }
   ```

2. **Promise chaining з `.catch()`:**
   - При роботі з промісами завжди додавайте обробник `.catch()` для перехоплення помилок. Це допомагає уникнути незахоплених виключень.

   ```javascript
   fetchDataFromUrl()
       .then(data => {
           // Обробка даних
       })
       .catch(error => {
           console.error('Помилка при завантаженні даних:', error);
       });
   ```

3. **Централізована обробка помилок:**
   - Використовуйте централізовану обробку помилок, створюючи спеціальні функції або middleware для обробки виключень на верхньому рівні вашої програми.

   ```javascript
   function errorHandlerMiddleware(err, req, res, next) {
       console.error(err);
       res.status(500).send('Внутрішня помилка сервера');
   }
   ```

4. **Сім'я помилок (Error family):**
   - Створюйте кастомні класи помилок, щоб чіткіше визначати типи помилок, що можуть виникнути і обробляти їх відповідно.

   ```javascript
   class DatabaseError extends Error {
       constructor(message) {
           super(message);
           this.name = 'DatabaseError';
       }
   }
   ```

5. **Process-level обробка помилок:**
   - Використовувати глобальні обробники подій `process.on('unhandledRejection')` та `process.on('uncaughtException')` для контролю асинхронних помилок на рівні процесу. Це допоможе ловити незахоплені помилки, але пам’ятайте, що їх використання слід проводити з обережністю.

   ```javascript
   process.on('unhandledRejection', (reason, promise) => {
       console.error('Unhandled Rejection at:', promise, 'reason:', reason);
       // Можливо, завершити процес в безпечний спосіб
   });

   process.on('uncaughtException', error => {
       console.error('Uncaught Exception thrown:', error);
       // Можливо, завершити процес в безпечний спосіб
   });
   ```

6. **Логування помилок:**
   - Впроваджуйте надійні механізми логування, щоб мати можливість відстежувати та аналізувати помилки.

Дотримання цих практик покращить надійність і стабільність вашого асинхронного коду.

| Back | Forward |
|---|---|
| [Коли ми можемо використовувати синхронні версії операцій з файлами з node:fs замість асинхронних? На що звертати увагу, ухвалюючи таке рішення?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/when-can-we-use-synchronous-file-operations-with-nodefs-instead-of-asynchronous-ones-and-what-should-be-taken-into-account-when-making-such-a-decision.md)  | [Як у проєктах на Node.js можуть з’явитися вразливості з (на вибір): XSS, Path traversal, SQLI, CSRF? Як від них захищатися?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/how-can-vulnerabilities-with-choose-one-xss-path-traversal-sqli-and-csrf-occur-in-nodejs-projects-and-how-to-protect-against-them.md) |