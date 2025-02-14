#### * Understand and handle backpressure in streams

У Node.js потоки (`streams`) дозволяють працювати з даними асинхронно і ефективно обробляти великі обсяги даних. Однак, одна з важливих концепцій, яку потрібно розуміти при роботі зі стрімами, — це зворотний тиск (`backpressure`).

### Що таке зворотний тиск?

Зворотний тиск виникає, коли швидкість надходження даних до потоку (наприклад, з файлу або мережі) перевищує швидкість, з якою ці дані можуть бути оброблені або передані далі. У такій ситуації потік накопичує дані в буфері, що може призвести до переповнення пам’яті, якщо не вжити заходів.

### Як управляти зворотним тиском?

Node.js реалізує механізми керування зворотним тиском у потоках, що дозволяють динамічно зменшувати швидкість запису або читання залежно від ситуації.

1. **Режими роботи потоків:**
   - **Пасивний режим (paused mode):** Потік не передає дані, поки не буде викликано метод `stream.resume()`.
   - **Активний режим (flowing mode):** Потік автоматично зчитує і передає дані, події `data` генеруються автоматично.

2. **Використання методів:**
   - **`stream.pipe()`:** Це один з основних способів обробки зворотного тиску, коли дані зчитуються з одного потоку і записуються в інший. Метод `pipe` автоматично переходить між режимами та дбає про зворотний тиск, викликаючи `stream.pause()` і `stream.resume()`, коли це необхідно.
   - **`stream.pause()` та `stream.resume()`:** Використовуються для контролю передачі даних вручну в потоці.

3. **Коректне оброблення подій:**
   - Використовуйте події `drain` та `readable` для коррекції обробки даних, коли буфер переповнюється.
   - Обробляйте помилки та закриття потоків (`error`, `close`) для безпечного завершення роботи з потоками.

4. **Зміна розміру буфера:**
   - Налаштовуйте розмір буфера під час створення потоків у налаштуваннях, зважаючи на специфіку вашого застосунку.

### Приклад коду

```javascript
const fs = require('fs');
const zlib = require('zlib');

// Створення потоків для читання і запису
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt.gz');

// Створюємо потік для стиснення файлу
const gzip = zlib.createGzip();

// Використовуємо метод pipe для управління зворотним тиском
readableStream.pipe(gzip).pipe(writableStream);

writableStream.on('finish', () => {
  console.log('Файл успішно стиснутий та записаний.');
});
```

У цьому прикладі `pipe` автоматично управляє зворотним тиском під час передачі даних між потоками. Це один із найзручніших способів обробки потоків у Node.js, що враховує зворотний тиск.

| Back | Forward |
|---|---|
| [Manage environment variables securely](/ua/middle/nodejs/manage-environment-variables-securely.md)  | [Implement caching strategies (Redis, MemoryCache)](/ua/middle/nodejs/implement-caching-strategies-redis-inmemory-cache.md) |