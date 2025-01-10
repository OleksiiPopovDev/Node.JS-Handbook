#### 200. Чи є в Node.js можливість виконувати скрипти, написані іншими мовами?

Так, в Node.js є кілька способів виконувати скрипти, написані іншими мовами. Ось основні підходи:

1. **Модуль `child_process`**: Ви можете використовувати цей модуль для запуску процесів командного рядка. Це дозволяє виконувати будь-які програми або скрипти, встановлені у вашій системі, включаючи скрипти на інших мовах. 

   ```javascript
   const { exec } = require('child_process');

   exec('python script.py', (error, stdout, stderr) => {
     if (error) {
       console.error(`Помилка: ${error.message}`);
       return;
     }
     if (stderr) {
       console.error(`Помилка: ${stderr}`);
       return;
     }
     console.log(`Вихід: ${stdout}`);
   });
   ```

2. **Фреймворки типу FFI (Foreign Function Interface)**: Існують модулі, які дозволяють взаємодіяти з кодом, написаним на C або C++, безпосередньо з Node.js. Наприклад, модуль `ffi-napi`.

3. **Використання WebAssembly**: WebAssembly (Wasm) дозволяє виконувати коди, зібрані з інших мов, таких як Rust, C, C++, у Node.js. Ви компілюєте код у WebAssembly і завантажуєте його в Node.js.

4. **Спеціалізовані пакети або API**: Для багатьох популярних мов можуть існувати спеціалізовані пакети або API, які допомагають інтегрувати скрипти цих мов у Node.js. Наприклад, є пакети для взаємодії з кодом на Python.

Це основні методи, і вибір конкретного підходу залежить від вимог вашого проекту.

| Back | Forward |
|---|---|
| [Скільки потоків Node.js використовує для роботи? Яким чином можна регулювати цю кількість?](/ua/senior/nodejs/how-many-threads-does-nodejs-use-for-operation-how-to-control-this-number.md)  | [Чи є різниця у виконанні microtasks/macrotasks залежно від версій Node.js?](/ua/senior/nodejs/do-task-types-vary-in-execution-between-nodejs-versions.md) |