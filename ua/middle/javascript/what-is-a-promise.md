#### 101. Що таке Promises?

Promises в JavaScript — це об'єкти, які представляють результат асинхронної операції, яка може завершитися або успішно з результатом, або з помилкою. Вони забезпечують більш зрозумілу та читабельну роботу з асинхронним кодом порівняно з традиційними callback-функціями. Promises мають три стани:

1. **Pending (Очікування)**: початковий стан, операція ще не завершена.
2. **Fulfilled (Виконано)**: операція завершилася успішно, і Promise має результат.
3. **Rejected (Відхилено)**: операція завершилася з помилкою.

Основні методи об'єкта Promise:

- `then()`: використовується для обробки успішного завершення проміса.
- `catch()`: використовується для обробки відхилення проміса.
- `finally()`: викликається після завершення проміса незалежно від його результату.

Приклад використання Promises:

```javascript
let promise = new Promise((resolve, reject) => {
  // Асинхронна операція
  setTimeout(() => {
    resolve("Операція завершена успішно");
    // або reject("Сталася помилка");
  }, 1000);
});

promise
  .then((result) => {
    console.log(result); // "Операція завершена успішно"
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Оператор finally");
  });
```

Promises полегшують роботу з асинхронними операціями, оскільки вони дозволяють уникати вкладеності, відомої як "callback hell", і роблять код більш модульним і легким для читання та підтримки.

| Back | Forward |
|---|---|
| [Чи гарантовано setTimeout викличе функцію через заданий час? Від чого це залежить?](/ua/middle/javascript/is-settimeout-guaranteed-to-invoke-function-after-given-time.md)  | [Яка різниця між Promise.allSettled, Promise.race і Promise.any?](/ua/middle/javascript/what-is-the-difference-between-promiseallsettled-promiserace-and-promiseany.md) |