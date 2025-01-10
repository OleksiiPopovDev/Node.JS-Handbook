#### 38. Наведіть приклади функції, що самовикликається.

Функція, що самовикликається, або IIFE (Immediately Invoked Function Expression), — це функція в JavaScript, яка виконується відразу після свого оголошення. Це досягається шляхом обгортання функціонального виразу в круглі дужки і наступним викликом функції. Ось кілька прикладів:

### Приклад 1: Класична IIFE

```javascript
(function() {
    console.log('Ця функція виконується одразу після визначення!');
})();
```

### Приклад 2: IIFE з аргументами

```javascript
(function(message) {
    console.log(message);
})('Привіт з IIFE!');
```

### Приклад 3: Стрілкова функція IIFE

```javascript
(() => {
    console.log('Ця функція використовує стрілковий вираз!');
})();
```

### Приклад 4: Збереження результату в змінну

```javascript
const result = (function() {
    let number = 42;
    return number * 2;
})();

console.log(result); // Виведе 84
```

### Приклад 5: IIFE для створення локальної області видимості

```javascript
let globalVar = "Глобальна змінна";

(function() {
    let localVar = "Локальна змінна";
    console.log(localVar);  // Виведе "Локальна змінна"
    console.log(globalVar); // Виведе "Глобальна змінна"
})();

// console.log(localVar); // Викличе помилку, оскільки localVar не визначений у глобальній області
```

Використання IIFE дозволяє створювати локальні області видимості і уникати конфліктів між змінними, а також інкапсулювати логіку таким чином, щоб не забруднювати глобальний простір.

| Back | Forward |
|---|---|
| [Що таке анонімна функція?](/ua/junior/javascript/what-is-an-anonymous-function.md)  | [У чому різниця між function expression і function declaration?](/ua/junior/javascript/what-is-the-difference-between-a-function-expression-and-a-function-declaration.md) |