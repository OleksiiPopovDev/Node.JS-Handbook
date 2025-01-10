#### 183. Навіщо використовують AbortController? В яких API він підтримується?

AbortController використовується для керування скасуванням асинхронних операцій, таких як HTTP-запити, які виконуються через fetch API. Він дає можливість програмісту скасувати запити і звільнити ресурси, які використовуються операцією, що більше не потрібна або вийшла за рамки певного часу очікування.

### Основні характеристики AbortController:

- **Створення екземпляра:** `AbortController` є об'єктом, який може містити державу скасування.
- **Сигнал:** Він передає об'єкт `AbortSignal` як параметр опції в API, що підтримує скасування.
- **Метод `abort()`:** Викликається для зміни стану сигналу і скасування зв'язаних запитів або операцій.

### Приклад використання з fetch API:

```javascript
const controller = new AbortController();
const signal = controller.signal;

fetch('https://example.com/data', { signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => {
    if (err.name === 'AbortError') {
      console.log('Запит було скасовано');
    } else {
      console.log('Інша помилка', err);
    }
  });

// Скасовуємо запит через 5 секунд
setTimeout(() => {
  controller.abort();
}, 5000);
```

### Підтримка в API:
AbortController підтримується в:

- **Fetch API:** Використовується для скасування fetch-запитів.
- **XMLHttpRequest:** Доступний сигнал скасування для більш давніх AJAX технологій.
- **Streams API:** Використовується для скасування потоків даних.
- **WebSocket (частково):** Деякі Node.js реалізації підтримують скасування через AbortSignal.

Використання AbortController та AbortSignal дозволяє підвищити ефективність та гнучкість роботи з асинхронними операціями, особливо в умовах, де важливо оперативно звільнити ресурси чи зупинити непотрібні запити.

| Back | Forward |
|---|---|
| [Як скопіювати теку з вкладеними файлами та іншими теками за допомогою node:fs?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/how-to-copy-a-directory-with-subdirectories-and-other-directories-using-nodefs.md)  | [Чим сучасним замінити node:domain API?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/what-modern-alternatives-are-there-to-the-nodedomain-api.md) |