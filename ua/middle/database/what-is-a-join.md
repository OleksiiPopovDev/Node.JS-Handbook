#### 148. Що таке JOIN?

JOIN — це операція в реляційних базах даних, яка використовується для комбінування рядків з двох або декількох таблиць на основі певної умови. JOIN дозволяє працювати з даними, які зберігаються в різних таблицях, але пов’язані між собою.

### Типи JOIN:

1. **INNER JOIN**: Повертає лише ті рядки, які мають відповідні записи в обох таблицях. Це найбільш поширений тип JOIN.

   ```sql
   SELECT *
   FROM table1
   INNER JOIN table2
   ON table1.column_name = table2.column_name;
   ```

2. **LEFT JOIN (або LEFT OUTER JOIN)**: Повертає всі рядки з лівої таблиці і відповідні рядки з правої таблиці. Якщо немає відповідності, правий рядок буде заповнений NULL.

   ```sql
   SELECT *
   FROM table1
   LEFT JOIN table2
   ON table1.column_name = table2.column_name;
   ```

3. **RIGHT JOIN (або RIGHT OUTER JOIN)**: Повертає всі рядки з правої таблиці та відповідні рядки з лівої таблиці. Якщо немає відповідності, лівий рядок буде заповнений NULL.

   ```sql
   SELECT *
   FROM table1
   RIGHT JOIN table2
   ON table1.column_name = table2.column_name;
   ```

4. **FULL JOIN (або FULL OUTER JOIN)**: Повертає всі рядки з обох таблиць. Якщо немає відповідності для певного рядка, відповідні стовпці будуть заповнені NULL.

   ```sql
   SELECT *
   FROM table1
   FULL JOIN table2
   ON table1.column_name = table2.column_name;
   ```

5. **CROSS JOIN**: Виконує декартовий добуток між таблицями. Кількість рядків у результаті дорівнює добутку кількості рядків у кожній з таблиць.

   ```sql
   SELECT *
   FROM table1
   CROSS JOIN table2;
   ```

JOIN є важливим інструментом для обробки реляційних даних, що дозволяє створювати комплексні запити та отримувати інтегровану інформацію з декількох таблиць.

| Back | Forward |
|---|---|
| [Що таке foreign key? Яку роль він виконує?](/ua/middle/database/what-is-a-foreign-key-what-role-does-it-play.md)  | [Чим LEFT відрізняється від INNER?](/ua/middle/database/what-is-the-difference-between-left-and-inner.md) |