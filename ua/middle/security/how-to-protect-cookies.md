#### 134. Як захистити cookie?

Щоб захистити cookie, можна виконати такі заходи:

1. **Використовувати HTTPS:** Забезпечити обмін даними через захищений протокол зв'язку. Це допомагає уникнути можливості перехоплення cookie в процесі передачі даних між клієнтом та сервером.

2. **Secure Flag:** Встановити прапорець secure на cookie, щоб забезпечити їх передачу тільки через HTTPS-з'єднання.

3. **HttpOnly Flag:** Застосовувати прапорець HttpOnly, щоб cookie не були доступні через JavaScript. Це зменшує ризик XSS-атак (Cross-Site Scripting).

4. **SameSite Attribute:** Використовувати атрибут SameSite для обмеження відправки cookie разом з запитами з інших сайтів. Значення може бути `Strict`, `Lax` або `None`, у залежності від політики, яку ви хочете забезпечити.

5. **Expiration Time:** Вказувати обмежений термін дії cookie, щоб мінімізувати ризики у разі їх витоку.

6. **Регулярне оновлення та регенерація cookie:** Часто змінювати ідентифікатори сесій, щоб обмежити вразливість до атак з повторним відтворенням (replay attacks).

7. **Зберігання тільки незамінних даних:** Зберігати в cookie тільки ту інформацію, яка дійсно необхідна. Уникайте зберігання конфіденційної інформації.

8. **Мультифакторна автентифікація:** Використовувати додаткові фактори автентифікації для підтвердження достовірності користувача, навіть якщо cookie буде вкрадено.

9. **Обмежити доступ за IP:** При можливості, обмежувати доступ до сесії лише з тими IP-адресами, з яких було виконано вхід. 

10. **Регулярне очищення Cookie:** Налаштовувати автоматичне видалення застарілих або невживаних cookie.

Ці заходи допоможуть мінімізувати ризики, пов'язані з безпекою cookie, і захистити користувачів вашого веб-додатку.

| Back | Forward |
|---|---|
| [Як захиститися від XSS?](/ua/middle/security/how-to-protect-against-xss.md)  | [Що таке CORS?](/ua/middle/security/what-is-cors.md) |