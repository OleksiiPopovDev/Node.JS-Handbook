#### * Understand and use the Proxy object

## Proxy об'єкт у JavaScript

`Proxy` об'єкт у JavaScript дозволяє створювати особливі об'єкти, які можуть перехоплювати та кастомізувати операції над іншими об'єктами, такі як читання, записання, перерахунок в циклі та інші. Це відбувається шляхом визначення певних "ловців" (traps) для різних операцій.

### Створення Proxy

`Proxy` об'єкт створюється за допомогою конструктора `Proxy`, який приймає два аргументи:

1. **target**: об'єкт, для якого створюється Proxy.
2. **handler**: об'єкт, що містить "ловці", які перехоплюють операції.

```javascript
const target = {
  message: "Hello, world!"
};

const handler = {
  get(target, property, receiver) {
    console.log(`Getting property: ${property}`);
    return target[property];
  },
  set(target, property, value, receiver) {
    console.log(`Setting property: ${property} to ${value}`);
    target[property] = value;
    return true; // Повертаємо true, щоб операція запису була успішною
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.message); // Виведе: Getting property: message
                            //         Hello, world!

proxy.message = "Hello, Proxy!"; // Виведе: Setting property: message to Hello, Proxy!
```

### Використання ловців

`Proxy` об'єкт підтримує багато різних ловців, деякі з них:

- `get`: викликається при читанні властивості.
- `set`: викликається при записі у властивість.
- `has`: перехоплює оператор `in`.
- `deleteProperty`: перехоплює оператор `delete`.
- `apply`: викликається при виклику функції.
- `construct`: викликається при використанні оператора `new`.

### Практичні випадки використання

1. **Валідація вводу**: Перевірка даних, які встановлюються в об'єкт.
2. **Логування**: Логування викликів методів або доступу до властивостей.
3. **Кешування**: Збереження результатів дорогих обчислень.
4. **Спеціальна обробка відсутніх властивостей**: Наприклад, повернення значення за замовчуванням.

`Proxy` об'єкти дуже потужні, але варто використовувати їх обережно, зважаючи на потенційні проблеми з продуктивністю та дебагінгом. Вони не є звичайним інструментом і часто використовуються в певних спеціальних випадках.

| Back | Forward |
|---|---|
| [Analyze event loop performance](/ua/middle/javascript/analyze-event-loop-performance.md)  | [Implement module exports and imports for scalability](/ua/middle/javascript/implement-module-exports-imports-scalability.md) |