#### 6. Чи можливо використовувати кілька потоків (threads)? За допомогою яких модулів це реалізовано?

Так, у Node.js можливо реалізувати багатопотоковість, хоча історично Node.js був відомий своєю архітектурою на основі одного потоку та асинхронного оброблення операцій вводу/виводу. Проте починаючи з Node.js 10, додано підтримку модулю Worker Threads, який дозволяє створювати і управляти кількома потоками.

### Основні модулі для реалізації багатопотоковості в Node.js:

1. **Worker Threads**
   - Це основний модуль для створення і роботи з потоками у Node.js.
   - Дозволяє створювати множинні робочі потоки, які виконують JavaScript-код паралельно у окремих середовищах.
   - Варто використовувати для виконання CPU-інтенсивних задач на багатоядерних системах.

   ```javascript
   const { Worker, isMainThread, parentPort } = require('worker_threads');

   if (isMainThread) {
     const worker = new Worker(__filename);
     worker.on('message', msg => console.log(msg));
     worker.postMessage('Hello from main thread');
   } else {
     parentPort.on('message', msg => {
       parentPort.postMessage(`Hello from worker: ${msg}`);
     });
   }
   ```

2. **Сutе дружнє до потоків оброблення**
   - Багато бібліотек у Node.js, наприклад, бібліотеки для роботи з даними або мережевими з'єднаннями, вже асинхронні і працюють у фонових потоках, навіть якщо ви цього не бачите. 

Таким чином, використання потоків у Node.js стало простішим і більш інтегрованим в сучасних версіях, надаючи можливість оптимізації та поліпшення продуктивності для певних типів задач.

| Back | Forward |
|---|---|
| [Яким чином Node.js сервер здатен обробляти одночасно багато паралельних запитів від клієнтів, маючи лише один thread?](/ua/junior/nodejs/how-does-a-nodejs-server-handle-many-parallel-requests-from-clients-concurrently-with-only-one-thread.md)  | [Node.js інтерпретує чи компілює код програми?](/ua/junior/nodejs/is-nodejs-interpreting-or-compiling-code.md) |