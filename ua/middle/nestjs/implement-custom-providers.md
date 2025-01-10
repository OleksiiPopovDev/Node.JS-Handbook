#### * Implement custom providers

Звісно! Щоб реалізувати власних провайдерів, насамперед треба зрозуміти, які завдання вони виконуватимуть. Власні провайдери можуть бути використані в різних контекстах, таких як депенденсі-ін'єкція, збірка конфігурацій або інтеграція з іншими системами. Я наведу приклад реалізації простого провайдера конфігурації на основі мови програмування Python.

### Приклад: Власний провайдер конфігурації на Python

У цьому прикладі ми реалізуємо провайдера, який буде читати налаштування з текстового файлу `config.txt`.

#### Структура файлу конфігурації
```
database=postgres
username=admin
password=pa$w0rd
```

#### Реалізація конфігураційного провайдера

```python
class ConfigProvider:
    def __init__(self, filepath):
        self.filepath = filepath
        self.configurations = self._load_config()

    def _load_config(self):
        configurations = {}
        try:
            with open(self.filepath, 'r') as file:
                lines = file.readlines()
            
            for line in lines:
                if '=' in line:
                    key, value = line.strip().split('=', 1)
                    configurations[key] = value
        except FileNotFoundError:
            print(f"Configuration file {self.filepath} not found.")
        except Exception as e:
            print(f"Error reading configuration: {e}")

        return configurations

    def get(self, key, default=None):
        return self.configurations.get(key, default)

# Використання провайдера
config_provider = ConfigProvider('config.txt')
database = config_provider.get('database', 'default_db')
username = config_provider.get('username')
password = config_provider.get('password')

print(f"Database: {database}")
print(f"Username: {username}")
print(f"Password: {password}")
```

### Пояснення

1. **Клас `ConfigProvider`**: Визначає клас для роботи з файлами конфігурації. 
2. **Методи**:
   - `_load_config`: Читає файл конфігурацій і зберігає пари "ключ-значення" у словнику.
   - `get`: Повертає значення для певного ключа, або значення за замовчуванням, якщо ключ не знайдено.
3. **Обробка помилок**: Існує обробка випадків, коли файл не знайдено, або коли виникає інша помилка під час читання.

Цей базовий приклад можна адаптувати залежно від вимог вашої програми, зокрема додати підтримку різних форматів файлів або джерел даних.

| Back | Forward |
|---|---|
| [Create and import modules](/ua/middle/nestjs/create-and-import-modules.md)  | [Create custom pipes](/ua/middle/nestjs/create-custom-pipelines.md) |