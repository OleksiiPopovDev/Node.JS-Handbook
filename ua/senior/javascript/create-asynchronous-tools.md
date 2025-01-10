#### * Develop custom async utilities

Щоб розробити власні асинхронні утиліти у JavaScript, можна скористатися такими концепціями, як проміси та асинхронно-очікувані функції. Ось декілька прикладів загальних асинхронних утиліт:

### 1. Класичний `delay` (затримка)

Ця утиліта дозволяє здійснити затримку виконання функції на вказаний період часу.

```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Використання
delay(1000).then(() => console.log('Через секунду'));
```

### 2. Обробка колекції з асинхронними функціями

Бувають випадки, коли потрібно асинхронно обробити елементи колекції. Наприклад, завантажити дані для кожного з них.

```javascript
async function asyncMap(array, asyncCallback) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    results.push(await asyncCallback(array[i], i, array));
  }
  return results;
}

// Використання
async function fetchDataForItems(items) {
  const data = await asyncMap(items, async (item) => {
    const response = await fetch(`https://api.example.com/data/${item}`);
    return response.json();
  });
  console.log(data);
}
```

### 3. Паралельне виконання з обмеженням

Іноді потрібно паралельно виконати обмежену кількість запитів або обчислень.

```javascript
async function parallelWithLimit(tasks, limit) {
  const results = [];
  const executing = [];
  
  for (const task of tasks) {
    const p = Promise.resolve().then(() => task());
    results.push(p);

    if (limit <= tasks.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);

      if (executing.length >= limit) {
        await Promise.race(executing);
      }
    }
  }
  
  return Promise.all(results);
}

// Використання
const tasks = [
  () => fetch('https://api.example.com/data/1'),
  () => fetch('https://api.example.com/data/2'),
  // ...
];

parallelWithLimit(tasks, 2)  // Виконує одночасно не більше двох запитів
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then(data => console.log(data));
```

### Підсумок

Ці утиліти допомагають керувати асинхронними завданнями різним чином: через затримки, ітерацію з колекціями асинхронно або обмежене паралельне виконання. Важливо пристосовувати ці загальнодоступні рішення до ваших конкретних потреб, можливо, додаючи додаткову логіку чи обробку помилок.

| Back | Forward |
|---|---|
| [Design reusable modules](/ua/senior/javascript/design-reusable-modules.md)  | [Implement advanced scoping mechanisms](/ua/senior/javascript/implement-advanced-scoping-mechanisms.md) |