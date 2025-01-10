#### 28. Як з JS масиву чисел отримати інший масив, де залишаться тільки числа понад 10? Яку функцію масиву для цього використовувати?

Для того, щоб отримати новий масив, в якому залишаться тільки числа понад 10 з існуючого масиву чисел у JavaScript, можна скористатися методом `filter`. Ця функція створює новий масив із усіма елементами, що пройшли перевірку, задану в наданій функції.

Ось приклад, як це зробити:

```javascript
const numbers = [5, 12, 8, 21, 7, 30];
const filteredNumbers = numbers.filter(function(number) {
  return number > 10;
});

console.log(filteredNumbers); // Виведе: [12, 21, 30]
```

У цьому прикладі `filter` проходиться по кожному елементу масиву `numbers` і включає його у `filteredNumbers`, якщо функція перевірки `number > 10` повертає `true`.

| Back | Forward |
|---|---|
| [У чому різниця між function expression і function declaration?](/ua/junior/javascript/whats-the-difference-between-function-expression-and-function-declaration.md)  | [Як видалити елемент масиву та об’єкта?](/ua/junior/javascript/how-to-delete-an-array-item-and-object.md) |