#### 196. Наведіть приклад патерну adapter з вбудованих бібліотек.

У мові програмування Python патерн "адаптер" можна продемонструвати з використанням вбудованих бібліотек, таких як `json`. Бібліотека `json` в Python фактично виконує роль адаптера між Python-об'єктами та текстовим форматом JSON.

Ось як це працює:

### Приклад

```python
import json

# Припустимо, у нас є Python об'єкт
python_object = {
    "name": "John",
    "age": 30,
    "is_student": False
}

# Використання json.dumps як адаптера для перетворення об'єкта в JSON-строку
json_string = json.dumps(python_object)
print(json_string)  # Вихід: {"name": "John", "age": 30, "is_student": false}

# Використання json.loads як адаптера для перетворення JSON-рядка назад в об'єкт Python
parsed_object = json.loads(json_string)
print(parsed_object)  # Вихід: {'name': 'John', 'age': 30, 'is_student': False}
```

### Пояснення

- **`json.dumps()`**: Цей метод діє як адаптер, що перетворює Python-об'єкт у формат JSON (який є текстовим форматом). Це дозволяє сумісність між внутрішнім представленням даних у Python та форматом, який легко передати, наприклад, через мережу.

- **`json.loads()`**: Це адаптер у зворотній бік, який перетворює JSON-строку назад у Python-об'єкт для використання в програмі Python.

Таким чином, бібліотека `json` надає функції, які виступають у ролі адаптерів для перетворення даних між різними представленнями.

| Back | Forward |
|---|---|
| [Як можна створити singleton за допомогою системи модульності у Node.js?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/how-can-i-create-a-singleton-using-the-module-system-in-nodejs.md)  | [Для чого нам потрібні такі поля Error: error.cause, error.code, error.message, error.stack?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/what-are-these-fields-errorcause-errorcode-errormessage-errorstack-used-for.md) |