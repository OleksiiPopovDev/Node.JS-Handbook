#### 67. Filter and query tables

У фільтрації та запитах до таблиць у базах даних ми зазвичай маємо на увазі вибір або відбір певного набору даних з таблиці, яка може містити велику кількість записів. Це досягається за допомогою SQL (Structured Query Language) запитів. Давайте розглянемо основні концепції та приклади.

### Вибірка даних з таблиці

Основна команда для вибірки даних з таблиць – це `SELECT`. Вона дозволяє отримати дані з одного або кількох стовпців.

```sql
SELECT column1, column2
FROM table_name;
```

Цей запит вибере дані з колонок `column1` і `column2` в таблиці `table_name`.

### Фільтрація даних

Фільтрація даних зазвичай здійснюється за допомогою оператора `WHERE`. Він дозволяє вказати умови, які мають виконуватись для рядків, які ви хочете вибрати.

```sql
SELECT column1, column2
FROM table_name
WHERE condition;
```

#### Приклади фільтрів:

1. **Фільтрація за конкретним значенням:**

    ```sql
    SELECT * FROM employees
    WHERE department = 'Sales';
    ```

    Цей запит обере всіх співробітників, які працюють у відділі продажів.

2. **Використання операторів порівняння:**

    ```sql
    SELECT * FROM products
    WHERE price > 100;
    ```

    Вибірка всіх продуктів із ціною більшою за 100.

3. **Умова з кількома критеріями:**

    ```sql
    SELECT * FROM orders
    WHERE status = 'Shipped' AND order_date > '2023-01-01';
    ```

    Цей запит обере всі замовлення, які були відправлені після 1 січня 2023 року.

4. **Фільтрація за текстовими шаблонами:**

    ```sql
    SELECT * FROM customers
    WHERE name LIKE 'A%';
    ```

    Обрання всіх клієнтів, чиї імена починаються з літери "A".

### Сортування результатів

Часто, після фільтрації, дані потрібно відсортувати. Для цього використовують `ORDER BY`.

```sql
SELECT column1, column2
FROM table_name
WHERE condition
ORDER BY column1 DESC;
```

Цей запит виконує сортування результатів по `column1` в порядку спадання.

### Обмеження кількості записів

Щоб обмежити кількість записів, можна використовувати `LIMIT`.

```sql
SELECT * FROM products
WHERE category = 'Electronics'
LIMIT 10;
```

Цей запит вибере 10 перших продуктів з категорії "Електроніка".

Усі ці можливості SQL дозволяють ефективно запитувати та фільтрувати дані в базах даних для отримання саме тієї інформації, яка необхідна.

| Back | Forward |
|---|---|
| [Implement data migrations](/ua/junior/database/implement-data-migrations.md)  | [Understand relational vs non-relational databases](/ua/junior/database/understanding-relational-vs-nonrelational-databases.md) |