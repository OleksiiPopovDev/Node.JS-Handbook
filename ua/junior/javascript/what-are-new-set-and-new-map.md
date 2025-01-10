#### 50. Що таке new Set() і new Map()?

У JavaScript `new Set()` та `new Map()` є конструкторами для створення колекцій даних специфічного типу.

### `new Set()`

`Set` — це колекція унікальних значень, тобто множина. Він може містити значення будь-яких типів даних, але жодне з них не повторюється.

#### Основні методи та властивості Set:

- **`add(value)`**: додає нове значення в множину.
- **`delete(value)`**: видаляє значення з множини.
- **`has(value)`**: повертає `true`, якщо значення є в множині, інакше `false`.
- **`clear()`**: видаляє всі значення з множини.
- **`size`**: властивість, яка відображає кількість елементів у множині.

#### Приклад використання:

```javascript
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Це значення не буде додано повторно
console.log(mySet.has(1)); // true
console.log(mySet.size); // 2
mySet.delete(1);
console.log(mySet.has(1)); // false
```

### `new Map()`

`Map` — це колекція пар ключ-значення, де ключі можуть бути будь-якого типу, включаючи об'єкти, функції тощо.

#### Основні методи та властивості Map:

- **`set(key, value)`**: додає пару ключ-значення до колекції.
- **`get(key)`**: повертає значення, яке відповідає певному ключу.
- **`has(key)`**: повертає `true`, якщо ключ є у колекції, інакше `false`.
- **`delete(key)`**: видаляє елемент за ключем.
- **`clear()`**: видаляє всі елементи з колекції.
- **`size`**: властивість, яка показує кількість пар ключ-значення в колекції.

#### Приклад використання:

```javascript
const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
console.log(myMap.get('name')); // 'John'
console.log(myMap.has('age')); // true
console.log(myMap.size); // 2
myMap.delete('name');
console.log(myMap.has('name')); // false
```

Такі структури даних, як `Set` та `Map`, надають можливість зберігати дані з розширеними можливостями управління та покращеною ефективністю у випадках, коли потрібно забезпечити унікальність або працювати з ключами різного типу.

| Back | Forward |
|---|---|
| [Наведіть структуру HTTP request/response.](/ua/junior/javascript/what-is-the-structure-of-an-http-request-and-response.md)  | [Що таке логічний оператор && та || і чим відрізняються ці оператори від логічного оператора «??».](/ua/junior/javascript/what-are-logical-operators-and-and-how-do-they-differ-from-the-logical-operator.md) |