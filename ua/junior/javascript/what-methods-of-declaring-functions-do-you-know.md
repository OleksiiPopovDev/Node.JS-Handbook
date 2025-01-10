#### 24. Які ви знаєте способи оголошення функції?

В JavaScript існує кілька способів оголошення функцій:

1. **Функціональний вираз (Function Expression):**

   ```javascript
   const myFunction = function() {
     // тіло функції
   };
   ```

2. **Оголошення функції (Function Declaration):**

   ```javascript
   function myFunction() {
     // тіло функції
   }
   ```

3. **Стрілкова функція (Arrow Function):**

   ```javascript
   const myFunction = () => {
     // тіло функції
   };
   ```

4. **Іменований функціональний вираз (Named Function Expression):**

   ```javascript
   const myFunction = function myCustomName() {
     // тіло функції
   };
   ```

5. **Функція-конструктор (Function Constructor):**

   ```javascript
   const myFunction = new Function('arg1', 'arg2', 'return arg1 + arg2;');
   ```

6. **Методи об’єктів (Object Methods):**

   У ES6 є скорочений запис для визначення методів у об’єктах:

   ```javascript
   const myObject = {
     myMethod() {
       // тіло функції
     }
   };
   ```

7. **Класові методи (Class Methods):**

   Функції можуть бути методами в класах:

   ```javascript
   class MyClass {
     myMethod() {
       // тіло функції
     }
   }
   ```

Кожен з цих способів має свої особливості та підходить для різних задач в програмуванні.

| Back | Forward |
|---|---|
| [Як відкласти виконання функції на конкретний час?](/ua/junior/javascript/how-to-delay-function-execution-by-a-certain-time.md)  | [Що таке анонімна функція?](/ua/junior/javascript/what-is-an-anonymous-function.md) |