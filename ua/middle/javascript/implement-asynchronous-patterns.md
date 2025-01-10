#### * Implement async patterns

У JavaScript існує кілька способів реалізації асинхронних патернів, які дозволяють працювати з асинхронними операціями ефективно. Основні з них: використання колбеків, промісів і `async/await`.

### Колбеки (Callbacks)

Колбеки - це функції, які передаються як аргументи в інші функції та викликаються після завершення асинхронної операції.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    // Імітація затримки при виконанні асинхронної операції
    const data = { user: 'John Doe' };
    callback(null, data);
  }, 1000);
}

fetchData((error, data) => {
  if (error) {
    console.error('Помилка:', error);
  } else {
    console.log('Дані отримано:', data);
  }
});
```

### Проміси (Promises)

Проміси дозволяють працювати з асинхронними операціями, блокуючи основний потік до тих пір, поки не буде отримано результат.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Імітація успішного виконання
      if (success) {
        resolve({ user: 'John Doe' });
      } else {
        reject('Помилка під час отримання даних');
      }
    }, 1000);
  });
}

fetchData()
  .then(data => {
    console.log('Дані отримано:', data);
  })
  .catch(error => {
    console.error('Помилка:', error);
  });
```

### async/await

`async/await` додає синтаксичний цукор для роботи з промісами, роблячи код більш читабельним і схожим на синхронний.

```javascript
async function getData() {
  try {
    const data = await fetchData();
    console.log('Дані отримано:', data);
  } catch (error) {
    console.error('Помилка:', error);
  }
}

getData();
```

### Висновок

Кожен з цих патернів має свої переваги і недоліки, але `async/await` є найбільш сучасним і рекомендованим для використання, коли це можливо, через простіший і більш інтуїтивний підхід до роботи з асинхронністю.

| Back | Forward |
|---|---|
| [Окрім використання оператора ‘return’, як ще можна повернути результат виконання з функції (процедури)?](/ua/middle/javascript/113-aside-from-using-the-return-operator-what-else-can-return-a-result-from-function-procedure-execution.md)  | [Use advanced array and object methods (reduce, map, filter)](/ua/middle/javascript/use-advanced-array-and-object-methods-like-reduce-map-filter.md) |