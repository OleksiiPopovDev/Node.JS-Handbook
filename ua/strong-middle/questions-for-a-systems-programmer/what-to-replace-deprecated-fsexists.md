#### 163. Чим замінити deprecated: fs.exists?

`fs.exists` в Node.js є застарілою, і замість неї рекомендується використовувати методи `fs.access`, `fs.promises.access` або інші підходи на основі асинхронних та обіцяних (Promise) варіантів.

Ось кілька прикладів, як можна замінити `fs.exists`:

1. **Використання `fs.access` з колбеком:**

   ```javascript
   const fs = require('fs');

   fs.access('file.txt', fs.constants.F_OK, (err) => {
     console.log(`${err ? 'file does not exist' : 'file exists'}`);
   });
   ```

2. **Використання `fs.promises.access`:**

   ```javascript
   const fs = require('fs').promises;

   fs.access('file.txt')
     .then(() => console.log('file exists'))
     .catch(() => console.log('file does not exist'));
   ```

3. **Використання `try-catch` з `fs.promises.access` і `async/await`:**

   ```javascript
   const fs = require('fs').promises;

   async function checkFileExists(filePath) {
     try {
       await fs.access(filePath);
       console.log('file exists');
     } catch {
       console.log('file does not exist');
     }
   }

   checkFileExists('file.txt');
   ```

Це підходи, які краще відповідають сучасним практикам роботи з асинхронними операціями у Node.js.

| Back | Forward |
|---|---|
| [Чому Node.js не однопотоковий? Доведіть, що він ніколи не був однопотоковим?](/ua/strong-middle/questions-for-a-systems-programmer/162-why-is-nodejs-not-singlethreaded-prove-that-it-was-never-singlethreaded.md)  | [Що таке back pressure для стримів? Що спричинила б його відсутність?](/ua/strong-middle/questions-for-a-systems-programmer/what-is-backpressure-for-streams-what-would-cause-its-absence.md) |