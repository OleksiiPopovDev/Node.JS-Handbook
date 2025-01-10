#### 109. Що таке Web Workers? Для чого їх використовують?

Web Workers — це механізм у JavaScript, що дозволяє виконувати код у фоновому процесі, окремо від основного потоку виконання сценарію на веб-сторінці. Це дозволяє забезпечити асинхронність та покращити продуктивність, уникаючи блокування головного потоку, який відповідає за взаємодію з користувачем, оновлення інтерфейсу та інші важливі операції.

### Основні переваги Web Workers:

- **Паралельне обчислення:** Дозволяють виконувати складні та часовитратні операції (наприклад, обчислення, обробку даних) у паралельному потоці без впливу на продуктивність інтерфейсу користувача.
  
- **Поліпшення відгуку:** Забезпечують плавність та швидкість інтерфейсу, оскільки важкі задачі не блокують головний потік.

- **Окремий контекст:** Web Workers мають власний контекст виконання, що включає об'єкти `navigator`, `location`, а також функції `setTimeout`, `setInterval` і `XMLHttpRequest`. Вони не мають доступу до DOM, що робить їх безпечними для багатониткового використання.

### Приклад використання Web Workers:

```javascript
// Головний файл, main.js
const worker = new Worker('worker.js');

worker.postMessage('Hello, worker!');

worker.onmessage = function(e) {
  console.log('Message from worker: ' + e.data);
};

// Веб-воркер, worker.js
onmessage = function(e) {
  console.log('Message received from main script: ' + e.data);
  // Виконання ватажкої задачі
  let result = doHeavyTask(e.data);
  
  // Повернення результату у головний потік
  postMessage(result);
};

function doHeavyTask(data) {
  // Наприклад, виконати складні обчислення
  return data.split('').reverse().join('');
}
```

### Коли використовувати Web Workers?

- При виконанні складних обчислень або обробки великих масивів даних.
- При здійсненні фонових завантажень або викликів API.
- У сценаріях, де важливо зберігати високу швидкість та відгук інтерфейсу користувача.

| Back | Forward |
|---|---|
| [Яка різниця між abstract і interface?](/ua/middle/javascript/what-is-the-difference-between-an-abstract-and-an-interface.md)  | [Які особливості передачі даними між worker’ами та основним потоком?](/ua/middle/javascript/what-are-the-characteristics-of-data-transmission-between-workers-and-the-main-stream.md) |