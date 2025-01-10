#### 81. Яка різниця у використанні ES modules і CommonJS модулів?

ES Modules (ECMAScript Modules) і CommonJS — це дві основні системи модульності в JavaScript, але вони мають кілька суттєвих відмінностей:

### 1. Синтаксис імпортів та експортів

**ES Modules:**
- Використовує `import` для імпорту модулів і `export` для експорту.
- Підтримується на рівні ECMAScript безпосередньо у браузерах та Node.js (з деякими умовами).

```javascript
// Експорт
export const myFunction = () => { /*...*/ };

// Імпорт
import { myFunction } from './myModule.js';
```

**CommonJS:**
- Використовує `require` для імпорту і `module.exports` або `exports` для експорту.
- Історично використовувалася в Node.js як стандартна система модульності.

```javascript
// Експорт
module.exports = {
  myFunction: () => { /*...*/ }
};

// Імпорт
const { myFunction } = require('./myModule');
```

### 2. Завантаження

- **ES Modules:** працює асинхронно, дозволяє використовувати `import()` для динамічного імпорту.
- **CommonJS:** завантажується синхронно, що іноді може бути проблемою для оптимізації продуктивності у великих додатках.

### 3. Область застосування

- **ES Modules:** підтримується нативно у сучасних браузерах і в Node.js, починаючи з версії 12 з розширенням `.mjs` або через встановлення 'type: "module"' в `package.json`.
- **CommonJS:** поширена в Node.js, але не підтримується в сучасних браузерах без допоміжних інструментів, таких як Babel.

### 4. Експорт за замовчуванням

- **ES Modules:** може використовувати `export default`.
- **CommonJS:** може експортувати один елемент як `module.exports`.

```javascript
// ES Modules
export default function() { /*...*/ }

// CommonJS
module.exports = function() { /*...*/ }
```

### 5. Зворотна сумісність

- **ES Modules:** не сприймає структури експортів/імпортів CommonJS.
- **CommonJS:** може імпортувати або вимагати ES Module, але з певними обмеженнями та поведінкою.

Вибір між ES Modules і CommonJS зазвичай залежить від середовища виконання та специфічних вимог проєкту.

| Back | Forward |
|---|---|
| [Які є варіанти використання модулів child_process, worker_threads і cluster?](/ua/middle/nodejs/what-are-the-usage-scenarios-for-the-childprocess-workerthreads-and-cluster-modules.md)  | [Для чого і як використовують клас EventEmitter з базового модуля ’node:events’?](/ua/middle/nodejs/what-is-the-purpose-and-how-are-events-used-with-the-eventemitter-class-from-the-nodeevents-module.md) |