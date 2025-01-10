#### * Implement custom data structures

У JavaScript ми можемо реалізовувати власні структури даних для покращення певних алгоритмів чи підвищення читабельності та організованості коду. Давайте розглянемо приклад реалізації простої структури даних — стеку (Stack), яка є класичною LIFO (Last In, First Out) структурою.

### Реалізація стеку

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  // Метод для додавання елемента в стек
  push(element) {
    this.items.push(element);
  }

  // Метод для видалення елемента з верхівки стека
  pop() {
    if (this.isEmpty()) {
      return 'Стек порожній';
    }
    return this.items.pop();
  }

  // Метод для перегляду елемента на верхівці стека без видалення
  peek() {
    if (this.isEmpty()) {
      return 'Стек порожній';
    }
    return this.items[this.items.length - 1];
  }

  // Метод для перевірки, чи є стек порожнім
  isEmpty() {
    return this.items.length === 0;
  }

  // Метод для отримання розміру стека
  size() {
    return this.items.length;
  }

  // Метод для очищення стека
  clear() {
    this.items = [];
  }

  // Метод для виводу елементів стека (для зручності)
  print() {
    console.log(this.items.toString());
  }
}

// Приклад використання
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Виведе: 10,20,30
console.log(stack.peek()); // Виведе: 30
console.log(stack.pop());  // Виведе: 30
stack.print(); // Виведе: 10,20
```

### Опис методів:
- **`push(element)`**: додає елемент на верхівку стека.
- **`pop()`**: видаляє та повертає елемент з верхівки стека.
- **`peek()`**: повертає елемент з верхівки стека, не видаляючи його.
- **`isEmpty()`**: перевіряє, чи є стек порожнім.
- **`size()`**: повертає кількість елементів у стеці.
- **`clear()`**: очищає стек.
- **`print()`**: виводить елементи стека у вигляді рядка.

Цей приклад демонструє основні операції зі стеком, однак ми можемо створювати й інші користувацькі структури даних, використовуючи подібний підхід, в залежності від наших потреб.

| Back | Forward |
|---|---|
| [Implement advanced scoping mechanisms](/ua/senior/javascript/implement-advanced-scoping-mechanisms.md)  | [Implement custom event loop extensions](/ua/senior/javascript/implement-custom-event-loop-extensions.md) |