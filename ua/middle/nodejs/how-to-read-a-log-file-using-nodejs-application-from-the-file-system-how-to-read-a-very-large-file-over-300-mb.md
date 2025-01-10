#### 87. Як можна за допомогою Node.js app прочитати файл з логами із файлової системи? Як прочитати файл, який займає понад 300 мегабайтів?

Щоб прочитати файл з логами за допомогою Node.js, можна використати модуль `fs` (файлова система). Існують різні методи для читання файлів, але коли файл великий, понад 300 мегабайтів, ефективніше використовувати потоки (streams), щоб не завантажити весь файл в пам'ять одразу.

Ось приклад, як можна прочитати великий файл по рядках за допомогою потоків:

```javascript
const fs = require('fs');
const readline = require('readline');

// Створюємо потік для читання з файлу
const readStream = fs.createReadStream('path/to/large-log-file.log');

// Використовуємо readline, щоб читати файл по рядках
const rl = readline.createInterface({
  input: readStream,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  // Обробка кожного рядка
  console.log(`Line from file: ${line}`);
});

rl.on('close', () => {
  console.log('Finished reading file.');
});
```

У цьому прикладі ми використовуємо `fs.createReadStream` для створення потоку читання, який дозволяє Node.js читати файл фрагментами, зменшуючи навантаження на оперативну пам'ять. `readline` допомагає обробляти файл по рядках, що зручно для логів.

Цей підхід дозволяє ефективно обробляти великі файли, не перевантажуючи пам'ять.

| Back | Forward |
|---|---|
| [Яке призначення файлу package.json для Node.js проєктів?](/ua/middle/nodejs/what-is-the-purpose-of-a-packagejson-file-for-nodejs-projects.md)  | [Поясніть цикл подій у Node.js.](/ua/middle/nodejs/what-are-the-lifecycle-events-in-nodejs.md) |