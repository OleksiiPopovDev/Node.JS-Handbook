#### 93. Як використовувати події ’data’, ’end’, ’error’, ’finish’ у стримах Node.js?

У Node.js стрими (streams) є потужним інструментом для обробки даних з різних джерел. Їхні події дозволяють ефективно відслідковувати різні стани потоку даних. Ось як можна використовувати основні події стримів: `data`, `end`, `error`, `finish`.

### 1. Подія `data`
Ця подія викидається, коли нові дані доступні для читання з Readable Stream. Використовується для отримання та обробки даних порціями.

```javascript
const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');

readableStream.on('data', (chunk) => {
  console.log(`Отримано дані: ${chunk}`);
});
```

### 2. Подія `end`
Ця подія викидається, коли більше немає даних для читання з Readable Stream. Використовується для виконання дій після завершення читання.

```javascript
readableStream.on('end', () => {
  console.log('Читання завершено.');
});
```

### 3. Подія `error`
Ця подія викидається, коли виникає помилка під час роботи з будь-яким типом стриму. Її обробка є важливою для безпечної роботи з даними.

```javascript
readableStream.on('error', (err) => {
  console.error('Сталася помилка:', err);
});
```

### 4. Подія `finish`
Ця подія є специфічною для Writable Streams і викидається, коли усі дані були успішно записані в стрим і метод `end()` був викликаний.

```javascript
const writableStream = fs.createWriteStream('output.txt');

writableStream.on('finish', () => {
  console.log('Запис завершено.');
});

writableStream.write('Привіт, світ!');
writableStream.end();
```

### Загальний приклад використання стримів
Скомбінуйте ці події для обробки стриму даних:

```javascript
const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.on('data', (chunk) => {
  writableStream.write(chunk);
});

readableStream.on('end', () => {
  writableStream.end();
});

readableStream.on('error', (err) => {
  console.error('Помилка під час читання:', err);
});

writableStream.on('finish', () => {
  console.log('Копіювання файлу завершено.');
});

writableStream.on('error', (err) => {
  console.error('Помилка під час запису:', err);
});
```

Цей приклад показує, як зчитувати дані з одного файлу та записувати їх в інший, обробляючи відповідні події для управління процесом.

| Back | Forward |
|---|---|
| [Для чого потрібні stream.PassThrough і pipe (pipeline)? Наведіть приклади використання.](/ua/middle/nodejs/what-are-streampassthrough-and-pipeline-for-provide-examples-of-usage.md)  | [Як обробити помилки при роботі зі стримами в Node.js?](/ua/middle/nodejs/how-to-handle-errors-when-working-with-streams-in-nodejs.md) |