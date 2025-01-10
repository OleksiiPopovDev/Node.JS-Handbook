#### 230. Як можна отримати інкапсуляцію всередині класу без використання Typescript?

У JavaScript ми можемо досягти інкапсуляції без використання TypeScript шляхом використання слабких карт (`WeakMap`) або приватних полів, які були впроваджені в ES2022. Ось як це можна зробити:

### 1. Використання слабких карт (`WeakMap`):

```javascript
const _privateFields = new WeakMap();

class MyClass {
  constructor(value) {
    _privateFields.set(this, { secret: value });
  }

  getSecret() {
    return _privateFields.get(this).secret;
  }

  setSecret(newValue) {
    _privateFields.get(this).secret = newValue;
  }
}

const instance = new MyClass('інкапсульоване значення');
console.log(instance.getSecret()); // "інкапсульоване значення"
instance.setSecret('нове значення');
console.log(instance.getSecret()); // "нове значення"
```

### 2. Використання приватних полів (синтаксис `#`):

```javascript
class MyClass {
  #secret;

  constructor(value) {
    this.#secret = value;
  }

  getSecret() {
    return this.#secret;
  }

  setSecret(newValue) {
    this.#secret = newValue;
  }
}

const instance = new MyClass('інкапсульоване значення');
console.log(instance.getSecret()); // "інкапсульоване значення"
instance.setSecret('нове значення');
console.log(instance.getSecret()); // "нове значення"
```

Обидва способи дозволяють захистити доступ до полів чи методів класу поза класом, таким чином реалізуючи інкапсуляцію.

| Back | Forward |
|---|---|
| [Як працювати з асинхронною відповіддю?](/ua/senior/javascript/how-to-work-with-asynchronous-response.md)  | [Optimize code for the event loop](/ua/senior/javascript/optimize-code-for-the-event-loop.md) |