#### 112. Окрім використання оператора ‘return’, як ще можна повернути результат виконання з функції (процедури)?

У деяких мовах програмування є декілька способів, окрім використання оператора `return`, щоб повернути результат виконання з функції чи процедури. Ось декілька методів:

1. **Глобальні змінні**:
   Ви можете зберігати результат у глобальній змінній, яка доступна за межами функції. Це не є гарною практикою через можливі проблеми з підтримкою і розумінням коду.

   ```python
   result = None

   def calculate():
       global result
       result = 42

   calculate()
   print(result)
   ```

2. **Зміна аргументів**:
   У мовах програмування, які дозволяють передавати аргументи за посиланням, ви можете змінювати значення вхідних параметрів.

   ```cpp
   void calculate(int &result) {
       result = 42;
   }

   int main() {
       int value;
       calculate(value);
       std::cout << value; // Виведе 42
       return 0;
   }
   ```

3. **Замикання (Closures)**:
   У деяких мовах програмування, таких як Python, можна використовувати замикання для збереження стану.

   ```python
   def outer_function():
       result = 0
       
       def inner_function():
           nonlocal result
           result = 42
           return result
       
       inner_function()
       return result

   print(outer_function())  # Виведе 42
   ```

4. **Об'єкти та методи класів**:
   Ви можете зберігати результати в об’єкті, якщо у вас є класна структура.

   ```python
   class Calculator:
       def __init__(self):
           self.result = None
       
       def calculate(self):
           self.result = 42
       
   calc = Calculator()
   calc.calculate()
   print(calc.result)  # Виведе 42
   ```

Ці методи можуть бути корисні в різних обставинах, але важливо вибирати той метод, який найбільше підходить під конкретну задачу і не ускладнює розуміння коду.

| Back | Forward |
|---|---|
| [Які обмеження накладаються на потік Web Workers?](/ua/middle/javascript/what-are-the-limitations-imposed-on-a-web-worker-stream.md)  | [Implement async patterns](/ua/middle/javascript/implement-asynchronous-codepatterns.md) |