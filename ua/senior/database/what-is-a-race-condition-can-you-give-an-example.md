#### 245. Що таке race condition? Можете навести приклад?

Race condition (змагання за ресурс) — це ситуація, яка виникає, коли кілька потоків або процесів одночасно намагаються отримати доступ до одного й того ж ресурсу або даних без належної координації, що призводить до непередбачуваних або неправильних результатів.

### Приклад:

Припустимо, що у вас є змінна-счетчик, яка зберігає кількість кліків на кнопку:

```python
counter = 0

def increment_counter():
    global counter
    temp = counter
    temp += 1
    counter = temp
```

Якщо дві функції `increment_counter()` виконуються одночасно у різних потоках без синхронізації, може виникнути race condition. Це відбувається так:

1. Перший потік зчитує `counter` (значення 0) у `temp`.
2. Другий потік зчитує `counter` (значення 0) у `temp`.
3. Перший потік збільшує `temp` на 1 (значення `temp` стає 1) і записує його назад у `counter`.
4. Другий потік збільшує `temp` на 1 (значення `temp` стає 1) і записує його назад у `counter`.

У результаті, значення `counter` збільшується лише на 1 замість 2, оскільки обидва потоки перекрили один одного.

### Як уникнути race condition?

Для уникнення race condition можна використовувати механізми синхронізації, такі як блокування:

```python
import threading

counter = 0
lock = threading.Lock()

def increment_counter():
    global counter
    with lock:
        temp = counter
        temp += 1
        counter = temp
```

В цьому прикладі `lock` гарантує, що лише один потік за раз може виконувати код всередині `with lock`, тим самим запобігаючи race condition.

| Back | Forward |
|---|---|
| [Навіщо потрібні індекси пошуку? Які мінуси в індексів?](/ua/senior/database/244-why-are-search-indexes-needed-what-are-the-disadvantages-of-indexes.md)  | [Що таке реплікація? Навіщо вона потрібна?](/ua/senior/database/what-is-replication-and-why-does-it-exist.md) |