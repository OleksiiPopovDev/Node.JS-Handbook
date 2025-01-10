#### 85. Що таке EventEmitter в Node.js?

У Node.js `EventEmitter` є одним з основних модулів, який надає механізм для обробки подій. Це частина базової бібліотеки Node.js і дозволяє об'єктам створювати події, до яких можуть підписуватись інші частини коду — аналогічно паттерну спостерігача (observer pattern).

### Основні характеристики:

1. **Модульна структура**: `EventEmitter` є частиною модуля `events`, який потрібно імпортувати для використання у вашому коді.

   ```javascript
   const EventEmitter = require('events');
   ```

2. **Створення подій**: Ви можете створювати свої власні події, які можуть генерувати об'єкти в будь-який момент часу.

3. **Прослуховувачі подій**: Ви можете прикріплювати слушачів до цих подій. Коли подія стає активною, всі слухачі цієї події виконуються асинхронно.

4. **Методи**:

   - `on(eventName, listener)`: Додає слухача для певної події.
   - `emit(eventName, [...args])`: Викликає подію з певними аргументами.
   - `removeListener(eventName, listener)`: Видаляє слухача з події.
   - `once(eventName, listener)`: Додавання слухача, який спрацює тільки один раз для даної події.

### Приклад:

```javascript
const EventEmitter = require('events');

// Створюємо новий екземпляр класу EventEmitter
const myEmitter = new EventEmitter();

// Додаємо слухача до події 'event'
myEmitter.on('event', () => {
  console.log('Подія event була викликана!');
});

// Викликаємо подію 'event'
myEmitter.emit('event');  // Виведе: Подія event була викликана!
```

### Використання:

`EventEmitter` активно використовується в Node.js, особливо в модулях, які працюють з потоками даних, з'єднаннями (як `net` та `http`) і іншими об'єктами, де обробка подій є необхідною. Це дозволяє створювати асинхронний та реактивний код.

| Back | Forward |
|---|---|
| [Що таке middleware? Якщо ми пишемо свій middleware, чому саме там, чому не в коді сервісу?](/ua/middle/nodejs/what-is-middleware-if-were-writing-our-own-middleware-why-there-and-not-in-the-service-code.md)  | [Яке призначення файлу package.json для Node.js проєктів?](/ua/middle/nodejs/what-is-the-purpose-of-a-file-called-packagejson-for-a-nodejs-project.md) |