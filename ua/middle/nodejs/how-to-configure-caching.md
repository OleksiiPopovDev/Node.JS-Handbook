#### 99. Як налаштувати кешування?

Щоб налаштувати кешування в Node.js, ти можеш скористатися різними бібліотеками та стратегіями, в залежності від специфіки проєкту та потреб масштабування. Ось кілька популярних способів:

### 1. Використання пам'яті сервера

- **Node-cache**: Це проста бібліотека для кешування даних в пам'яті сервера.

  ```javascript
  const NodeCache = require("node-cache");
  const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

  // Зберегти дані в кеші
  myCache.set("myKey", "myValue", 100);

  // Отримати дані з кешу
  const value = myCache.get("myKey");
  ```

### 2. Redis

- **Redis**: Це потужніше рішення, яке можна використовувати для кешування в пам'яті та зовнішнього зберігання.

  Для початку потрібно встановити клієнт для Redis:

  ```sh
  npm install redis
  ```

  Використання Redis у Node.js:

  ```javascript
  const redis = require('redis');
  const client = redis.createClient();

  client.on('error', (err) => {
    console.error('Redis error: ', err);
  });

  // Зберегти дані в кеші
  client.setex('key', 3600, 'value');

  // Отримати дані з кешу
  client.get('key', (err, value) => {
    if (err) throw err;
    console.log(value);
  });
  ```

### 3. HTTP-кешування

- **Кешування на рівні сервера**: Використання заголовків для кешування, таких як `Cache-Control`, `ETag` і `Last-Modified`.

  ```javascript
  const express = require('express');
  const app = express();

  app.get('/', (req, res) => {
    res.set('Cache-Control', 'public, max-age=3600');
    res.send('Cached Content');
  });

  app.listen(3000);
  ```

### 4. Процес зберігання у файлах

- **flat-cache**: Це бібліотека для зберігання кешу в файлах.

  ```javascript
  const flatCache = require('flat-cache');
  const cache = flatCache.load('myCacheId');

  cache.setKey('key', 'value');
  cache.save();

  // Отримати дані з кешу
  const value = cache.getKey('key');
  ```

### Вибір стратегії

- **Оцінка потреб**: Вибір стратегії кешування залежить від специфіки твого застосунку. Кешування в пам'яті підходить для невеликих програм з обмеженим обсягом даних, у той час як Redis підходить для розподілених систем або великих обсягів даних.

- **Час життя кешу (TTL)**: Встанови оптимальний час життя кешу, щоб дані були актуальними, але не витрачати зайві ресурси на оновлення.

- **Інвалідація кешу**: Переконайся, що дані кешу скидаються або оновлюються, коли це необхідно, особливо якщо дані можуть змінюватися в базі даних.

Це базові підходи до налаштування кешування у Node.js, які можуть бути адаптовані до конкретних вимог та обсягів вашого проєкту.

| Back | Forward |
|---|---|
| [Як налагодити heap out of memory?](/ua/middle/nodejs/how-to-fix-heap-out-of-memory.md)  | [Які є варіанти використання модулів child_process, worker_threads і cluster?](/ua/middle/nodejs/what-are-the-options-for-using-modules-childprocess-workerthreads-and-cluster.md) |