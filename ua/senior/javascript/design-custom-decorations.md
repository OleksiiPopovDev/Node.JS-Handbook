#### * Design custom decorators

Декоратори в Python — це спеціальні функції, які дозволяють змінювати або розширювати поведінку інших функцій або методів. Вони часто використовуються для рефакторингу коду, додавання додаткових функціональностей, таких як логування, кешування, перевірка доступу і т.д.

Ось простий приклад створення власного декоратора, який вимірює час виконання функції:

```python
import time

def timing_decorator(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        execution_time = end_time - start_time
        print(f"Час виконання '{func.__name__}': {execution_time:.4f} секунд")
        return result
    return wrapper

@timing_decorator
def my_function():
    # Імітація роботи функції за допомогою sleep
    time.sleep(2)
    print("Функція виконана!")

my_function()
```

### Пояснення коду:

1. **timing_decorator:** Це функція-декоратор, яка приймає функцію як аргумент і повертає "обгорнуту" функцію `wrapper`.

2. **wrapper:** Це внутрішня функція, яка вимірює час до і після виклику `func`, обчислює час виконання і виводить його на екран. Потім вона повертає результат виконання оригінальної функції `func(*args, **kwargs)`.

3. **@timing_decorator:** Це синтаксис для застосування декоратора до функції `my_function`. Це те саме, що і запис `my_function = timing_decorator(my_function)`.

4. **Функція `my_function`:** Імітує роботу шляхом виклику `time.sleep(2)`, щоб було зрозуміло, що декоратор працює, вимірюючи цей час.

### Де це може знадобитися:

- Моніторинг і оптимізація продуктивності.
- Логування викликів функцій і їх результатів.
- Перевірка доступу або аутентифікація користувачів.
- Кешування результатів функцій для підвищення ефективності. 

Ви можете також передавати аргументи вашим декораторам або створювати декоратори класів та методів, що надає ще більше гнучкості.

| Back | Forward |
|---|---|
| [Write advanced polyfills for compatibility](/ua/senior/javascript/write-advanced-polyfills-for-older-browsers.md)  | [Design reusable modules](/ua/senior/javascript/create-modular-designs.md) |