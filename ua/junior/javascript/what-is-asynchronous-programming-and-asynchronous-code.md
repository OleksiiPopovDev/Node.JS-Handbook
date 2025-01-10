#### 21. Що таке асинхронність і асинхронний код?

Асинхронність в обчисленнях та програмуванні означає, що операції можуть виконуватися незалежно від основного потоку програми або від інших операцій. Це дозволяє програмі продовжувати виконувати інші завдання, не чекаючи завершення поточних асинхронних операцій, таких як I/O операції, запити до бази даних або мережеві запити.

### Асинхронний код

Асинхронний код - це код, який виконує операції асинхронно, не блокуючи основний потік виконання програми. У сучасних мовах програмування для підтримки асинхронності можуть використовуватися такі підходи, як:

1. **Колбеки (Callbacks)**: Функції, які передаються як аргументи в інші функції та викликаються, коли асинхронна операція завершується.

   ```javascript
   fs.readFile('file.txt', 'utf8', function(err, data) {
       if (err) throw err;
       console.log(data);
   });
   ```

2. **Проміси (Promises)**: Об'єкти, які представляють завершення (або невдачу) асинхронної операції та дозволяють обробляти результат цієї операції.

   ```javascript
   let promise = fetch('https://api.example.com/data');
   promise.then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
   ```

3. **Async/Await**: Синтаксичний цукор над промісами, який дозволяє писати асинхронний код, який виглядає як синхронний.  

   ```javascript
   async function fetchData() {
       try {
           let response = await fetch('https://api.example.com/data');
           let data = await response.json();
           console.log(data);
       } catch (error) {
           console.error('Error:', error);
       }
   }

   fetchData();
   ```

Асинхронність допомагає оптимізувати продуктивність додатків, особливо тих, які повинні взаємодіяти з повільними зовнішніми ресурсами або виконувати довготривалі обчислення.

| Back | Forward |
|---|---|
| [Handle errors with Express.js middleware](/ua/junior/expressjs/how-to-handle-errors-in-expressjs.md)  | [Яка відмінність між var, let і const? Чому варто використовувати const, якщо змінна не буде змінюватися далі в коді?](/ua/junior/javascript/whats-the-difference-between-var-let-and-const-why-should-i-use-const-if-a-variable-wont-change-later-in-code.md) |