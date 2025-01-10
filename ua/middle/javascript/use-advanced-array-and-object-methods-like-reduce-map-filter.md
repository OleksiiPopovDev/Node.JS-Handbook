#### * Use advanced array and object methods (reduce, map, filter)

В JavaScript методи `reduce`, `map`, і `filter` є потужними інструментами для роботи з масивами. Ось короткий огляд кожного з них з прикладами:

### 1. `map`
Метод `map` створює новий масив, викликаючи передану функцію з кожним елементом масиву та повертаючи результат виконання цієї функції.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

### 2. `filter`
Метод `filter` створює новий масив з усіх елементів, для яких передана функція повернула `true`.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

### 3. `reduce`
Метод `reduce` застосовує фукцію-акумулятор до кожного елемента масиву (зліва направо), щоб зменшити його до одного значення.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15
```

### Приклад зі складнішими об'єктами

Припустімо, у нас є масив об'єктів, і ми хочемо використати ці методи:

```javascript
const users = [
  { name: 'Alice', age: 28 },
  { name: 'Bob', age: 35 },
  { name: 'Charlie', age: 23 }
];

// Збільшуємо кожному користувачу вік на 1 рік
const olderUsers = users.map(user => ({
  ...user, 
  age: user.age + 1
}));

// Фільтруємо користувачів, старших за 25 років
const usersAbove25 = users.filter(user => user.age > 25);

// Обчислюємо загальний вік всіх користувачів
const totalAge = users.reduce((sum, user) => sum + user.age, 0);

console.log(olderUsers); // [{ name: 'Alice', age: 29 }, { name: 'Bob', age: 36 }, { name: 'Charlie', age: 24 }]
console.log(usersAbove25); // [{ name: 'Alice', age: 28 }, { name: 'Bob', age: 35 }]
console.log(totalAge); // 86
```

Ці методи надають декларативний підхід до маніпуляцій з масивами, що може зробити код більш читабельним та зрозумілим.

| Back | Forward |
|---|---|
| [Implement async patterns](/ua/middle/javascript/implement-asynchronous-patterns.md)  | [Use const for immutability](/ua/middle/javascript/use-constant-values-for-immutable-properties.md) |