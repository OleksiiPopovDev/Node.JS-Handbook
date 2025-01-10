#### 191. Наведіть кілька типових патернів проєктування з GoF і приклади їхнього використання у Node.js.

У "Design Patterns: Elements of Reusable Object-Oriented Software" (GoF) описано 23 патерни проектування, які можна використовувати для вирішення загальних проблем дизайну. Деякі з них часто використовуються у Node.js. Ось кілька прикладів:

### 1. Singleton
**Опис**: Забезпечує наявність лише одного екземпляра класу і надає глобальну точку доступу до нього.

**Приклад у Node.js:**

У Node.js модулі кешуються після їх першого завантаження. Це значить, що для надання Singleton поведінки, достатньо експортувати один об'єкт:

```javascript
// singleton.js
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
**Опис**: Встановлює залежність "один-до-багатьох" між об'єктами, так що коли один об'єкт змінює свій стан, всі його залежні об'єкти повідомляються і оновлюються автоматично.

**Приклад у Node.js:**

Node.js надає попередньо реалізований клас EventEmitter для реалізації Observer патерну:

```javascript
const EventEmitter = require('events');

class Observer extends EventEmitter {}

const observer = new Observer();

// Реєстрація слухача
observer.on('dataReceived', (data) => {
  console.log(`Отримано дані: ${data}`);
});

// Видача події
observer.emit('dataReceived', 'Привіт, Node.js!');
```

### 3. Factory
**Опис**: Визначає інтерфейс для створення об'єктів, але дозволяє підкласам змінювати тип створюваних об'єктів.

**Приклад у Node.js:**

```javascript
class Car {
  constructor() {
    this.type = 'Car';
  }
}

class Truck {
  constructor() {
    this.type = 'Truck';
  }
}

class VehicleFactory {
  createVehicle(vehicleType) {
    if (vehicleType === 'car') {
      return new Car();
    } else if (vehicleType === 'truck') {
      return new Truck();
    }
  }
}

const factory = new VehicleFactory();

const car = factory.createVehicle('car');
console.log(car.type); // Car

const truck = factory.createVehicle('truck');
console.log(truck.type); // Truck
```

Використовуючи ці патерни, програмісти можуть покращити структуру та читабельність коду, полегшити підтримку та розширення програм. Патерни також сприяють вирішенню стандартних задач проєктування, які часто зустрічаються в розробці програмного забезпечення.

| Back | Forward |
|---|---|
| [Які є плюси та мінуси розділення коду на .js та окремо тайпінги .d.ts?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/what-are-the-pros-and-cons-of-splitting-code-into-js-and-separate-type-definitions-in-dts.md)  | [Який паттерн з GoF реалізує EventEmitter?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/what-gof-pattern-does-eventemitter-implement.md) |