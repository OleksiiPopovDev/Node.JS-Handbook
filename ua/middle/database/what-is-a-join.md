#### 148. Що таке JOIN?

JOIN — це ключове слово в SQL (Structured Query Language), яке використовується для комбінування рядків з двох або більше таблиць в реляційній базі даних на основі відповідних між ними стовпців. Він дозволяє об'єднати дані з різних таблиць та працювати з ними як з однією таблицею. Існує декілька різних типів JOIN:

1. **INNER JOIN**: Повертає всі рядки з обох таблиць, де існує відповідність між полями.

   ```sql
   SELECT * FROM TableA
   INNER JOIN TableB ON TableA.column = TableB.column;
   ```

2. **LEFT JOIN** (або LEFT OUTER JOIN): Повертає всі рядки з лівої таблиці та відповідні рядки з правої таблиці. Якщо відповідності немає, то повертаються NULL для стовпців правої таблиці.

   ```sql
   SELECT * FROM TableA
   LEFT JOIN TableB ON TableA.column = TableB.column;
   ```

3. **RIGHT JOIN** (або RIGHT OUTER JOIN): Повертає всі рядки з правої таблиці та відповідні рядки з лівої таблиці. Якщо відповідності немає, то повертаються NULL для стовпців лівої таблиці.

   ```sql
   SELECT * FROM TableA
   RIGHT JOIN TableB ON TableA.column = TableB.column;
   ```

4. **FULL JOIN** (або FULL OUTER JOIN): Повертає всі рядки з обох таблиць. Якщо для якого-небудь рядка з однієї таблиці не існує відповідності в іншій таблиці, то для відповідних стовпців повертаються NULL.

   ```sql
   SELECT * FROM TableA
   FULL JOIN TableB ON TableA.column = TableB.column;
   ```

JOIN операції дають можливість зручно працювати з даними, що зберігаються в різних таблицях, і є ключовим інструментом у роботі з реляційними базами даних.

| Back | Forward |
|---|---|
| [Що таке foreign key? Яку роль він виконує?](/ua/middle/database/what-is-a-foreign-key-and-what-role-does-it-play.md)  | [Чим LEFT відрізняється від INNER?](/ua/middle/database/what-is-the-difference-between-left-and-inner.md) |