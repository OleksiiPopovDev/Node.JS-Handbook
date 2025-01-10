#### 92. Для чого потрібні stream.PassThrough і pipe (pipeline)? Наведіть приклади використання.

У Node.js `stream.PassThrough` та `pipe` використовуються для управління потоками даних. Ось їх пояснення:

### stream.PassThrough

`stream.PassThrough` - це тип потоку (stream) у Node.js, який ніщо не змінює у даних, що проходять через нього. В основному, це корисний інструмент для створення проміжного потоку, коли ви хочете мати можливість передавати дані через кілька потоків без їх зміни.

#### Приклад використання `stream.PassThrough`:
```javascript
const { PassThrough } = require('stream');

const passthrough = new PassThrough();

passthrough.on('data', (chunk) => {
  console.log(`Отримано дані: ${chunk}`);
});

passthrough.write('Привіт, ');
passthrough.write('світ!');
passthrough.end();
```

### pipe (pipeline)

`pipe` - це метод для перекачування даних з одного читабельного потоку в інший записуваний потік. Це зручний спосіб з'єднання потоків для обробки даних, а також обробки помилок в проміжних етапах. 

Це дозволяє створити "конвеєр" обробки даних, що може бути дуже гнучким та потужним інструментом.

#### Приклад використання `pipe`:
```javascript
const fs = require('fs');
const zlib = require('zlib');

// Створюємо конвеєр для стиснення файлу
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'))
  .on('finish', () => {
    console.log('Файл успішно стиснуто');
  });
```

У наведеному прикладі дані читаються з файлу `input.txt`, стискаються за допомогою `zlib.createGzip()`, і потім записуються у файл `input.txt.gz`. Метод `pipe` піклується про передавання даних між цими потоками, і про обробку помилок.

| Back | Forward |
|---|---|
| [Що таке backpressure у контексті стримів? Як з цим боротись?](/ua/middle/nodejs/what-is-backpressure-in-the-context-of-streams-and-how-to-deal-with-it.md)  | [Як використовувати події ’data’, ’end’, ’error’, ’finish’ у стримах Node.js?](/ua/middle/nodejs/how-to-use-events-data-end-error-finish-in-nodejs-streams.md) |