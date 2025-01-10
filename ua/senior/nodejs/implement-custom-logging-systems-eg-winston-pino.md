#### * Implement custom logging systems (e.g., Winston, Pino)

Щоб реалізувати кастомну систему логування в Node.js за допомогою бібліотеки Winston, можна скористатися прикладом нижче. Winston є потужним і гнучким інструментом для логування з можливістю конфігурації різних транспортувальників для зберігання логів.

### Встановлення Winston:

Спочатку потрібно встановити залежність `winston`:

```bash
npm install winston
```

### Основний приклад використання Winston:

```javascript
const winston = require('winston');

// Створення користувацького формату для логів
const customFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

// Налаштування логера
const logger = winston.createLogger({
  level: 'info', // Вказання мінімального рівня логування
  format: winston.format.combine(
    winston.format.timestamp(),
    customFormat
  ),
  transports: [
    new winston.transports.Console(), // Вивід в консоль
    new winston.transports.File({ filename: 'app.log' }) // Збереження в файл
  ]
});

// Приклади логування
logger.info('Це інформаційне повідомлення');
logger.warn('Це попередження');
logger.error('Це помилка');
```

### Переваги використання Winston:

1. **Гнучкість:** Підтримує створення кастомних форматів і транспортувальників.
2. **Розширюваність:** Легко розширювати шляхом додавання нових плагінів.
3. **Підтримка різних середовищ:** Логери можна легко конфігурувати для різних середовищ (розробка, тестування, продакшин).

### Інтеграція з Pino:

Якщо вам потрібна альтернатива з акцентом на високу продуктивність, можете звернутись до `Pino`. Це ще одна бібліотека для логування в Node.js, яка орієнтована на швидкість.

### Встановлення Pino:

```bash
npm install pino
```

### Основний приклад використання Pino:

```javascript
const pino = require('pino');

// Налаштування логера
const logger = pino({
  level: 'info',
  prettyPrint: { colorize: true }
});

// Приклади логування
logger.info('Це інформаційне повідомлення');
logger.warn('Це попередження');
logger.error('Це помилка');
```

### Заключення

Обидві бібліотеки, Winston і Pino, є чудовими рішеннями для логування в Node.js. Вибір між ними залежить від конкретних вимог до продуктивності, гнучкості та особливостей вашого проекту.

| Back | Forward |
|---|---|
| [Use middleware for advanced request handling](/ua/senior/nodejs/use-middleware-for-complex-http-requests.md)  | [Use performance monitoring tools (e.g., Prometheus, New Relic)](/ua/senior/nodejs/use-performance-monitoring-tools-eg-prometheus-new-relic.md) |