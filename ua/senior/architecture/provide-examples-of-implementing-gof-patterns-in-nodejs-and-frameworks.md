#### 221. Наведіть приклади імплементації GoF патернів у Node.js і фреймворках.

У Node.js можна реалізувати багато патернів, описаних в класичній книзі "Design Patterns: Elements of Reusable Object-Oriented Software" ("GoF" патерни). Давайте розглянемо кілька прикладів:

### 1. Singleton

Singleton забезпечує, що клас має лише один екземпляр і надає глобальну точку доступу до нього.

#### Реалізація в Node.js:
```javascript
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      this.data = [];
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  addData(item) {
    this.data.push(item);
  }

  getData() {
    return this.data;
  }
}

const instance = new Singleton();
Object.freeze(instance);

module.exports = instance;
```

### 2. Observer

Патерн Observer дозволяє об'єктам спостерігати за змінами в іншому об'єкті.

#### Реалізація з використанням подій у Node.js:
```javascript
const EventEmitter = require('events');

class NewsAgency extends EventEmitter {
  publish(news) {
    this.emit('news', news);
  }
}

class Subscriber {
  constructor(name) {
    this.name = name;
  }

  receive(news) {
    console.log(`${this.name} отримав новину: ${news}`);
  }
}

const agency = new NewsAgency();
const subscriber1 = new Subscriber('Перший Підписник');
const subscriber2 = new Subscriber('Другий Підписник');

agency.on('news', (news) => subscriber1.receive(news));
agency.on('news', (news) => subscriber2.receive(news));

agency.publish('Нова версія Node.js вийшла!');
```

### 3. Factory Method

Factory Method визначає інтерфейс для створення об'єктів у суперкласі, але дозволяє підкласам змінювати тип створюваного об'єкта.

#### Реалізація:
```javascript
class Transport {
  deliver() {
    throw new Error('Метод deliver() повинен бути реалізований');
  }
}

class Truck extends Transport {
  deliver() {
    console.log('Доставка вантажівкою');
  }
}

class Ship extends Transport {
  deliver() {
    console.log('Доставка кораблем');
  }
}

class Logistics {
  createTransport() {
    throw new Error('Метод createTransport() повинен бути реалізований');
  }
}

class RoadLogistics extends Logistics {
  createTransport() {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransport() {
    return new Ship();
  }
}

// Використання
const logistics = new RoadLogistics();
const transport = logistics.createTransport();
transport.deliver();
```

### 4. Decorator

Патерн Decorator дозволяє динамічно додавати нову функціональність об'єкту, обгортаючи його у спеціальний клас.

#### Реалізація:
```javascript
class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  
  cost() {
    return this.coffee.cost() + 1;
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 0.5;
  }
}

// Використання
let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
console.log(`Вартість кави: ${coffee.cost()}`);
```

Такі приклади показують, як різні патерни можуть бути імплементовані у середовищі Node.js для різноманітних цілей, забезпечуючи при цьому гнучкість та підтримуваність коду.

| Back | Forward |
|---|---|
| [Що таке graceful shutdown? Як його імплементувати?](/ua/senior/architecture/220-what-is-a-graceful-shutdown-how-to-implement-it.md)  | [Порівняйте MessageQ, RabbitMQ і Kafka.](/ua/senior/architecture/compare-messageq-rabbitmq-and-kafka.md) |