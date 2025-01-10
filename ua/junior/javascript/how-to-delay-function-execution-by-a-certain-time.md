#### 23. Як відкласти виконання функції на конкретний час?

В JavaScript ви можете відкласти виконання функції на конкретний час, використовуючи `setTimeout`. Ось приклад:

```javascript
function myFunction() {
  console.log("Функція виконана!");
}

// Відкласти виконання myFunction на 2000 мілісекунд (2 секунди)
setTimeout(myFunction, 2000);
```

У даному прикладі функція `myFunction` буде виконана через 2 секунди після виклику `setTimeout`. Час затримки вказується в мілісекундах.

Якщо ви працюєте з асинхронним кодом у JavaScript, також можна використовувати `async/await` разом із `setTimeout` та функцією `Promise`, щоб створити затримку у функції. Ось як це можна реалізувати:

```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedFunction() {
  console.log("Чекаємо 2 секунди...");
  await delay(2000);
  console.log("Функція виконана!");
}

delayedFunction();
```

У цьому прикладі функція `delayedFunction` призупиняється на 2 секунди перед тим, як вивести повідомлення "Функція виконана!".

| Back | Forward |
|---|---|
| [Яка відмінність між var, let і const? Чому варто використовувати const, якщо змінна не буде змінюватися далі в коді?](/ua/junior/javascript/whats-the-difference-between-var-let-and-const-why-should-i-use-const-if-a-variable-wont-change-later-in-code.md)  | [Які ви знаєте способи оголошення функції?](/ua/junior/javascript/what-methods-of-declaring-functions-do-you-know.md) |