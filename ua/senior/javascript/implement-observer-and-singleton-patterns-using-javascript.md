#### * Use advanced JavaScript design patterns (Observer, Singleton, Factory)

Звісно, ось короткий огляд трьох популярних патернів проектування в JavaScript: Observer, Singleton, та Factory.

### Observer Pattern

Патерн Observer (спостерігач) використовується для створення системи, де один об'єкт (суб'єкт) повідомляє інші об'єкти (спостерігачі) про зміни його стану. Це корисно у випадках, коли потрібно реалізувати принцип "паблікувати-підписуватися".

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
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} отримав дані: ${data}`);
  }
}

// Використання
const subject = new Subject();
const observer1 = new Observer('Спостерігач 1');
const observer2 = new Observer('Спостерігач 2');

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify('нові дані');
```

### Singleton Pattern

Патерн Singleton обмежує інстанцію класу одним екземпляром і надає глобальну точку доступу до цього екземпляра. Це корисно для керування загальною точкою доступу до ресурсів.

```javascript
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.data = {};
  }

  setData(key, value) {
    this.data[key] = value;
  }

  getData(key) {
    return this.data[key];
  }
}

// Використання
const singletonA = new Singleton();
singletonA.setData('name', 'Singleton Pattern');

const singletonB = new Singleton();
console.log(singletonB.getData('name')); // Відобразить 'Singleton Pattern'
```

### Factory Pattern

Патерн Factory дозволяє створювати об'єкти без вказівки точної класи реалізації. Це забезпечує спосіб делегування створення об'єктів до підкласів.

```javascript
class Cat {
  constructor(name) {
    this.name = name;
    this.type = 'Кіт';
  }

  speak() {
    console.log(`${this.name} каже: Мяу!`);
  }
}

class Dog {
  constructor(name) {
    this.name = name;
    this.type = 'Пес';
  }

  speak() {
    console.log(`${this.name} каже: Гав!`);
  }
}

class AnimalFactory {
  createAnimal(type, name) {
    switch (type) {
      case 'cat':
        return new Cat(name);
      case 'dog':
        return new Dog(name);
      default:
        throw new Error('Тип не підтримується');
    }
  }
}

// Використання
const factory = new AnimalFactory();
const myCat = factory.createAnimal('cat', 'Мурчик');
myCat.speak(); // Відобразить 'Мурчик каже: Мяу!'

const myDog = factory.createAnimal('dog', 'Барсик');
myDog.speak(); // Відобразить 'Барсик каже: Гав!'
```

Ці патерни використовуються для підвищення гнучкості та легкості в підтримці коду. Вони допомагають структурувати проект таким чином, що можливо додавати нові функціональні можливості з меншими змінами.

| Back | Forward |
|---|---|
| [Optimize code for the event loop](/ua/senior/javascript/optimizing-code-for-event-loop-execution.md)  | [Handle memory leaks in JavaScript](/ua/senior/javascript/how-to-prevent-a-memory-leak-in-javascript.md) |