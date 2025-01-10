#### 56. Handle errors with try-catch and Promise chains

У JavaScript ми можемо обробляти помилки, використовуючи як `try-catch`, так і Promise chains. Кожен з цих методів має свої особливості застосування, в залежності від контексту.

### Обробка помилок за допомогою `try-catch`

Блок `try-catch` дозволяє захоплювати і управляти помилками, що виникають в синхронному коді. Його структура виглядає так:

```javascript
try {
  // Код, який може згенерувати помилку
  let result = someFunction();
} catch (error) {
  // Логіка обробки помилки
  console.error('An error occurred:', error);
}
```

Тут все, що розташовано в блоці `try`, буде виконано, і якщо в цьому блоці виникне помилка, вона буде перехоплена в блоці `catch`. Це дозволяє продовжити виконання програми навіть після появи помилки.

### Обробка помилок у Promise chains

Обробка помилок в асинхронних операціях (наприклад, запитах до API) часто здійснюється через Promise chains. У цьому випадку помилки обробляються за допомогою методу `.catch()`:

```javascript
someAsyncFunction()
  .then(result => {
    // Обробка результату
    console.log('Result:', result);
  })
  .catch(error => {
    // Логіка обробки помилки
    console.error('An error occurred:', error);
  });
```

Цей підхід дозволяє взаємодіяти з асинхронними функціями, зберігаючи код чистим і керованим. Метод `.catch()` перехоплює будь-які помилки, які виникають в попередніх операціях.

### Поєднання обох підходів

При роботі з асинхронними функціями, які викликаються всередині `try-catch`, часто використовується `async/await`:

```javascript
async function processData() {
  try {
    let result = await someAsyncFunction();
    console.log('Result:', result);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

processData();
```

Тут `try-catch` блокує дозволяють обробляти помилки в асинхронних функціях так само легко, як і в синхронних.

Обидва методи обробки помилок є важливими інструментами, що дозволяють робити код надійнішим і стійкішим до неочікуваних ситуацій.

| Back | Forward |
|---|---|
| [Understand event loop fundamentals](/ua/junior/javascript/understanding-event-loop-fundamentals.md)  | [Write simple DOM manipulation code](/ua/junior/javascript/write-a-simple-dom-manipulation-script.md) |