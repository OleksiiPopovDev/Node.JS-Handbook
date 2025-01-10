#### 82. Для чого і як використовують клас EventEmitter з базового модуля ’node:events’?

Клас `EventEmitter` з модуля `'node:events'` використовується в Node.js для керування та обробки подій. Це основний механізм, за допомогою якого можна працювати з подіями в асинхронних середовищах. `EventEmitter` дозволяє створювати об'єкти, які можуть підписуватися на події (встановлювати слухачі) та випромінювати (викидати) події.

Ось як він зазвичай використовується:

### Використання EventEmitter:

1. **Імпорт класу EventEmitter**
   Спочатку потрібно імпортувати клас `EventEmitter` з модуля `events`.

   ```javascript
   const EventEmitter = require('node:events');
   ```

2. **Створення екземпляра EventEmitter**
   Створюють новий екземпляр класу `EventEmitter`.

   ```javascript
   const myEmitter = new EventEmitter();
   ```

3. **Додавання слухача події**
   Метод `on()` використовується, щоб підписатися на певну подію.

   ```javascript
   myEmitter.on('event', () => {
      console.log('Подія "event" була викинута');
   });
   ```

4. **Викидання події**
   Метод `emit()` використовується для викидання події, що означає, що всі слухачі, підписані на цю подію, будуть викликані.

   ```javascript
   myEmitter.emit('event');
   ```

### Практичний приклад:
Уявіть, що у вас є сервер, який повинен реагувати на певні події:

```javascript
const EventEmitter = require('node:events');
class Server extends EventEmitter {
   constructor() {
      super();
   }
   
   start() {
      console.log('Сервер запущено');
      this.emit('started');
   }
}

const server = new Server();

// Додавання слухача на подію 'started'
server.on('started', () => {
   console.log('Серверна подія "started" була викинута');
});

// Старт сервера, що викидає подію 'started'
server.start();
```

### Переваги використання EventEmitter:
- **Асинхронність і масштабованість**: Події та обробники дозволяють ефективно керувати асинхронними операціями.
- **Відокремленість логіки**: За допомогою подій можна відокремити логіку ініціювання і обробки, що спрощує підтримку коду.

Це потужний інструмент, що використовується не лише для внутрішньої роботи в Node.js, але й дозволяє розробникам моделювати свою логіку на базі подій.

| Back | Forward |
|---|---|
| [Яка різниця у використанні ES modules і CommonJS модулів?](/ua/middle/nodejs/whats-the-difference-between-using-es-modules-and-commonjs-modules.md)  | [Скільки ядер процесора залучені при виконанні Node.js програми за замовчуванням?](/ua/middle/nodejs/how-many-cpu-cores-are-used-by-default-when-running-a-nodejs-program.md) |