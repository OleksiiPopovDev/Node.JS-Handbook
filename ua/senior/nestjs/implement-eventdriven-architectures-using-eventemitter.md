#### * Implement event-driven architectures using EventEmitter

Щоб реалізувати архітектуру, керовану подіями, за допомогою `EventEmitter` в Node.js, потрібно скористатися модулем `events`, який надає можливість створювати та управляти подіями. Ось простий приклад того, як це можна зробити:

1. **Імпорт модуля `events`**: Спочатку потрібно імпортувати модуль `events`.

2. **Створити екземпляр `EventEmitter`**: Це дозволяє створювати та відправляти події.

3. **Додати слухачів подій**: Слухачі подій виконують певні функції у відповідь на подію.

4. **Викликати (емітити) події**: Події можна викликати у визначений момент часу, щоб запустити слухачі.

Ось приклад, який демонструє ці кроки:

```javascript
const EventEmitter = require('events');

// Створюємо екземпляр EventEmitter
const eventEmitter = new EventEmitter();

// Додаємо слухача для події 'greet'
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Додаємо ще одного слухача для події 'greet'
eventEmitter.on('greet', (name) => {
    console.log(`Welcome, ${name}! Have a great day!`);
});

// Емітуємо подію 'greet', передаючи параметр 'John'
eventEmitter.emit('greet', 'John');

// Додаємо слухача для події 'farewell'
eventEmitter.on('farewell', (name) => {
    console.log(`Goodbye, ${name}. See you soon!`);
});

// Емітуємо подію 'farewell'
eventEmitter.emit('farewell', 'John');
```

### Пояснення:
- Ми створили екземпляр `EventEmitter`.
- До нього було додано кілька слухачів для різних подій, таких як `'greet'` та `'farewell'`.
- Події `'greet'` та `'farewell'` були викликані за допомогою методу `emit`, який запускає всі відповідні слухачі.

Цей простий приклад демонструє, як можна побудувати базову архітектуру, керовану подіями, яка може стати основою для складніших систем.

| Back | Forward |
|---|---|
| [Understand CQRS (Command Query Responsibility Segregation) with Nest.js](/ua/senior/nestjs/understanding-cqrs-with-nestjs.md)  | [Handle microservices with @nestjs/microservices](/ua/senior/nestjs/handle-microservices-with-nestjs-microservices.md) |