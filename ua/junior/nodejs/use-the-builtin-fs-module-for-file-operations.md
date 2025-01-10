#### * Use the built-in fs module for file operations

Модуль `fs` в Node.js — це вбудований модуль, який дозволяє виконувати операції з файлами. Нижче наведено кілька прикладів основних операцій з використанням модуля `fs`.

### Читання файлів

Для читання файлів можна використовувати метод `fs.readFile`.

```javascript
const fs = require('fs');

// Асинхронне читання файлу
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// Синхронне читання файлу
try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}
```

### Запис файлів

Для запису файлів використовується метод `fs.writeFile`.

```javascript
const fs = require('fs');

// Асинхронний запис у файл
fs.writeFile('example.txt', 'Hello, world!', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File has been written');
});

// Синхронний запис у файл
try {
    fs.writeFileSync('example.txt', 'Hello, world!');
    console.log('File has been written');
} catch (err) {
    console.error(err);
}
```

### Апдейт файлів

Для додавання до файлу можна використовувати метод `fs.appendFile`.

```javascript
const fs = require('fs');

// Асинхронний апдейт файлу
fs.appendFile('example.txt', '\nHello again!', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Content has been appended');
});

// Синхронний апдейт файлу
try {
    fs.appendFileSync('example.txt', '\nHello again!');
    console.log('Content has been appended');
} catch (err) {
    console.error(err);
}
```

### Видалення файлів

Для видалення файлів використовується метод `fs.unlink`.

```javascript
const fs = require('fs');

// Асинхронне видалення файлу
fs.unlink('example.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File has been deleted');
});

// Синхронне видалення файлу
try {
    fs.unlinkSync('example.txt');
    console.log('File has been deleted');
} catch (err) {
    console.error(err);
}
```

Це лише базові приклади використання модуля `fs`. Node.js пропонує багато інших функцій для роботи з файлами, такими як перегляд директорій, зміна атрибутів файлів і прав доступу, і багато іншого.

| Back | Forward |
|---|---|
| [Read and process large files](/ua/junior/nodejs/reading-large-files.md)  | [Understand Node.js package managers (NPM/Yarn/PNPM)](/ua/junior/nodejs/understand-nodejs-package-managers-npmyarnpnpm.md) |