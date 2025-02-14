#### 81. Яка різниця у використанні ES modules і CommonJS модулів?

У JavaScript існує два основних підходи до модульності: ES (ECMAScript) Modules і CommonJS. Кожен з цих підходів має свої особливості, переваги та недоліки:

### ES Modules

- **Стандарт**: ES Modules є стандартом ECMAScript (починаючи з ES6).
- **Синтаксис**:
  - Імпорт: `import { functionName } from './module.js';`
  - Експорт: `export function functionName() {...}`
- **Асинхронність**: Імпорти є асинхронними та обробляються на етапі парсингу.
- **Браузери**: Підтримується безпосередньо в сучасних браузерах шляхом використання тега `<script type="module">`.
- **Можливості**: Динамічний імпорт можливий за допомогою `import()`, що дозволяє імпортувати модуль динамічно під час виконання.
- **Явне експортування**: Значення, які потрібно експортувати, необхідно специфікувати явно.
- **Требує**: Використання розширення файлу `.mjs` або відповідної конфігурації для розрізнення від CommonJS у Node.js додатках.

### CommonJS

- **Стандарт**: Історично більше асоціюється з Node.js.
- **Синтаксис**:
  - Імпорт: `const module = require('./module');`
  - Експорт: `module.exports = functionName;`
- **Синхронність**: Імпорт є синхронним і відбувається в момент виконання.
- **Сумісність**: Використовувався для сумісності з Node.js додатками до того, як ES Modules набули широкої підтримки.
- **Простота**: Менш складний синтаксис для початківців порівняно з ES Modules.
- **Неявне експортування**: Все, що прив'язане до `module.exports` або `exports`, може бути доступним ззовні.

### Порівняння та Контраст

- **Структурність**: ES Modules забезпечують більш структурований підхід з явним імпортом та експортом.
- **Сумісність**: CommonJS зазвичай використовується в старих Node.js проектах, тоді як ES Modules все частіше використовуються в сучасному JavaScript.
- **Область видимості**: У CommonJS змінні мають модульну область видимості, тоді як в ES Modules діє строгий режим із видимістю, що схожа на `use strict`.
- **Оптимізація**: ES Modules дозволяють статичний аналіз коду, що покращує можливості оптимізації з боку інструментів зборки (tree shaking).

Обираючи між ES Modules та CommonJS, слід враховувати специфіку проекту, середовище виконання та бекендові вимоги щодо сумісності. З загальною тенденцією до використання ES Modules варто розглядати їх в нових проектах.

| Back | Forward |
|---|---|
| [Які є варіанти використання модулів child_process, worker_threads і cluster?](/ua/middle/nodejs/what-are-the-options-for-using-modules-childprocess-workerthreads-and-cluster.md)  | [Для чого і як використовують клас EventEmitter з базового модуля ’node:events’?](/ua/middle/nodejs/what-is-the-purpose-and-how-to-use-the-eventemitter-class-from-the-nodeevents-module.md) |