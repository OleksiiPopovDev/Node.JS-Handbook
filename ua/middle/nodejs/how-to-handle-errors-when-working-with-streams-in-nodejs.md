#### 94. Як обробити помилки при роботі зі стримами в Node.js?

Коли працюєш зі стримами в Node.js, обробка помилок є важливою частиною, оскільки стрими можуть стикатися з помилками на будь-якому етапі обробки даних (читання, запис, передачі тощо). Ось кілька порад щодо обробки помилок:

1. **Події `error`:**
   Кожен стрим в Node.js є екземпляром `EventEmitter`, і має подію `error`, яку можна використовувати для обробки помилок. Треба обов'язково підписатись на цю подію.

   ```javascript
   const fs = require('fs');

   const readStream = fs.createReadStream('file.txt');

   readStream.on('error', (err) => {
     console.error('Сталася помилка при читанні файла:', err.message);
   });

   readStream.on('data', (chunk) => {
     console.log('Читання шматка даних:', chunk);
   });
   ```

2. **Обробка `pipe` помилок:**
   Якщо ви використовуєте метод `pipe`, може бути корисно обробити помилки на обох кінцях стриму.

   ```javascript
   const readStream = fs.createReadStream('input.txt');
   const writeStream = fs.createWriteStream('output.txt');

   readStream
     .on('error', (err) => {
       console.error('Помилка читання:', err.message);
     })
     .pipe(writeStream)
     .on('error', (err) => {
       console.error('Помилка запису:', err.message);
     });

   writeStream.on('finish', () => {
     console.log('Запис завершено.');
   });
   ```

3. **Обробка `uncaughtException`:**
   Це глобальна обробка непередбачених помилок, яка не завжди є кращою практикою, але може бути корисною в критичних випадках:

   ```javascript
   process.on('uncaughtException', (err) => {
     console.error('Сталася глобальна помилка:', err);
     // Зверни увагу, що процес може бути в несправному стані, завершуй його коректно.
     process.exit(1);
   });
   ```

4. **Пробуй та злови (try-catch):**
   Для синхронних операцій обробка через `try-catch` може працювати, але для стримів, які працюють асинхронно, цей метод не підходить. Помилки мають оброблятися через події.

В цілому, якісна обробка помилок в Node.js стримах полягає у вчасній підписці на події та коректному реагуванні на них, що забезпечить стабільність і надійність додатку.

| Back | Forward |
|---|---|
| [Як використовувати події ’data’, ’end’, ’error’, ’finish’ у стримах Node.js?](/ua/middle/nodejs/how-to-use-events-data-end-error-finish-in-nodejs-streams.md)  | [Наведіть приклади роботи зі стримами різних типів.](/ua/middle/nodejs/what-are-some-examples-of-working-with-different-types-of-streams.md) |