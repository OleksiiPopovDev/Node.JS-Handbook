#### 29. Як видалити елемент масиву та об’єкта?

Видалення елемента масиву та об'єкта може виконуватися кількома способами в JavaScript. Ось декілька з них:

### Видалення елемента з масиву

1. **Метод `splice()`**: Цей метод дозволяє видаляти елементи з масиву без залишення "дірок".

   ```javascript
   let array = [1, 2, 3, 4, 5];
   array.splice(2, 1); // Видаляє елемент з індексом 2
   console.log(array); // [1, 2, 4, 5]
   ```

2. **Метод `filter()`**: Він створює новий масив без небажаних елементів.

   ```javascript
   let array = [1, 2, 3, 4, 5];
   let newArray = array.filter(item => item !== 3);
   console.log(newArray); // [1, 2, 4, 5]
   ```

3. **Оператор `delete`**: Видаляє елемент, але залишає `undefined` на місці видаленого елемента.

   ```javascript
   let array = [1, 2, 3, 4, 5];
   delete array[2];
   console.log(array); // [1, 2, undefined, 4, 5]
   ```

### Видалення властивості з об'єкта

1. **Оператор `delete`**: Використовується для видалення властивості з об'єкта.

   ```javascript
   let obj = { a: 1, b: 2, c: 3 };
   delete obj.b;
   console.log(obj); // { a: 1, c: 3 }
   ```

2. **Деструктуризація для створення нового об'єкта без певної властивості**:

   ```javascript
   let obj = { a: 1, b: 2, c: 3 };
   let { b, ...newObj } = obj;
   console.log(newObj); // { a: 1, c: 3 }
   ```

Використовуйте метод, який найкраще підходить для вашого конкретного випадку.

| Back | Forward |
|---|---|
| [Як з JS масиву чисел отримати інший масив, де залишаться тільки числа понад 10? Яку функцію масиву для цього використовувати?](/ua/junior/javascript/how-to-filter-a-javascript-array-to-keep-only-numbers-above-10-using-an-array-method.md)  | [Для чого призначений тип void?](/ua/junior/javascript/what-is-the-purpose-of-a-void-type.md) |