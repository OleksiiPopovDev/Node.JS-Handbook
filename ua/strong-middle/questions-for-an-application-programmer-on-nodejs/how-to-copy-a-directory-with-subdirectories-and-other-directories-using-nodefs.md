#### 182. Як скопіювати теку з вкладеними файлами та іншими теками за допомогою node:fs?

Для копіювання теки з вкладеними файлами та іншими текими в Node.js можна використовувати модуль `fs` або `fs/promises`, починаючи з Node.js 10.10, можна використовувати новий метод `fs.cp` або `fs.promises.cp`. Ось як це можна зробити:

### Використання `fs.promises.cp`
```javascript
const fs = require('fs/promises');

async function copyDirectory(source, destination) {
  try {
    await fs.cp(source, destination, { recursive: true });
    console.log('Directory copied successfully!');
  } catch (error) {
    console.error('Error copying directory:', error);
  }
}

copyDirectory('./sourceDir', './destinationDir');
```

### Використання `fs-extra`
Якщо вам потрібно підтримувати старіші версії Node.js, можна використовувати бібліотеку `fs-extra`, яка надає метод `copy`.

1. Встановіть `fs-extra`:

```bash
npm install fs-extra
```

2. Використовуйте `fs-extra` для копіювання:

```javascript
const fs = require('fs-extra');

async function copyDirectory(source, destination) {
  try {
    await fs.copy(source, destination);
    console.log('Directory copied successfully!');
  } catch (error) {
    console.error('Error copying directory:', error);
  }
}

copyDirectory('./sourceDir', './destinationDir');
```

У кожному з цих прикладів `copyDirectory` є асинхронною функцією, яка виконує копіювання теки за допомогою відповідного методу. Вона очікує, що вам потрібно передати шлях до вихідної та цільової теки.

| Back | Forward |
|---|---|
| [Що можна зробити за допомогою for await з request: IncomingMessage?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/what-can-be-done-using-for-await-with-a-request-incomingmessage.md)  | [Навіщо використовують AbortController? В яких API він підтримується?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/why-use-abortcontroller-which-apis-does-he-support.md) |