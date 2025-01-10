#### 180. Чому потрібно додавати префікс node при завантаженні вбудованих модулів?

При завантаженні вбудованих модулів Node.js немає потреби додавати префікс `node`. Замість цього, використовують назви модулів без префікса. Наприклад, для завантаження модуля `fs`, використовують:

```javascript
const fs = require('fs');
```

Вбудовані модулі Node.js доступні без будь-яких префіксів, оскільки вони є частиною стандартної бібліотеки платформи. Префікси можуть використовуватися в інших контекстах, таких як певні випробувальні середовища або фермерські модулі, але це не стосується загальної практики завантаження вбудованих модулів.

| Back | Forward |
|---|---|
| [Чому важливо виконувати правило eslint: consistent-return з огляду на оптимізацію v8?](/ua/strong-middle/questions-for-a-systems-programmer/why-is-it-important-to-follow-the-eslint-rule-consistentreturn-considering-v8-optimization.md)  | [Що можна зробити за допомогою for await з request: IncomingMessage?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/what-can-be-done-using-for-await-with-a-request-incomingmessage.md) |