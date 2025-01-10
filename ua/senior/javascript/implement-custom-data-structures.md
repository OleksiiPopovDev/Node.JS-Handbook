#### * Implement custom data structures

Реалізація власних структур даних може бути корисною, коли існуючі рішення не підходять для специфічних вимог вашого проекту. Ось декілька прикладів, як можна реалізувати базові структури даних на Python:

### 1. Стек (Stack)

Стек реалізується за принципом LIFO (Last In, First Out).

```python
class Stack:
    def __init__(self):
        self.items = []

    def is_empty(self):
        return len(self.items) == 0

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        return None

    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        return None

    def size(self):
        return len(self.items)
```

### 2. Черга (Queue)

Черга реалізується за принципом FIFO (First In, First Out).

```python
class Queue:
    def __init__(self):
        self.items = []

    def is_empty(self):
        return len(self.items) == 0

    def enqueue(self, item):
        self.items.insert(0, item)

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop()
        return None

    def size(self):
        return len(self.items)
```

### 3. Зв'язаний список (Linked List)

Зв'язаний список складається з вузлів, кожен з яких містить дані і посилання на наступний вузол.

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def is_empty(self):
        return self.head is None

    def append(self, value):
        new_node = Node(value)
        if self.is_empty():
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

    def remove(self, value):
        current = self.head
        previous = None
        while current:
            if current.value == value:
                if previous:
                    previous.next = current.next
                else:
                    self.head = current.next
                return True
            previous = current
            current = current.next
        return False

    def search(self, value):
        current = self.head
        while current:
            if current.value == value:
                return True
            current = current.next
        return False
```

### 4. Хеш-таблиця (Hash Table)

Простий приклад хеш-таблиці з використанням відкритої адресації.

```python
class HashTable:
    def __init__(self, size=10):
        self.size = size
        self.table = [None] * size

    def _hash_function(self, key):
        return hash(key) % self.size

    def insert(self, key, value):
        index = self._hash_function(key)
        while self.table[index] is not None:
            if self.table[index][0] == key:
                self.table[index] = (key, value)
                return
            index = (index + 1) % self.size
        self.table[index] = (key, value)

    def retrieve(self, key):
        index = self._hash_function(key)
        while self.table[index] is not None:
            if self.table[index][0] == key:
                return self.table[index][1]
            index = (index + 1) % self.size
        return None
```

Ці приклади демонструють як можна реалізувати базові структури даних. Звісно, в реальних додатках варто враховувати більше факторів, таких як обробка колізій у хеш-таблицях, ефективність алгоритмів, а також потенційні помилки та винятки.

| Back | Forward |
|---|---|
| [Implement advanced scoping mechanisms](/ua/senior/javascript/implement-advanced-scoping-mechanisms.md)  | [Implement custom event loop extensions](/ua/senior/javascript/implement-custom-event-loop-extensions.md) |