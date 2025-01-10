#### 182. Як скопіювати теку з вкладеними файлами та іншими теками за допомогою node:fs?

Для копіювання теки з усіма вкладеними файлами та підтеками за допомогою модуля `fs` в Node.js, можна скористатися асинхронними функціями з модуля `fs/promises`. Ось приклад, як це можна реалізувати:

```javascript
const fs = require('fs/promises');
const path = require('path');

async function copyDirectory(src, dest) {
    // Спробуємо створити цільову теку, якщо вона не існує
    await fs.mkdir(dest, { recursive: true });

    // Отримуємо список файлів та тек в поточній теці
    const entries = await fs.readdir(src, { withFileTypes: true });

    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            // Рекурсивно копіюємо вкладену теку
            await copyDirectory(srcPath, destPath);
        } else {
            // Копіюємо файл
            await fs.copyFile(srcPath, destPath);
        }
    }
}

// Виклик функції з вказанням шляхів до початкової та кінцевої тек
copyDirectory('path/to/source', 'path/to/destination')
    .then(() => console.log('Копіювання успішно завершено'))
    .catch(err => console.error('Сталася помилка:', err));
```

### Деталі:
- **`fs.mkdir(dest, { recursive: true })`:** Ця команда створює цільову теку, якщо вона не існує. Опція `{ recursive: true }` забезпечує створення всіх необхідних вкладених тек.
- **`fs.readdir(src, { withFileTypes: true })`:** Отримує список файлів та тек в указаній теці. Параметр `{ withFileTypes: true }` дозволяє розпізнавати, чи є об'єкт файлом чи текою.
- **Рекурсивний виклик `copyDirectory`:** Це забезпечує будь-яку глибину вкладеності тек.

Цей код створює точну копію теки, включно з усіма її підтеками та файлами.

| Back | Forward |
|---|---|
| [Що можна зробити за допомогою for await з request: IncomingMessage?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/what-can-be-done-with-for-await-on-a-request-incomingmessage.md)  | [Навіщо використовують AbortController? В яких API він підтримується?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/what-is-the-purpose-of-using-abortcontroller-which-apis-does-it-support.md) |