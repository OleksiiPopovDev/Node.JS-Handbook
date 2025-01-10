#### 102. Яка різниця між Promise.allSettled, Promise.race і Promise.any?

Під час роботи з промісами в JavaScript можна використовувати різні методи для обробки групи промісів. Ось відмінності між `Promise.allSettled`, `Promise.race` та `Promise.any`:

### `Promise.allSettled`
- **Опис**: Метод `Promise.allSettled` очікує завершення всіх промісів в переданому ітерабельному об'єкті (неважливо, виконуються вони чи відхиляються), і повертає проміс з масивом результатів виконання кожного промісу.
- **Результат**: Повертає проміс, що виконується завжди, коли всі проміси завершаться (незалежно від їх статусу), з масивом об'єктів, кожний з яких містить статус (`"fulfilled"` або `"rejected"`) і, відповідно, значення чи причину.
  
```javascript
Promise.allSettled([prom1, prom2, prom3])
  .then(results => results.forEach((result) => console.log(result.status)));
```

### `Promise.race`
- **Опис**: Метод `Promise.race` повертає проміс, що завершується або виконується, або відхиляється, як тільки один з промісів в ітерабельному об'єкті завершується або відхиляється.
- **Результат**: Повертає проміс, який відразу ж отримує результат першого з переданих промісів, що завершився або відхилився.

```javascript
Promise.race([prom1, prom2, prom3])
  .then(value => console.log(value))
  .catch(error => console.log(error));
```

### `Promise.any`
- **Опис**: Метод `Promise.any` очікує завершення першого успішного промісу (виконаного) в ітерабельному об'єкті. Якщо жоден проміс не виконається, тоді повернутий проміс буде відхилено з `AggregateError`.
- **Результат**: Повертає проміс, який виконується зі значенням першого промісу, що успішно виконався. Якщо всі проміси відхиляються, повертає проміс, що відхиляється з `AggregateError`.

```javascript
Promise.any([prom1, prom2, prom3])
  .then(value => console.log(value))
  .catch(error => console.error("All promises rejected:", error));
```

Таким чином, ці три методи надають різні способи контролю за асинхронними операціями та дозволяють писати код, який реагує на проміси залежно від їх статусу.

| Back | Forward |
|---|---|
| [Що таке Promises?](/ua/middle/javascript/what-is-a-promise.md)  | [Що таке callback у JavaScript?](/ua/middle/javascript/what-is-a-callback-in-javascript.md) |