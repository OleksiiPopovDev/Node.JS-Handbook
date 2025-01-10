#### 45. За допомогою чого можна відфільтрувати таблицю Users за параметром віку?

Для фільтрації таблиці `Users` за параметром віку можна скористатися наступними методами:

1. **SQL-запит:**

   Якщо ви використовуєте реляційну базу даних, можна виконати SQL-запит:

   ```sql
   SELECT * FROM Users WHERE age = :desired_age;
   ```

   Тут `:desired_age` — це параметр, який потрібно вказати для фільтрації за віком.

2. **Панелі інструментів для управління базами даних:**

   Інструменти, такі як phpMyAdmin або SQL Server Management Studio, зазвичай надають графічний інтерфейс для фільтрування даних без написання SQL-запитів.

3. **Мова програмування:**

   Якщо дані завантажені в програмі, написаній на мові програмування (наприклад, Python, JavaScript):

   - **Python (pandas):**

     ```python
     import pandas as pd

     # Припустимо, у вас вже є DataFrame `df` з даними
     filtered_users = df[df['age'] == desired_age]
     ```

   - **JavaScript (якщо дані у вигляді JSON):**

     ```javascript
     const filteredUsers = users.filter(user => user.age === desiredAge);
     ```

4. **За допомогою Excel або Google Sheets:**

   Використовуйте функцію фільтрування, яка присутня у цих програмах. Виберіть колонку з віком і застосуйте фільтр з подальшим введенням потрібного значення.

Кожен із цих методів підходить в залежності від того, де зберігаються ваші дані та які інструменти доступні для їх обробки.

| Back | Forward |
|---|---|
| [Як оновити значення колонки в таблиці?](/ua/junior/database/how-to-update-column-value-in-table.md)  | [Understand ORM basics](/ua/junior/database/understand-object-relational-mapping-basics.md) |