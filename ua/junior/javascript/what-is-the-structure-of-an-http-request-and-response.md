#### 49. Наведіть структуру HTTP request/response.

HTTP (Hypertext Transfer Protocol) є протоколом, який використовується для передачі документів у глобальній мережі, та використовує структуру запиту (request) та відповіді (response). Ось основні складові елементи кожного з них:

### Структура HTTP Request

1. **Стартова лінія запиту (Request Line):**
   - **Метод HTTP:** Визначає тип запиту, наприклад `GET`, `POST`, `PUT`, `DELETE` тощо.
   - **URL:** Вказує на шлях ресурсу, що запитується.
   - **Версія HTTP:** Наприклад, `HTTP/1.1` або `HTTP/2.0`.

   ```
   GET /index.html HTTP/1.1
   ```

2. **Заголовки запиту (Request Headers):**
   - Містять метадані про запитані дані, наприклад, типи медіа, які приймаються (`Accept`), тип вмісту (`Content-Type`), інформація про браузер користувача (`User-Agent`), параметри авторизації і багато іншого.

   ```
   Host: www.example.com
   User-Agent: Mozilla/5.0
   ```

3. **Тіло запиту (Request Body):**
   - Опціонально, містить дані, що передаються на сервер, зазвичай у запитах типу `POST` або `PUT`.

   ```
   {
     "key1": "value1",
     "key2": "value2"
   }
   ```

### Структура HTTP Response

1. **Стартова лінія відповіді (Status Line):**
   - **Версія HTTP:** Наприклад, `HTTP/1.1` або `HTTP/2.0`.
   - **Код статусу:** Відображає результат виконання запиту, наприклад, `200` (OK), `404` (Not Found), `500` (Internal Server Error).
   - **Пояснення стану:** Короткий опис коду статусу.

   ```
   HTTP/1.1 200 OK
   ```

2. **Заголовки відповіді (Response Headers):**
   - Містять метадані про відповідь, наприклад, тип вмісту (`Content-Type`), дата (`Date`), розмір вмісту (`Content-Length`), кодування (`Content-Encoding`) тощо.

   ```
   Content-Type: text/html; charset=UTF-8
   Content-Length: 305
   ```

3. **Тіло відповіді (Response Body):**
   - Зазвичай містить HTML, JSON, зображення або інші типи даних, які відправляються клієнту як частина відповіді.

   ```
   <!DOCTYPE html>
   <html>
     <head>
       <title>Приклад відповіді</title>
     </head>
     <body>
       <p>Це приклад відповіді сервера.</p>
     </body>
   </html>
   ```

Ці структурні елементи разом забезпечують стандартизацію обміну даними між клієнтами і серверами в Інтернеті.

| Back | Forward |
|---|---|
| [Які методи Promise API ви знаєте? Яка різниця між ними?](/ua/junior/javascript/what-methods-of-the-promise-api-do-you-know-whats-the-difference-between-them.md)  | [Що таке new Set() і new Map()?](/ua/junior/javascript/what-are-new-set-and-new-map.md) |