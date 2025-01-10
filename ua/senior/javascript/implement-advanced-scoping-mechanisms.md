#### * Implement advanced scoping mechanisms

У JavaScript механізми скопування (області видимості) поділяються на декілька категорій, які дозволяють краще організувати та управляти доступом до змінних. Давайте розглянемо деякі з них:

### 1. Функціональна область видимості
Функціональні області видимості є основною концепцією в JavaScript. Кожна функція створює свою власну область видимості, і змінні, оголошені всередині функції, є локальними для неї.

```javascript
function outerFunction() {
    var outerVar = 'I am outside!';
    
    function innerFunction() {
        var innerVar = 'I am inside!';
        console.log(outerVar); // Доступна
    }
    
    innerFunction();
    console.log(innerVar); // Помилка: innerVar не визначена
}
```

### 2. Лексичне (замкнення)
Лексичне замикання (closure) дозволяє функціям доступ до перемінних, які знаходяться у їхній лексичній області видимості, навіть після того, як функція, у якій ці змінні були визначені, завершила виконання.

```javascript
function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    }
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

### 3. Блочна область видимості
Блочна область видимості була введена в ECMAScript 6 з використанням ключових слів `let` та `const`. Вони дозволяють змінним бути локальними для блоку коду, в якому вони оголошені.

```javascript
if (true) {
    let blockScoped = 'I am block scoped';
    console.log(blockScoped); // 'I am block scoped'
}
console.log(blockScoped); // Помилка: blockScoped не визначена
```

### 4. Модулі
Модулі в JavaScript використовують імпорти та експорти, щоб створювати окремі області видимості на рівні файлів, ізолюючи код і дозволяючи організувати його зручніше.

```javascript
// file1.js
export const myVar = 'Value';
export function myFunction() {
    console.log(myVar);
}

// file2.js
import { myVar, myFunction } from './file1.js';
console.log(myVar); // 'Value'
myFunction(); // 'Value'
```

Використання цих механізмів допомагає розв'язувати завдання, пов'язані з організацією коду, управлінням доступом до даних та уникненням конфліктів змінних.

| Back | Forward |
|---|---|
| [Develop custom async utilities](/ua/senior/javascript/create-asynchronous-tools.md)  | [Implement custom data structures](/ua/senior/javascript/implement-custom-data-structures.md) |