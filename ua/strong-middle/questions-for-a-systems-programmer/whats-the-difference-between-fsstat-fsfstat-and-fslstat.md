#### 166. Чим відрізняються fs.stat, fs.fstat, fs.lstat?

У Node.js ці методи використовуються для отримання інформації про файли. Розглянемо відмінності між ними:

1. **fs.stat(path, callback)**:
   - Використовується для отримання статистики файлу або символічного посилання. 
   - Якщо `path` є символічним посиланням, `fs.stat` вертає статистику файлу, на який вказує це посилання, а не самого посилання.

2. **fs.fstat(fd, callback)**:
   - Дуже схожий на `fs.stat`, але замість шляху до файлу (`path`) використовується файловий дескриптор (`fd`).
   - Файловий дескриптор можна отримати, наприклад, за допомогою `fs.open`.
   - Використовується, коли файл вже відкрито, для отримання його статистики.

3. **fs.lstat(path, callback)**:
   - Також надає статистику файлу або символічного посилання.
   - Основна відмінність полягає в тому, що якщо `path` є символічним посиланням, `fs.lstat` повертає статистику самого посилання, а не файлу, на який воно вказує.

Отже, різниця в тому, як ці функції працюють з символічними посиланнями: `fs.stat` переходить за посиланням, `fs.lstat` — ні, а `fs.fstat` працює з відкритим файлом через файловий дескриптор.

| Back | Forward |
|---|---|
| [Що таке MessagePort і BroadcastChannel?](/ua/strong-middle/questions-for-a-systems-programmer/what-is-messageport-and-broadcastchannel.md)  | [Як пов’язані node:async_hooks і AsyncLocalStorage?](/ua/strong-middle/questions-for-a-systems-programmer/what-is-the-relationship-between-nodeasynchooks-and-asynclocalstorage.md) |