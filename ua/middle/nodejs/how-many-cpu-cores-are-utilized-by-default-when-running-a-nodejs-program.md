#### 83. Скільки ядер процесора залучені при виконанні Node.js програми за замовчуванням?

За замовчуванням, Node.js використовує один потік виконання, отже залучено лише одне ядро процесора для виконання JavaScript-коду. Проте, Node.js може використовувати додаткові ядра для асинхронних завдань, таких як введення/виведення, завдяки механізму подій та асинхронності. Також можливо використовувати модуль `worker_threads` для створення багатопотокових програм, які можуть залучати більше ядер процесора.

| Back | Forward |
|---|---|
| [Для чого і як використовують клас EventEmitter з базового модуля ’node:events’?](/ua/middle/nodejs/what-is-the-purpose-and-how-are-events-used-with-the-eventemitter-class-from-the-nodeevents-module.md)  | [Що таке middleware? Якщо ми пишемо свій middleware, чому саме там, чому не в коді сервісу?](/ua/middle/nodejs/what-is-a-middleware-if-we-write-our-own-middleware-why-not-in-the-service-code-itself.md) |