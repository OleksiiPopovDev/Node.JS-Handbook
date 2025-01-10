#### 181. Що можна зробити за допомогою for await з request: IncomingMessage?

`for await` у Node.js використовується для роботи з асинхронними ітераторами, такими як Streams. У випадку `request: IncomingMessage`, можна використовувати `for await` для читання даних з потоку HTTP-запиту, який є асинхронним і ітерованим. Це дозволяє ефективно зчитувати дані з запиту по мірі їх надходження без блокувань. Наприклад:

```javascript
const http = require('http');

http.createServer(async (req, res) => {
  let body = '';
  
  for await (const chunk of req) {
    body += chunk;
  }
  
  console.log('Received data:', body);
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Data received\n');
}).listen(3000);

console.log('Server is running on http://localhost:3000');
```

У цьому прикладі `for await` використовується для асинхронного зчитування кожного шматка даних із вхідного запиту та складання їх в одну строку `body`. Це підходить для роботи з великими потоками даних або з даними, які можуть надійти з затримкою.

| Back | Forward |
|---|---|
| [Чому потрібно додавати префікс node при завантаженні вбудованих модулів?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/why-is-it-necessary-to-add-the-prefix-node-when-loading-builtin-modules.md)  | [Як скопіювати теку з вкладеними файлами та іншими теками за допомогою node:fs?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/how-to-copy-a-directory-with-subdirectories-and-other-directories-using-nodefs.md) |