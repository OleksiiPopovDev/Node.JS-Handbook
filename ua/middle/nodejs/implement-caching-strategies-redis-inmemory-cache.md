#### * Implement caching strategies (Redis, MemoryCache)

Реалізація стратегій кешування може значно підвищити продуктивність вашого Node.js додатка, зменшуючи навантаження на базу даних і знижуючи затримки. Ось основи використання Redis та Memory Cache для кешування.

### 1. Redis Cache

**Redis** — це популярна in-memory база даних, що використовується для кешування завдяки своїй швидкості та підтримці різних структур даних. 

#### Установка Redis:

Спочатку потрібно встановити Redis на вашу серверну машину. Докладні інструкції можна знайти в офіційній документації Redis.

#### Використання Redis у Node.js:

1. **Встановлення бібліотеки:**
   ```bash
   npm install redis
   ```

2. **Підключення та використання:**

```javascript
const redis = require('redis');

// Підключення до сервера Redis
const client = redis.createClient({
  host: 'localhost',
  port: 6379
});

// Обробка помилок
client.on('error', (err) => {
  console.error('Redis error:', err);
});

// Збереження даних у Redis
function setCache(key, value, expiry = 3600) { // expiry в секундах
  client.setex(key, expiry, JSON.stringify(value));
}

// Отримання даних з Redis
function getCache(key, cb) {
  client.get(key, (err, data) => {
    if (err) return cb(err);
    if (data !== null) {
      return cb(null, JSON.parse(data));
    } else {
      return cb(null, null);
    }
  });
}
```

### 2. Memory Cache

**Memory Cache** - це простий спосіб зберігання даних у пам'яті RAM серверу. Це підходить для додатків з одним інстансом або коли дані можна відновити у випадку збою.

#### Використання Memory Cache у Node.js:

1. **Встановлення бібліотеки:**
   ```bash
   npm install node-cache
   ```

2. **Підключення та використання:**

```javascript
const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 3600 }); // stdTTL - час життя за замовчуванням у секундах

// Збереження даних у кеші
function setCache(key, value) {
  myCache.set(key, value);
}

// Отримання даних з кешу
function getCache(key) {
  return myCache.get(key);
}
```

### Вибір кеш-стратегії:

- **Redis Cache** підходить для середовищ з декількома серверами або кластерів, оскільки дані зберігаються окремо від серверу програми.
- **Memory Cache** підходить для швидкого та простого кешування у менших додатках з одним сервером, оскільки дані втрачаються при рестарті серверу.

Ці методи можуть бути основою для реалізації кешування, але важливо враховувати специфіку вашого додатка та інфраструктури при виборі стратегії.

| Back | Forward |
|---|---|
| [Understand and handle backpressure in streams](/ua/middle/nodejs/understand-and-handle-backpressure-in-streams.md)  | [Як описати приєднання до бази даних?](/ua/middle/nestjs/how-to-describe-joining-a-database.md) |