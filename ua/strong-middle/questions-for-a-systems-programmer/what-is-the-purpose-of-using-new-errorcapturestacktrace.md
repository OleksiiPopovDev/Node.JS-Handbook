#### 177. Для чого використовують new Error.captureStackTrace?

У JavaScript метод `Error.captureStackTrace` використовується переважно для налаштування стек-трейсів у об'єктах помилки. Це спеціальна функція, доступна у середовищі V8 (яке використовується в Chrome та Node.js), і вона дозволяє більш точно контролювати, як стек викликів зберігається у об'єкті помилки. Деякі з основних цілей використання `Error.captureStackTrace`:

1. **Створення користувацьких класів помилок**: Метод дозволяє розробникам створювати власні класи помилок, котрі можуть зберігати стек викликів безпосередньо з місця створення, замість того, щоб пересильно використовувати стандартні об'єкти помилки.

2. **Фільтрація чи модифікація стеку**: Ви можете виключити певні функції чи рівні стеку, зробивши стек-трейс більш читабельним та специфічним для потреб вашої програми.

3. **Оптимізація та діагностика**: Можна зменшити обсяг стеку для специфічних помилок, що може бути корисним для діагностичних цілей або покращення продуктивності, особливо в великих програмах.

Приклад використання `Error.captureStackTrace`:

```javascript
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
    // Capture stack trace, omitting constructor call from it.
    Error.captureStackTrace(this, CustomError);
  }
}

try {
  throw new CustomError("This is a custom error message");
} catch (err) {
  console.error(err.stack);
}
```

У цьому прикладі, `Error.captureStackTrace` використовується, щоб стек трейс не включав виклик конструктора `CustomError`, надаючи тим самим більш чистому трейсу викликів.

| Back | Forward |
|---|---|
| [Навіщо потрібен WASI та які можливості він дає?](/ua/strong-middle/questions-for-a-systems-programmer/why-is-wasi-needed-and-what-capabilities-does-it-provide.md)  | [Які ви знаєте deprecated API та якою є стратегія їх виведення з використання?](/ua/strong-middle/questions-for-a-systems-programmer/what-deprecated-apis-do-you-know-and-what-strategy-would-be-used-to-retire-them.md) |