#### * Implement module exports and imports for scalability

У Node.js, зазвичай використовують `module.exports` та `require` для імпорту та експорту модулів. Однак, починаючи з ECMAScript 6, була введена система модулів ES6 з `export` та `import`, яка стає стандартом для сучасних застосунків. Розглянемо обидва підходи.

### Використання `module.exports` та `require`

#### Експортування модуля

Створімо файл `math.js`, де ми експортуємо функції через `module.exports`:

```javascript
// math.js

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
  add,
  subtract
};
```

#### Імпорт модуля

Тепер, щоб імпортувати ці функції в іншому файлі, скористаємося `require`:

```javascript
// app.js

const math = require('./math');

console.log(math.add(5, 3)); // 8
console.log(math.subtract(5, 3)); // 2
```

### Використання ES6 `export` та `import`

#### Експортування модуля

Створімо файл `math.js`, але використовуємо синтаксис ES6:

```javascript
// math.js

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

Можна також об'єднати експорт:

```javascript
// math.js

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

export { add, subtract };
```

#### Імпорт модуля

Тепер, застосовуючи ES6, імпортуємо ці функції у файлі `app.js`:

```javascript
// app.js

import { add, subtract } from './math.js';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
```

### Примітки

1. **Системи імпорт/експорт**: `module.exports` та `require` є специфічними для Node.js, в той час як `export` та `import` доступні у більшості сучасних браузерів і стали стандартом в JavaScript.

2. **Конфігурація для ES6**: Для використання імпорту та експорту в Node.js, ви, можливо, повинні налаштувати `package.json` для використання модулів ES6:

   ```json
   {
     "type": "module"
   }
   ```

3. **Сумісність**: Переконайтеся, що ваш середовище і побудовчі інструменти (якщо використовуються) підтримують ES6 модулі.

Вибір між цими двома підходами і тим, як їх комбінувати, може залежати від конкретних вимог проекту.

| Back | Forward |
|---|---|
| [Understand and use the Proxy object](/ua/middle/javascript/understand-and-use-the-proxy-object.md)  | [Яка різниця між Monolith/SOA/Microservices?](/ua/middle/microservices/whats-the-difference-between-monolith-soa-and-microservices.md) |