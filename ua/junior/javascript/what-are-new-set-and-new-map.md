#### 38. Що таке new Set() і new Map()?

У JavaScript `new Set()` і `new Map()` є двома різними типами колекцій, які використовуються для збереження унікальних значень та пар ключ-значення відповідно.

### `Set`

`Set` — це колекція унікальних значень. На відміну від масивів, у `Set` кожен елемент може з'являтися лише один раз і відсутні дублікати.

#### Основні методи і властивості `Set`:

- **Створення:**  
  ```javascript
  const mySet = new Set();
  ```

- **Додавання елементів:**  
  ```javascript
  mySet.add(1);
  mySet.add(2);
  mySet.add(2); // Значення 2 буде проігноровано, оскільки вже існує
  ```

- **Перевірка наявності елемента:**  
  ```javascript
  mySet.has(1); // true
  mySet.has(3); // false
  ```

- **Видалення елемента:**  
  ```javascript
  mySet.delete(2);
  ```

- **Розмір колекції:**  
  ```javascript
  mySet.size; // 1
  ```

- **Перебір елементів:**  
  ```javascript
  for (let item of mySet) console.log(item);
  ```

### `Map`

`Map` — це колекція пар ключ-значення, де ключі можуть бути будь-якого типу, включаючи об’єкти.

#### Основні методи і властивості `Map`:

- **Створення:**  
  ```javascript
  const myMap = new Map();
  ```

- **Додавання пар ключ-значення:**  
  ```javascript
  myMap.set('key1', 'value1');
  myMap.set('key2', 'value2');
  ```

- **Отримання значення за ключем:**  
  ```javascript
  myMap.get('key1'); // 'value1'
  ```

- **Перевірка наявності ключа:**  
  ```javascript
  myMap.has('key1'); // true
  ```

- **Видалення пари за ключем:**  
  ```javascript
  myMap.delete('key1');
  ```

- **Розмір колекції:**  
  ```javascript
  myMap.size; // 1
  ```

- **Перебір елементів:**  
  ```javascript
  for (let [key, value] of myMap) {
    console.log(key, value);
  }
  ```

І `Set`, і `Map` дозволяють керувати колекціями даних з високою продуктивністю і часто використовуються при роботі з великими обсягами даних, де важлива унікальність елементів та швидкий доступ до значень за ключами.

| Back | Forward |
|---|---|
| [Наведіть структуру HTTP request/response.](/ua/junior/javascript/what-is-the-structure-of-an-http-requestresponse.md)  | [Що таке логічний оператор && та || і чим відрізняються ці оператори від логічного оператора «??».](/ua/junior/javascript/what-is-the-logical-operator-and-and-how-do-they-differ-from-the-logical-operator.md) |