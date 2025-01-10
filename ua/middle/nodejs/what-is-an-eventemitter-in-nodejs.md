#### 85. Що таке EventEmitter в Node.js?

В Node.js, `EventEmitter` є основним класом, який використовується для створення об'єктів, спроможних викликати події та додавати обробники для цих подій. Це частина модуля `events`, який забезпечує механізм обробки асинхронних подій.

Основні можливості `EventEmitter` включають:

- **Підписка на подію**: Ви можете додавати слухачів (обробники) до певних подій за допомогою методу `on` або його синоніма `addListener`.

- **Виклик події**: Викликаючи метод `emit`, ви можете ініціювати подію, на яку підписані обробники, і таким чином виконати ці обробники.

- **Видалення обробників**: За допомогою методів `removeListener` або `removeAllListeners` можна відключати слухачів від певних подій.

- **Одноразові обробники**: Метод `once` дозволяє додати обробник, який буде виконаний лише один раз при виникненні події.

Ось простий приклад використання `EventEmitter`:

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Додаємо обробник для події 'event'
myEmitter.on('event', () => {
  console.log('Подія була викликана!');
});

// Викликаємо подію 'event'
myEmitter.emit('event');
```

Цей клас є фундаментальним елементом для роботи з подіями у Node.js і дозволяє робити код більш модульним і реагувати на асинхронні події, такі як читання файлів, підключення до бази даних та багато іншого.

| Back | Forward |
|---|---|
| [Що таке middleware? Якщо ми пишемо свій middleware, чому саме там, чому не в коді сервісу?](/ua/middle/nodejs/what-is-a-middleware-if-we-write-our-own-middleware-why-not-in-the-service-code-itself.md)  | [Яке призначення файлу package.json для Node.js проєктів?](/ua/middle/nodejs/what-is-the-purpose-of-a-packagejson-file-for-nodejs-projects.md) |