#### 28. Як переходити з однієї middleware в іншу?

У Express.js для переходу з однієї middleware в іншу використовують функцію `next()`. Коли вся необхідна логіка в поточній middleware завершена, викликається `next()`, щоб перейти до наступного middleware в ланцюжку. 

Ось приклад, як це працює:

```javascript
const express = require('express');
const app = express();

// Перше middleware
app.use((req, res, next) => {
  console.log('Перше middleware');
  // Переходимо до наступного middleware
  next();
});

// Друге middleware
app.use((req, res, next) => {
  console.log('Друге middleware');
  // Переходимо до додаткових middleware або завершуємо запит
  next();
});

// Обробник маршруту
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Сервер запущено на порті 3000');
});
```

У цьому прикладі виклик `next()` у кожній middleware забезпечує плавний перехід до наступного middleware або обробника маршруту.

| Back | Forward |
|---|---|
| [Для чого використовують middleware?](/ua/junior/expressjs/to-what-use-are-middleware-used.md)  | [Як пріоритизувати middleware?](/ua/junior/expressjs/how-to-prioritize-middleware.md) |