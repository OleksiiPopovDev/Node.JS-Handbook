#### 181. Що можна зробити за допомогою for await з request: IncomingMessage?

У Node.js, якщо ви працюєте з асинхронними потоками, ви можете використовувати конструкцію `for await...of` для обробки потоків даних асинхронно. Коли ви маєте об’єкт `request` типу `IncomingMessage` (як правило, у HTTP-сервері), ви можете читати дані з цього потоку асинхронно за допомогою `for await...of` циклу.

Ось приклад того, як це можна реалізувати:

```javascript
const http = require('http');

const server = http.createServer(async (req, res) => {
  let body = '';

  // Використовуємо for await...of для читання даних із request
  for await (const chunk of req) {
    body += chunk;
  }

  console.log('Received body:', body);

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Data received\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

### Пояснення:

- `for await...of` використовується для ітерування асинхронних ітераторів. Потоки в Node.js підтримують асинхронний ітератор, що дозволяє нам ітеруватися через дані потоку асинхронно.
- У цьому прикладі ми обробляємо `req` (запит), який є об’єктом `IncomingMessage`. Ми асинхронно отримуємо шматки даних і додаємо їх до змінної `body`.
- Після завершення зчитування всіх даних потоку, ми записуємо отримане тіло у консоль і відповідаємо клієнту з повідомленням "Data received".

Цей підхід зручний для обробки великих об'ємів даних або стрімінгових API, так як дозволяє уникнути блокування програми під час читання вхідних даних.

| Back | Forward |
|---|---|
| [Чому потрібно додавати префікс node при завантаженні вбудованих модулів?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/what-is-the-reason-for-adding-a-node-prefix-when-loading-native-modules.md)  | [Як скопіювати теку з вкладеними файлами та іншими теками за допомогою node:fs?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/how-to-copy-a-directory-with-nested-files-and-directories-using-nodefs.md) |