#### * Implement custom threading solutions

Створення кастомних рішень потоків у Python може бути корисним, якщо стандартні засоби не зовсім підходять для вашої задачі. Це може бути ситуація, коли ви хочете реалізувати специфічну поведінку потоків або додаткові функціональні можливості. Нижче наведено простий приклад, як можна створити кастомний потік, успадковуючи `Thread` з модуля `threading`.

```python
import threading
import time

class CustomThread(threading.Thread):
    def __init__(self, name, delay):
        super().__init__()
        self.name = name
        self.delay = delay
        self._stop_event = threading.Event()

    def run(self):
        print(f"Потік {self.name} стартував.")
        count = 0
        while not self._stop_event.is_set():
            print(f"Потік {self.name} працює. N = {count}")
            count += 1
            time.sleep(self.delay)
        print(f"Потік {self.name} завершено.")

    def stop(self):
        self._stop_event.set()

if __name__ == "__main__":
    # Створення та запуск потоків
    thread1 = CustomThread("Thread1", 1)
    thread2 = CustomThread("Thread2", 2)

    thread1.start()
    thread2.start()

    # Дамо потокам попрацювати кілька секунд
    time.sleep(5)

    # Зупинити потоки
    thread1.stop()
    thread2.stop()

    # Переконатися, що потоки завершені
    thread1.join()
    thread2.join()

    print("Всі потоки завершені.")
```

### Як це працює:

1. **Клас `CustomThread`:**
   - Наслідується від `threading.Thread`. Ви можете перевизначати методи, такі як `__init__` та `run`, для надання вашої поведінки.
   - Додаємо властивість `_stop_event` для сигналізації зупинки потоку. Це об'єкт `Event` з модуля `threading`, який ми використовуємо для керування станом потоку.

2. **Метод `run`:**
   - Основна логіка роботи потоку, яка починається при виклику методу `start`.
   - Цикл `while` працює, поки `_stop_event` не буде встановлений, і виконує якусь дію (в даному випадку висновок лічильника).

3. **Метод `stop`:**
   - Встановлює `_stop_event`, що дозволяє вийти з циклу `while` у методі `run` і коректно завершити роботу потоку.

4. **Використання:**
   - Потоки створюються і запускаються за допомогою `start()`.
   - Дозволяємо їм працювати певний час з функцією `time.sleep()`.
   - Викликаємо метод `stop()` для зупинки потоків.
   - `join()` чекає, поки повністю завершиться виконання потоку.

Цей приклад демонструє базовий підхід, який можна адаптувати для створення більш складних рішень в залежності від ваших потреб.

| Back | Forward |
|---|---|
| [Contribute to the Node.js ecosystem](/ua/senior/nodejs/join-the-nodejs-community.md)  | [Optimize file handling systems](/ua/senior/nodejs/optimize-file-management.md) |