#### * Use child_process and worker_threads for parallel processing

# Використання `child_process` та `worker_threads` для паралельної обробки

У Node.js існує кілька методів для паралельної обробки, зокрема `child_process` та `worker_threads`. Обидва підходи дозволяють виконувати код у паралельних потоках, але з різними механізмами та цільовим використанням.

## `child_process`

Модуль `child_process` використовується для запуску зовнішніх процесів, тобто створення нових процесів операційної системи. Це може бути корисно для забезпечення паралелізму на рівні процесів.

### Приклад використання `child_process`:

```javascript
const { exec } = require('child_process');

exec('node someScript.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Помилка виконання: ${error}`);
    return;
  }
  if (stderr) {
    console.error(`Стандартна помилка: ${stderr}`);
    return;
  }
  console.log(`Стандартний вивід: ${stdout}`);
});
```

### Коли використовувати:
- Коли потрібно виконати зовнішні скрипти чи програми.
- Коли потрібна повна ізоляція від основного процесу Node.js.
- Коли велика накладні витрати процесу не є проблемою.

## `worker_threads`

Модуль `worker_threads` дозволяє запускати JavaScript-код у багатопотоковому режимі в межах одного процесу, що може бути ефективніше з точки зору ресурсів, ніж `child_process`.

### Приклад використання `worker_threads`:

```javascript
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.on('message', (message) => {
    console.log(`Отримано від потоку: ${message}`);
  });
  worker.postMessage('Привіт, потік');
} else {
  parentPort.on('message', (message) => {
    console.log(`Отримано: ${message}`);
    parentPort.postMessage('Привіт, основний потік');
  });
}
```

### Коли використовувати:
- Коли потрібно виконувати JavaScript-код у паралельних потоках без створення нових процесів.
- Коли важлива мінімізація накладних витрат.
- Для спільного використання пам'яті між потоками з використанням `SharedArrayBuffer`.

## Порівняння:

- **`child_process`**: створює окремий процес із власною пам'яттю та контекстом, ізольований від батьківського процесу.
- **`worker_threads`**: створює новий потік у межах одного процесу, що забезпечує більшу роздільну здатність при обміні даними через `parentPort`.

Обирайте відповідний інструмент відповідно до конкретного випадку використання та вимог вашого проєкту.

| Back | Forward |
|---|---|
| [Optimize task scheduling](/ua/middle/nodejs/optimizing-task-scheduling.md)  | [Handle real-time communication using WebSocket or Socket.io](/ua/middle/nodejs/handle-realtime-communication-using-websocket-or-socketio.md) |