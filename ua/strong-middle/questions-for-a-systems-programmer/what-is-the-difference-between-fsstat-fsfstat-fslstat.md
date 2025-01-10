#### 166. Чим відрізняються fs.stat, fs.fstat, fs.lstat?

`fs.stat`, `fs.fstat`, та `fs.lstat` — це методи в Node.js, які використовуються для отримання інформації про файли та файлові системи, але вони мають різні застосування й використовуються у різних контекстах:

1. **`fs.stat(path, callback)`**:
   - Цей метод використовується для отримання метаданих про файл або каталог, визначений шляхом `path`.
   - Якщо шлях вказує на символічне посилання, цей метод повертає значення для конечного об'єкта, на який вказує посилання, а не самого посилання.

2. **`fs.fstat(fd, callback)`**:
   - Метод використовується для отримання інформації про файл, пов'язаного з вже відкритим дескриптором файла `fd`.
   - Він працює через дескриптор файла, тому дуже корисний, коли файл вже відкрито за допомогою `fs.open()`.

3. **`fs.lstat(path, callback)`**:
   - Цей метод подібний до `fs.stat`, але не слідує за символічними посиланнями.
   - Якщо шлях вказує на символічне посилання, `fs.lstat` повертає інформацію безпосередньо про саме посилання, а не про об'єкт, на який воно вказує.

### Вибір методу залежить від контексту:

- Використовуйте `fs.stat`, якщо вас цікавить кінцевий об'єкт, на який вказує символічне посилання.
- Використовуйте `fs.fstat`, коли у вас вже є дескриптор файлу і ви не хочете повторно вчасу відкриття файла.
- Використовуйте `fs.lstat`, якщо потрібно отримати інформацію саме про символічне посилання, а не про об'єкт на кінці цього посилання.

Приклади використання цих методів виглядають так:

```javascript
const fs = require('fs');

// Приклад fs.stat
fs.stat('path/to/symbolic/link', (err, stats) => {
  if (err) throw err;
  console.log('fs.stat:', stats);
});

// Приклад fs.fstat
fs.open('file.txt', 'r', (err, fd) => {
  if (err) throw err;
  fs.fstat(fd, (err, stats) => {
    if (err) throw err;
    console.log('fs.fstat:', stats);
    fs.close(fd, (err) => {
      if (err) throw err;
    });
  });
});

// Приклад fs.lstat
fs.lstat('path/to/symbolic/link', (err, stats) => {
  if (err) throw err;
  console.log('fs.lstat:', stats);
});
```

Ці методи також мають синхронні (`fs.statSync`, `fs.fstatSync`, `fs.lstatSync`) та промісифіковані (`fs.promises.stat`, `fs.promises.fstat`, `fs.promises.lstat`) версії для зручності в організації коду.

| Back | Forward |
|---|---|
| [Що таке MessagePort і BroadcastChannel?](/ua/strong-middle/questions-for-a-systems-programmer/what-is-messageport-and-broadcastchannel.md)  | [Як пов’язані node:async_hooks і AsyncLocalStorage?](/ua/strong-middle/questions-for-a-systems-programmer/what-is-the-relationship-between-asynchooks-and-asynclocalstorage.md) |