#### * Use advanced JavaScript design patterns (Observer, Singleton, Factory)

Звісно, давайте розглянемо реалізацію деяких з цих популярних шаблонів проектування в JavaScript:

### 1. Observer Pattern
Шаблон Observer дозволяє одному об'єкту (видавцю) повідомляти інші об'єкти (передплатники) про зміни стану.

```javascript
class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    update(data) {
        console.log('Observer received:', data);
    }
}

// Використання
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify('Hello Observers!');
```

### 2. Singleton Pattern
Шаблон Singleton обмежує створення об’єкта одним екземпляром і надає глобальну точку доступу до нього.

```javascript
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;
        this.data = 'Singleton instance data';
        return this;
    }

    getData() {
        return this.data;
    }
}

// Використання
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
console.log(instance1.getData());     // Singleton instance data
```

### 3. Factory Pattern
Шаблон Factory об’єднує створення об’єктів і приховує логіку створення від користувача.

```javascript
class Car {
    constructor() {
        this.type = 'Car';
    }

    drive() {
        console.log('Driving a car');
    }
}

class Bike {
    constructor() {
        this.type = 'Bike';
    }

    ride() {
        console.log('Riding a bike');
    }
}

class VehicleFactory {
    createVehicle(vehicleType) {
        switch (vehicleType) {
            case 'Car':
                return new Car();
            case 'Bike':
                return new Bike();
            default:
                throw new Error('Unknown vehicle type');
        }
    }
}

// Використання
const factory = new VehicleFactory();
const car = factory.createVehicle('Car');
const bike = factory.createVehicle('Bike');

car.drive();  // Driving a car
bike.ride();  // Riding a bike
```

Ці приклади ілюструють основи використання трьох поширених шаблонів проектування в JavaScript для покращення організації та гнучкості коду.

| Back | Forward |
|---|---|
| [Optimize code for the event loop](/ua/senior/javascript/optimize-code-for-the-event-loop.md)  | [Handle memory leaks in JavaScript](/ua/senior/javascript/handle-memory-leaks-in-javascript.md) |