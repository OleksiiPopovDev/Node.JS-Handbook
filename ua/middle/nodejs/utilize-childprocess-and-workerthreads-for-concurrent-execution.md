#### * Use child_process and worker_threads for parallel processing

Використання модулів `child_process` та `worker_threads` в Node.js дозволяє виконувати паралельні операції, що може бути корисним для підвищення продуктивності додатка шляхом розділення задач на окремі процеси або потоки. Розглянемо приклади використання обох підходів.

### Використання `child_process`

Модуль `child_process` дозволяє створювати дочірні процеси. Ви можете виконувати шельні команди, викликати скрипти Node.js або інші додатки.

```javascript
const { exec } = require('child_process');

// Виконання шельної команди
exec('ls -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`Помилка: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Стерео вихід: ${stderr}`);
    return;
  }
  console.log(`Вихід команди:\n${stdout}`);
});
```

### Використання `worker_threads`

`worker_threads` пропонує можливість створення багатопотокових додатків в Node.js. Кожен потік має свій власний V8 інстанс, що забезпечує повноцінну багатозадачність.

#### Головний файл:
```javascript
const { Worker } = require('worker_threads');

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Потік завершився з кодом виходу ${code}`));
    });
  });
}

runService('Hello, Worker!').then(result => {
  console.log(result);
}).catch(err => {
  console.error(err);
});
```

#### Файл `worker.js`:
```javascript
const { parentPort, workerData } = require('worker_threads');

// Обробка даних
parentPort.postMessage(workerData + ' - процесовано');
```

Обидва підходи мають свої переваги і недоліки. `child_process` простіше в використанні для виконання сторонніх програм, тоді як `worker_threads` краще підходить для задач, які вимагають інтенсивного CPU обчислення всередині Node.js, оскільки він дозволяє застосовувати спільну пам’ять через `SharedArrayBuffer`, що є ефективним для обміну даними між потоками.

| Back | Forward |
|---|---|
| [Optimize task scheduling](/ua/middle/nodejs/scheduling-optimization.md)  | [Handle real-time communication using WebSocket or Socket.io](/ua/middle/nodejs/handle-realtime-communication-using-websocket-or-socketio.md) |