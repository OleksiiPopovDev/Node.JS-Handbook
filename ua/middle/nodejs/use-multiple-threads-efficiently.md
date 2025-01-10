#### * Utilize multi-threading effectively

У Node.js, який використовує модель однопотокового виконання з подіями, багатопотокове програмування управляється не так, як у традиційних середовищах. Проте, існують способи ефективного використання багатопоточності:

1. **Worker Threads**:
   - У Node.js з версії 10.5.0 введено модуль `worker_threads`, що дозволяє створювати фонові потоки для виконання обчислювальних завдань.
   - Ви можете використовувати `Worker` об'єкти для запуску коду, який виконується паралельно з основним потоком.

   ```javascript
   const { Worker } = require('worker_threads');

   const worker = new Worker(`
     const { parentPort } = require('worker_threads');
     parentPort.on('message', (task) => {
       // Обчислювальне завдання
       const result = task * 2;
       parentPort.postMessage(result);
     });
   `, { eval: true });

   worker.postMessage(10);
   worker.on('message', (result) => {
     console.log(`Result: ${result}`);
   });
   ```

2. **Cluster Module**:
   - Модуль `cluster` дозволяє створювати кілька копій (fork) одного й того ж Node.js процесу, щоб він міг використовувати всі ядра CPU.
   - Це корисно для розподілу навантаження при обробці HTTP-запитів.

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
       res.end('hello world\n');
     }).listen(8000);
   }
   ```

3. **Asynchronous Non-blocking I/O**:
   - Використання асинхронних функцій та промісів (Promises) дозволяє ефективно працювати з операціями введення-виведення, не блокуючи головний потік.
   - Для інтенсивних обрахунків краще передавати обробку в `worker_threads`.

4. **Профілювання і Оптимізація**:
   - Потрібно аналізувати виконання вашої програми, щоб визначити вузькі місця.
   - Використовуйте інструменти типу `clinic.js` або вбудовані профілювальники в налагоджувачах.

У загальному, потрібно грамотно оцінювати, коли багатопоточність принесе користь, і для яких саме завдань доцільніше використовувати інші підходи паралельному виконанню.

| Back | Forward |
|---|---|
| [Чи працювали ви з pino?](/ua/middle/nodejs/have-you-ever-worked-with-pino.md)  | [Stream large files efficiently](/ua/middle/nodejs/streaming-large-files-efficiently.md) |