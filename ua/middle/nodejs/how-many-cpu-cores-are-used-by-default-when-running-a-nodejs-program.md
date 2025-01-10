#### 83. Скільки ядер процесора залучені при виконанні Node.js програми за замовчуванням?

За замовчуванням Node.js працює в однопотоковому режимі, тобто використовує лише одне ядро процесора для виконання JavaScript-коду. Однак, завдяки асинхронній природі і неблокуючій I/O архітектурі, Node.js може обробляти багато з'єднань паралельно, використовуючи події та колбеки.

Якщо необхідно залучити інші ядра процесора, можна скористатися модулем `cluster` або `worker_threads`, які дозволяють створювати кілька потоків або кластерів, щоб використовувати всі доступні ядра процесора.

| Back | Forward |
|---|---|
| [Для чого і як використовують клас EventEmitter з базового модуля ’node:events’?](/ua/middle/nodejs/what-is-the-purpose-and-how-to-use-the-eventemitter-class-from-the-nodeevents-module.md)  | [Що таке middleware? Якщо ми пишемо свій middleware, чому саме там, чому не в коді сервісу?](/ua/middle/nodejs/what-is-middleware-if-were-writing-our-own-middleware-why-there-and-not-in-the-service-code.md) |