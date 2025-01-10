#### 171. Як захистити SharedArrayBuffer від запису з різних worker_threads?

Щоб захистити `SharedArrayBuffer` від одночасного запису з різних `worker_threads`, потрібно управляти доступом до буфера з використанням механізмів синхронізації. Ось кілька стратегій, які можна застосувати:

1. **Atomics:** Використовуйте атомарні операції з модуля `Atomics`, щоб гарантувати безпечний доступ до даних в `SharedArrayBuffer`. Атомарні операції дозволяють зчитувати і записувати дані в пам'ять так, що жоден потік не зможе перебити інший під час виконання цих операцій.

   Приклад:

   ```javascript
   const sharedBuffer = new SharedArrayBuffer(4);
   const uint32Array = new Uint32Array(sharedBuffer);

   // В одному worker
   Atomics.store(uint32Array, 0, 123);

   // В іншому worker виконуємо операцію,
   // гарантуючи взаємну винятковість
   const value = Atomics.load(uint32Array, 0);
   ```

2. **Mutex (взаємне виключення):** Реалізуйте простий алгоритм взаємного виключення для управління доступом до секцій коду, які взаємодіють із `SharedArrayBuffer`. Це можна реалізувати, наприклад, використовуючи `Atomics.wait` і `Atomics.notify`.

   Приклад реалізації простого м'ютекса:

   ```javascript
   const mutex = new Int32Array(new SharedArrayBuffer(4));

   function acquireLock() {
     while (Atomics.compareExchange(mutex, 0, 0, 1) !== 0) {
       Atomics.wait(mutex, 0, 1);
     }
   }

   function releaseLock() {
     Atomics.store(mutex, 0, 0);
     Atomics.notify(mutex, 0, 1);
   }

   // Використання:
   acquireLock();
   // критична секція
   releaseLock();
   ```

3. **Message Passing:** Реалізуйте обмін повідомлень між `worker_threads`, щоб координувати доступ до `SharedArrayBuffer`. Це може бути ефективно, якщо критичні секції великі або коли доступ до буфера може бути централізованим через один поток.

Таким чином, управління доступом до `SharedArrayBuffer` може бути досягнуто завдяки правильному використанню атомарних операцій та механізмів синхронізації, що забезпечують безпечний спільний доступ до пам'яті з різних потоків.

| Back | Forward |
|---|---|
| [Що можна робити за допомогою node:vm?](/ua/strong-middle/questions-for-a-systems-programmer/what-can-you-do-with-node-vm.md)  | [Доведіть, що будь-який модуль у Node.js при завантаженні огортається у функцію і створює замикання?](/ua/strong-middle/questions-for-a-systems-programmer/proof-that-any-module-in-nodejs-is-wrapped-as-a-function-and-creates-closures-when-loaded.md) |