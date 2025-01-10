#### 191. Наведіть кілька типових патернів проєктування з GoF і приклади їхнього використання у Node.js.

Патерни проєктування з книги "Design Patterns: Elements of Reusable Object-Oriented Software" (звичайно GoF — Gang of Four) є загальновідомими концепціями, які застосовуються у об’єктно-орієнтованому програмуванні. Декілька з цих патернів та їх застосування у Node.js:

### 1. Singleton

**Патерн Singleton** забезпечує наявність тільки одного екземпляра класу і надає глобальну точку доступу до нього. У Node.js ми можемо реалізувати Singleton через модульну систему CommonJS.

```javascript
// logger.js
class Logger {
  constructor() {
    if (!Logger.instance) {
      this.logs = [];
      Logger.instance = this;
    }
    return Logger.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(`LOG: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

const loggerInstance = new Logger();
Object.freeze(loggerInstance);

module.exports = loggerInstance;
```

```javascript
// app.js
const logger = require('./logger');

logger.log('This is a singleton logger');
logger.printLogCount();
```

### 2. Observer

**Патерн Observer** визначає механізм, через який один об'єкт може сповіщати інші об'єкти про зміни свого стану. У Node.js спостерігачі можуть бути реалізовані за допомогою класу `EventEmitter`.

```javascript
const EventEmitter = require('events');

class Notifier extends EventEmitter {
  notify(event, message) {
    this.emit(event, message);
  }
}

const notifier = new Notifier();

notifier.on('email', (msg) => {
  console.log(`Email notifier: ${msg}`);
});

notifier.notify('email', 'You have a new message');
```

### 3. Strategy

**Патерн Strategy** визначає набір алгоритмів, інкапсулює кожен з них у окремий клас і робить їх взаємозамінними. Клієнт може вибирати, який алгоритм використовувати на основі специфічних критеріїв.

```javascript
class StrategyA {
  execute() {
    console.log('Executing strategy A');
  }
}

class StrategyB {
  execute() {
    console.log('Executing strategy B');
  }
}

class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  executeStrategy() {
    this.strategy.execute();
  }
}

const strategyA = new StrategyA();
const strategyB = new StrategyB();

const contextA = new Context(strategyA);
contextA.executeStrategy();

const contextB = new Context(strategyB);
contextB.executeStrategy();
```

### 4. Factory

**Патерн Factory** дає інтерфейс для створення об'єктів в суперкласі, дозволяючи підкласам змінювати тип створюваних об'єктів.

```javascript
class Car {
  drive() {
    console.log('Drive a car');
  }
}

class Truck {
  drive() {
    console.log('Drive a truck');
  }
}

class VehicleFactory {
  createVehicle(type) {
    switch (type) {
      case 'car':
        return new Car();
      case 'truck':
        return new Truck();
      default:
        throw new Error('Vehicle type not supported');
    }
  }
}

const factory = new VehicleFactory();

const myCar = factory.createVehicle('car');
myCar.drive();

const myTruck = factory.createVehicle('truck');
myTruck.drive();
```

Ці патерни показують як можна використовувати класичні концепції GoF у середовищі Node.js для покращення структури та підтримуваності коду.

| Back | Forward |
|---|---|
| [Які є плюси та мінуси розділення коду на .js та окремо тайпінги .d.ts?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/what-are-the-pros-and-cons-of-splitting-code-into-js-and-separate-typings-dts-files.md)  | [Який паттерн з GoF реалізує EventEmitter?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/192-which-gof-pattern-implements-eventemitter.md) |