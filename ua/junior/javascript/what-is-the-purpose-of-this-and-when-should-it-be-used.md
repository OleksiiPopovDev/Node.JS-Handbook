#### 44. Для чого потрібен this і в яких випадках його використовувати?

У JavaScript ключове слово `this` є особливим, оскільки воно слугує для доступу до властивостей та методів об'єкта в рамках якого виконаний код. Значення `this` визначається під час виконання, і залежить від того, як викликається функція.

### Використання `this`

1. **У методах об'єкта:**
   Коли функція викликається як метод об'єкта, `this` вказує на цей об'єкт. Це дозволяє отримати доступ до властивостей об'єкта зсередини методів.

   ```javascript
   const obj = {
       name: 'Аліса',
       greet: function() {
           console.log('Привіт, мене звати ' + this.name);
       }
   };

   obj.greet(); // Виведе: Привіт, мене звати Аліса
   ```

2. **У конструкторах:**
   Використовується в конструкторах для ініціалізації нових об'єктів. `this` вказує на створюваний екземпляр.

   ```javascript
   function User(name) {
       this.name = name;
   }

   const user = new User('Іван');
   console.log(user.name); // Виведе: Іван
   ```

3. **В класах ES6:**
   Так само, як у конструкторах функцій, `this` у методах класу вказує на екземпляр класу.

   ```javascript
   class Car {
       constructor(brand) {
           this.brand = brand;
       }

       displayBrand() {
           console.log('Марка авто: ' + this.brand);
       }
   }

   const car = new Car('Toyota');
   car.displayBrand(); // Виведе: Марка авто: Toyota
   ```

4. **В подіях DOM:**
   У обробниках подій `this` зазвичай вказує на елемент, на якому відбулася подія.

   ```html
   <button id="myButton">Натисни мене</button>
   <script>
       document.getElementById('myButton').addEventListener('click', function() {
           console.log(this.id); // Виведе: myButton
       });
   </script>
   ```

5. **Контекст виконання, прив'язка `this`:**
   Контекст `this` можна змінювати або встановлювати за допомогою методів `call`, `apply` та `bind`.

   ```javascript
   const person = {
       name: 'Юлія'
   };

   function sayHello() {
       console.log('Привіт ' + this.name);
   }

   sayHello.call(person); // Виведе: Привіт Юлія
   ```

### Зауваження

- Якщо `this` використовується у функції, яка викликається без прив'язки до об'єкта, наприклад, простим викликом, у суворому (`strict`) режимі `this` буде `undefined`; без суворого режиму — об'єкт `window` (або `global` в Node.js).
- Стрілкові функції (`arrow functions`) не мають власного `this` і завжди успадковують `this` з контексту, в якому вони були створені.

`this` є важливим механізмом контексту, що дозволяє ефективно управляти діями та поведінкою об'єктів у JavaScript.

| Back | Forward |
|---|---|
| [Де і для чого використовують super()?](/ua/junior/javascript/what-is-the-purpose-and-usage-of-super.md)  | [Що таке NaN і як його використати?](/ua/junior/javascript/what-is-nan-and-how-to-use-it.md) |