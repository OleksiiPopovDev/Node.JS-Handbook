#### 94. Як обробити помилки при роботі зі стримами в Node.js?

Щоб обробити помилки при роботі зі стримами в Node.js, потрібно врахувати кілька важливих аспектів:

1. **Обробка події 'error'**: Кожен стрим в Node.js є екземпляром EventEmitter, тому основний спосіб обробки помилок — це прослуховування події `'error'`. Ви повинні завжди підписуватися на цю подію, щоб запобігти можливим викиданням необроблених помилок.

   ```javascript
   const fs = require('fs');

   const readStream = fs.createReadStream('somefile.txt');

   readStream.on('error', (err) => {
       console.error('Сталася помилка при читанні файлу:', err);
   });
   ```

2. **Перевірка наявності помилок при ініціалізації стриму**: Деякі помилки можуть виникнути вже при створенні стриму, наприклад, якщо файл не існує.

   ```javascript
   try {
       const readStream = fs.createReadStream('somefile.txt');
   } catch (err) {
       console.error('Помилка при створенні потоку:', err);
   }
   ```

3. **Обробка помилок в стримах pipe**: Якщо ви використовуєте `pipe` для з'єднання кількох стримів, також варто підписуватися на подію `'error'` для всіх стримів, які беруть участь у `pipe`.

   ```javascript
   const readStream = fs.createReadStream('source.txt');
   const writeStream = fs.createWriteStream('destination.txt');

   readStream
       .on('error', (err) => {
           console.error('Помилка при читанні:', err);
       })
       .pipe(writeStream)
       .on('error', (err) => {
           console.error('Помилка при запису:', err);
       });
   ```

4. **Використання модулів для керування стримами**: Розгляньте можливість використання бібліотек типу `stream.pipeline` з Node.js стандартної бібліотеки або сторонніх бібліотек, що спрощують управління стримами та їх помилками.

   ```javascript
   const { pipeline } = require('stream');
   const fs = require('fs');

   pipeline(
       fs.createReadStream('source.txt'),
       fs.createWriteStream('destination.txt'),
       (err) => {
           if (err) {
               console.error('Помилка в потоковій передачі:', err);
           } else {
               console.log('Потокова передача завершена успішно');
           }
       }
   );
   ```

Обробка помилок є критично важливою при роботі зі стримами, щоб забезпечити стабільність та надійність вашої Node.js аплікації.

| Back | Forward |
|---|---|
| [Як використовувати події ’data’, ’end’, ’error’, ’finish’ у стримах Node.js?](/ua/middle/nodejs/how-to-use-events-data-end-error-finish-in-nodejs-streams.md)  | [Наведіть приклади роботи зі стримами різних типів.](/ua/middle/nodejs/examples-of-working-with-different-types-of-streams.md) |