#### 37. Що таке анонімна функція?

Анонімна функція — це функція, яка не має імені. Вона часто використовується у ситуаціях, коли функцію потрібно передати як аргумент до іншої функції або вона не використовується повторно, тому немає потреби в її іменуванні.

Приклади використання анонімної функції в JavaScript:

1. **Як аргумент для іншої функції**:
   ```javascript
   setTimeout(function() {
       console.log("Це анонімна функція, виконана із setTimeout.");
   }, 1000);
   ```

2. **Присвоєння змінній**:
   ```javascript
   const sayHello = function(name) {
       return `Привіт, ${name}!`;
   };

   console.log(sayHello('Світ'));
   ```

3. **У методах масиву**:
   JavaScript методи масиву, такі як `map`, `filter` або `forEach`, часто використовуються з анонімними функціями.
   ```javascript
   const numbers = [1, 2, 3];
   const squaredNumbers = numbers.map(function(number) {
       return number * number;
   });

   console.log(squaredNumbers); // [1, 4, 9]
   ```

В ES6 для створення анонімних функцій часто використовують стрілкові функції, які також є анонімними:

```javascript
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // [2, 4, 6]
```

Використання анонімних функцій може зробити код коротшим та легшим для читання, особливо у випадках, коли функція виконує маленьке завдання і не буде перевикористовуватись в інших місцях.

| Back | Forward |
|---|---|
| [Які ви знаєте способи оголошення функції?](/ua/junior/javascript/what-methods-do-you-know-to-declare-a-function.md)  | [Наведіть приклади функції, що самовикликається.](/ua/junior/javascript/here-are-some-examples-of-recursive-functions.md) |