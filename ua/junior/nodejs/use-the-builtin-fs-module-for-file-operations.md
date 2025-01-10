#### 25. Use the built-in fs module for file operations

Node.js має вбудований модуль `fs` (file system), який надає можливість роботи з файловою системою. Використовуючи `fs`, ви можете створювати, читати, оновлювати, видаляти файли та каталоги. Нижче наведено приклади використання найбільш поширених методів.

### Імпорт модуля fs

Щоб використовувати `fs`, спочатку імпортуємо його:

```javascript
const fs = require('fs');
```

### Читання файлу

- **Асинхронний спосіб**:

```javascript
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

- **Синхронний спосіб**:

```javascript
try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
```

### Запис у файл

- **Асинхронний спосіб**:

```javascript
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Файл збережено!');
});
```

- **Синхронний спосіб**:

```javascript
try {
  fs.writeFileSync('example.txt', 'Hello, Node.js!');
  console.log('Файл збережено!');
} catch (err) {
  console.error(err);
}
```

### Додавання до файлу

- **Асинхронний спосіб**:

```javascript
fs.appendFile('example.txt', '\nNew line of text', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Текст додано!');
});
```

- **Синхронний спосіб**:

```javascript
try {
  fs.appendFileSync('example.txt', '\nNew line of text');
  console.log('Текст додано!');
} catch (err) {
  console.error(err);
}
```

### Видалення файлу

- **Асинхронний спосіб**:

```javascript
fs.unlink('example.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Файл видалено!');
});
```

- **Синхронний спосіб**:

```javascript
try {
  fs.unlinkSync('example.txt');
  console.log('Файл видалено!');
} catch (err) {
  console.error(err);
}
```

### Інші операції

Модуль `fs` також надає можливості для роботи з директоріями, читання метаданих файлів, зміни прав доступу тощо.

Для коректної роботи та продуктивності у великих проєктах, зазвичай рекомендується використовувати асинхронні версії методів, або застосовувати обіцянки (promises), які можуть забезпечити більш зручний та зрозумілий код шляхом `util.promisify` або використанням бібліотек, таких як `fs.promises`, що починаючи з Node.js 10.x надає вже встроєні обіцянки для fs методів.

| Back | Forward |
|---|---|
| [Read and process large files](/ua/junior/nodejs/read-massive-data-sets.md)  | [Understand Node.js package managers (NPM/Yarn/PNPM)](/ua/junior/nodejs/26-understanding-nodejs-package-managers-npm-yarn-pnpm.md) |