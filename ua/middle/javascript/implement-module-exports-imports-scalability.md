#### * Implement module exports and imports for scalability

У JavaScript, для реалізації модульності та масштабованості проектів, зазвичай використовуються два основних способи для організації експорту та імпорту модулів: CommonJS (переважно в середовищі Node.js) і ES Modules (або ECMAScript Modules, ESM).

### Експорт та імпорт модулів за допомогою CommonJS

У Node.js популярним підходом є використання синтаксису CommonJS. Ось приклад:

**Експорт (file `math.js`):**

```javascript
// math.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};
```

**Імпорт (file `app.js`):**

```javascript
// app.js
const math = require('./math');

console.log(math.add(2, 3)); // 5
console.log(math.subtract(5, 2)); // 3
```

### Експорт та імпорт модулів за допомогою ES Modules

ES Modules (ESM) є частиною стандарту ECMAScript і підтримується як в браузерах, так і в нових версіях Node.js.

**Експорт (file `math.js`):**

```javascript
// math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
```

Або можна використовувати експорт за замовчуванням чи груповий експорт:

```javascript
// math.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

export default {
    add,
    subtract
};
```

**Імпорт (file `app.js`):**

```javascript
// app.js
import { add, subtract } from './math.js';

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
```

Або використовуючи імпорт за замовчуванням:

```javascript
// app.js
import math from './math.js';

console.log(math.add(2, 3)); // 5
console.log(math.subtract(5, 2)); // 3
```

### Переваги використання модулів

1. **Організація коду**: Модулі дозволяють розділити код на логічні частини, що спрощує його читання і супровід.
2. **Повторне використання коду**: Логіку можна винести в окремий модуль та використовувати в декількох місцях проекту.
3. **Спрощення тестування**: Чітко ізольовані модулі легше тестувати.
4. **Менше конфліктів**: Використання модулів зменшує ймовірність конфліктів імен у великих проектах.

Кожна з цих систем має свої застосування, тому важливо вибирати ту, що найбільше відповідає потребам вашого проекту та оточення.

| Back | Forward |
|---|---|
| [Understand and use the Proxy object](/ua/middle/javascript/understand-and-use-the-proxy-object.md)  | [Яка різниця між Monolith/SOA/Microservices?](/ua/middle/microservices/what-is-the-difference-between-monolith-soa-and-microservices.md) |