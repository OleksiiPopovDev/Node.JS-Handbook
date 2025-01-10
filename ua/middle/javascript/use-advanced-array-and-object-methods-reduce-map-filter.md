#### * Use advanced array and object methods (reduce, map, filter)

Використання методів `reduce`, `map` та `filter` на масивах в JavaScript може значно спростити обробку даних. Ось деякі приклади їх використання:

### 1. Метод `map`

Метод `map` створює новий масив, використовуючи результат виклику заданої функції на кожному елементі вхідного масиву.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Додаємо 1 до кожного елемента масиву
const incrementedNumbers = numbers.map(number => number + 1);

console.log(incrementedNumbers);
// Виведе: [2, 3, 4, 5, 6]
```

### 2. Метод `filter`

Метод `filter` створює новий масив з елементів, які пройшли перевірку (тобто для яких функція повернула true).

```javascript
const numbers = [1, 2, 3, 4, 5];

// Фільтруємо тільки парні числа
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);
// Виведе: [2, 4]
```

### 3. Метод `reduce`

Метод `reduce` використовується для обчислення єдиного значення з масиву шляхом ітерації та застосування функції зберігання проміжного результату.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Знаходимо суму всіх чисел у масиві
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);
// Виведе: 15
```

### Використання на об'єктах

У поєднанні з методами об'єктів можна застосовувати ці методи для обробки даних в об'єктній формі. Спершу перетворимо об'єкт у масив за допомогою `Object.entries`, `Object.keys`, або `Object.values`, а потім виконаємо дії.

```javascript
const users = {
  mike: { age: 23, active: true },
  jane: { age: 34, active: false },
  tom: { age: 12, active: true }
};

// Отримуємо імена тільки активних користувачів
const activeUsernames = Object.entries(users)
  .filter(([name, user]) => user.active)
  .map(([name]) => name);

console.log(activeUsernames);
// Виведе: ['mike', 'tom']
```

Ці методи допомагають зробити код більш декларативним та зручним для читання.

| Back | Forward |
|---|---|
| [Implement async patterns](/ua/middle/javascript/implement-asynchronous-codepatterns.md)  | [Use const for immutability](/ua/middle/javascript/use-const-for-immutability.md) |