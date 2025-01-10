#### 108. Яка різниця між abstract і interface?

У JavaScript немає вбудованих конструкцій `abstract` чи `interface`, як, наприклад, у мовах Java чи C#. Проте ви можете реалізовувати аналогічну поведінку через певні патерни або підходи.

### Аналогія з `abstract` класами:

1. **Базові методи**: В JavaScript можна створити базовий клас з методами, які можуть бути перевизначені або які обов'язкові для реалізації в спадкоємцях. Цей підхід імітує `abstract` клас.

   ```javascript
   class Animal {
     constructor(name) {
       if (this.constructor === Animal) {
         throw new Error("Не можна створювати екземпляри абстрактного класу");
       }
       this.name = name;
     }

     makeSound() {
       throw new Error("Необхідно перевизначити метод makeSound");
     }
   }

   class Dog extends Animal {
     makeSound() {
       return "Гав-гав";
     }
   }

   // const animal = new Animal("Тварина"); // Викине помилку
   const dog = new Dog("Собака");
   console.log(dog.makeSound()); // "Гав-гав"
   ```

### Аналогія з `interface`:

1. **Контракти**: В JavaScript ви можете створювати об'єкти, які використовуються як контракти, що описують необхідні функції та властивості, які об'єкт повинен реалізовувати.

   ```javascript
   const IAnimal = {
     makeSound: "function",
     name: "string"
   };

   function implementInterface(instance, interfaceDef) {
     for (const method in interfaceDef) {
       if (typeof instance[method] !== interfaceDef[method]) {
         throw new Error(`Об'єкт не реалізує інтерфейс належним чином. Відсутній метод: ${method}`);
       }
     }
   }

   class Dog {
     constructor(name) {
       this.name = name;
     }

     makeSound() {
       return "Гав-гав";
     }
   }

   const dog = new Dog("Собака");
   implementInterface(dog, IAnimal); // Перевірка реалізації
   ```

### Відмінності:

- **`Abstract` клас**: Зазвичай використовується для надання базової реалізації методів, які можуть або мають бути переписані у спадкоємних класах. Джерело для встановлення поведінки та структури для класів-нащадків.

- **`Interface`**: Визначає набір методів і властивостей, які клас повинен реалізувати, без надання їхньої реалізації. Слугує як контракт, забезпечуючи певну узгодженість в архітектурі програми.

У JavaScript ці концепції не є частиною мови, але можуть бути досягнуті через певні патерни проєктування та перевірки на рівні коду.

| Back | Forward |
|---|---|
| [Наведіть приклад блокування циклу подій.](/ua/middle/javascript/what-is-an-example-of-event-loop-blocking.md)  | [Що таке Web Workers? Для чого їх використовують?](/ua/middle/javascript/what-are-web-workers-what-are-they-used-for.md) |