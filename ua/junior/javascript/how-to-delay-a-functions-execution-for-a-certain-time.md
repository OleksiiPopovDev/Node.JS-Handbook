#### 35. Як відкласти виконання функції на конкретний час?

У JavaScript, щоб відкласти виконання функції на конкретний час, можна скористатися функцією `setTimeout`. Ця функція дозволяє виконати певний код або викликати функцію через вказану кількість мілісекунд.

Ось приклад використання `setTimeout`:

```javascript
function sayHello() {
  console.log("Привіт, світ!");
}

// Виконує функцію sayHello через 2000 мілісекунд (2 секунди)
setTimeout(sayHello, 2000);
```

У цьому прикладі функція `sayHello` буде викликана через 2 секунди після виклику `setTimeout`. Першим параметром виступає функція, яку потрібно виконати, а другим — затримка у мілісекундах.

Також можна передати аргументи до функції через `setTimeout`:

```javascript
function greet(name) {
  console.log(`Привіт, ${name}!`);
}

// Виконує функцію greet з аргументом 'Андрій' через 3000 мілісекунд (3 секунди)
setTimeout(greet, 3000, 'Андрій');
```

Тут функція `greet` буде викликана з аргументом `'Андрій'` через 3 секунди.

| Back | Forward |
|---|---|
| [Яка відмінність між var, let і const? Чому варто використовувати const, якщо змінна не буде змінюватися далі в коді?](/ua/junior/javascript/what-is-the-difference-between-var-let-and-const-why-use-const-when-a-variable-wont-be-reassigned-in-code.md)  | [Які ви знаєте способи оголошення функції?](/ua/junior/javascript/what-methods-do-you-know-to-declare-a-function.md) |