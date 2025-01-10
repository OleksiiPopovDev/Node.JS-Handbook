#### * Use testing libraries such as Jest for coverage

Для забезпечення покриття тестування в JavaScript/TypeScript-проєктах часто використовують бібліотеку Jest. Jest є популярним інструментом для тестування, який надає можливості для написання модульних тестів і генерації звітів про покриття коду (coverage). Ось основні кроки, як використовувати Jest для тестування з покриттям:

1. **Встановлення Jest:**

   Спочатку переконайтеся, що у вас встановлено Node.js. Потім ви можете встановити Jest у вашому проєкті за допомогою npm або yarn:

   ```bash
   npm install --save-dev jest
   ```

   або

   ```bash
   yarn add --dev jest
   ```

2. **Налаштування Jest:**

   Додайте скрипт тестування у ваш файл `package.json`:

   ```json
   {
     "scripts": {
       "test": "jest"
     }
   }
   ```

3. **Написання тестів:**

   Створіть файл з тестами з розширенням `.test.js` або `.spec.js`. Наприклад, `sum.test.js` для тестування функції, яка підсумовує два числа:

   ```js
   // sum.js
   function sum(a, b) {
     return a + b;
   }
   module.exports = sum;
   ```

   ```js
   // sum.test.js
   const sum = require('./sum');

   test('adds 1 + 2 to equal 3', () => {
     expect(sum(1, 2)).toBe(3);
   });
   ```

4. **Запуск тестів:**

   Запустіть Jest для виконання тестів за допомогою виразів командного рядка:

   ```bash
   npm test
   ```

   або

   ```bash
   yarn test
   ```

5. **Покриття тестами:**

   Для генерації звіту про покриття коду, запустіть Jest з прапором `--coverage`:

   ```bash
   npm test -- --coverage
   ```

   або

   ```bash
   yarn test --coverage
   ```

   Після цього у вашому проєкті з'явиться каталог `coverage`, який міститиме звіти з детальною інформацією про те, які частини коду покриті тестами.

6. **Аналіз результатів покриття:**

   Використовуйте HTML-звіти, що генеруються Jest, для перегляду деталей покриття коду у вашому браузері. Точність, роздільність та аналітика цих звітів допоможуть вам визначити області коду, які потребують додаткового тестування.

Таким чином, за допомогою Jest ви можете легко налаштувати та автоматизувати процес тестування з покриттям у ваших проєктах.

| Back | Forward |
|---|---|
| [Write and execute integration tests](/ua/middle/nestjs/write-unit-tests.md)  | [Understand WebSocket implementation in Nest.js](/ua/middle/nestjs/understand-websocket-implementation-in-nestjs.md) |