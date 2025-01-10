#### * Develop custom async utilities

Розробка власних асинхронних утиліт може значно полегшити роботу з асинхронними викликами в JavaScript. Наведу кілька прикладів, які можуть бути корисними.

### 1. Awaitable Queue

Клас черги, який дозволяє асинхронно виконувати завдання з обмеженням на кількість одночасно виконуваних завдань.

```javascript
class AwaitableQueue {
  constructor(concurrency) {
    this.queue = [];
    this.concurrency = concurrency;
    this.activeCount = 0;
  }

  enqueue(task) {
    return new Promise((resolve, reject) => {
      this.queue.push(() => task().then(resolve, reject));
      this.next();
    });
  }

  next() {
    if (this.activeCount >= this.concurrency || this.queue.length === 0) {
      return;
    }
    
    this.activeCount++;
    const task = this.queue.shift();
    
    task().finally(() => {
      this.activeCount--;
      this.next();
    });
  }
}

// Використання
const queue = new AwaitableQueue(2);

const asyncTask = (time) => 
  new Promise((resolve) => setTimeout(() => resolve(`Завдання завершено за ${time} мс`), time));

queue.enqueue(() => asyncTask(1000)).then(console.log);
queue.enqueue(() => asyncTask(500)).then(console.log);
queue.enqueue(() => asyncTask(300)).then(console.log);
queue.enqueue(() => asyncTask(400)).then(console.log);
```

### 2. Retry on Failure

Утиліта для повторної спроби виконання асинхронної функції при виникненні помилки.

```javascript
async function retryWithDelay(fn, retries, delay) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt < retries) {
        console.warn(`Спроба №${attempt + 1} не вдалася. Повтор через ${delay} мс.`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        throw new Error(`Всі спроби вичерпано. Помилка: ${error.message}`);
      }
    }
  }
}

// Використання
const unreliableAsyncFunction = async () => {
  if (Math.random() > 0.7) {
    return "Успіх!";
  } else {
    throw new Error("Випадкова помилка");
  }
};

retryWithDelay(unreliableAsyncFunction, 5, 1000)
  .then(console.log)
  .catch(console.error);
```

### 3. Timeout Wrapper

Утиліта, яка додає обмеження за часом виконання для асинхронної функції.

```javascript
function withTimeout(promise, timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("Час виконання вийшов"));
    }, timeout);

    promise.then((result) => {
      clearTimeout(timer);
      resolve(result);
    }).catch((error) => {
      clearTimeout(timer);
      reject(error);
    });
  });
}

// Використання
const longRunningTask = new Promise(resolve => setTimeout(() => resolve("Завдання завершено!"), 5000));

withTimeout(longRunningTask, 3000)
  .then(console.log)
  .catch(console.error);
```

Ці утиліти можуть допомогти значно покращити процес розробки шляхом кращого управління асинхронними процесами.

| Back | Forward |
|---|---|
| [Design reusable modules](/ua/senior/javascript/create-modular-designs.md)  | [Implement advanced scoping mechanisms](/ua/senior/javascript/implement-advanced-scoping-mechanisms.md) |