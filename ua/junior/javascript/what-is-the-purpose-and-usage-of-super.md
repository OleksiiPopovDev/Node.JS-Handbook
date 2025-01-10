#### 43. Де і для чого використовують super()?

У JavaScript `super()` використовується в контексті об'єктно-орієнтованого програмування з класами. Вона служить для виклику конструктора батьківського класу. Це особливо корисно в класах-нащадках, коли потрібно ініціалізувати властивості, що визначені у батьківському класі, або виконати інші дії, які визначені в конструкторі батьківського класу.

### Використання `super()`:

1. **У конструкторах**:
   - Викликається з метою ініціалізації властивостей, успадкованих від батьківського класу.
   - Має бути викликаний до того, як в конструкторі класу-нащадка буде звернення до `this`.

   ```javascript
   class Animal {
       constructor(name) {
           this.name = name;
       }
   }

   class Dog extends Animal {
       constructor(name, breed) {
           super(name); // Виклик конструктора батьківського класу
           this.breed = breed;
       }
   }

   const myDog = new Dog('Rex', 'Shepherd');
   console.log(myDog.name);  // Rex
   console.log(myDog.breed); // Shepherd
   ```

2. **При перевизначенні методів**:
   - Використовується для виклику методів батьківського класу із класу-нащадка.

   ```javascript
   class Animal {
       speak() {
           console.log('Animal speaks');
       }
   }

   class Dog extends Animal {
       speak() {
           super.speak(); // Виклик методу з батьківського класу
           console.log('Dog barks');
       }
   }

   const myDog = new Dog();
   myDog.speak();
   // Виведе:
   // Animal speaks
   // Dog barks
   ```

Отже, `super()` дозволяє отримувати доступ до методів та конструктора батьківського класу, що є важливою складовою для побудови системи успадкування та поліморфізму в JavaScript.

| Back | Forward |
|---|---|
| [Для чого призначений тип void?](/ua/junior/javascript/what-is-the-purpose-of-the-void-type.md)  | [Для чого потрібен this і в яких випадках його використовувати?](/ua/junior/javascript/what-is-the-purpose-of-this-and-when-should-it-be-used.md) |