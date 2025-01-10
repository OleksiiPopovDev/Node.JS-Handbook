#### 163. Чим замінити deprecated: fs.exists?

У Node.js метод `fs.exists` вважається застарілим (deprecated), і замість нього рекомендується використовувати інші методи для перевірки існування файлу або директорії. Зазвичай використовуються наступні альтернативи:

1. **fs.access**:
   Метод `fs.access` може бути використаний для перевірки доступності файлу або директорії. Він перевіряє наявність з вказаними правами доступу.

   ```javascript
   const fs = require('fs');

   fs.access('path/to/file', fs.constants.F_OK, (err) => {
       if (err) {
           console.log('Файл не існує');
       } else {
           console.log('Файл існує');
       }
   });
   ```

2. **fs.stat**:
   Метод `fs.stat` або його асинхронна версія `fs.promises.stat` перевіряє повну інформацію про файл або директорію. Якщо файл або директорія не існують, цей метод кине помилку.

   ```javascript
   const fs = require('fs');

   fs.stat('path/to/file', (err, stats) => {
       if (err) {
           console.log('Файл не існує');
       } else {
           console.log('Файл існує');
       }
   });
   ```

   Або з використанням обіцянок (Promises):

   ```javascript
   const fs = require('fs').promises;

   async function checkFileExistence(path) {
       try {
           await fs.stat(path);
           console.log('Файл існує');
       } catch (err) {
           console.log('Файл не існує');
       }
   }

   checkFileExistence('path/to/file');
   ```

Ці методи є кращими застарілого `fs.exists`, оскільки повертають зрозумілі результати і працюють асинхронно, дозволяючи більш явно обробляти потенційні помилки.

| Back | Forward |
|---|---|
| [Чому Node.js не однопотоковий? Доведіть, що він ніколи не був однопотоковим?](/ua/strong-middle/questions-for-a-systems-programmer/162-why-is-nodejs-not-singlethreaded-prove-that-it-was-never-singlethreaded.md)  | [Що таке back pressure для стримів? Що спричинила б його відсутність?](/ua/strong-middle/questions-for-a-systems-programmer/what-is-back-pressure-for-streams-and-what-would-cause-its-absence.md) |