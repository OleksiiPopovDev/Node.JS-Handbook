#### * Understand Node.js basics

### Основні поняття Node.js
#### Що таке Node.js?
Node.js — відкритий вільний багатопоточний framework для створення мережних застосунків на основі мови програмування JavaScript.

#### Вимагання системи
Для роботи з Node.js потрібен:

*   Платформа Win32 або POSIX (Linux, MacOS)
*   Показник версії Node.js більший за 0.1.13

#### Історія розвитку
Перша публічна версія було видано у квітні 2009 року.

#### Основові особливості:
Потокова обробка запитів клієнтів.
Власний інтерфейс API для взаємодії між модулеми програми.

#### Основовий синтаксис Node.js

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Сервер почав працювати на порту 3000')
});
```

#### Основові команди Node.js

*   `node` - запуск програми.
*   `npm init` - створення файлу `package.json`.
*   `npm install <mod>` - встановлення модулю npm.

| Попереднє питання | Наступне питання |
|---|---|
| [16. В чому різниця між такими ключовими словами мови, як string і String?](./junior/nodejs/whats-the-difference-between-keywords-like-string-and-string.md)  | [* Explain Node.js benefits and limitations](./junior/nodejs/what-are-the-benefits-and-limitations-of-nodejs.md) |