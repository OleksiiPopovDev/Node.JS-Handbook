#### 8. Як зчитувати великі файли за допомогою Node.js?

Для зчитування великих файлів у Node.js ви можете використовувати стріми (streams). Це дозволяє зчитувати файл частинами, не завантажуючи весь файл одразу в пам'ять, що є особливо корисним для великих файлів. Ось приклад, як це зробити за допомогою `fs` модуля:

```javascript
const fs = require('fs');

const readStream = fs.createReadStream('path/to/large/file.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log('New chunk received:', chunk);
});

readStream.on('end', () => {
    console.log('Done reading file.');
});

readStream.on('error', (err) => {
    console.error('Error while reading file:', err);
});
```

### Пояснення:

- **fs.createReadStream()**: Це метод для створення readable stream для файлу. Він приймає шлях до файлу та параметри, такі як кодування.

- **'data' подія**: Вона викликається, коли нова частина даних доступна для зчитування. Це те саме, що обробка "потоку" даних у блоках.

- **'end' подія**: Вона викликається, коли читання файлу завершено.

- **'error' подія**: Вона викликається, якщо сталася помилка під час процесу читання файлу.

Використання стрімів дозволяє обробляти файли асинхронно та ефективно, навіть якщо файл доволі великий. Це значно зменшує навантаження на пам'ять та дозволяє одночасно обробляти інші запити або дії.

| Back | Forward |
|---|---|
| [Node.js інтерпретує чи компілює код програми?](/ua/junior/nodejs/is-nodejs-interpreting-or-compiling-code.md)  | [Що таке libuv i v8? Яке їхнє призначення?](/ua/junior/nodejs/what-is-libuv-and-v8-whats-their-purpose.md) |