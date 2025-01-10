#### 103. Що таке callback у JavaScript?

У JavaScript, callback — це функція, яка передається як аргумент в іншу функцію, і викликається (назад викликається) після того, як певна операція завершена. Callbacks використовуються для обробки асинхронних операцій, щоб забезпечити виконання коду у правильній послідовності.

### Приклад

Ось приклад використання callback-функції:

```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'John', age: 30 };
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log(`Name: ${data.name}, Age: ${data.age}`);
}

fetchData(processData);
```

У цьому прикладі `fetchData` — це функція, яка імітує асинхронний запит на отримання даних (за допомогою `setTimeout`). Після того, як дані "отримані", викликається `callback` (в цьому випадку, `processData`), яка обробляє ці дані.

### Переваги callback

1. **Асинхронність**: дозволяє виконати код після завершення асинхронних операцій без блокування основного потоку.
2. **Гнучкість**: допомагає легко реалізувати різні варіанти коду, що виконуються після дій.

### Недоліки callback

- **Callback Hell**: складна ієрархічна структура коду, яка важко читається та супроводжується, коли є багато вкладених callback'ів.
- **Відстеження помилок**: важко відслідковувати помилки, коли обробка зворотних викликів є асинхронною і має багато рівнів вкладеності.

Для покращення роботи з асинхронними операціями, в JavaScript зараз використовують проміси та async/await, які допомагають уникнути callback hell і зробити код більш зрозумілим.

| Back | Forward |
|---|---|
| [Яка різниця між Promise.allSettled, Promise.race і Promise.any?](/ua/middle/javascript/whats-the-difference-between-promiseallsettled-promiserace-and-promiseany.md)  | [Чи кращі Promises за callback підхід? Чому?](/ua/middle/javascript/are-promises-better-than-callbacks-why.md) |