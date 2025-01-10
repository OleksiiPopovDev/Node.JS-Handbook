#### 177. Для чого використовують new Error.captureStackTrace?

`new Error.captureStackTrace` в Node.js використовується для захоплення інформації про стек виконання на момент створення помилки. Це допомагає відстежувати точне місце в коді, де виникла помилка, що є корисним для відлагодження.

Функція `Error.captureStackTrace` дозволяє налаштовувати стек трасування вручну і має такі основні застосування:

1. **Відстежування викликів**: дає можливість уникнути включення в стек трасування специфічних функцій, за допомогою яких захоплюється стек, як-от обгорткові функції або бібліотечні виклики, які не є корисними для кінцевого користувача.

2. **Створення користувацьких Error класів**: при створенні власних класів помилок можна контролювати стек трасування задля кращого представлення інформації в логах або звітах про помилку.

Ось як це можна використати в коді:

```javascript
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;

    // Захоплення стека для поточного об'єкта
    Error.captureStackTrace(this, this.constructor);
  }
}

try {
  throw new CustomError('Це приклад користувацької помилки');
} catch (error) {
  console.log(error.stack);
}
```

У прикладі вище, `CustomError` являє собою користувацьку помилку, яка використовує `Error.captureStackTrace` для захоплення стека виконання без додаткових шарів обгортання.

| Back | Forward |
|---|---|
| [Навіщо потрібен WASI та які можливості він дає?](/ua/strong-middle/questions-for-a-systems-programmer/what-is-the-purpose-of-wasi-and-what-benefits-does-it-provide.md)  | [Які ви знаєте deprecated API та якою є стратегія їх виведення з використання?](/ua/strong-middle/questions-for-a-systems-programmer/what-are-deprecated-apis-you-know-and-what-strategy-is-their-removal.md) |