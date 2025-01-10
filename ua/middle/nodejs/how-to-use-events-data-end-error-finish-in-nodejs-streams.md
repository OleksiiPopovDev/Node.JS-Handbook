#### 93. Як використовувати події ’data’, ’end’, ’error’, ’finish’ у стримах Node.js?

У Node.js стріми є важливою частиною роботи з потоком даних, і для їх обробки ми можемо використовувати різноманітні події. Ось як використовувати основні події стрімів (`data`, `end`, `error`, `finish`):

### Подія `data`

Подія `data` використовується для обробки шматків даних, які надходять через стрім. Ця подія зазвичай спрацьовує у Readable стрімах.

```javascript
const fs = require('fs');

const readableStream = fs.createReadStream('example.txt');

readableStream.on('data', (chunk) => {
  console.log(`Received chunk: ${chunk}`);
});
```

### Подія `end`

Подія `end` спрацьовує, коли Readable стрім завершив читання всіх даних. Вона сигналізує, що більше даних не буде надано.

```javascript
readableStream.on('end', () => {
  console.log('No more data to read.');
});
```

### Подія `error`

Подія `error` використовується для обробки помилок, які можуть виникнути під час роботи зі стрімами. Важливо обробляти цю подію, щоб уникнути непередбачених збоїв програми.

```javascript
readableStream.on('error', (err) => {
  console.error(`An error occurred: ${err.message}`);
});
```

### Подія `finish`

Подія `finish` відноситься до Writable стрімів і сигналізує, що всі дані були успішно записані у стрім.

```javascript
const writableStream = fs.createWriteStream('output.txt');

writableStream.on('finish', () => {
  console.log('All data has been written.');
});

// Приклад запису
writableStream.write('Hello, World!');
writableStream.end();
```

Обробка цих подій дозволяє контролювати процес обробки потоків даних у Node.js, що робить її більш надійною та ефективною.

| Back | Forward |
|---|---|
| [Для чого потрібні stream.PassThrough і pipe (pipeline)? Наведіть приклади використання.](/ua/middle/nodejs/what-are-the-purposes-of-streampassthrough-and-pipe-provide-examples.md)  | [Як обробити помилки при роботі зі стримами в Node.js?](/ua/middle/nodejs/how-to-handle-errors-when-working-with-streams-in-nodejs.md) |