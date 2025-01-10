#### 107. Наведіть приклад блокування циклу подій.

Блокування циклу подій (event loop) може статися у середовищах, які використовують асинхронне програмування, наприклад, у Node.js, коли виконуються операції, що не є асинхронними або займають занадто багато часу. Наприклад, якщо в Node.js ви виконаєте довготривалу синхронну операцію, це може заблокувати цикл подій і тим самим зупинити обробку інших подій.

Ось приклад коду, який блокує цикл подій у Node.js:

```javascript
// Синхронна функція, яка займає багато часу
function longRunningTask() {
  const end = Date.now() + 5000; // 5 секунд
  while (Date.now() < end) {
    // Зайняти процесорний час
  }
  console.log("Довга задача завершена");
}

// Обробник запиту
function requestHandler(req, res) {
  console.log("Обробка запиту...");
  longRunningTask(); // Блокує цикл подій на 5 секунд
  res.end("Запит оброблено");
}

// Сервер HTTP
const http = require('http');
const server = http.createServer(requestHandler);

server.listen(3000, () => {
  console.log("Сервер запущено на порту 3000");
});
```

У цьому прикладі виклик функції `longRunningTask()` блокує цикл подій, оскільки ця функція виконує синхронну операцію, яка займає 5 секунд. Поки функція виконується, обробка інших запитів, таймерів та інших подій у циклі подій припиняється, що робить сервер непрацездатним на цей період.

| Back | Forward |
|---|---|
| [Поясніть переваги та недоліки використання «use strict».](/ua/middle/javascript/what-are-the-benefits-and-drawbacks-of-using-use-strict.md)  | [Яка різниця між abstract і interface?](/ua/middle/javascript/what-is-the-difference-between-abstract-and-interface.md) |