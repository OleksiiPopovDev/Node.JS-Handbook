#### * Implement advanced scoping mechanisms

В JavaScript, механізми розширеного області видимості можуть бути реалізовані за допомогою таких тем, як:

### 1. Замикання (Closures)
Замикання дозволяє функції "запам'ятовувати" область видимості, в якій вона була створена.

```javascript
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

### 2. Модулі
Модулі використовуються для інкапсуляції коду. Вони можуть бути створені за допомогою IIFE (Immediately Invoked Function Expressions) або ES6 `modules`.

#### Використання IIFE:

```javascript
const module = (function() {
    let privateVar = 'Інкапсульовані дані';
    
    function privateMethod() {
        console.log('Приватний метод');
    }
    
    return {
        publicMethod: function() {
            console.log('Публічний метод');
            privateMethod();
        }
    };
})();

module.publicMethod(); // Публічний метод, Приватний метод
```

#### Використання ES6 модулів:

```javascript
// counter.js
let count = 0;

export function increment() {
    count++;
    return count;
}

// main.js
import { increment } from './counter.js';

console.log(increment()); // 1
console.log(increment()); // 2
```

### 3. Лексична область видимості (Lexical Scope)
JavaScript має лексичну область видимості, що означає, що змінні доступні в області, де вони були визначені.

```javascript
function outerFunction() {
    let outerVariable = 'Зовнішня';
    
    function innerFunction() {
        console.log(outerVariable); // Зовнішня
    }
    
    return innerFunction;
}

const inner = outerFunction();
inner();
```

### 4. Блокова область видимості (Block Scope)
В ES6 введено `let` і `const`, які мають блокову область видимості, на відміну від `var`, який має функціональну область видимості.

```javascript
if (true) {
    let blockScoped = 'Це блокова видимість';
    console.log(blockScoped); // Це блокова видимість
}

// console.log(blockScoped); // ReferenceError: blockScoped is not defined
```

### 5. Область видимості з `this` (Contextual Scope with this)
Область видимості вказівника `this` залежить від того, як викликано функцію.

```javascript
const obj = {
    value: 42,
    getValue: function() {
        return this.value;
    }
};

console.log(obj.getValue()); // 42

const detachedGetValue = obj.getValue;
console.log(detachedGetValue()); // undefined (втрата прив’язки this)
```

Кожен із цих механізмів дозволяє використовувати специфічні властивості області видимості та інкапсуляції в JavaScript.

| Back | Forward |
|---|---|
| [Develop custom async utilities](/ua/senior/javascript/create-asynchronous-tools.md)  | [Implement custom data structures](/ua/senior/javascript/implement-custom-data-structures.md) |