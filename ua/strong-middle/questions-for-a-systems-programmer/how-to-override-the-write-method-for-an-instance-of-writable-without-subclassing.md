#### 174. Як зробити перевизначення write для екземпляру Writable без створення класу спадкоємця?

У випадку, якщо ви хочете перевизначити поведінку методу `write` для екземпляру класу, що реалізує інтерфейс `Writable`, але не хочете створювати новий клас-нащадок, ви можете скористатися концепцією "декораторів" або "проксі" в деяких мовах програмування. Це дозволяє обгорнути існуючий екземпляр класу в новий об'єкт, який має ту ж саму інтерфейсну частину, але з модифікованою поведінкою.

Якщо ви працюєте, наприклад, на Python, однією з можливих реалізацій є використання об'єкта, який виконує роль проксі:

```python
class WritableProxy:
    def __init__(self, original):
        self._original = original
    
    def write(self, data):
        # тут ваше перевизначення
        print("Початок запису:")
        self._original.write(data)
        print("Кінець запису.")
    
    # делегування всіх інших методів до оригінального об'єкту
    def __getattr__(self, name):
        return getattr(self._original, name)

# Приклад використання
class OriginalWritable:
    def write(self, data):
        print(f"Original write: {data}")

original_writable = OriginalWritable()
proxy_writable = WritableProxy(original_writable)

proxy_writable.write("Hello, World!")
```

В цьому прикладі, метод `write` екземпляру `proxy_writable` виконується з додатковими діями, не змінюючи при цьому початкового класу `OriginalWritable`. Будь-яке інше викликання методу, що не є `write`, буде делеговано оригінальному об'єктові.

| Back | Forward |
|---|---|
| [Де використовують патерн Revealing constructor (відкритий конструктор)?](/ua/strong-middle/questions-for-a-systems-programmer/173-where-is-the-revealing-constructor-pattern-used.md)  | [У чому причина повільності викликів з JavaScript коду до аддонів на C, C++ чи під’єднаних через N-API?](/ua/strong-middle/questions-for-a-systems-programmer/why-is-slow-execution-of-javascript-code-in-addons-for-cc-or-napi.md) |