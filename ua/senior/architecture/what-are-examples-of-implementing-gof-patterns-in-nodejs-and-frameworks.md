#### 221. Наведіть приклади імплементації GoF патернів у Node.js і фреймворках.

Імплементація патернів проектування (GoF) у Node.js може допомогти у створенні ефективного та зрозумілого коду. Розглянемо декілька прикладів:

### 1. Singleton

**Опис:** Застосовується для обмеження кількості екземплярів класу до одного.

```javascript
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      this.data = {};
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  get(key) {
    return this.data[key];
  }

  set(key, value) {
    this.data[key] = value;
  }
}

const instance = new Singleton();
Object.freeze(instance);

module.exports = instance;
```

### 2. Factory

**Опис:** Використовується для створення об'єктів, не вказуючи конкретний клас об'єкта, який буде створено.

```javascript
class Dog {
  speak() {
    console.log("Woof");
  }
}

class Cat {
  speak() {
    console.log("Meow");
  }
}

class AnimalFactory {
  static createAnimal(type) {
    switch(type) {
      case 'dog':
        return new Dog();
      case 'cat':
        return new Cat();
      default:
        throw new Error('Unknown animal type');
    }
  }
}

const dog = AnimalFactory.createAnimal('dog');
dog.speak();
```

### 3. Observer

**Опис:** Використовується для організації системи, де один об'єкт повідомляє інші об'єкти про зміни свого стану.

```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(data));
    }
  }
}

const emitter = new EventEmitter();
emitter.on('hello', (data) => {
  console.log(`Received: ${data}`);
});

emitter.emit('hello', 'world');
```

### 4. Decorator

**Опис:** Дозволяє динамічно додавати нову функціональність до об'єктів.

```javascript
function loggingDecorator(originalFunction) {
  return function(...args) {
    console.log(`Arguments: ${args}`);
    const result = originalFunction.apply(this, args);
    console.log(`Result: ${result}`);
    return result;
  };
}

function sum(a, b) {
  return a + b;
}

const decoratedSum = loggingDecorator(sum);
decoratedSum(5, 7);
```

### 5. Command

**Опис:** Змушує об'єкти виконувати запити, передаючи їх як об'єкти.

```javascript
class Command {
  constructor(execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
  }
}

function add(value) {
  return value;
}

function sub(value) {
  return -value;
}

class Calculator {
  constructor() {
    this.current = 0;
    this.commands = [];
  }

  execute(command) {
    this.current += command.execute(command.value);
    this.commands.push(command);
  }

  undo() {
    const command = this.commands.pop();
    this.current += command.undo(command.value);
  }

  getCurrentValue() {
    return this.current;
  }
}

const calculator = new Calculator();

const addCommand = new Command(add, sub, 10);
calculator.execute(addCommand);

console.log(calculator.getCurrentValue()); // 10
calculator.undo();
console.log(calculator.getCurrentValue()); // 0
```

Ці приклади демонструють, як можна інтегрувати популярні патерни проектування у додатки на Node.js. Фреймворки можуть використовувати ці патерни для організації коду, покращення його розширюваності, підтримуваності та спростити розуміння архітектури.

| Back | Forward |
|---|---|
| [Що таке graceful shutdown? Як його імплементувати?](/ua/senior/architecture/what-is-a-graceful-shutdown-and-how-to-implement-it.md)  | [Порівняйте MessageQ, RabbitMQ і Kafka.](/ua/senior/architecture/compare-messageq-rabbitmq-and-kafka.md) |