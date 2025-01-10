#### 102. Яка різниця між Promise.allSettled, Promise.race і Promise.any?

`Promise.allSettled`, `Promise.race` та `Promise.any` — це методи, які працюють з колекцією промісів в JavaScript. Кожен з цих методів має свою специфіку:

1. **Promise.allSettled**:
   - Чекає завершення всіх промісів у масиві (незалежно від того, чи завершуються вони успішно, чи з помилкою).
   - Повертає проміс, який завершується з масивом об'єктів, що описують результати виконання кожного промісу в масиві. Кожен об'єкт має поля `status` (яке буде `fulfilled` або `rejected`) і, відповідно, `value` при успішному виконанні або `reason` при відхиленні.

   ```javascript
   let promises = [
       Promise.resolve(33),
       new Promise(resolve => setTimeout(() => resolve(66), 1000)),
       Promise.reject('An error occurred')
   ];

   Promise.allSettled(promises).then(results => console.log(results));
   ```

2. **Promise.race**:
   - Повертає проміс, який завершиться з результатом першого завершеного (успішно чи з помилкою) промісу з переданого масиву.
   - Це означає, що результатом буде дані першого проміса, що встановився в стан `fulfilled` або `rejected`.

   ```javascript
   let promises = [
       new Promise(resolve => setTimeout(() => resolve(33), 1000)),
       new Promise(resolve => setTimeout(() => resolve(66), 500)),
       Promise.reject('An error occurred')
   ];

   Promise.race(promises).then(result => console.log(result))
                         .catch(error => console.error(error));
   ```

3. **Promise.any**:
   - Чекає, поки хоча б один з промісів завершиться успішно (стан `fulfilled`).
   - Повертає проміс, який завершується значенням першого успішного проміса.
   - Якщо всі проміси відхиляються, `Promise.any` повертає проміс, що відхиляється з `AggregateError`, що об'єднує всі причини відхилення.

   ```javascript
   let promises = [
       Promise.reject('First error'),
       new Promise(resolve => setTimeout(() => resolve(66), 500)),
       Promise.reject('Second error')
   ];

   Promise.any(promises).then(result => console.log(result))
                        .catch(error => console.error(error));
   ```

Отож, ці методи пропонують різний підхід до обробки колекції промісів, дозволяючи вибрати найбільш відповідний метод для специфічних сценаріїв використання.

| Back | Forward |
|---|---|
| [Що таке Promises?](/ua/middle/javascript/what-are-promises.md)  | [Що таке callback у JavaScript?](/ua/middle/javascript/what-is-a-callback-in-javascript.md) |