#### 70. Як отримати помилку CORS у консолі розробника?

Щоб отримати помилку CORS (Cross-Origin Resource Sharing) у консолі розробника, виконайте наступні кроки:

1. **Відкрийте консоль розробника**: Використовуйте `Ctrl + Shift + I` (або `Cmd + Option + I` на macOS), щоб відкрити інструменти розробника у вашому браузері, і перейдіть на вкладку "Console".

2. **Виконайте AJAX-запит до іншого домену**: Напишіть JavaScript, який виконує запит з використанням `fetch()` або `XMLHttpRequest` до сервера, що має інший домен, піддомен, порт або протокол. Наприклад:
   ```javascript
   fetch('https://another-domain.com/api/data')
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.error('Error:', error));
   ```

3. **Переконайтеся, що сервер не налаштований для обробки CORS**: Сервер, до якого ви звертаєтеся, повинен бути таким, що не має налаштованого правильного заголовку `Access-Control-Allow-Origin`, або має значення, яке не дозволяє доступ з вашого домену.

4. **Перевірте консоль**: Якщо сервер не налаштований правильно, ви побачите повідомлення про помилку CORS у консолі. Типове повідомлення може виглядати наступним чином:
   ```
   Access to fetch at 'https://another-domain.com/api/data' from origin 'https://your-domain.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
   ```

Таке помилкове повідомлення вказує на проблеми з налаштуванням CORS на сервері, і його потрібно вирішити на стороні сервера.

| Back | Forward |
|---|---|
| [Що таке Cross-Origin Resource Sharing (CORS)? Де трапляється?](/ua/junior/web/what-is-crossorigin-resource-sharing-cors-and-where-does-it-occur.md)  | [Назвіть основні HTTP-методи RESTful або CRUD застосунків.](/ua/junior/web/what-are-the-main-http-methods-of-restful-or-crud-applications.md) |