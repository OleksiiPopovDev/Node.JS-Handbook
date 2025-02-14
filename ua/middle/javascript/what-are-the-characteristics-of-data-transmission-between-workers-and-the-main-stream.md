#### 110. Які особливості передачі даними між worker’ами та основним потоком?

В JavaScript, коли мова йде про веб-воркери (Web Workers), обмін даними між основним потоком (головним скриптом) та воркерами відбувається за допомогою подій повідомлень (message events). Ось деякі ключові особливості цього процесу:

1. **Безпечна модель передачі даних**: Дані обмінюються через копіювання, тобто дані передаються не за посиланням, а через структури, які підтримують серіалізацію/десеріалізацію (наприклад, через [Structured Cloning Algorithm](https://developer.mozilla.org/uk/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)). Це запобігає проблемам з конкурентним доступом до спільних даних.

2. **Message Passing**: Основний потік та воркери обмінюються повідомленнями через методи `postMessage()`. Воркери можуть також посилати повідомлення назад основному потоку.

3. **Використання Event Listener**: Як основний потік, так і воркер повинні налаштувати обробку подій за допомогою `addEventListener('message', callback)`, щоб отримувати дані, як тільки вони приходять.

4. **Підтримувані типи даних**: JavaScript воркери підтримують передачу більшості базових типів даних, включаючи об’єкти, масиви, типи Uint8Array тощо. Однак, деякі види даних, які не можуть бути серіалізовані (наприклад, функції або DOM елементи), не можуть бути передані.

5. **Переміщення (Transferring) даних**: Ви можете також використовувати механізм трансферу даних за допомогою передачі об'єктів типу `ArrayBuffer` або `MessagePort`. Це дозволяє передати дані без копіювання, що покращує продуктивність при роботі з великими об'ємами даних.

6. **Ізольованість**: Воркери працюють в окремих ізольованих потоках, що означає, що у них немає доступу до DOM, глобальних змінних або функцій основного потоку. Це робить обмін даними єдиним способом взаємодії з основним потоком.

Таким чином, розуміння передачі даних між воркерами та основним потоком є важливим для ефективного використання веб-воркерів у JavaScript для підвищення продуктивності та розподілу навантаження обробки даних.

| Back | Forward |
|---|---|
| [Що таке Web Workers? Для чого їх використовують?](/ua/middle/javascript/what-are-web-workers-what-are-they-used-for.md)  | [Які обмеження накладаються на потік Web Workers?](/ua/middle/javascript/what-are-the-limitations-placed-on-a-web-worker-stream.md) |