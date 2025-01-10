#### 40. Як з JS масиву чисел отримати інший масив, де залишаться тільки числа понад 10? Яку функцію масиву для цього використовувати?

Для отримання масиву, де залишаться тільки числа понад 10, можна використати метод масиву `filter()`. Цей метод створює новий масив з усіма елементами, що задовольняють певну умову, що визначається у функції зворотного виклику.

Ось приклад, як це можна зробити:

```javascript
const numbers = [5, 12, 8, 130, 44];
const filteredNumbers = numbers.filter(number => number > 10);

console.log(filteredNumbers); // Виведе: [12, 130, 44]
```

У наведеному прикладі новий масив `filteredNumbers` міститиме лише ті числа з початкового масиву `numbers`, які більші за 10.

| Back | Forward |
|---|---|
| [У чому різниця між function expression і function declaration?](/ua/junior/javascript/what-is-the-difference-between-a-function-expression-and-a-function-declaration.md)  | [Як видалити елемент масиву та об’єкта?](/ua/junior/javascript/how-to-delete-an-array-element-and-object.md) |