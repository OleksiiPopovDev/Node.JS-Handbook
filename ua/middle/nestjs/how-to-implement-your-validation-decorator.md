#### 98. Як реалізувати свій декоратор валідації?

Щоб реалізувати свій декоратор валідації в Python, слід визначити функцію-декоратор, яка приймає функцію як аргумент, а потім повертає заміну цієї функції-декоратора іншою функцією, що здійснює необхідні перевірки та викликає оригінальну функцію. Ось приклад реалізації простого декоратора валідації, який перевіряє, що всі аргументи є числами:

```python
def validate_numbers(func):
    def wrapper(*args, **kwargs):
        # Перевірка, чи всі аргументи є числами
        for arg in args:
            if not isinstance(arg, (int, float)):
                raise ValueError(f"Аргумент {arg} не є числом")
        
        for key, value in kwargs.items():
            if not isinstance(value, (int, float)):
                raise ValueError(f"Аргумент {key}={value} не є числом")

        # Виклик оригінальної функції, якщо всі аргументи пройшли перевірку
        return func(*args, **kwargs)
    return wrapper

# Приклад використання декоратора
@validate_numbers
def add(a, b):
    return a + b

try:
    print(add(3, 4))  # Коректний виклик: 7
    print(add(3, '4')) # Некоректний виклик: виклик викликатиме ValueError
except ValueError as e:
    print(e)
```

В цьому прикладі, декоратор `validate_numbers` перевіряє всі передані аргументи на відповідність числовому типу. Якщо будь-який з аргументів не є числом, він викидає `ValueError`. Якщо всі аргументи проходять перевірку, викликається оригінальна функція.

| Back | Forward |
|---|---|
| [Як описати приєднання до бази даних?](/ua/middle/nestjs/how-to-connect-database.md)  | [Implement DI in services](/ua/middle/nestjs/implement-dependency-injection-in-services.md) |