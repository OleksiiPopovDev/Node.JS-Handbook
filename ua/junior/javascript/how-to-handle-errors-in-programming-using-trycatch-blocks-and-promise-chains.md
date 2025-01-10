#### * Handle errors with try-catch and Promise chains

У мові JavaScript ми можемо обробляти помилки за допомогою конструкцій `try-catch` та використовуючи Promise-ланцюги. Нижче наведено приклади для обох методів.

### Використання `try-catch`:

Конструкція `try-catch` дозволяє захопити і обробити помилки, які можуть виникнути в блоці коду. Це робиться шляхом розміщення підозрілого коду в блоці `try`, а обробка помилок - у блоці `catch`.

```javascript
try {
  // Підозрілий код
  let result = potentiallyFailingFunction();
  console.log(result);
} catch (error) {
  // Обробка помилки
  console.error("Виникла помилка:", error.message);
}
```

### Використання Promise-ланцюгів:

Promise-ланцюги дозволяють обробляти асинхронні операції. Тут ми використовуємо методи `then` і `catch` для обробки успішного виконання та помилок відповідно.

```javascript
function potentiallyFailingAsyncFunction() {
  return new Promise((resolve, reject) => {
    // Симуляція асинхронної операції
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Успіх!");
      } else {
        reject(new Error("Щось пішло не так"));
      }
    }, 1000);
  });
}

potentiallyFailingAsyncFunction()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error("Виникла помилка:", error.message);
  });
```

### Примітка:

З версії ECMAScript 2017 (ES8) у JavaScript з'явилася можливість використовувати `async/await`, що дозволяє значно зручніше обробляти асинхронні операції, комбінуючи з конструкцією `try-catch`.

```javascript
async function demoAsyncFunction() {
  try {
    let result = await potentiallyFailingAsyncFunction();
    console.log(result);
  } catch (error) {
    console.error("Виникла помилка:", error.message);
  }
}

demoAsyncFunction();
```

Цей підхід додає простоту і читаність коду при роботі з Promise.

| Back | Forward |
|---|---|
| [Understand event loop fundamentals](/ua/junior/javascript/understand-the-event-loop-basics.md)  | [Write simple DOM manipulation code](/ua/junior/javascript/write-simple-dom-manipulation-code.md) |