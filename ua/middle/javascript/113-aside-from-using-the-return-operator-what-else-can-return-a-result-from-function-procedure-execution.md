#### 112. Окрім використання оператора ‘return’, як ще можна повернути результат виконання з функції (процедури)?

У JavaScript стандартний спосіб повернення значення з функції - це використання оператора `return`. Однак, є деякі обхідні шляхи, які можуть симулювати повернення значення, хоча вони не є рекомендаційними для загального використання:

1. **Зміна зовнішньої змінної:** Функція може модифікувати змінну, яка є доступною поза функцією (наприклад, глобальну змінну або змінну в замиканні). Це дозволяє "повернути" значення через цю змінну.

   ```javascript
   let result;

   function computeValue() {
     result = 42; // зміна глобальної змінної
   }

   computeValue();
   console.log(result); // 42
   ```

2. **Використання колбек-функцій:** Передача функції як аргументу дозволяє передавати результат виконання назад через цю функцію.

   ```javascript
   function computeValue(callback) {
     const value = 42;
     callback(value);
   }

   computeValue(function(result) {
     console.log(result); // 42
   });
   ```

3. **Використання промісів:** Якщо функція виконує асинхронні операції, вона може повертати проміс, який резолвиться з необхідним значенням.

   ```javascript
   function computeValue() {
     return new Promise((resolve) => {
       const value = 42;
       resolve(value);
     });
   }

   computeValue().then(result => {
     console.log(result); // 42
   });
   ```

Ці методи можуть бути корисними в конкретних випадках, але слід пам'ятати, що найприроднішим та зрозумілішим способом повернути результат з функції в JavaScript все ж таки є використання оператора `return`.

| Back | Forward |
|---|---|
| [Які обмеження накладаються на потік Web Workers?](/ua/middle/javascript/what-are-the-limitations-placed-on-a-web-worker-stream.md)  | [Implement async patterns](/ua/middle/javascript/implement-asynchronous-patterns.md) |