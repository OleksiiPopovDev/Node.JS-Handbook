#### * Implement custom logging systems (e.g., Winston, Pino)

Впровадження власної системи логування за допомогою бібліотек Winston або Pino дозволяє гнучко та зручно керувати логами вашої програми. Нижче наведено базові приклади того, як це можна реалізувати з використанням кожної з цих бібліотек.

### Використання Winston

1. **Встановлення Winston:**

   Спочатку необхідно встановити бібліотеку Winston через npm:

   ```bash
   npm install winston
   ```

2. **Налаштування логера Winston:**

   Ось приклад базового налаштування логера:

   ```javascript
   const winston = require('winston');

   const logger = winston.createLogger({
     level: 'info',
     format: winston.format.combine(
       winston.format.timestamp(),
       winston.format.json()
     ),
     transports: [
       new winston.transports.Console(),
       new winston.transports.File({ filename: 'error.log', level: 'error' }),
       new winston.transports.File({ filename: 'combined.log' })
     ],
   });

   // Логи різних рівнів
   logger.info('This is an info log');
   logger.warn('This is a warning log');
   logger.error('This is an error log');
   ```

3. **Розширення можливостей логування Winston:**

   Ви можете додавати додаткові транспорти чи формати, наприклад, зберігати логи у базі даних чи налаштовувати відправку логів на інші сервіси.

### Використання Pino

1. **Встановлення Pino:**

   Для початку встановіть бібліотеку Pino:

   ```bash
   npm install pino
   ```

2. **Налаштування логера Pino:**

   Ось приклад конфігурації з Pino:

   ```javascript
   const pino = require('pino');

   const logger = pino({
     level: 'info',
     transport: {
       targets: [
         {
           target: 'pino-pretty',
           options: { colorize: true }
         },
         {
           target: 'pino/file',
           options: { destination: './combined.log' }
         }
       ]
     }
   });

   // Логи різних рівнів
   logger.info('This is an info log');
   logger.warn('This is a warning log');
   logger.error('This is an error log');
   ```

3. **Оптимізація логування з Pino:**

   Pino є високопродуктивною бібліотекою для логування, тому ви можете налаштувати різні рівні оптимізації, включно з використанням потоків чи налаштуванням інших адаптерів.

Обидві бібліотеки — Winston і Pino — надають велику кількість можливостей для налаштування, тому вибір конкретної з них може залежати від специфічних вимог вашого проекту.

| Back | Forward |
|---|---|
| [Use middleware for advanced request handling](/ua/senior/nodejs/use-middleware-for-complex-requests-processing.md)  | [Use performance monitoring tools (e.g., Prometheus, New Relic)](/ua/senior/nodejs/use-performance-monitoring-tools-like-prometheus-and-new-relic.md) |