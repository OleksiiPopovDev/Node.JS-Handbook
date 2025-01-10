#### 95. Наведіть приклади роботи зі стримами різних типів.

У Node.js стрими (або потоки) є одним із ключових компонентів для роботи з даними, що надходять поступово, не тримаючи усе в пам'яті. Існує кілька основних типів стримів: Readable (вхідні стрими), Writable (вихідні стрими), Duplex (стрими, які є одночасно і вхідними, і вихідними), та Transform (спеціальний вид Duplex стримів, які трансформують дані по ходу руху).

Ось приклади роботи зі стримами різних типів:

### Readable Streams

```javascript
const fs = require('fs');

// Створення Readable стриму для читання файлу
const readableStream = fs.createReadStream('example.txt', {
  encoding: 'utf8',  // Визначаємо кодування для читання тексту
  highWaterMark: 16  // Визначаємо розмір буферу
});

readableStream.on('data', (chunk) => {
  console.log('Зчитано:', chunk);
});

readableStream.on('end', () => {
  console.log('Читання завершено');
});

readableStream.on('error', (err) => {
  console.error('Помилка:', err);
});
```

### Writable Streams

```javascript
const fs = require('fs');

// Створення Writable стриму для запису у файл
const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Цей текст буде записано у файл.\n', 'utf8');
writableStream.write('Стрими спрощують роботу з даними.\n', 'utf8');

writableStream.end();  // Завершуємо запис

writableStream.on('finish', () => {
  console.log('Запис завершено');
});

writableStream.on('error', (err) => {
  console.error('Помилка:', err);
});
```

### Duplex Streams

```javascript
const { Duplex } = require('stream');

// Створення Duplex стриму
const duplexStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log('Записано:', chunk.toString());
    callback();
  },
  read(size) {
    this.push('Дані з Duplex стриму\n');
    this.push(null);  // Позначаємо відсутність подальших даних
  }
});

duplexStream.on('data', (chunk) => {
  console.log('Зчитано:', chunk.toString());
});

duplexStream.write('Це тестовий рядок.\n');
duplexStream.end();
```

### Transform Streams

```javascript
const { Transform } = require('stream');

// Створення Transform стриму
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    // Виконуємо трансформацію даних
    const output = chunk.toString().toUpperCase();
    callback(null, output);
  }
});

transformStream.on('data', (chunk) => {
  console.log('Трансформовано:', chunk.toString());
});

transformStream.write('Цей текст буде трансформовано.\n');
transformStream.end();
```

Кожен тип стриму має свої особливості та методи. Завдяки своїй ефективності в обробці даних в реальному часі, стрими активно використовуються в розробці застосунків на Node.js.

| Back | Forward |
|---|---|
| [Як обробити помилки при роботі зі стримами в Node.js?](/ua/middle/nodejs/how-to-handle-errors-when-working-with-streams-in-nodejs.md)  | [Чи працювали ви з pino?](/ua/middle/nodejs/have-you-ever-worked-with-pino.md) |