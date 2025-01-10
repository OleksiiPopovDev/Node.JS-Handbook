#### * Implement async patterns

У Python можемо реалізовувати асинхронні патерни за допомогою модулів `asyncio`, `await` та ключового слова `async`. Нижче наведено приклад асинхронної функції, яка використовує ці можливості:

```python
import asyncio

async def fetch_data(param):
    print(f"Запуск процесу з параметром: {param}")
    await asyncio.sleep(1)  # Симуляція асинхронної операції, наприклад, отримання даних з мережі
    print(f"Отримано дані для параметра: {param}")
    return f"Data for {param}"

async def main():
    print("Початок асинхронного виконання")

    # Створимо список завдань
    tasks = [
        fetch_data(1),
        fetch_data(2),
        fetch_data(3)
    ]

    # Виконання завдань одночасно
    results = await asyncio.gather(*tasks)

    print("Отримані результати:")
    for result in results:
        print(result)

    print("Завершення асинхронного виконання")

# Запускаємо асинхронне виконання
asyncio.run(main())
```

### Пояснення цього коду:

1. **Асинхронна функція**: Функція `fetch_data` оголошена з ключовим словом `async`, що вказує на те, що вона є асинхронною. Використання `await` перед `asyncio.sleep` дозволяє поставити виконання функції на паузу, поки виконується операція.

2. **Інша асинхронна функція**: `main` також є асинхронною, вона використовує `await` для одночасного запуску кількох завдань за допомогою `asyncio.gather`.

3. **Запуск подій**: `asyncio.run(main())` запускає основну асинхронну функцію, яка, у свою чергу, запускає усі інші асинхронні завдання.

Цей код ілюструє основний асинхронний патерн у Python, що дозволяє виконувати операції, які можуть зайняти значний час, не блокуючи основний процес.

| Back | Forward |
|---|---|
| [Окрім використання оператора ‘return’, як ще можна повернути результат виконання з функції (процедури)?](/ua/middle/javascript/what-else-can-you-return-from-a-function-besides-using-the-return-operator.md)  | [Use advanced array and object methods (reduce, map, filter)](/ua/middle/javascript/use-advanced-array-and-object-methods-reduce-map-filter.md) |