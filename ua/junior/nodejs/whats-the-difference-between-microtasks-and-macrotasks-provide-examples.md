#### 10. Яка різниця між microtasks і macrotasks? Наведіть приклади таких завдань.

У JavaScript і в керуванні подіями існує концепція черг завдань, які поділяються на microtasks і macrotasks. Ці дві черги визначають порядок виконання асинхронних операцій та впливають на те, коли і як код виконується у браузері чи JavaScript-оточенні.

### Macrotasks

Macrotasks, іноді ще називаються "tasks", включають основні етапи виконання програми, такі як обробка кліків миші, подій з таймерів, інтервали тощо. Вони виконуються в циклі подій (Event Loop), який бере по одному завданню з черги macrotask і виконує його.

**Приклади macrotasks:**
- `setTimeout`
- `setInterval`
- Події DOM (наприклад, кліки миші, натискання клавіш)

### Microtasks

Microtasks утворюють окрему чергу для завдань, які виконуються після завершення поточного завдання (або macrotask), але до того, як буде взято наступне macrotask. Це дозволяє виконувати важливіші операції з вищим пріоритетом. Microtasks дозволяють оптимізувати асинхронний код і забезпечувати його більш передбачуване виконання.

**Приклади microtasks:**
- `Promise` (`Promise.resolve().then(...)`)
- Обробка мутованого DOM через `MutationObserver`
- `process.nextTick` в Node.js

### Порядок виконання

1. Виконується початковий код.
2. Усі заплановані microtasks виконуються до кінця у строго визначеному порядку.
3. Потім виконується наступне завдання з черги macrotask.
4. Повертається до виконання microtasks, якщо вони знову заплановані, і так далі.

### Приклад ілюстрації розмежування:

```javascript
console.log('Start');

setTimeout(() => {
  console.log('Macrotask: setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Microtask: Promise then');
});

console.log('End');
```

**Очікуваний вивід:**
```
Start
End
Microtask: Promise then
Macrotask: setTimeout
```

Цей приклад демонструє, як microtask, запланований через `Promise.then`, виконується перед macrotask, запланованим через `setTimeout`, хоча останній був ініційований раніше (але виконання планувалося з наступним циклом).

| Back | Forward |
|---|---|
| [Що таке libuv i v8? Яке їхнє призначення?](/ua/junior/nodejs/what-are-libuv-and-v8-and-what-is-their-purpose.md)  | [Що таке стрим (stream)?](/ua/junior/nodejs/what-is-a-stream.md) |