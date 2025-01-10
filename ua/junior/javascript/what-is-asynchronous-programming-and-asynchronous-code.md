#### 33. Що таке асинхронність і асинхронний код?

Асинхронність у JavaScript відноситься до можливості виконання коду без блокування виконання інших частин програми. Це означає, що певні операції можуть виконуватися у фоновому режимі, а інші частини коду продовжуватимуть виконуватися далі. Це особливо важливо для операцій, які можуть зайняти багато часу, таких як запити до серверу, файлові операції чи таймери.

**Асинхронний код** — це код, який виконується не одразу, а після завершення якоїсь іншої задачі або певного проміжку часу. У JavaScript часто використовуються `callbacks`, `promises` та `async/await` для роботи з асинхронним кодом.

### Приклади:

1. **Колбеки (Callbacks):**
   ```javascript
   function fetchData(callback) {
     setTimeout(() => {
       callback("Data received");
     }, 1000);
   }

   fetchData((data) => {
     console.log(data); // Виведе "Data received" через 1 секунду
   });
   ```

2. **Проміси (Promises):**
   ```javascript
   let promise = new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve("Data received");
     }, 1000);
   });

   promise.then((data) => {
     console.log(data); // Виведе "Data received" через 1 секунду
   });
   ```

3. **Async/Await:**
   ```javascript
   function fetchData() {
     return new Promise((resolve) => {
       setTimeout(() => {
         resolve("Data received");
       }, 1000);
     });
   }

   async function getData() {
     const data = await fetchData();
     console.log(data); // Виведе "Data received" через 1 секунду
   }

   getData();
   ```

Асинхронний підхід дозволяє створювати швидкі та ефективні додатки, які можуть обробляти декілька запитів одразу, не блокуючи основний потік виконання програми.

| Back | Forward |
|---|---|
| [Handle errors with Express.js middleware](/ua/junior/expressjs/how-to-handle-errors-with-expressjs-middleware.md)  | [Яка відмінність між var, let і const? Чому варто використовувати const, якщо змінна не буде змінюватися далі в коді?](/ua/junior/javascript/what-is-the-difference-between-var-let-and-const-why-use-const-when-a-variable-wont-be-reassigned-in-code.md) |