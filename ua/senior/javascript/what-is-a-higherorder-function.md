#### 226. Що таке функції вищого порядку?

Функції вищого порядку — це функції, які можуть приймати інші функції як аргументи або повертати функції як результат. Вони часто використовуються у функціональному програмуванні, щоб підвищити гнучкість і повторне використання коду.

Приклади використання функцій вищого порядку:

1. **Передача функцій як аргументів**:
   ```python
   def apply_function(func, value):
       return func(value)

   def square(x):
       return x * x

   result = apply_function(square, 5)
   # Результат: 25
   ```

2. **Повернення функцій як резултату**:
   ```python
   def generate_multiplier(factor):
       def multiply_by_factor(x):
           return x * factor
       return multiply_by_factor

   double = generate_multiplier(2)
   result = double(5)
   # Результат: 10
   ```

Використання функцій вищого порядку дозволяє створювати більш абстрактний і зрозумілий код, що спрощує його підтримку та розширення. Вони є основою для багатьох популярних патернів, таких як "каррінг" (currying) та "емоційні шаблони" (callback patterns).

| Back | Forward |
|---|---|
| [Чим JS відрізняється від багатопотокових мов?](/ua/senior/javascript/what-sets-javascript-apart-from-multithreaded-languages.md)  | [Назвіть об’єкти першого класу.](/ua/senior/javascript/what-are-firstclass-objects.md) |