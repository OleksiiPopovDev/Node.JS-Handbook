#### 24. Read and process large files

При роботі з великими файлами в Node.js слід обережно підходити до їх обробки, щоб уникнути проблем з пам'яттю та улучити ефективність. Основні підходи включають:

### 1. Використання потоків (streams)
Node.js підтримує вбудовані потоки, які дозволяють обробляти великі файли по частинах без завантаження всього файлу в пам'ять.

```javascript
const fs = require('fs');

const readStream = fs.createReadStream('large-file.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('output-file.txt');

readStream.on('data', (chunk) => {
  // Обробка даних тут
  console.log(`Received chunk of ${chunk.length} bytes`);
  writeStream.write(chunk);
});

readStream.on('end', () => {
  console.log('Finished reading the file');
  writeStream.end();
});

readStream.on('error', (err) => {
  console.error('Error reading the file:', err);
});
```

### 2. Використання модулів обробки за допомогою лінійного підходу
Модулі такі як `stream`, `fs-extra` або `csv-parser` (для CSV файлів) допомагають обробляти файли частинами.

```javascript
const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('large-file.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log('Row:', row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
```

### 3. Використання бібліотеки `through2`
Ця бібліотека надає простіший інтерфейс для створення потоків перетворення.

```javascript
const fs = require('fs');
const through2 = require('through2');

fs.createReadStream('large-file.txt', { encoding: 'utf8' })
  .pipe(through2(function (chunk, enc, callback) {
    this.push(chunk.toUpperCase()); // обробка: наприклад, перетворення в верхній регістр
    callback();
  }))
  .pipe(fs.createWriteStream('output-file.txt'))
  .on('finish', () => {
    console.log('Finished processing the file');
  });
```

### 4. Використання `async`/`await` з потоками
Можна використовувати `async`/`await` для обробки потоків у вигляді асинхронних конструкцій, що робить код більш читабельним.

```javascript
const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream/promises');

async function processFile(inputFile, outputFile) {
  await pipeline(
    createReadStream(inputFile),
    createWriteStream(outputFile)
  );

  console.log('File processed successfully');
}

processFile('large-file.txt', 'output-file.txt').catch(console.error);
```

### 5. Використання бібліотеки `fs/promises`
Нова функціональність Node.js дозволяє працювати з сучасними засобами, такими як Promise, для покращення читабельності й обробки даних.

Обробка великих файлів в Node.js вимагає обережного підходу до управління ресурсами, але завдяки вбудованим можливостям потокової обробки це завдання можна ефективно виконати.

| Back | Forward |
|---|---|
| [Transition between middleware layers](/ua/junior/nodejs/transition-between-middleware-layers.md)  | [Use the built-in fs module for file operations](/ua/junior/nodejs/use-the-builtin-fs-module-for-file-operations.md) |