#### 229. Як працювати з асинхронною відповіддю?

В JavaScript для роботи з асинхронними відповідями використовується кілька підходів. Ось основні з них:

### 1. Колбеки (Callbacks)
Це традиційний спосіб обробки асинхронних операцій. Ви передаєте функцію зворотного виклику, яка буде виконана після завершення асинхронної операції.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 1000);
}

fetchData((response) => {
  console.log(response);
});
```

### 2. Проміси (Promises)
Проміси забезпечують більш зручний механізм управління асинхронними операціями, дозволяючи уникати "callback hell".

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data);
    }, 1000);
  });
}

fetchData().then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});
```

### 3. `async/await`
Це синтаксичний цукор над промісами, що дозволяє писати асинхронний код в імперативному стилі, що значно полегшує його читання та розуміння.

```javascript
async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data);
    }, 1000);
  });
}

async function getData() {
  try {
    const response = await fetchData();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getData();
```

### 4. Обробка помилок
При роботі з асинхронними операціями важливо коректно обробляти можливі помилки. Для цього використовуються `catch` у випадку з промісами і конструкція `try...catch` з `async/await`.

### Підсумок
Обрання підходу залежить від конкретної ситуації та вашого стилю програмування. `async/await` зазвичай надає код, який легше читати, але все ще потребує розуміння того, як працюють проміси.

| Back | Forward |
|---|---|
| [Як зрозуміти, чи є у вашому коді/застосунку витоки пам’яті (memory leaks)?](/ua/senior/javascript/how-to-understand-if-there-are-memory-leaks-in-your-codeapp.md)  | [Як можна отримати інкапсуляцію всередині класу без використання Typescript?](/ua/senior/javascript/can-encapsulation-be-achieved-within-a-class-without-using-typescript.md) |