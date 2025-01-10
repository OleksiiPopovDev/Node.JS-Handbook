#### 80. Які є варіанти використання модулів child_process, worker_threads і cluster?

У Node.js існує кілька способів виконання паралельних завдань або розподілення навантаження на декілька ядер процесора. Кожен із цих модулів - `child_process`, `worker_threads` і `cluster` - пропонує свої підходи в залежності від ваших потреб. Розглянемо можливі варіанти використання кожного з них:

### 1. `child_process`

Модуль `child_process` дозволяє запускати дочірні процеси, щоб виконувати команди в системі, не блокуючи основний виконуваний потік Node.js.

**Варіанти використання:**

- **Запуск зовнішньої команди чи скрипта:** Можна виконати bash-команду або зовнішній скрипт, якщо є потреба взаємодіяти із системою чи сутностями поза Node.js.
  
  ```javascript
  const { exec } = require('child_process');

  exec('ls -l', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
  ```

- **Створення нових процесів Node.js:** Запуск окремого Node.js-скрипта як дочірнього процесу.

  ```javascript
  const { fork } = require('child_process');

  const child = fork('childScript.js');

  child.on('message', (message) => {
    console.log(`Received from child: ${message}`);
  });

  child.send('Hello Child!');
  ```

### 2. `worker_threads`

`worker_threads` надає можливість створювати потоки, які виконуються в паралельних потоках у межах одного процесу JavaScript.

**Варіанти використання:**

- **Паралельне виконання обчислень:** Максимально ефективно використовувати багатоядерні процесори для виконання обчислювально затратних завдань.

  ```javascript
  const { Worker, isMainThread, parentPort } = require('worker_threads');

  if (isMainThread) {
    const worker = new Worker(__filename);
    worker.on('message', (message) => console.log(message));
    worker.postMessage('Hello Worker!');
  } else {
    parentPort.on('message', (message) => {
      console.log(`Received from main thread: ${message}`);
      parentPort.postMessage('Worker finished task');
    });
  }
  ```

- **Ізоляція:** Використання потоків для ізоляції завдань, які можуть потенційно взаємодіяти з "важкими" бібліотеками, блокуючи основний потік.

### 3. `cluster`

Модуль `cluster` використовується для створення кількох примірників програми Node.js, які дозволяють ефективно розподілити навантаження між усіма доступними ядрами процесора.

**Варіанти використання:**

- **Балансування навантаження:** Реалізація сценаріїв, де серверні програми вимагають обробляти безліч вхідних запитів паралельно без втрати в швидкості завантаження.

  ```javascript
  const cluster = require('cluster');
  const http = require('http');
  const numCPUs = require('os').cpus().length;

  if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died`);
    });
  } else {
    http.createServer((req, res) => {
      res.writeHead(200);
      res.end('Hello World\n');
    }).listen(8000);
  }
  ```

Кожен із цих модулів має свої особливості та підходи до обчислень і рішення завдань, тому вибір між ними залежить від конкретних вимог вашого проекту.

| Back | Forward |
|---|---|
| [Як налаштувати кешування?](/ua/middle/nodejs/how-to-configure-caching.md)  | [Яка різниця у використанні ES modules і CommonJS модулів?](/ua/middle/nodejs/what-is-the-difference-between-using-es-modules-and-commonjs-modules.md) |