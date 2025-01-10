#### 103. Що таке callback у JavaScript?

У JavaScript, callback — це функція, яка передається як аргумент до іншої функції і викликається після того, як ця функція завершить своє виконання. Callback–функції часто використовуються для асинхронних операцій, таких як завантаження даних з сервера або обробка подій користувача.

Ось простий приклад використання callback у JavaScript:

```javascript
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

// Викликаємо функцію greet і передаємо sayGoodbye як callback
greet("Andriy", sayGoodbye);
```

У цьому прикладі `sayGoodbye` є callback-функцією, яка буде викликана після того, як виконання функції `greet` завершиться. Це дозволяє проводити складні обчислення або асинхронні дії у зрозумілий і логічний спосіб.

| Back | Forward |
|---|---|
| [Яка різниця між Promise.allSettled, Promise.race і Promise.any?](/ua/middle/javascript/what-is-the-difference-between-promiseallsettled-promiserace-and-promiseany.md)  | [Чи кращі Promises за callback підхід? Чому?](/ua/middle/javascript/are-promises-better-than-callbacks-why.md) |