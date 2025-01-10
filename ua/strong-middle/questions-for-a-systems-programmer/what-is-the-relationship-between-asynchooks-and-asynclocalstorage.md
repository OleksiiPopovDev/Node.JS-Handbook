#### 167. Як пов’язані node:async_hooks і AsyncLocalStorage?

У Node.js модуль `async_hooks` і клас `AsyncLocalStorage` тісно пов'язані між собою, оскільки обидва використовуються для відстеження асинхронних операцій і керування контекстом виконання асинхронних викликів.

### async_hooks

`async_hooks` — це ядровий модуль у Node.js, який дозволяє відстежувати та контролювати асинхронні ресурси протягом їх життєвого циклу. За допомогою цього модуля розробники можуть:

- Відстежувати створення асинхронних ресурсів (як-от проміси, таймери, запити до файлової системи тощо).
- Визначати, коли ці ресурси починають виконуватися та завершуються.
- Зберігати та передавати контексти під час виконання асинхронного коду.

### AsyncLocalStorage

`AsyncLocalStorage` — це клас, який базується на `async_hooks` і надає простий інтерфейс для збереження та отримання даних, специфічних для певного контексту асинхронного виконання. Він дозволяє зберігати і читати дані, які подорожують разом з вашим асинхронним кодом, зберігаючи контекст навіть при використанні різних асинхронних API.

#### Основні можливості `AsyncLocalStorage`:
- **Зберігання контексту**: ви можете зберігати дані, які будуть доступними через асинхронні межі для запитів, обробників промісів тощо.
- **Ізоляція контексту**: дані зберігаються в рамках конкретного асинхронного потоку, тобто зміни в контексті однієї операції не вплинуть на інші.

#### Приклад використання `AsyncLocalStorage`:

```javascript
const async_hooks = require('async_hooks');
const { AsyncLocalStorage } = require('async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

function logWithId(msg) {
  const store = asyncLocalStorage.getStore();
  console.log(`${store}: ${msg}`);
}

asyncLocalStorage.run(1, () => {
  logWithId('Starting process');
  setTimeout(() => {
    logWithId('Timeout finished');
  }, 100);
});

asyncLocalStorage.run(2, () => {
  logWithId('Another process');
  setTimeout(() => {
    logWithId('Another timeout finished');
  }, 200);
});
```

У цьому прикладі `AsyncLocalStorage` використовує окремі контексти для кожного асинхронного потоку, хоча вони виконуються одночасно.

Отже, `AsyncLocalStorage` надає спрощений API для конкретного завдання — керування контекстом асинхронних викликів, використовуючи можливості, які надає модуль `async_hooks`.

| Back | Forward |
|---|---|
| [Чим відрізняються fs.stat, fs.fstat, fs.lstat?](/ua/strong-middle/questions-for-a-systems-programmer/what-is-the-difference-between-fsstat-fsfstat-fslstat.md)  | [Чого не вистачає у ESM, що підтримується у CJS?](/ua/strong-middle/questions-for-a-systems-programmer/what-is-missing-from-esm-thats-supported-in-cjs.md) |