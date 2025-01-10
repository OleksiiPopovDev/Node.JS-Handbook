#### * Understand and use the Proxy object

Об'єкт `Proxy` в JavaScript дозволяє створити кастомізовану поведінку для операцій, виконуваних з об'єктами. Він може "перехоплювати" такі операції, як читання, запис, привласнення та інші. Це дає змогу контролювати доступ до об'єкта та маніпулювати ним.

### Створення нового проксі

Щоб створити проксі, ви використовуєте конструктор `Proxy`, який приймає два аргументи:

1. **target**: об'єкт, який проксі обгортає.
2. **handler**: об'єкт з методами-пастками (`traps`), які визначають поведінку проксі.

```javascript
let targetObject = {
  message1: "Hello",
  message2: "World"
};

let handler = {
  get: function(target, property) {
    if (property in target) {
      return target[property];
    } else {
      return `Property ${property} is not found`;
    }
  }
};

let proxy = new Proxy(targetObject, handler);

console.log(proxy.message1); // Hello
console.log(proxy.message2); // World
console.log(proxy.message3); // Property message3 is not found
```

### Основні пастки проксі

Ось кілька основних пасток, які можна використовувати з проксі:

- **`get(target, property, receiver)`**: перехоплює операції доступу до властивостей.
- **`set(target, property, value, receiver)`**: перехоплює операції запису або встановлення властивостей.
- **`has(target, property)`**: перехоплює перевірку властивостей оператором `in`.
- **`deleteProperty(target, property)`**: перехоплює видалення властивостей за допомогою оператора `delete`.
- **`ownKeys(target)`**: перехоплює запит ключів об'єкта, наприклад для `Object.keys()`.
- **`apply(target, thisArg, argumentList)`**: перехоплює виклики функцій.
- **`construct(target, argumentList, newTarget)`**: перехоплює операції з використанням оператора `new`.

### Приклад пастки `set`

Давайте розглянемо приклад, в якому ми використовуємо пастку `set` для обмеження встановлення властивостей об'єкта тільки числовими значеннями:

```javascript
let numberOnlyHandler = {
  set: function(target, property, value) {
    if (typeof value === 'number') {
      target[property] = value;
      return true;
    } else {
      console.error(`Property ${property} must be a number.`);
      return false;
    }
  }
};

let numberProxy = new Proxy({}, numberOnlyHandler);

numberProxy.age = 25; // Нормальна операція
numberProxy.name = "John"; // Property name must be a number.
```

### Використання проксі

Проксі можуть бути дуже корисними в різних ситуаціях, наприклад:

- Валідація даних при доступі або модифікації об'єкта.
- Логування або відлагодження.
- Автоматичне заповнення обчислюваних значень.
- Забезпечення безпеки за рахунок обмеження доступу до певних частин об'єкта.

Проксі надають гнучкий та потужний механізм для управління поведінкою об'єктів у JavaScript, що дозволяє створювати більш динамічні та безпечні програми.

| Back | Forward |
|---|---|
| [Analyze event loop performance](/ua/middle/javascript/analyze-event-loop-performance.md)  | [Implement module exports and imports for scalability](/ua/middle/javascript/implement-module-exports-and-imports-for-scalability.md) |