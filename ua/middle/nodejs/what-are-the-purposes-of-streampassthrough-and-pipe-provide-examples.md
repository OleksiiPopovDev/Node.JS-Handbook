#### 92. Для чого потрібні stream.PassThrough і pipe (pipeline)? Наведіть приклади використання.

У Node.js streams (потоки) є потужним інструментом для обробки даних, особливо великих обсягів даних, асинхронно та ефективно. Серед кількох типів потоків у Node.js, `stream.PassThrough` і методи `pipe()` та `pipeline()` відіграють важливі ролі.

### stream.PassThrough

`stream.PassThrough` є спеціальним типом `Transform stream`, який не змінює дані, що через нього проходять. Це по суті "глухий" потік — він передає через себе дані, не змінюючи їх. Він може бути корисним для обробки або логування даних проміжний час у пайплайні (pipeline).

#### Приклад використання `stream.PassThrough`:

```javascript
const { PassThrough } = require('stream');
const fs = require('fs');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');
const passThroughStream = new PassThrough();

// Логування даних, що проходять через потік
passThroughStream.on('data', (chunk) => {
  console.log('Received chunk: ', chunk.toString());
});

// Використання PassThrough, щоб логувати дані, одночасно скеровуючи їх до попереднього і наступного потоків
readStream
  .pipe(passThroughStream)
  .pipe(writeStream);
```

### pipe (pipeline)

#### pipe()

Метод `pipe()` є простим способом для з'єднання потоків. Він дозволяє підключати вхідний потік до вихідного, що є частиною архітектури потоків Node.js. Це корисно для передачі даних через ряд потоків.

#### Приклад використання `pipe()`:

```javascript
const fs = require('fs');
const zlib = require('zlib');

// Зчитуємо файл, стискаємо його і записуємо
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
```

#### pipeline()

Метод `pipeline()` із модуля `stream` є більш вдосконаленим і надійним підходом порівняно з `pipe()`. Він автоматично керує обробкою помилок та закриттям потоків.

#### Приклад використання `pipeline()`:

```javascript
const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

pipeline(
  fs.createReadStream('input.txt'),
  zlib.createGzip(),
  fs.createWriteStream('input.txt.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed', err);
    } else {
      console.log('Pipeline succeeded');
    }
  }
);
```

### Висновок

- **`stream.PassThrough`** найчастіше використовується для логування та тестування, коли хочеться лише "прослухати" дані, не змінюючи їх.
- **`pipe()` та `pipeline()`** забезпечують легке підключення різних потоків, а `pipeline()` додає більше надійності через автоматичне керування помилками.

| Back | Forward |
|---|---|
| [Що таке backpressure у контексті стримів? Як з цим боротись?](/ua/middle/nodejs/what-is-backpressure-in-the-context-of-streams-how-to-deal-with-it.md)  | [Як використовувати події ’data’, ’end’, ’error’, ’finish’ у стримах Node.js?](/ua/middle/nodejs/how-to-use-events-data-end-error-finish-in-nodejs-streams.md) |