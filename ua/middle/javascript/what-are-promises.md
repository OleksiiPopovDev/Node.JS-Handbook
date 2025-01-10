#### 101. Що таке Promises?

В JavaScript, `Promise` (обіцянка) є об'єктом, який представляє результат асинхронної операції, яка може завершитися успішно або з помилкою в майбутньому. Використання промісів дозволяє обробляти асинхронні виклики, уникаючи так званого "callback hell" (нечитабельного коду, коли однин колбек викликає інший).

### Основні стани Promise:
1. **pending** (очікується): початковий стан, операція ще не завершена.
2. **fulfilled** (виконаний): операція завершена успішно, і проміс був виконаний.
3. **rejected** (відхилений): операція завершена з помилкою, і проміс був відхилений.

### Методи:
- `then(onFulfilled, onRejected)`: додає обробники для виконання і відхилення проміса.
- `catch(onRejected)`: додає обробник для відхилення проміса.
- `finally(onFinally)`: додає обробник, який виконується незалежно від результату проміса.

### Приклад:

```javascript
let promise = new Promise((resolve, reject) => {
    // деяка асинхронна операція
    setTimeout(() => {
        const success = true; // змінити на false для перевірки відхилення
        if (success) {
            resolve("Операція завершена успішно!");
        } else {
            reject("Сталася помилка.");
        }
    }, 1000);
});

promise
    .then(result => {
        console.log(result); // Виведе "Операція завершена успішно!"
    })
    .catch(error => {
        console.log(error); // Виведе "Сталася помилка."
    })
    .finally(() => {
        console.log("Завжди виконується, незалежно від результату"); 
    });
```

Проміси є важливим інструментом для роботи з асинхронністю в JavaScript, особливо коли мова йде про запити до сервера або читання файлів. В поєднанні з `async/await`, вони роблять код більш зрозумілим і простим у підтримці.

| Back | Forward |
|---|---|
| [Чи гарантовано setTimeout викличе функцію через заданий час? Від чого це залежить?](/ua/middle/javascript/is-it-guaranteed-that-settimeout-will-call-the-function-after-a-specified-time-what-does-this-depend-on.md)  | [Яка різниця між Promise.allSettled, Promise.race і Promise.any?](/ua/middle/javascript/whats-the-difference-between-promiseallsettled-promiserace-and-promiseany.md) |