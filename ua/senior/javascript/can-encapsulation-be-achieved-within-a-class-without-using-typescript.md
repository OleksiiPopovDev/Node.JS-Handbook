#### 230. Як можна отримати інкапсуляцію всередині класу без використання Typescript?

В JavaScript можна досягти інкапсуляції без використання TypeScript за допомогою різних підходів, зокрема:

1. **Використання слабких мап (WeakMap):**

```javascript
const privateData = new WeakMap();

class MyClass {
  constructor(value) {
    privateData.set(this, { hiddenValue: value });
  }

  get value() {
    return privateData.get(this).hiddenValue;
  }

  set value(newValue) {
    const data = privateData.get(this);
    data.hiddenValue = newValue;
  }
}

const instance = new MyClass('Привіт!');
console.log(instance.value); // Привіт!
instance.value = 'Новий привіт!';
console.log(instance.value); // Новий привіт!
```

2. **Використання замикань:**

```javascript
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    get value() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.value); // 1
```

3. **Символи (Symbols):**

```javascript
const _privateField = Symbol('privateField');

class MyClass {
  constructor(value) {
    this[_privateField] = value;
  }
  
  getValue() {
    return this[_privateField];
  }
}

const instance = new MyClass('Hello');
console.log(instance.getValue()); // Hello
```

Хоча ці підходи не надають "справжньої" приватності як в інших мовах програмування, вони дозволяють уникати прямого доступу та модифікації внутрішніх властивостей класу.

| Back | Forward |
|---|---|
| [Як працювати з асинхронною відповіддю?](/ua/senior/javascript/how-to-work-with-asynchronous-response.md)  | [Optimize code for the event loop](/ua/senior/javascript/optimizing-code-for-event-loop-execution.md) |