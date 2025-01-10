#### 36. Які ви знаєте способи оголошення функції?

В JavaScript існує кілька способів оголошення функцій. Ось основні з них:

1. **Функціональний вираз (Function Declaration):**
   Це стандартний спосіб оголошення функцій, який доступний ще до виконання коду завдяки механізму підняття (hoisting).

   ```javascript
   function myFunction() {
       console.log("Hello, world!");
   }
   ```

2. **Функціональний вираз (Function Expression):**
   Функція може бути оголошена у вигляді виразу і збережена у змінній.

   ```javascript
   const myFunction = function() {
       console.log("Hello, world!");
   };
   ```

3. **Стрілкова функція (Arrow Function):**
   Це більш лаконічний синтаксис для створення функцій, часто використовується в сучасному JavaScript.

   ```javascript
   const myFunction = () => {
       console.log("Hello, world!");
   };
   ```

4. **Анонімна функція:**
   Це функція, яка не має імені. Вони часто використовуються як аргументи в інших функціях.

   ```javascript
   setTimeout(function() {
       console.log("Hello, world!");
   }, 1000);
   ```

5. **Іменована функція-самовиклик (Immediately Invoked Function Expression, IIFE):**
   Це конструкція, яка дозволяє одразу викликати функцію після її оголошення.

   ```javascript
   (function() {
       console.log("Hello, world!");
   })();
   ```

6. **Методи в об'єктах:**
   Функції можуть бути частиною об'єкта і доступні як його методи.

   ```javascript
   const myObject = {
       myMethod: function() {
           console.log("Hello, world!");
       }
   };

   myObject.myMethod();
   ```

7. **Класи (функції-конструктори):**
   З допомогою класів також можна оголошувати методи.

   ```javascript
   class MyClass {
       myMethod() {
           console.log("Hello, world!");
       }
   }

   const myInstance = new MyClass();
   myInstance.myMethod();
   ```

Ці способи оголошення можуть бути використані в залежності від потреб вашого коду і стилю програмування.

| Back | Forward |
|---|---|
| [Як відкласти виконання функції на конкретний час?](/ua/junior/javascript/how-to-delay-a-functions-execution-for-a-certain-time.md)  | [Що таке анонімна функція?](/ua/junior/javascript/what-is-an-anonymous-function.md) |