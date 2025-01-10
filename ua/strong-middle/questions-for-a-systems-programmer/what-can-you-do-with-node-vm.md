#### 170. Що можна робити за допомогою node:vm?

У Node.js модуль `vm` (віртуальна машина) дозволяє виконувати JavaScript-код в окремих, ізольованих контекстах. Це може бути корисним для різних завдань, таких як оцінка виразів із певними обмеженнями або в пісочницях. Ось кілька основних речей, які можна зробити за допомогою `node:vm`:

1. **Виконання коду в пісочниці:**
   Створення ізольованого середовища для виконання коду, що може допомогти уникнути потенційних загроз безпеці або конфліктів з основним контекстом програми.

   ```javascript
   const vm = require('vm');

   const code = 'const x = 5; x * 2';
   const result = vm.runInNewContext(code);
   console.log(result); // 10
   ```

2. **Створення та контроль контексту виконання:**
   Модуль дозволяє створювати та контролювати контексти виконання, де можна визначити, які об'єкти та функції доступні скрипту.

   ```javascript
   const vm = require('vm');

   const sandbox = { animal: 'cat', count: 2 };
   vm.createContext(sandbox); // Контекст із пісочницею

   const script = new vm.Script('count += 1; animal = "dog";');
   script.runInContext(sandbox);

   console.log(sandbox); // { animal: 'dog', count: 3 }
   ```

3. **Обмеження часу виконання та пам’яті:**
   Можна обмежити час виконання скрипту або використання пам’яті, запобігаючи потенційно небезпечним або ресурсомістким сценаріям.

   ```javascript
   const vm = require('vm');

   const script = new vm.Script('while (true) {}');

   try {
       script.runInNewContext({}, { timeout: 1000 });
   } catch (e) {
       console.log('Execution timed out');
   }
   ```

4. **Запуск коду з backtracing:**
   Для отримання більш зрозумілих повідомлень про помилки, `vm` може бути налаштований так, щоб надавати конкретні позиції ідентифікації помилок у коді.

   ```javascript
   const vm = require('vm');

   const script = new vm.Script('notDefinedVariable += 1;', { filename: 'example.vm' });

   try {
       script.runInThisContext();
   } catch (err) {
       console.log(err.stack); // Покажет место ошибки в файле example.vm
   }
   ```

Цей модуль корисний для випадків, коли необхідно виконати код, але при цьому потрібно чітко контролювати середовище виконання та обмежити ризики від небезпечного коду.

| Back | Forward |
|---|---|
| [Як стежити за змінами файлів і директорій на диску? Які з цим можуть виникати проблеми?](/ua/strong-middle/questions-for-a-systems-programmer/how-to-monitor-file-and-directory-changes-on-disk-and-what-problems-may-arise.md)  | [Як захистити SharedArrayBuffer від запису з різних worker_threads?](/ua/strong-middle/questions-for-a-systems-programmer/whats-the-best-way-to-protect-a-sharedarraybuffer-from-being-written-from-different-worker-threads.md) |