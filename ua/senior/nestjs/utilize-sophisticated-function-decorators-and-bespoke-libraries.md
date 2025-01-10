#### * Use advanced decorators and custom modules

Для демонстрації використання просунутих декораторів та користувацьких модулів у Python, розглянемо приклад, де ми створимо кастомний декоратор для логування виконання функцій, а також модуль, який ми хочемо використати разом із цим декоратором. 

### Крок 1: Створення кастомного декоратора

Декоратор — це функція, що приймає іншу функцію як аргумент і повертає нову функцію. Це дозволяє «декорувати» функції додатковими функціональностями.

```python
# logger_decorator.py
def execution_logger(func):
    import functools
    import datetime

    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Виклик функції {func.__name__} з аргументами: {args}, {kwargs}")
        start_time = datetime.datetime.now()
        
        result = func(*args, **kwargs)
        
        end_time = datetime.datetime.now()
        execution_time = (end_time - start_time).total_seconds()
        print(f"Функція {func.__name__} виконана за {execution_time} секунд")
        
        return result
        
    return wrapper
```

### Крок 2: Створення модуля з функціями

Створимо модуль, у якому будемо використовувати декоратор з попереднього кроку:

```python
# my_module.py
from logger_decorator import execution_logger

@execution_logger
def add(x, y):
    return x + y

@execution_logger
def multiply(x, y):
    return x * y
```

### Крок 3: Використання модуля та декораторів

Тепер ми можемо імпортувати наш модуль і перевірити, як працюють наші декоратори:

```python
# main.py
from my_module import add, multiply

result1 = add(5, 3)
print(f"Результат додавання: {result1}")

result2 = multiply(4, 2)
print(f"Результат множення: {result2}")
```

### Висновок

У цьому прикладі ми створили кастомний декоратор `execution_logger`, який логує інформацію про виклики функцій та час їх виконання, і застосували його до функцій `add` та `multiply` в модулі `my_module`. Це демонструє, як можна використовувати декоратори для збагачення функцій додатковою логікою без зміни їхньої основної реалізації.

| Back | Forward |
|---|---|
| [Optimize file handling systems](/ua/senior/nodejs/optimize-file-management.md)  | [Integrate third-party libraries into the framework](/ua/senior/nestjs/integrate-external-libraries-into-the-system.md) |