#### 196. Наведіть приклад патерну adapter з вбудованих бібліотек.

Патерн Adapter, також відомий як Wrapper, дозволяє об'єктам з несумісними інтерфейсами працювати разом. У Node.js є кілька прикладів використання подібного патерну у вбудованих бібліотеках.

Одним із прикладів патерну Adapter можна вважати перетворення коллбек API у проміси за допомогою `util.promisify`. Багато вбудованих модулів в Node.js надають асинхронні методи, які приймають колбеки в якості аргументів. За допомогою `util.promisify` ми можемо перетворити таку функцію в таку, яка повертає проміс.

Ось простий приклад використання `util.promisify`:

```javascript
const util = require('util');
const fs = require('fs');

// Оригінальна функція, яка використовує колбек
fs.readFile('/path/to/file', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Функція, адаптована для роботи з промісами
const readFilePromisified = util.promisify(fs.readFile);

readFilePromisified('/path/to/file')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

У цьому випадку, `util.promisify` діє як адаптер, який дозволяє функціям, що працюють з колбеками, бути використаними у обробці промісів.

| Back | Forward |
|---|---|
| [Як можна створити singleton за допомогою системи модульності у Node.js?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/how-can-a-singleton-be-created-using-a-module-system-in-nodejs.md)  | [Для чого нам потрібні такі поля Error: error.cause, error.code, error.message, error.stack?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/what-is-the-purpose-of-such-fields-errorcause-errorcode-errormessage-errorstack.md) |