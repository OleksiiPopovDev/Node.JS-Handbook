#### 41. Як видалити елемент масиву та об’єкта?

## Видалення елемента з масиву

Для видалення елемента з масиву в JavaScript можна використовувати декілька підходів:

1. **Метод `splice`**:
   - Видаляє елементи безпосередньо з оригінального масиву.
   - Синтаксис: `array.splice(start, deleteCount)`.

   ```javascript
   let fruits = ["яблуко", "банан", "апельсин"];
   // Видалити елемент з індексом 1 ("банан")
   fruits.splice(1, 1);
   console.log(fruits); // ["яблуко", "апельсин"]
   ```

2. **Метод `filter`**:
   - Створює новий масив без модифікації оригінального.
   
   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   // Видалити число 3
   let filteredNumbers = numbers.filter(number => number !== 3);
   console.log(filteredNumbers); // [1, 2, 4, 5]
   ```

## Видалення властивості з об'єкта

В JavaScript для видалення властивості об'єкта використовується оператор `delete`:

```javascript
let person = {
  name: "Іван",
  age: 30,
  profession: "інженер"
};

// Видалити властивість "age"
delete person.age;
console.log(person); // { name: "Іван", profession: "інженер" }
```

Цей оператор видаляє властивість з об'єкта, але він не змінює прототип. Варто зазначити, що `delete` не працює для елементів масиву в звичайний спосіб, оскільки при цьому залишить `undefined` на місці видалених індексів. Для правильного видалення використовують методи роботи з масивами, як, наприклад, `splice`.

| Back | Forward |
|---|---|
| [Як з JS масиву чисел отримати інший масив, де залишаться тільки числа понад 10? Яку функцію масиву для цього використовувати?](/ua/junior/javascript/how-to-get-array-of-numbers-greater-than-10-from-a-javascript-array-of-numbers-which-array-method-is-used-for-this.md)  | [Для чого призначений тип void?](/ua/junior/javascript/what-is-the-purpose-of-the-void-type.md) |