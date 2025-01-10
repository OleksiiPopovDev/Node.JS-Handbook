#### 184. Чим сучасним замінити node:domain API?

Починаючи з Node.js 14, `node:domain` API вважається застарілим і не рекомендованим для використання. Щоб обробляти помилки асинхронного коду та уникати падінь програми, можна використовувати інші підходи:

1. **Promise + try/catch:**  
   Використання промісів із конструкцією `async/await` та `try/catch` для обробки асинхронних помилок.

   ```javascript
   async function main() {
     try {
       const result = await someAsyncFunction();
       console.log(result);
     } catch (error) {
       console.error('Помилка:', error);
     }
   }

   main();
   ```

2. **Класи `ErrorBoundary`:**
   Використання класів або компонентів для обгортання коду, які можуть локалізовано обробляти помилки. Це частіше застосовується у фреймворках, таких як React.

3. **Процесні події:**
   Node.js надає глобальні обробники подій для обробки винятків та обіцяних промісів, які не мали оброблених помилок.

   ```javascript
   process.on('uncaughtException', (error) => {
     console.error('Необроблена виняткова ситуація:', error);
     // розгляньте можливість завершення процесу
   });

   process.on('unhandledRejection', (reason, promise) => {
     console.error('Необроблена відмова промісу:', reason);
     // розгляньте можливість завершення процесу
   });
   ```

4. **Інші бібліотеки та фреймворки:**
   Існують сторонні бібліотеки, такі як `async-hooks`, які можуть пропонувати додаткові засоби керування контекстами асинхронних викликів та обробки помилок.

Обирайте підхід, що відповідає вашим вимогам до обробки помилок та структури коду.

| Back | Forward |
|---|---|
| [Навіщо використовують AbortController? В яких API він підтримується?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/what-is-the-purpose-of-using-abortcontroller-which-apis-does-it-support.md)  | [Яке API реалізує nodejs/undici?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/what-api-does-nodejsundici-implement.md) |